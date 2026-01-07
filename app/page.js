'use client';

import Image from "next/image";

import banner01 from "../app/assets/imagesource/banner01.png";
import Strategic_Principles_img from "../app/assets/imagesource/Strategic_Principles_img.png";
import special01 from "../app/assets/imagesource/special01.png";
import special02 from "../app/assets/imagesource/special02.png";
import special03 from "../app/assets/imagesource/special03.png";

import post01 from "../app/assets/imagesource/post01.png";


import About_us from "../app/assets/imagesource/About_us.png";

import stethy from "../app/assets/imagesource/stethy.png";

import home from "../app/assets/imagesource/home.png";

import awareness_left from "../app/assets/imagesource/awareness_left.png";

import awareness_right from "../app/assets/imagesource/awareness_right.png";

import therapies_img from "../app/assets/imagesource/therapies_img.png";

import heart_icon from "../app/assets/imagesource/heart_icon.png";

import mental_experts_img from "../app/assets/imagesource/mental_experts_img.png";

import packages_img from "../app/assets/imagesource/packages_img.png";

import app_store from "../app/assets/imagesource/app_store.png";

import google_play from "../app/assets/imagesource/google_play.png";

import mobiles_01 from "../app/assets/imagesource/mobiles_01.png";

import blog_image from "../app/assets/imagesource/blog_image.png";


import { BiCalendar } from "react-icons/bi";

import { FaRegUser } from "react-icons/fa6";








import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

import Link from "next/link";

import { Poppins } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Bricolage_Grotesque } from "next/font/google";

import Testimonial from "./testimonial/page";

import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPlans } from "./reducers/PlanSlice";
import { getCoins } from "./reducers/CoinSlice";
import { useRouter } from "next/navigation";
import LoginModal from "./modal/LoginModal";

import { CgFileDocument } from "react-icons/cg";
import { AiOutlinePieChart } from "react-icons/ai";   
import { PiTargetBold } from "react-icons/pi";
import { BiMap } from "react-icons/bi";

import { IoIosArrowForward } from "react-icons/io";

import { FaPlus } from "react-icons/fa";

import { BsArrowRight } from "react-icons/bs";
import Campain from "./campain/page";




const manrope = Manrope({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'], // specify desired weights
   display: 'swap',
});

const inter = Inter({
  subsets: ['latin'], // or ['latin-ext'] etc.
  weight: ['400', '500', '600', '700'], // specify desired weights
  variable: '--font-inter', // optional, for Tailwind usage
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"], // choose subsets
  weight: ["400", "500", "600", "700"], // choose weights you need
});


