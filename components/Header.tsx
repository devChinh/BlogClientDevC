'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
    Bars3BottomRightIcon,
    MoonIcon,
    ShoppingCartIcon,
    UsersIcon,
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
    }, []);

    return (
        <div className="flex h-[79px] items-center justify-between px-3 lg:h-[100px] lg:px-[117px]">
            <div className="lg:flex">
                <Image
                    src="/images/logo1.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="mr-5 w-auto"
                />

                <ul className="hidden lg:flex lg:w-[600px] lg:items-center lg:justify-between lg:text-base lg:font-bold lg:uppercase	">
                    <li>NodeJS</li>
                    <li>ReactJS</li>
                    <li>Khoá học</li>
                    <li>Công nghệ</li>
                    <li>Tài nguyên</li>
                    <li>Về tác giả</li>
                </ul>
            </div>

            <div className="flex items-center">
                <ul className="hidden">
                    <li>NodeJS</li>
                    <li>ReactJS</li>
                </ul>
                <MoonIcon className="h-6 w-6" />
                <UsersIcon className="ml-7 h-7 w-7" />
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
                <ShoppingCartIcon className="ml-7 hidden h-6 w-6 lg:block" />
            </div>
            {show ? <Sidebar /> : null}
        </div>
    );
}

export default Header;
