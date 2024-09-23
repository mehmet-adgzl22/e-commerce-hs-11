import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
       <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
            <div className=''>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente quisquam, doloremque tenetur odit iure quasi. Ab incidunt voluptatum adipisci, beatae maxime, sequi voluptate rerum error eligendi suscipit, officia quis.</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-orange-500'>İncele</div>
            </div>
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fe0db19e-9af7-436f-a6c9-52545de9ac45/dunk-high-retro-shoes-3wKvCt.png" alt="" />
            </div>
           <div className='!flex items-center bg-gray-100 px-6'>
           <div className=''>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente quisquam, doloremque tenetur odit iure quasi. Ab incidunt voluptatum adipisci, beatae maxime, sequi voluptate rerum error eligendi suscipit, officia quis.</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-green-700'>İncele</div>
            </div>
           <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/669b19e8-7704-441f-9379-f185a34d8d2c/custom-nike-dunk-high-by-you-shoes.png" alt="" />
           </div>
       
       </Slider>
    </div>
  )
}

export default SliderComp