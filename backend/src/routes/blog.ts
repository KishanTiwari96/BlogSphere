import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify } from 'hono/jwt'
import { createBlogInput,updateBlogInput } from "@kishantiwari/common";

export const blogRouter = new Hono<{
    Bindings : {  // specifying the type of env variable
        DATABASE_URL : string;
        JWT_SECRET : string
    },
    Variables : {
        userId : string;
    }
}>()

blogRouter.use('/*',async (c,next) =>{    // * indicates that anything comes after this specific url should comes to this middleware first
  const header = c.req.header("Authorization") || "";
  const token = header.split(" ")[1];   
  const user = await verify(token,c.env.JWT_SECRET)
  if(user){
    c.set("userId",String(user.id));
    await next();
  }else{
    c.status(403)
    return c.json({
      error : "unauthorized"
    })
  }
})

blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())  
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
      if(!success){
        c.status(411);
        return c.json({
          message : "Inputs are incorrect"
        })
      }
    const author_id = c.get("userId")

    const blog = await prisma.blog.create({
        data : {
            title : body.title,
            content : body.content,
            author_id : author_id,
        }
    })

    return c.json({
        id : blog.id
    })
})

blogRouter.put('/update/:id', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())  

    const body = await c.req.json();

    const id = c.req.param("id");
    const parsed= updateBlogInput.safeParse(body);
    console.log("🟡 Received body:", body);
    console.log("🔴 Validation result:", parsed);
    if(!parsed.success){
    c.status(400);
    return c.json({
        message : "Inputs are incorrect",
        errors: parsed.error.errors
    })
    }

    try{
        const blog = await prisma.blog.update({
            where : {
                id : id
            },
            data : {
                title : body.title,
                content : body.content,
            }
        })
        if (!blog) {
            c.status(404); 
            return c.json({ message: "Blog not found" });
        }

        return c.json({
            id : blog.id,
            title: blog.title,
            content: blog.content,
        })
    }catch(e){
        c.status(500)
        return c.json({
            message : "Error while updating blog post"
        })
    }
    
})

blogRouter.get("/my-blogs" ,async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())  
    
    const userId = c.get("userId")

    try {
        const blogs = await prisma.blog.findMany({
            where : {
                author_id : userId
            },
            select : {
                content : true,
                title : true,
                id : true,
                author : {
                    select : {
                        name : true
                    }
                    
                },
                createdAt : true,
                
            }
        })

        return c.json({
            blogs
        })
    }catch(e){
        c.status(411)
        return c.json({
            message : "Error while fetching blogs"
        })
    }
})

blogRouter.delete("/delete/:id",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())  

    const userId = c.get("userId")
    const id = c.req.param("id");

    try {
        const blog = await prisma.blog.findUnique({
            where : {
                id : id
            }
        })

        if(!blog){
            c.status(404)
            return c.json({
                message : "Blog not found"
            })
        }

        if(blog.author_id != userId){
            c.status(403)
            return c.json({
                message : "You are not authorized to delete this blog"
            })
        }

        await prisma.blog.delete({
            where : {
                id : id
            }
        })

        return c.json({
            message : "Blog deleted successfully"
        })
    }catch(e){
        c.status(411)
        return c.json({
            message : "Error while deleting blog post"
        }
    )}
    
})

blogRouter.get("/bulk",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())  

    try{
        const blog = await prisma.blog.findMany({
            orderBy: {
                createdAt: 'desc', 
            },
            select: {
                content : true,
                title : true,
                id : true,
                author : {
                    select : {
                        name : true
                    }
                    
                },
                createdAt : true,
            }
        })
        return c.json({
            blog
        })
    }catch(e){
        c.status(411)
        return c.json({
            message : "Error while fetching blog posts"
        })
    }
        
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())   
    const id = c.req.param("id");

    try{
       const blog = await prisma.blog.findFirst({
            where : {
                id : id
            },
            select : {
                content : true,
                title : true,
                id : true,
                author : {
                    select : {
                        name : true
                    }
                },
                createdAt : true
            }
        })

        return c.json({
            blog
        }) 
    }catch(e){
        c.status(411)
        return c.json({
            message : "Error while fetching blog post"
        }) 
    }
    
})

