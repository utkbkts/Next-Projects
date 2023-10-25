import React from 'react'
import SectionHeader from '../events/SectionHeader'
import Post from './Post'
const getposts = async()=>{
    const res = await fetch("http://localhost:4000/posts");
    return res.json()
}
const Blog = async() => {

    const posts=await getposts()
 
  return (
    <div className='section' id='blog'>
        <div>
            <SectionHeader pretitle={"Our Blog"} title={"Latest News "}/>
            <Post posts={posts}/>
        </div>
    </div>
  )
}

export default Blog