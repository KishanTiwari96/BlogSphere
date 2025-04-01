import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import './App.css'
import { Publish } from "./pages/Publish"
import { Home } from "./components/Home"
import { MyBlogs } from "./pages/MyBlogs"

function App() {  

  return (
    <>  
      <BrowserRouter>
          <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/signup" element = {<Signup />}></Route>
          <Route path = "/signin" element = {<Signin />}></Route>
          <Route path="/blogs" element = {<Blogs />}></Route>
          <Route path = "/blog/:id" element = {<Blog />}></Route>
          <Route path="/publish" element= {<Publish />}></Route>
          <Route path="/my-blogs" element = {<MyBlogs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
