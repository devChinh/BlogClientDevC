'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
    Bars3BottomRightIcon,
    MagnifyingGlassIcon,
    MoonIcon,
    ShoppingCartIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

function Header() {
    const [show, setShow] = useState(false);

    const handleShow: () => void = () => {
        setShow(!show);
    };

    useEffect(() => {
        setShow(false);
        // if(show === true){
        //     document.getElementsByTagName("body")
        // }
    }, []);

    return (
        <div className="bg-[#F3F3F3] flex h-20 items-center justify-between px-3 md:h-24 md:px-[3.875rem] lg:h-[6.25rem] lg:px-[7.3125rem]">
            <div className="lg:flex">
                <Image
                    src="/images/logo1.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="mr-5 w-auto"
                />

                <ul className="hidden lg:flex lg:w-[37.5rem] lg:items-center lg:justify-between lg:text-base lg:font-bold lg:uppercase">
                    <li>NodeJS</li>
                    <li>ReactJS</li>
                    <li>Khoá học</li>
                    <li>Công nghệ</li>
                    <li>Tài nguyên</li>
                    <li>Về tác giả</li>
                </ul>
            </div>

            <div className="flex items-center">
                <MagnifyingGlassIcon className="hidden h-6 w-6 lg:block" />
                <MoonIcon className="ml-7 h-6 w-6 md:hidden lg:block" />
                <ShoppingCartIcon className="ml-7 h-6 w-6 md:hidden lg:block" />
                <ul className="hidden md:flex md:w-[10.25rem] md:justify-between md:text-base md:font-bold lg:hidden">
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                </ul>
                {show ? (
                    <XMarkIcon
                        onClick={handleShow}
                        className="ml-7 h-6 w-6 lg:hidden"
                    />
                ) : (
                    <Bars3BottomRightIcon
                        onClick={handleShow}
                        className="ml-7 h-6 w-6 lg:hidden"
                    />
                )}
            </div>
            {show ? <Sidebar /> : null}
        </div>
    );
}

export default Header;
