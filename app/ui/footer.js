'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Roboto } from 'next/font/google';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';

import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

import { FaFacebook } from "react-icons/fa6";

import { IoMdSend } from "react-icons/io";

import footerLogo from "../assets/imagesource/footer_logo.png";
import chat_icon from "../assets/imagesource/chat_icon.png";
import chat_icon2 from "../assets/imagesource/chat_icon2.png";
import Image from 'next/image';

import { ImLocation } from "react-icons/im";

import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { chats } from '../reducers/chatSlice';
import ReactMarkdown from 'react-markdown';
import { SiWhatsapp } from "react-icons/si";




const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700'], // optional: define font weights
  variable: '--font-roboto', // optional: for CSS variables
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);
  // const [messages, setMessages] = useState([
  //   { id: 1, from: 'bot', text: 'Hi there! How can I help you today?' },
  //   { id: 2, from: 'user', text: 'I want to know more about your product.' },
  // ]);
  // const [input, setInput] = useState('');
  // const inputRef = useRef(null);

  const [messages, setMessages] = useState([]);
   const [sessionId, setSessionId] = useState(null);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const messagesEndRef=useRef(null)

  const dispatch = useDispatch();
  const { loading, chatsData, error } = useSelector((state) => state.cht);

console.log("chatsData",chatsData);

  useEffect(() => {
    const getOrCreateSessionId = () => {
      // Check if session ID exists in sessionStorage
      let existingSessionId = sessionStorage.getItem('chat_session_id');
      
      if (!existingSessionId) {
        // Generate new UUID using browser's crypto API
        existingSessionId = crypto.randomUUID();
        // Store in sessionStorage
        sessionStorage.setItem('chat_session_id', existingSessionId);
      }
      
      return existingSessionId;
    };

    const id = getOrCreateSessionId();
    setSessionId(id);
    console.log('Current Session ID:', id);
  }, []);

  useEffect(() => {
  if (chatsData?.response) {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "bot", text: chatsData.response },
    ]);
  }
}, [chatsData]);



  useEffect(() => {
   if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);


  const openChat = () =>{
    setIsOpen(!isOpen)
  }
  const closeChat = () => setIsOpen(false);

  useEffect(() => {
  if (messagesEndRef.current) {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          from: "bot",
          text: "Mood Monk is your AI companion for inner peace, crafted by psychologists to guide you toward stillness and self-awareness.",
        },
      ]);
    }
  }, [isOpen]);


  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Prepare payload for API
    const payload = {
      query: input,
      use_agent: true,
      user_id: sessionId, // can make this dynamic
    };

    dispatch(chats(payload));

    setInput("");
  };

  return (
    <div className='bg-[#000000]'>

      {isOpen ? 
          <></>
          :
          <>
            <div className="fixed bottom-6 right-6 z-50">
              <button
                onClick={openChat}
                aria-expanded={isOpen}
                aria-controls="chat-popup"
                title="Mood Monk here for you"
                >
                <Image src={chat_icon2} alt='chat_icon2' className='shadow-xl w-[51px] h-[51px] rounded-full cursor-pointer' />
              </button>
            </div>
          </>
      }
      


      <AnimatePresence>
        {isOpen && (
          <motion.div
          id="chat-popup"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[92vw]"
          >
            <div className="flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0b8843] to-[#0b8843] text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                  <Image src={chat_icon2} alt='chat_icon2' className='w-[30px] h-[30px] rounded-full cursor-pointer' />
                </div>
                <div>
                  <div className="font-semibold">Mood Monk</div>
                  <div className="text-xs opacity-80">Find peace within...</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                onClick={() => {
                // minimize to bottom-left small bar instead of fully close (demo)
                setIsOpen(false);
                }}
                aria-label="Minimize chat"
                className="p-1 rounded-md hover:bg-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                </button>
                <button onClick={closeChat} aria-label="Close chat" className="p-1 rounded-md hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 max-h-[320px] overflow-y-auto px-4 py-3 space-y-3 bg-slate-50">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`${
                      m.from === "user"
                        ? "bg-[#0b8843] text-white rounded-tl-xl rounded-bl-xl rounded-br-xl"
                        : "bg-white rounded-tr-xl rounded-br-xl rounded-bl-xl ring-1 ring-black/5"
                    } max-w-[78%] p-3`}
                  >

                     {
                      m.from==="bot"?(
                        <ReactMarkdown
                       
                          components={{
                            p: ({ node, ...props }) => (
                            <p className="mb-2 last:mb-0 text-sm leading-relaxed text-gray-800 inline" {...props} />
                          ),

                          ol: ({ node, ...props }) => (
                            <ol
                              className="mb-2 list-decimal list-inside space-y-3 last:mb-0 text-gray-800 text-sm"
                              {...props}
                            />
                          ),

                          ul: ({ node, ...props }) => (
                            <ul
                              className="mb-2 list-disc list-inside space-y-1 last:mb-0 text-gray-800 text-sm"
                              {...props}
                            />
                          ),
                            //   li: ({ node, children, ...props }) => (
                            //   <li
                            //     className="ml-2 text-gray-800 text-sm leading-relaxed"
                            //     {...props}
                            //   >
                            //     <span className="">
                            //       {children}
                            //     </span>
                            //   </li>
                            // ),

                         li: ({ node, children, ...props }) => {
  // Convert children to array for easier manipulation
                            const childArray = React.Children.toArray(children);
                            
                            // Check if first child is a paragraph with strong element
                            const firstChild = childArray[0];
                            const isStructuredItem = firstChild?.props?.children;
                            
                            if (isStructuredItem && Array.isArray(firstChild.props.children)) {
                              const innerChildren = firstChild.props.children;
                              const strongIndex = innerChildren.findIndex(
                                child => child?.type?.name === 'strong' || child?.props?.node?.tagName === 'strong'
                              );
                              
                              if (strongIndex !== -1) {
                                const beforeStrong = innerChildren.slice(0, strongIndex);
                                const strongElement = innerChildren[strongIndex];
                                const afterStrong = innerChildren.slice(strongIndex + 1);
                                
                                return (
                                  <li className="ml-2 mb-3 text-gray-800 text-sm leading-relaxed" {...props}>
                                    <div className="inline">
                                      {beforeStrong}
                                      {strongElement}
                                    </div>
                                    <div className="block">
                                      {afterStrong}
                                    </div>
                                  </li>
                                );
                              }
                            }
                            
                            return (
                              <li className="ml-2 mb-3 text-gray-800 text-sm leading-relaxed" {...props}>
                                {children}
                              </li>
                            );
},

                       

                          strong: ({ node, ...props }) => (
                            <strong className="font-semibold text-black inline-block" {...props} />
                          ),

                          em: ({ node, ...props }) => (
                            <em className="italic text-gray-700" {...props} />
                          ),

                          a: ({ node, ...props }) => (
                            <a className="text-blue-600 hover:underline font-medium" {...props} />
                          ),
                          }}
                        >
                          {m.text}
                        </ReactMarkdown>
 
                      ):(
                         <div className="text-sm leading-relaxed text-justify">{m.text}</div>
                      )
                    }
                    {/* <div className="text-sm leading-relaxed text-justify">{m.text}</div> */}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-xs text-gray-500 italic">Mood monk is thinking...</div> 
              )}
              <div ref={messagesEndRef} />
            </div>


            {/* Input area */}
            <form onSubmit={sendMessage} className="px-4 py-3 bg-white flex items-center gap-3">
            <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
              <button type="submit" className="inline-flex items-center gap-2 bg-[#0b8843] hover:bg-[#000000] text-white px-3 py-2 rounded-xl cursor-pointer">
                  <IoMdSend className='text-xl' />
              </button>
            </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='footer_top pt-18 px-6 lg:px-0'>
        <div className='max-w-6xl mx-auto px-0 lg:px-0'>
          <div className='footer_top_container'>
            <div className='lg:flex pb-6'>
               <div className='lg:w-6/12 mb-6 lg:mb-0 text-center lg:text-left'>
                <Image src={footerLogo} alt='footerLogo' className='inline-block mb-4' />
                <div className='lg:pr-40 mb-8'>
                  <p className='text-white text-sm leading-[24px] font-normal'>India’s first mental health awareness & support app — safe, affordable, and confidential care for individuals, institutions, workplaces, and families.</p>
                </div>
                <div className='social_section'>
                  <ul className='flex justify-center lg:justify-start gap-3'>
                    <li>
                      <Link className='bg-[#373737] hover:bg-white text-[#B5E48C] hover:text-black text-2xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="https://www.facebook.com/share/1FbrH1LqJ2/" target='_blank' passHref>
                        <BiLogoFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link className='bg-[#373737] hover:bg-white text-[#B5E48C] hover:text-black text-2xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="https://www.instagram.com/goodmoodmentalhealthapp/?utm_source=ig_web_button_share_sheet" target='_blank' passHref>
                        <AiFillInstagram />
                      </Link>
                    </li>
                    {/* <li>
                      <Link className='bg-[#373737] hover:bg-white text-[#B5E48C] hover:text-black text-2xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="/" passHref>
                        <SiWhatsapp />
                      </Link>
                    </li>
                    <li>
                      <Link className='bg-[#373737] hover:bg-white text-[#B5E48C] hover:text-black text-xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="/" passHref>
                        <BsYoutube />
                      </Link>
                    </li>
                    <li>
                      <Link className='bg-[#373737] hover:bg-white text-[#B5E48C] hover:text-black text-xl flex justify-center items-center w-[48px] h-[48px] rounded-full' href="/" passHref>
                        <BsTwitterX />
                      </Link>
                    </li> */}
                  </ul>
              </div>
              </div>
              <div className='lg:w-6/12 lg:flex text-center lg:text-left'>
                <div className='lg:w-5/12 mb-6 lg:mb-0'>
                   <h4 className='text-[#FFA250] text-[24px] leading-[24px] font-semibold pb-5'>Quick Links</h4>
                   <div>
                      <ul>
                        <li>
                          <Link className='text-[#CECECE] hover:text-[#0B8843] text-[16px] leading-[16px] font-normal mb-4 inline-block' href="/about-us" passHref>About Us</Link>
                        </li>
                        <li>
                          <Link className='text-[#CECECE] hover:text-[#0B8843] text-[16px] leading-[16px] font-normal mb-4 inline-block' href="/awareness" passHref>Awareness</Link>
                        </li>
                        <li>
                          <Link className='text-[#CECECE] hover:text-[#0B8843] text-[16px] leading-[16px] font-normal mb-4 inline-block' href="/support" passHref>Support</Link>
                        </li>
                        <li>
                          <Link className='text-[#CECECE] hover:text-[#0B8843] text-[16px] leading-[16px] font-normal mb-4 inline-block' href="/contact-us" passHref>Contact Us</Link>
                        </li>
                        <li>
                          <Link className='text-[#CECECE] hover:text-[#0B8843] text-[16px] leading-[16px] font-normal mb-4 inline-block' href="/terms-conditions" passHref>Terms & Conditions</Link>
                        </li>
                        <li>
                          <Link className='text-[#CECECE] hover:text-[#0B8843] text-[16px] leading-[16px] font-normal mb-4 inline-block' href="/refund-cancellation-policy" passHref>Refund & Cancellation Policy</Link>
                        </li>
                      </ul>
                   </div>
                </div>
                <div className='lg:w-7/12'>
                   <h4 className='text-[#FFA250] text-[24px] leading-[24px] font-semibold pb-5'>Contact Us</h4>
                   <div>
                      <div className='flex lg:items-start lg:justify-start justify-center gap-2 mb-4'>
                        <div className='mt-2'><FaMapMarkerAlt className='text-[18px] text-white' /></div>
                        <p className='text-[#CECECE] text-[15px] leading-[25px] font-normal'>136 Basunagar Gate No 1, Madhyamgram, Kolkata 700129</p>
                      </div>
                      <div className='flex lg:items-start lg:justify-start justify-center gap-2 mb-4'>
                        <div className='mt-1'><BiSolidPhone className='text-[18px] text-white' /></div>
                        <p className='text-[#CECECE] text-[15px] leading-[25px] font-normal'>(+91) 9062462268</p>
                      </div>
                      <div className='flex lg:items-start lg:justify-start justify-center gap-2 mb-4'>
                        <div className='mt-1'><BiLogoGmail className='text-[18px] text-white' /></div>
                        <p className='text-[#CECECE] text-[15px] leading-[25px] font-normal'>connect@goodmood.solutions</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-3 border-t border-[#303030]'>
            <ul className='flex justify-center items-center gap-4 py-6'>
              <li>
                <p className='text-white text-[12px] lg:text-sm leading-[24px] font-medium'>© 2025 Good Mood Solutions. All rights reserved.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer