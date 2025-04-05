import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify } from 'hono/jwt'
import { signinInput,signupInput } from "@kishantiwari/common";
export const userRouter = new Hono<{
  Bindings : {  // specifying the type of env variable
      DATABASE_URL : string,
      JWT_SECRET : string
  }
}>()

userRouter.post('/signup', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
  }).$extends(withAccelerate())     // if you are using prisma accelerate

  const body = await c.req.json();
  
  if(((!body.name) || body.name.length < 3)){
    c.status(405)
    return c.json({
        msg:"Name should contain minimum of 3 alphabets"
    })
  }
  if(!body.email){
    c.status(410)
    return c.json({
        msg:"Please enter email"
    })
  }
    if((!body.password) || (body.password.length < 6)){
      c.status(401)
      return c.json({
          msg:"Password should contain minimum of 6 alphabets"
      })
  }
  const { success } = signupInput.safeParse(body);
  if(!success){
    c.status(400);
    return c.json({
      message : "Inputs are incorrect"
    })
  }
  
  
  try {
    const user = await prisma.user.create({
      data :{ 
        email : body.email,
        password : body.password,
        name : body.name
      }
    })

    const token = await sign({id:user.id, exp: Math.floor(Date.now() / 1000) + (60 * 60)},c.env.JWT_SECRET)
    return c.json({
      name : user.name,
      token : token
    })
  }catch(e){
    c.status(500)
    return c.json({
      error : "Error in signup"
    })
  }
  
})

userRouter.post('/signin', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()

  if(!body.email){
    c.status(410)
    return c.json({
        msg:"Please enter email"
    })
  }
  if((!body.password) || (body.password.length < 6)){
      c.status(401)
      return c.json({
          msg:"Password should contain minimum of 6 alphabets"
      })
  }

  const { success } = signinInput.safeParse(body);
  if(!success){
    c.status(400);
    return c.json({
      message : "Inputs are incorrect"
    })
  }
  
  try {
    const user = await prisma.user.findUnique({
      where:{
        email : body.email,
        password : body.password
      }
    })

    if (!user){
      c.status(403);
      return c.json({
        error : "User not found"
      })
    }
    const token = await sign({id : user.id, exp: Math.floor(Date.now() / 1000) + (60 * 60)},c.env.JWT_SECRET)
    return c.json({
      name : user.name,
      token : token
    })
  }catch(e){
    c.status(500);
    return c.json({
      error : "Error in signin"
    })
  }
  
})