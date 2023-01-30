'use client';

import {
    ChevronDownIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useState } from 'react';

function Sidebar() {
    const [dropDown, setDropDown] = useState(false);

    const handleDropDown = () => {
        setDropDown(!dropDown);
    };

    return (
        <div className="absolute top-[4.75rem] right-0 bottom-0 left-0 flex flex-col justify-between bg-[#F3F3F3] px-4 pb-14 pt-5 lg:hidden">
            <div>
                <div className="flex h-12 w-full items-center rounded-[10px] border-[1px] border-solid border-lightSilver bg-white pl-6">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm thông tin"
                        className="ml-4 w-full border-none outline-none"
                    />
                </div>
                <ul>
                    <li className="borer-sidebar">NodeJS</li>
                    <li className="borer-sidebar">ReactJS</li>
                    <li
                        onClick={handleDropDown}
                        className="borer-sidebar flex justify-between"
                    >
                        <span> Khoá học </span>
                        <ChevronDownIcon className="h-6 w-6" />{' '}
                    </li>
                    {dropDown && (
                        <li className="bg-slate-200 text-base font-normal">
                            ReactJS
                        </li>
                    )}
                    <li className="borer-sidebar">Công nghệ</li>
                    <li className="borer-sidebar">Tài nguyên</li>
                    <li className="borer-sidebar">Về tác giả</li>
                </ul>
            </div>
            <div>
                <p className="text-center	text-base font-normal">
                    Theo dõi mình{' '}
                </p>
                <ul className="mx-auto mt-4 flex w-[10.625rem] justify-between">
                    <li>
                        <a href="">
                            {' '}
                            <Image
                                src="/images/facebook-icon.png"
                                alt="logo"
                                width={45}
                                height={45}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            {' '}
                            <Image
                                src="/images/tiktok-icon.png"
                                alt="logo"
                                width={45}
                                height={45}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            {' '}
                            <Image
                                src="/images/youtube-icon.png"
                                alt="logo"
                                width={45}
                                height={45}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
