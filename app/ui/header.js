'use client';

import React, { useState, useRef, useEffect } from "react";
import { Navbar, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Link from 'next/link';
import logo from '../assets/imagesource/logo.png';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import VerifyOtpModal from '../modal/verifyOtpModal';
import LoginModal from '../modal/LoginModal';
import RegistrationModal from '../modal/RegistrationModal';
import PriceListModal from '../modal/PriceListModal';

const Header = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openVerifyOtpModal, setOpenVerifyOtpModal] = useState(false);
  const [openPricModal, setOpenPriceModal] = useState(false);

  // Navbar toggle state
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Ref for navbar collapse
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  // Close on body click (outside navbar)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    };

    if (isNavbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarOpen]);

  return (
    <div>
      <ToastContainer />
      <div className="header_section w-full lg:pb-0 absolute left-0 lg:top-4">
        <div className="max-w-6xl mx-auto pt-4 lg:pt-0 lg:py-5 px-5 lg:px-0 rounded-b-2xl relative z-10">
          <div className="w-full">
            <div className="header_top flex justify-between items-center">
              {/* Logo */}
              <div className="mr-2 hidden lg:block">
                <Link href="/" passHref>
                  <Image src={logo} alt='logo' className='w-[203px]' />
                </Link>
              </div>
              <div className="mr-2 lg:hidden">
                <Link href="/" passHref>
                  <Image src={logo} alt='logo' className='w-[120px]' />
                </Link>
              </div>

              {/* Main menu */}
              <div className="menu_section pb-0">
                <div className="main_menu">
                  <Navbar fluid rounded className="bg-transparent pt-0 pb-0">
                    <div className="flex md:order-2 text-black toggle_point">
                      <NavbarToggle onClick={toggleNavbar} />
                    </div>
                    <NavbarCollapse
                      ref={navbarRef}
                      className={isNavbarOpen ? 'block' : 'hidden md:block'}
                    >
                      <li onClick={closeNavbar}>
                        <Link href="/" passHref>Home</Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/about-us" passHref>About Us</Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/awareness" passHref>Awareness</Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/support" passHref>Support</Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/experts" passHref>Expert?</Link>
                      </li>
                    </NavbarCollapse>
                  </Navbar>
                </div>
              </div>

              {/* Contact Us Button */}
              <div className="mr-10 lg:mr-0 flex items-center mt-0 lg:mt-0">
                <div className="flex gap-2">
                  <Link
                    className="text-white bg-[#0B8843] flex items-center cursor-pointer font-medium text-xs lg:text-[15px] rounded-[5px] px-2 py-1.5 lg:px-8 lg:py-4 hover:bg-black"
                    href="/contact-us"
                    passHref
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Login Modal */}
          {openLoginModal && (
            <LoginModal
              openLoginModal={openLoginModal}
              setOpenLoginModal={setOpenLoginModal}
              setOpenRegisterModal={setOpenRegisterModal}
            />
          )}

          {/* Register Modal */}
          {openRegisterModal && (
            <RegistrationModal
              openRegisterModal={openRegisterModal}
              setOpenRegisterModal={setOpenRegisterModal}
              openVerifyOtpModal={openVerifyOtpModal}
              setOpenVerifyOtpModal={setOpenVerifyOtpModal}
              setOpenLoginModal={setOpenLoginModal}
              openPricModal={openPricModal}
              setOpenPriceModal={setOpenPriceModal}
            />
          )}

          {/* Price Modal */}
          {openPricModal && (
            <PriceListModal
              openPricModal={openPricModal}
              setOpenPriceModal={setOpenPriceModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
