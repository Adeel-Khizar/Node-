
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { clientTestimonials } from '@/constants';
import Image from 'next/image';
import { isContext } from 'vm';


const Testimonials = () => {
  return (
    <div className='z-[11] relative flex lg:flex-row flex-col items-center justify-start bg-black '>
      <div className='w-[60%] text-white pl-10 pr-4 '>
         <h2 style={{
          lineHeight: '100%'
         }} className='text text-[2xl] lg:text-[4.5vw] '>
         Strategic approach with (*studio like) creativity
         </h2>
         <p className='text-gray-600 mt-8'>Whether you’re testing ideas or need a quick turnaround, our subscription allows you scale and adapt effortlessly on web

</p>
<div className='hero_atc my-8 flex'>
              
              <Link className='flex transition-all text-lg  ease-in-out bg-white px-[3rem] py-[.7rem] max-h-[3rem] h-[3rem] text-black rounded-full items-center justify-center' href='/'> What Our Client Says </Link> 
              <span className='w-[3rem] h-[3rem] flex  rounded-full items-center justify-center border-2 border-white'>
              <svg className='h-[2rem] w-[1.25rem]' width="100%" height="100%" viewBox="0 0 24 25" fill="#fffff">

<path d="M15.7501 12.5C15.7507 12.6028 15.7318 12.7047 15.6945 12.7999C15.6571 12.8951 15.6021 12.9817 15.5326 13.0547L9.53264 19.3047C9.46271 19.3775 9.37969 19.4353 9.28833 19.4747C9.19696 19.5141 9.09903 19.5344 9.00014 19.5344C8.80041 19.5344 8.60887 19.4518 8.46764 19.3047C8.32641 19.1576 8.24707 18.958 8.24707 18.75C8.24707 18.5419 8.32641 18.3424 8.46764 18.1953L13.9426 12.5L8.46764 6.80467C8.32641 6.65755 8.24707 6.45803 8.24707 6.24998C8.24707 6.04193 8.32641 5.8424 8.46764 5.69529C8.60887 5.54818 8.80041 5.46553 9.00014 5.46553C9.19986 5.46553 9.39141 5.54818 9.53264 5.69529L15.5326 11.9453C15.6021 12.0183 15.6571 12.1049 15.6945 12.2001C15.7318 12.2952 15.7507 12.3972 15.7501 12.5Z" fill="#ffffff"></path>

</svg>   
             </span>
              </div>
      </div>
  <div className='w-[40%] py-14 pr-14'>
  <Swiper
      
        direction={'vertical'}
        slidesPerView={1.5}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        style={{
           paddingLeft:"5%",
           paddingRight:"5%",

        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper rounded-lg overflow-hidden testimonialSwiper "
      >
        {
          clientTestimonials.map((item) => (
            <>
              <SwiperSlide key={item.id} style={{
        }} className=' bg-[#1A1C21]  flex flex-col p-8 rounded-lg mdshadow'>
         <div className='flex h-full flex-col items-start justify-between'>
          <div  className='min-h-[120px]  min-w-[120px]  object-contain'>
        <Image style={{
          height: '120px',
          width:"120px"
        }} className='min-h-[120px]  min-w-[120px] ' src={item.icon} height={150} width={150} alt={item.title} />

          </div>
          <div className='flex flex-col text-white  text-start gap-4'>
            <h3 className='text-3xl font-bold' >{item.title}</h3>
            <h5>{item.subtitle}</h5>
          </div>
         </div>

        </SwiperSlide>
            </>
          ))
        }
      
  
        
      </Swiper>
  </div>
    </div>
  )
}

export default Testimonials