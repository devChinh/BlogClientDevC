'use client';

import {
    ChevronDownIcon,
    ChevronRightIcon,
    ChevronUpIcon,
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
        <div className="absolute top-[4.75rem] right-0 bottom-0 left-0 flex flex-col justify-between bg-[#F3F3F3] pb-14 pt-5 lg:hidden">
            <div>
                <div className="flex h-12 w-auto items-center rounded-[10px] border-[1px] border-solid border-lightSilver bg-white mx-4 pl-6">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm thông tin"
                        className="ml-4 w-full border-none outline-none"
                    />
                </div>
                <ul>
                    <li className="borer-sidebar px-4 ">NodeJS</li>
                    <li className="borer-sidebar px-4 ">ReactJS</li>
                    <li
                        onClick={handleDropDown}
                        className={` ${
                            dropDown ? 'border-b-0 bg-white' : ''
                        } borer-sidebar flex justify-between px-4`}
                    >
                        <span> Khoá học </span>
                        {dropDown ? (
                            <ChevronDownIcon className="h-6 w-6 text-[#35B2FB]" />
                        ) : (
                            <ChevronUpIcon className="h-6 w-6 text-[#35B2FB]" />
                        )}
                    </li>
                    {dropDown && (
                        <li className="flex justify-between  bg-white px-4 py-3 text-base font-normal text-[#7E7E7E]">
                            <span>Khóa học lập trình Full stack </span>
                            <ChevronRightIcon className="h-4 w-4 text-[#7E7E7E]" />
                        </li>
                    )}
                    <li className="borer-sidebar px-4 ">Công nghệ</li>
                    <li className="borer-sidebar px-4 ">Tài nguyên</li>
                    <li className="borer-sidebar px-4 ">Về tác giả</li>
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
