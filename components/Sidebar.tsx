import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

function Sidebar() {
    return (
        <div className="absolute top-[76px] right-0 bottom-0 left-0 flex flex-col justify-between  bg-chineseWhite px-4 pb-14 pt-5 lg:hidden">
            <div>
                <div className="flex w-full rounded-[10px] border-[1px] border-solid border-lightSilver bg-white py-4 pl-6">
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
                    <li className="borer-sidebar">Khoá học</li>
                    <li className="borer-sidebar">Công nghệ</li>
                    <li className="borer-sidebar">Tài nguyên</li>
                    <li className="borer-sidebar">Về tác giả</li>
                </ul>
            </div>
            <div>
                <p className="text-center	text-base font-normal">
                    Theo dõi mình{' '}
                </p>
                <ul className="mx-auto mt-4 flex w-[170px] justify-between">
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
