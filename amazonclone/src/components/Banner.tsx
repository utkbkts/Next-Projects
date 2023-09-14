import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
  <div className='relative'>
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
    <div>
        <img src="https://media.istockphoto.com/id/1357902348/tr/foto%C4%9Fraf/guayaquil-ecuador.jpg?s=1024x1024&w=is&k=20&c=H1Wwkef1z5oj40iAkFCPuv5syYH39pgiC27j0zgA5DU=" />
    </div>
    <div>
        <img src="https://media.istockphoto.com/id/546765072/tr/foto%C4%9Fraf/galleria-vittorio-emanuele-ii-in-milano-italy.jpg?s=1024x1024&w=is&k=20&c=ZY7KK2OuJfeOAC_Q1YUpFQ1gQvrIs8dc1GqDAtMKcXg=" />
    </div>
    <div>
        <img src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1495&q=80" />
    </div>
</Carousel> 
<div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'></div>
  </div> )
}

export default Banner