export default function Home() {
   const { plans } = useSelector((state) => state?.planst)
   const { coins } = useSelector((state) => state?.coinData)
   const dispatch = useDispatch()
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedCurrency, setSelectedCurrency] = useState('USD');
   const [selectedCoin, setSelectedCoin] = useState('');
   const [selectedCoinSymbol, setSelectedCoinSymbol] = useState('');
   const [showDropdown, setShowDropdown] = useState(false);
   const router = useRouter();
   const [openLoginModal, setOpenLoginModal] = useState(false);

   const hanleloginModal = () => {
      setOpenLoginModal(true)
   }


   // useEffect(() => {
   //    dispatch(getPlans())
   // }, [])
   // console.log("plan", plans);
   // useEffect(() => {
   //    dispatch(getCoins())
   // }, [])
   // console.log("coinsd", coins)
   // const coinItems = coins?.coins?.map((coin) => coin.item) || [];

   // // Your filtering logic looks correct
   // const filteredCoins = coinItems.filter((coin) =>
   //    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
   // );

   // const coinItems = Array.isArray(coins?.coins)
   //    ? coins.coins.map((coin) => coin.item).filter(Boolean)
   //    : [];

   // Filter coins based on search term
   // const filteredCoins = coinItems.filter((coin) =>
   //    coin?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
   //    coin?.symbol?.toLowerCase().includes(searchTerm.toLowerCase())
   // );


   // const handleCoinSelect = (coin) => {
   //    console.log(coin, "coin");

   //    setSelectedCoin(coin.name);
   //    setSelectedCoinSymbol(coin.symbol.toLowerCase());
   //    // setSearchTerm(''); // Clear search after selection
   //    setSearchTerm(coin.name);
   //    setShowDropdown(false);

   // };
   // const handleTryForFree = async () => {
   //    console.log("select currency", selectedCoinSymbol);
   //    console.log("select coin symbol", selectedCoinSymbol);
   //    // router.push("/details")

   //    router.push({
   //       pathname: '/details',
   //       query: {
   //          coin: selectedCoinSymbol,
   //          currency: selectedCurrency
   //       }
   //    });



   // };
   useEffect(() => {
      console.log("currency", selectedCurrency);
   }, [selectedCurrency])


   return (
      <div className={`${inter.className} antialiased home_wrapper_arera`}>

         {/* home banner section start here */}
         <div className="home_banner_area relative">
            <div className="banner_content_area">
               <div className='max-w-6xl mx-auto h-full pt-10 pb-0 lg:pt-36 lg:pb-0'>
                  <div className="lg:w-7/12 px-0 banner_content pb-0 lg:pb-20 pt-5">
                     <div className="mb-4 flex items-center">
                        <FaPlus className="text-[#FFA250] text-[20px] mr-1" />
                        <p className="text-[#FFA250] text-[16px] leading-[22px] font-bold uppercase">Welcome to Good mood </p>
                     </div>
                     <div>
                        <h1 className="text-2xl leading-[30px] lg:text-[60px] lg:leading-[65px] text-[#012036] font-semibold mb-2 lg:mb-6">
                        Your Safe Space for Mental Health Awareness & Support
                        </h1>
                     </div>
                     <p className="text-[#010101] text-sm lg:text-[18px] leading-[22px] font-semibold  lg:pr-0 lg:pb-5">
                        Good Mood – India’s 1st Mental Health App
                     </p>
                     <p className="text-[#010101] text-sm lg:text-[16px] leading-[26px] font-medium mb-5 lg:pr-24 lg:pb-4">
                        India’s first mental health awareness & support app — safe, affordable, and confidential care for individuals, institutions, workplaces, and families.
                     </p>
                     <div className="flex gap-4 pb-8">
                        <Link className="text-white bg-[#0B8843] flex items-center cursor-pointer font-medium text-xs lg:text-[15px] rounded-[4px] px-2 py-1.5 lg:px-8 lg:py-4 hover:bg-black" href="/#app_coming_soon" passHref>
                           Download App
                        </Link>
                        <Link className="text-[#414141] hover:text-white bg-[#FFF4E6] border border-[#414141] flex items-center cursor-pointer font-medium text-xs lg:text-[15px] rounded-[4px] px-2 py-1.5 lg:px-10 lg:py-4 hover:bg-black" href="/contact-us" passHref>
                           Contact us
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* home banner section ends here */}


         {/* Home About section start here */}
         <div className="home_about_section py-10 lg:py-20">
            <div className='max-w-6xl mx-auto px-5 lg:px-0'>
                <div className="lg:flex gap-5">
                   <div className="lg:w-6/12 mb-4 lg:mb-0">
                      <Image src={About_us} alt='About_us' className='' />
                   </div>
                   <div className="lg:w-6/12">
                     <div className="lg:mb-4 flex items-center">
                        <FaPlus className="text-[#FFA250] text-base lg:text-[20px] mr-1" />
                        <p className="text-[#FFA250] text-sm lg:text-[16px] leading-[22px] font-bold uppercase">About Us </p>
                     </div>
                     <h2 className="text-[#031E2D] text-[23px] lg:text-[40px] leading-[48px] font-semibold lg:pb-4">Who We Are</h2>
                     <p className="text-[#131313] text-sm lg:text-[16px] leading-[24px] pb-6">Good Mood is India’s first dedicated mental health awareness and support Mobile App. 
                        We exist to break the stigma surrounding mental health, spread awareness, and provide care that is safe, affordable, and accessible. 
                        Our goal is to ensure that every individual, workplace, and community in India has the resources they need to nurture emotional well-being and 
                        live healthier lives.</p>
                     <div className="lg:mb-6 lg:flex">
                        <div className="lg:w-6/12">
                          <div className="w-[64px] h-[64px] bg-[#FFF4E6] rounded-full mb-3 flex justify-center items-center">
                             <Image src={stethy} alt='stethy' className='' />
                          </div>
                          <h3 className="text-[#031E2D] text-xl lg:text-[24px] leading-[32px] font-medium lg:pb-2">Our Mission</h3>
                          <p className="text-[#131313] text-sm lg:text-[16px] leading-[24px] pb-6">We aim to make mental health awareness and support easily accessible, stigma-free..</p>
                        </div>
                        <div className="lg:w-6/12">
                           <div className="w-[64px] h-[64px] bg-[#FFF4E6] rounded-full mb-3 flex justify-center items-center">
                              <Image src={home} alt='home' className='' />
                           </div>
                          <h3 className="text-[#031E2D] text-xl lg:text-[24px] leading-[32px] font-medium lg:pb-2">Our Vision</h3>
                          <p className="text-[#131313] text-sm lg:text-[16px] leading-[24px] pb-6">The very vision of Good Mood is constructing a society where mental....</p>
                        </div>
                     </div>
                     <Link className="text-white bg-[#0B8843] inline-block font-medium text-xs lg:text-[15px] rounded-[4px] px-5 py-2.5 lg:px-8 lg:py-4 hover:bg-black" href="/about-us" passHref>
                        Learn About Our Journey
                     </Link>
                   </div>
                </div>
            </div>
         </div>
         {/* Home About section ends here */}


         {/* Awareness section start here */}
         <div className="home_about_section py-10 lg:py-20">
            <div className='max-w-6xl mx-auto px-5 lg:px-0'>
               <div className="lg:flex gap-8">
                  <div className="lg:w-6/12">
                     <div className="mb-4 flex items-center">
                        <FaPlus className="text-[#FFA250] text-[20px] mr-1" />
                        <p className="text-[#FFA250] text-sm lg:text-[16px] leading-[22px] font-bold uppercase">Awareness </p>
                     </div>
                     <h2 className="text-[#031E2D] text-[23px] lg:text-[40px] lg:leading-[48px] font-semibold pb-4">Why Mental Health Awareness Matters</h2>
                     <p className="text-[#131313] text-sm lg:text-[16px] leading-[24px] pb-6">Mental health is as vital as physical health, yet it often goes unnoticed or misunderstood. 
                        Good Mood was created to break this silence, raise awareness, and provide practical tools for all stages of life. 
                        Like we mentioned in our mission and vision, if mental health matters for a fruitful future of humanity, a society free of mental burden will be trees, bearing the fruit...</p>
                     <Link className="text-white bg-[#0B8843] inline-block font-medium text-xs lg:text-[15px] rounded-[4px] px-5 py-2.5 lg:px-8 lg:py-4 hover:bg-black" href="/awareness" passHref>
                        Learn More
                     </Link>
                     <div className="mt-12">
                        <Image src={awareness_left} alt='awareness_left' className='' />
                     </div>
                  </div>
                  <div className="lg:w-6/12">
                     <div>
                        <ul>
                           <li className="text-base lg:text-[22px] leading-[70px] lg:leading-[82px] font-medium block text-[#031E2D] border-b border-[#E3E3E3] px-4 flex items-center justify-between">
                              Mood Meters
                              <Link href="/mood-meters" passHref><span className="bg-[#E6FFF1] w-[42px] h-[42px] inline-flex rounded-full items-center justify-center"><BsArrowRight /></span></Link>
                           </li>
                           <li className="text-base lg:text-[22px] leading-[70px] lg:leading-[82px] font-medium block text-[#031E2D] border-b border-[#E3E3E3] px-4 flex items-center justify-between">
                              Mood Masters
                              <Link href="/mood-masters" passHref><span className="bg-[#E6FFF1] w-[42px] h-[42px] inline-flex rounded-full items-center justify-center"><BsArrowRight /></span></Link>
                           </li>
                           <li className="text-base lg:text-[22px] leading-[70px] lg:leading-[82px] font-medium block text-[#031E2D] border-b border-[#E3E3E3] px-4 flex items-center justify-between">
                              Moodz Matter
                              <Link href="/moodz-matter" passHref><span className="bg-[#E6FFF1] w-[42px] h-[42px] inline-flex rounded-full items-center justify-center"><BsArrowRight /></span></Link>
                           </li>
                           <li className="text-base lg:text-[22px] leading-[70px] lg:leading-[82px] font-medium block text-[#031E2D] border-b border-[#E3E3E3] px-4 flex items-center justify-between">
                              Psychiatric Insights
                              <Link href="/" passHref><span className="bg-[#E6FFF1] w-[42px] h-[42px] inline-flex rounded-full items-center justify-center"><BsArrowRight /></span></Link>
                           </li>
                           <li className="text-base lg:text-[22px] leading-[70px] lg:leading-[82px] font-medium block text-[#031E2D] border-b border-[#E3E3E3] px-4 flex items-center justify-between">
                              Mood Equalisers
                              <Link href="/mood-equalisers" passHref><span className="bg-[#E6FFF1] w-[42px] h-[42px] inline-flex rounded-full items-center justify-center"><BsArrowRight /></span></Link>
                           </li>
                        </ul>
                     </div>
                     <div className="mt-[40px] lg:mt-[88px]">
                        <Image src={awareness_right} alt='awareness_right' className='' />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Awareness section ends here */}


         {/* Support section start here */}
         <div className="support_section py-10 lg:py-20">
            <div className='max-w-6xl mx-auto px-5 lg:px-0'>
               <div className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                     <FaPlus className="text-[#FFA250] text-[20px] mr-1" />
                     <p className="text-[#FFA250] text-[16px] leading-[22px] font-bold uppercase">Support </p>
                  </div>
                  <h2 className="text-[#ffffff] text-[23px] lg:text-[40px] lg:leading-[48px] font-semibold pb-4">Safe, Confidential & Affordable Support</h2>
                  <p className="text-[#ffffff] text-sm lg:text-[16px] leading-[24px] pb-6 lg:w-8/12 mx-auto">We believe support should be accessible to everyone. That’s why our platform is 100% online — safe, secure, and confidential.</p>
               </div>
               <div className="mt-8 lg:flex gap-7">
                  <div className="lg:w-6/12 mb-5 lg:mb-0">

                     <div className="therapies_box mb-5 lg:mb-10">
                        <Link href="/mental-health-experts" passHref>
                           <Image src={mental_experts_img} alt='mental_experts_img' className='' />
                           <div className="therapies_box_cont w-[93%]">
                              <div className="flex gap-4">
                                 <div className="w-2/12">
                                    <div className="w-[52px] h-[52px] rounded-full bg-[#415AFF] flex justify-center items-center">
                                       <Image src={heart_icon} alt='heart_icon' className='' />
                                    </div>
                                 </div>
                                 <div>
                                    <h3 className="text-base lg:text-[20px] leading-[24px] text-[#000000] font-medium lg:pb-2">Mental Health Experts</h3>
                                    <p className="text-xs lg:text-[14px] lg:leading-[22px] text-[#525252]">Trusted professionals ready to guide you with safe, confidential, and compassionate support.</p>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>

                     <div className="therapies_box">
                        <Link href="/packages" passHref>
                           <Image src={packages_img} alt='packages_img' className='' />
                           <div className="therapies_box_cont w-[93%]">
                              <div className="flex gap-4">
                                 <div className="w-2/12">
                                    <div className="w-[52px] h-[52px] rounded-full bg-[#FFB16D] flex justify-center items-center">
                                       <Image src={heart_icon} alt='heart_icon' className='' />
                                    </div>
                                 </div>
                                 <div>
                                    <h3 className="text-base lg:text-[20px] leading-[24px] text-[#000000] font-medium lg:pb-2">Packages</h3>
                                    <p className="text-xs lg:text-[14px] lg:leading-[22px] text-[#525252]">Tailored mental health programs designed for schools, workplaces, and corporate teams.</p>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>

                  </div>
                  <div className="lg:w-6/12">

                     <div className="therapies_box">
                        <Link href="/therapies" passHref>
                           <Image src={therapies_img} alt='therapies_img' className='' />
                           <div className="therapies_box_cont w-[90%]">
                              <div className="flex gap-4">
                                 <div className="w-2/12">
                                    <div className="w-[52px] h-[52px] rounded-full bg-[#FF89E5] flex justify-center items-center">
                                       <Image src={heart_icon} alt='heart_icon' className='' />
                                    </div>
                                 </div>
                                 <div>
                                    <h3 className="text-base lg:text-[20px] leading-[24px] text-[#000000] font-medium lg:pb-2">Therapies</h3>
                                    <p className="text-xs lg:text-[14px] lg:leading-[22px] text-[#525252]">From meditation to counseling — therapies designed to heal your mind and soul.</p>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>

                  </div>
               </div>
            </div>
         </div>
         {/* Support section ends here */}

         {/* Testi section start here */}
         <div>
             <div className="bg-white py-10 lg:py-20">
            <div className='max-w-6xl mx-auto px-5 lg:px-0'>
               <div className="lg:flex gap-4 mb-10">
                  <div className="lg:w-6/12">
                     <div className="mb-4 flex">
                        <FaPlus className="text-[#FFA250] text-[20px] mr-1" />
                        <p className="text-[#FFA250] text-[16px] leading-[22px] font-bold uppercase">Testimonial </p>
                     </div>
                     <h2 className="text-[#031E2D] text-[23px] lg:text-[40px] lg:leading-[48px] font-semibold pb-4">Voices of Hope:<br></br> Experiences from Our Community of Healing</h2>
                  </div>
                  <div className="flex items-end lg:w-6/12">
                     <p className="text-[#131313] text-sm lg:text-[16px] leading-[24px] pb-6">Our experts, therapies, and wellness packages have helped many overcome stress, 
                     build resilience, and find healing. These stories reflect the care and support we provide every day.</p>
                  </div>
               </div>
               <div className="testi_wrap lg:w-9/12 mx-auto">
                  <Testimonial />
               </div>
            </div>
         </div>
         </div>
         {/* Testi section ends here */}

         {/* Download section start here */}
         <div id="app_coming_soon">
            <div className="support_section pt-0 lg:pt-20">
               <div className='max-w-6xl mx-auto px-5 lg:px-0'>
                  <div className="lg:flex gap-4">
                     <div className="lg:w-6/12 py-10 lg:py-20">
                     <h2 className="text-[#ffffff] text-[23px] lg:text-[40px] lg:leading-[48px] font-semibold pb-2 lg:pb-6">App Coming Soon!</h2>
                     <p className="text-[#ffffff] text-sm lg:text-[16px] leading-[24px] pb-8">Discover mental health awareness resources and connect with expert 
                     support — all in one app for your well-being.</p>
                     <div className="flex gap-4">
                        <Image src={app_store} alt='app_store' className='' />
                        <Image src={google_play} alt='google_play' className='' />
                     </div>
                     </div>
                     <div className="lg:w-6/12">
                     <Image src={mobiles_01} alt='mobiles_01' className='' />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Download section ends here */}


         {/* Blog section start here */}
         <div>
             <div className="bg-white py-10 lg:py-20">
            <div className='max-w-6xl mx-auto px-5 lg:px-0'>
               <div className="lg:flex gap-6">
                  <div className="lg:w-10/12 mx-auto text-center mb-4">
                     <div className="mb-4 flex justify-center items-center">
                        <FaPlus className="text-[#FFA250] text-[20px] mr-1" />
                        <p className="text-[#FFA250] text-[16px] leading-[22px] font-bold uppercase">CAMPAIGN ADS </p>
                     </div>
                     <h2 className="text-[#031E2D] text-[23px] lg:text-[40px] lg:leading-[48px] font-semibold pb-4">Awareness Campaigns That Inspire Change</h2>
                  </div>
               </div>
               <Campain />
               {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                   <div className="blog_box">
                     <Image src={blog_image} alt='blog_image' className='' />
                     <div className="blog_box_cont">
                        <div className="flex items-center gap-8 pb-4">
                           <div className="flex items-center gap-1">
                              <BiCalendar className="text-[15px] leading-[16px] text-[#025025]" />
                              <p className="text-[11px] leading-[20px] text-[#025025]">8 December 2024</p>
                           </div>
                           <div className="flex items-center gap-1">
                              <FaRegUser className="text-[15px] leading-[16px] text-[#025025]" />
                              <p className="text-[11px] leading-[20px] text-[#025025]">Alex Carry</p>
                           </div>
                        </div>
                        <h4 className="text-[14px] leading-[17px] text-[#025025] font-medium pb-2">Stay Ahead with Expert Insight & Industry Trends</h4>
                        <p className="text-[10px] leading-[13px] text-[#595757] pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Link className="text-[13px] leading-[24px] text-[#025025] hover:text-black font-medium flex items-center gap-1" href="/experts">Learn More <IoIosArrowForward /></Link>
                     </div>
                   </div>
                   <div className="blog_box">
                     <Image src={blog_image} alt='blog_image' className='' />
                     <div className="blog_box_cont">
                        <div className="flex items-center gap-8 pb-4">
                           <div className="flex items-center gap-1">
                              <BiCalendar className="text-[15px] leading-[16px] text-[#025025]" />
                              <p className="text-[11px] leading-[20px] text-[#025025]">8 December 2024</p>
                           </div>
                           <div className="flex items-center gap-1">
                              <FaRegUser className="text-[15px] leading-[16px] text-[#025025]" />
                              <p className="text-[11px] leading-[20px] text-[#025025]">Alex Carry</p>
                           </div>
                        </div>
                        <h4 className="text-[14px] leading-[17px] text-[#025025] font-medium pb-2">Stay Ahead with Expert Insight & Industry Trends</h4>
                        <p className="text-[10px] leading-[13px] text-[#595757] pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Link className="text-[13px] leading-[24px] text-[#025025] hover:text-black font-medium flex items-center gap-1" href="/experts">Learn More <IoIosArrowForward /></Link>
                     </div>
                   </div>
                   <div className="blog_box">
                     <Image src={blog_image} alt='blog_image' className='' />
                     <div className="blog_box_cont">
                        <div className="flex items-center gap-8 pb-4">
                           <div className="flex items-center gap-1">
                              <BiCalendar className="text-[15px] leading-[16px] text-[#025025]" />
                              <p className="text-[11px] leading-[20px] text-[#025025]">8 December 2024</p>
                           </div>
                           <div className="flex items-center gap-1">
                              <FaRegUser className="text-[15px] leading-[16px] text-[#025025]" />
                              <p className="text-[11px] leading-[20px] text-[#025025]">Alex Carry</p>
                           </div>
                        </div>
                        <h4 className="text-[14px] leading-[17px] text-[#025025] font-medium pb-2">Stay Ahead with Expert Insight & Industry Trends</h4>
                        <p className="text-[10px] leading-[13px] text-[#595757] pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Link className="text-[13px] leading-[24px] text-[#025025] hover:text-black font-medium flex items-center gap-1" href="/experts">Learn More <IoIosArrowForward /></Link>
                     </div>
                   </div>
               </div>
               <div className="mt-8 flex items-center justify-center">
                  <Link className="text-white bg-[#0B8843] inline-block font-medium text-xs lg:text-[15px] rounded-[4px] px-5 py-2.5 lg:px-10 lg:py-4 hover:bg-black" href="/#" passHref>
                     View All
                  </Link>
               </div> */}
            </div>
         </div>
         </div>
         {/* Blog section ends here */}


         


         {openLoginModal &&
            <LoginModal
               openLoginModal={openLoginModal}
               setOpenLoginModal={setOpenLoginModal}
            />
         }
      </div>

   );
}
