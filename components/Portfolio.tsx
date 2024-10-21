import { porfolioCards } from '@/constants';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';

interface MousePosition {
  x: number;
  y: number;
}

const Portfolio: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState<string>(''); // Store the text for the cursor mask

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    hover: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'white'
    },
  };

  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (index: number) => {
    // Only navigate if the next slide is clicked
    if (index === activeIndex + 1) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="h-auto lg:px-10 px-4 lg:pt-10 pt-6 z-[111] relative bg-black text-white">
      <h2 className="lg:text-[5vw] text-3xl lg:pb-10 font-bold text-white">Portfolio highlights</h2>
      <p className="text-md text-gray-300 pt-4">
        Over 200 successful websites launched. From landing pages to corporate projects, we make you shine online
      </p>
      <div className="w-full md:pt-8 pt-4 h-auto relative">
        <motion.div
          className='cursor flex items-center justify-center'
          variants={variants}
          animate={cursorText ? 'hover' : 'default'}
        >
          {cursorText && (
            <span className="text-black text-3xl font-bold">{cursorText}</span>
          )}
        </motion.div>
        <Swiper
        ref={swiperRef}
        spaceBetween={25}
        slidesPerView={1} // Default for larger screens
        className="w-full flex flex-wrap h-auto pt-10 gap-6"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide for screens up to 640px
          },
          768: {
            slidesPerView: 1.5, // 1.5 slides for screens between 640px and 768px
          },
          // Additional breakpoints can be added as needed
        }}
      >
          {porfolioCards.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ transform: index === activeIndex ? 'scale(1)' : 'scale(0.9)' }}

              className={`flex cursor-default rounded-2xl  overflow-hidden items-start justify-center flex-col  ${index === activeIndex ? 'opacity-100' : 'opacity-50  '}`}
              onClick={() => handleSlideClick(index)}
              onMouseEnter={() => {
                if (index === activeIndex + 1) setCursorText('NEXT'); // Hovering over next slide
              }}
              onMouseLeave={() => setCursorText('')} // Clear text on mouse leave
            >
              <div>
                <Image
                  className="w-full h-auto"
                  src={item.projectImage}
                  alt={item.projectTitle}
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="flex bg-[#1f1d1c] justify-between">
                <div className='p-3'>
                  <h3 className="text-white text-sm md:text-3xl">{item.projectTitle}</h3>
                  <h5 className="text-gray-300 pt-2">{item.projectSubtitle}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-between pt-6 pb-12'>
          <div className='flex gap-2 items-center justify-start'>
            <button
              className="p-2 h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] hover:bg-gray-900 transition ease-linear duration-300 bg-slate-950 rounded-full items-center flex justify-center"
              onClick={goToPrevSlide}
            >
              <svg className=" h-[28px] w-[28px] md:h-[40px] md:w-[40px] "  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.3508 12.7499L11.2096 17.4615L10.1654 18.5383L3.42264 11.9999L10.1654 5.46148L11.2096 6.53833L6.3508 11.2499L21 11.2499L21 12.7499L6.3508 12.7499Z" fill="#ffffff"/>
              </svg>
            </button>
            <button
              className="p-2 h-[50px] w-[50px]  lg:h-[80px] lg:w-[80px] hover:bg-gray-900 transition ease-linear duration-300 bg-slate-950 rounded-full items-center flex justify-center"
              onClick={goToNextSlide}
            >
              <svg className=" h-[28px] w-[28px] md:h-[40px] md:w-[40px] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z" fill="#ffffff"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
