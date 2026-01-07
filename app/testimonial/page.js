'use client';

import React from 'react'

import Slider from "react-slick";


import quote_icon from "../assets/imagesource/quote_icon.png";
import rating_icon from "../assets/imagesource/rating_icon.png";

import testi_pic from "../assets/imagesource/testi_pic.png";
import comma_img from "../assets/imagesource/comma_img.png";

import testi_face1 from "../assets/imagesource/rajkumari_basu_01.png";
import testi_face2 from "../assets/imagesource/kathakali_chakraborty_02.png";
import testi_face3 from "../assets/imagesource/sumana_das_03.png";
import testi_face4 from "../assets/imagesource/abhinandan_dasgupta_04.png";
import testi_face5 from "../assets/imagesource/shivanki_jain_05.png";
import testi_face6 from "../assets/imagesource/swapna_bhattacharyya_06.png";
import testi_face7 from "../assets/imagesource/rajat_baran_08.png";
import testi_face8 from "../assets/imagesource/wasim_raja_10.png";



import Image from 'next/image';

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
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
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-normal pb-28'>Mental health issues are rising across all ages and societies due to lack of awareness and persistent stigma. While we prioritise physical health, emotional well-being is often neglected. Globally, efforts are made to reduce environmental pollution, yet little is done to address the “pollution” within our homes and minds. Physical and mental health are equally vital, like two sides of a coin. It is time we actively work towards positive change within ourselves and our communities. I appreciate Good Mood for taking initiative in this direction and wish them success in their mission.</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Dr. Rajkumari Basu </p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>Retired HOD, Psy. Dept. Loreto College. Consultant Psychologist at Resurrection, Get well Polyclinic, Snayubikhan and IPER.</p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_face1} alt='testi_face1' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 pb-4'>
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium pb-20'>Being a child specialist, I see how much parents and children silently carry. Good Mood makes mental health support accessible in a way that feels friendly and non-threatening. Bringing awareness and support together on a single platform is a wonderful idea. It has inspired me to guide families toward using tools like these for emotional well-being</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Dr. Kathakali Chakraborty</p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>–Child Specialist, Sagore Dutta Hospital</p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_face2} alt='testi_face2' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 pb-4'>
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium pb-20'>As a teacher, I see my students wrestle with feelings they can’t always put into words. Good Mood gave me simple yet powerful tools—not only to stay balanced myself but also to better support my students. It feels like a companion that enriches both my teaching and my life. It’s really a great initiative.</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Mrs. Sumana Das</p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>Assistant Mistress in English, Jalpaiguri Govt. Girls` High School </p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_face3} alt='testi_face3' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-4 pb-4'>
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium pb-20'>In the tech world, where problem-solving never stops, I often neglected my own well-being. Good Mood helped me realize that clarity of mind is just as important as clarity of solutions. Its support system is excellent, and I truly hope this platform will benefit people from all walks of society.</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Mr. Abhinandan Dasgupta</p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>Solution Architect, Nokia Solutions and Networks</p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_face4} alt='testi_face4' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 pb-4'>
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium pb-20'>Managing multiple applications and projects can be overwhelming. Good Mood became my space to slow down, reflect, and manage stress better. It gave me practical ways to balance work demands without burning out, which is rare in t’s corporate pace.</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Mrs. Shivanki Jain</p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>Application Program Manager, JLL</p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_face5} alt='testi_face5' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 pb-4'>
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium pb-20'>As a Homeopath, I believe in holistic healing of body and mind. Good Mood resonates with this philosophy — offering care through awareness, self-reflection, and simple practices. It is a healing companion that complements medical care beautifully.</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Dr. Swapna Bhattacharyya</p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>MD, Consultant Homeopath</p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_face6} alt='testi_face6' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 pb-4'>
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium pb-20'>The courtroom is a battlefield of emotions, conflicts, and high stakes. Good Mood gave me tools to manage the stress of such intensity and to find calm even in chaos. It showed me that resilience comes not just from winning cases but from caring for my inner self.</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Mr. D. Nag, Advocate</p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>Kolkata High Court</p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_pic} alt='testi_pic' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 pb-4'>
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium pb-20'>In banking, every day is about numbers, deadlines, and accountability. Good Mood became my safe space away from all that — a reminder that I am more than my work. Its mood equalizers and self-assessments helped me find balance and patience in my routine.</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Mr. Rajat Baran Roy</p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>Manager, India Post Payments Bank, Cooch Behar Branch</p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_face7} alt='testi_face7' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 pb-4'>
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium pb-20'>My job was taking a toll on my mental health. Deadlines, long hours, and lack of balance left me exhausted. Through Good Mood, I discovered workplace counselling and simple mood equalizers that reminded me to pause and breathe. It gave me the tools to manage stress and regain my motivation.</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Soumalya Chanda</p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>UI Designer</p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_pic} alt='testi_pic' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 pb-4'>
                <div className='bg-white rounded-xl shadow-lg text-left'>
                    <div className='lg:flex'>
                        <div className='lg:w-7/12 p-5 lg:p-8 relative'>
                            <div>
                                <Image src={comma_img} alt='comma_img' className='mb-8' />
                            </div>
                            <p className='text-[#19213D] text-sm lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium pb-20'>As an actor, I often dive into many emotions on screen, but off screen I sometimes struggle to process my own. Good Mood reminded me that caring for mental health is not a weakness—it is strength. Its tools help me stay balanced, creative, and true to myself. I believe this platform can make a real difference for people in every walk of life.</p>
                            <div className='absolute leading-0 bottom-[30px] lg:bottom-[50px]'>
                                <p className='text-[16px] leading-[16px] text-[#404040] font-medium mb-2'>Mr. Wasim Raja Mullick</p>
                                <p className='text-[12px] leading-[16px] text-[#8B8B8B] font-normal mb-1'>Cinema & Theatre Actor</p>
                            </div>
                        </div>
                        <div className='lg:w-5/12'>
                          <Image src={testi_face8} alt='testi_face8' className='lg:rounded-r-xl' />
                        </div>
                    </div>
                </div>
            </div>



        </Slider>
    </div>
  )
}

export default Testimonial