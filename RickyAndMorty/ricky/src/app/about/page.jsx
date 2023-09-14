import Link from 'next/link'
import React from 'react'
export const metadata = {
  title: "Hakkımızda",
};
const About = () => {
  
  return (
    <div>
      <h1>What is this?</h1>
      <p>The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.</p>
      <Link className='btn' href="/about/team">Team</Link>
    </div>
  )
}

export default About