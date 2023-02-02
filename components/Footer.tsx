import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

function Footer() {
    return (
        <div className="flex h-[39.375rem] flex-col justify-between bg-[#00A9D3] px-4 pt-7 pb-4 md:h-[36.125rem] md:px-[4.0625rem] md:pt-16 lg:relative lg:h-[30.8125rem] lg:flex-row lg:items-center lg:px-[7.5rem] lg:pt-24">
            <div className="border-b-solid border-b-[1px] border-b-[#ccc] pb-[2.1875rem]  lg:border-b-0">
                <div className="md:w-[60%]">
                    <h1 className="mb-[1.875rem] text-2xl font-medium text-white">
                        Đăng ký để nhận những bài viết mới nhất hàng tuần Email
                        của bạn
                    </h1>
                    <div className="flex items-center justify-between rounded-[5px] bg-white py-1 px-2">
                        <EnvelopeIcon className="h-6 w-6" />
                        <input
                            className="focus:border-none"
                            type="text"
                            placeholder="Email của bạn"
                        />
                        <button className="rounded-[5px] bg-[#00A9D3] py-[8.5px] px-[1.875rem] text-base font-normal text-white">
                            Đăng kí
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:border-b-solid md:flex md:items-center md:justify-between md:border-b-[1px] md:border-b-[#ccc] md:pb-10 lg:flex-row lg:border-b-0">
                <div className="border-b-solid md:border-r-solid flex h-[8.0625rem] flex-col justify-between border-b-[1px] border-b-[#ccc] pb-9 pr-24 text-white md:border-b-0 md:border-r-[1px] md:border-r-[#ccc] md:pb-0 lg:pr-12">
                    <p className="text-xl font-medium">Liên hệ với mình</p>
                    <div className="flex items-center">
                        <PhoneIcon className="mr-2 h-6 w-6" />{' '}
                        <span className="text-base font-normal">
                            0329621710
                        </span>{' '}
                    </div>
                    <div className="flex items-center">
                        <MapPinIcon className="mr-2 h-6 w-6" />
                        <span className="text-base font-normal">
                            Tây Mỗ , Nam Từ Liêm , Hà Nội
                        </span>
                    </div>
                </div>
                <div className="mt-9 md:mt-0 lg:ml-12">
                    <p className="text-center text-xl font-medium text-white">
                        Theo dõi mình trên các nền tảng
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
                                    className="h-10 w-10"
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
                                    className="h-10 w-10"
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
                                    className="h-10 w-10"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="lg: text-base font-normal text-white lg:absolute lg:bottom-[2rem] lg:left-[40%]">
                Học cùng DevC © 2022. All Rights Reserved
            </p>
        </div>
    );
}

export default Footer;
