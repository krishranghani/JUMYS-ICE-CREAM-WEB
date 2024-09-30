import React from 'react';

const BlogCard = (props) => {
  return (
    <>
      <div className='w-full sm:w-1/2 lg:w-1/3 h-auto pb-3 overflow-hidden justify-around relative'>
        <div className='absolute w-36 rounded-3xl mt-2 ml-2 h-10 bg-white flex justify-center items-center hover:bg-red-600 hover:duration-500 hover:text-red-600'>
          <a href="#">Business Tips</a>
        </div>
        <img className='w-full h-auto max-h-[350px] object-cover' src={props.img} alt="not found" />
        <div className='slide-top w-full drop-shadow-2xl px-4 sm:px-6 md:px-9 -mt-[100px] sm:-mt-[150px] relative bottom-10'>
          <p className='text-white text-[14px] sm:text-[18px] md:text-[20px] -mt-4'>June 20, 2024</p>
          <p className='text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold' id='blog-card1-text'>{props.text}</p>
          <button className='bg-[#000] hover:bg-[#ff0000] text-white w-28 sm:w-32 h-10 sm:h-11 rounded-full mt-2'>Read More</button>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
