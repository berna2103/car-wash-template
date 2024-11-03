'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import BookAppointmentButton from '../BookAppointmentButton/BookAppointmentButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="text-zinc-900 bg-zinc-100 shadow-lg">
            <div className="container mx-auto  px-4 flex justify-between items-center h-16">
                <div className="text-2xl font-bold">
                    <Link href="/">
                      <Image  width={200} height={100} src='/3brothers.png' alt='logo'/>
                    </Link>
                </div>
                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#services" className="hover:text-gray-300">Services</a>
                    <a href="#coupons" className="hover:text-gray-300">Coupons</a>
                    <a href="#about" className="hover:text-gray-300">About</a>
                    <a href="#careers" className="hover:text-gray-300">Careers</a>
                    <BookAppointmentButton />
                </div>
                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-100">
                    <ul className="space-y-4 p-4">
                        <li><a href="#services" className="block hover:text-gray-300">Services</a></li>
                        <li><a href="#coupons" className="block hover:text-gray-300">Coupons</a></li>
                        <li><a href="#about" className="block hover:text-gray-300">About</a></li>
                        <li><a href="#careers" className="block hover:text-gray-300">Careers</a></li>
                        <li className='pb-4 pt-4'><BookAppointmentButton /></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
