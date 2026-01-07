'use client';

import React from 'react'

import Slider from "react-slick";


import quote_icon from "../assets/imagesource/quote_icon.png";
import rating_icon from "../assets/imagesource/rating_icon.png";

import testi_pic from "../assets/imagesource/testi_pic.png";
import comma_img from "../assets/imagesource/comma_img.png";

import campain_01 from "../assets/imagesource/campain_01.png";
import campain_02 from "../assets/imagesource/campain_02.png";
import campain_03 from "../assets/imagesource/campain_03.png";

import testi_face4 from "../assets/imagesource/abhinandan_dasgupta_04.png";
import testi_face5 from "../assets/imagesource/shivanki_jain_05.png";
import testi_face6 from "../assets/imagesource/swapna_bhattacharyya_06.png";
import testi_face7 from "../assets/imagesource/rajat_baran_08.png";
import testi_face8 from "../assets/imagesource/wasim_raja_10.png";



import Image from 'next/image';

const Campain = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
  };
  return (
    <div>
        <Slider {...settings}>

            <div className='px-4 pb-4'>
                <div>
                    <Image src={campain_01} alt='campain_01' className='mb-8' />
                </div>
            </div>
            <div className='px-4 pb-4'>
                <div>
                    <Image src={campain_02} alt='campain_02' className='mb-8' />
                </div>
            </div>
            <div className='px-4 pb-4'>
                <div>
                    <Image src={campain_03} alt='campain_03' className='mb-8' />
                </div>
            </div>
            
        </Slider>
    </div>
  )
}

export default Campain