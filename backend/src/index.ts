import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,verify } from 'hono/jwt'  // because the jwt library doesn't work with cloudflare workers hence hono created their own jwt library
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings : {  // specifying the type of env variable
    DATABASE_URL : string,
    JWT_SECRET : string
  }
}>()

app.use('/*', cors())

app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);  

export default app