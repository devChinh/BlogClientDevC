import Image from 'next/image';
import React from 'react';
import dayjs from 'dayjs';
import {
    CalendarDaysIcon,
    ClockIcon,
    UserIcon,
} from '@heroicons/react/24/outline';

const courses = [
    {
        id: 1,
        title: 'Khoá học HTML CSS cơ bản dành cho người mới bắt đầu',
        img: '/images/courses.png',
        date: dayjs().format('DD/MM/YYYY'),
        price: '699.000đ',
    },
    {
        id: 2,
        title: 'Khoá học Javascript cơ bản đến nâng cao dành cho người mới bắt đầu',
        img: '/images/courses.png',
        date: dayjs().format('DD/MM/YYYY'),
        price: '599.000đ',
    },
    {
        id: 3,
        title: 'Khoá học ReactJS cơ bản đến nâng cao dành cho người mới bắt đầu',
        img: '/images/courses.png',
        date: dayjs().format('DD/MM/YYYY'),
        price: '799.000đ',
    },
    {
        id: 4,
        title: 'Khoá học NodeJS cơ bản đến nâng cao dành cho người mới bắt đầu',
        img: '/images/courses.png',
        date: dayjs().format('DD/MM/YYYY'),
        price: '849.000 đ',
    },
];

function Courses() {
    return (
        <div className="flex h-[60rem] flex-col justify-between py-[3.8125rem] lg:h-[1001px] lg:py-[6.0625rem]">
            <div>
                <h1 className="mx-auto mb-4 w-[18.4375rem] text-center text-2xl font-medium lg:text-[2.125rem] lg:w-[38.8125rem]">
                    Khai trương web mới, nhận ngay ưu đãi{' '}
                </h1>
                <p className="block text-center text-sm font-normal lg:text-base">
                    Nhận ưu đãi của DevC ngay khi đăng kí các khóa học dành cho
                    người mới{' '}
                </p>
            </div>

            <div className="scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex w-auto overflow-y-auto pr-4 pb-4 scrollbar lg:mx-auto">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="h-[33.8125rem] w-[20.875rem] rounded-xl shadow-[0px_2px_10px_-1px_rgba(0,0,0,0.48)] ml-4"
                    >
                        <Image
                            src={course.img}
                            alt="course1"
                            width={100}
                            height={100}
                            className="h-[14.375rem] w-[100%] rounded-xl object-cover"
                        />
                        <div className="flex h-[19.4375rem] flex-col justify-between px-6 pt-5 pb-6">
                            <div className="flex h-[5.3125rem] flex-col justify-between text-xl font-medium">
                                <p className="h-14 overflow-hidden">
                                    {course.title}
                                </p>
                                <p className="text-[#00A9D3]">{course.price}</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <CalendarDaysIcon className="mr-2 h-[1.25rem] w-[1.25rem]" />
                                    <span>12 buổi</span>
                                </div>
                                <div className="flex items-center">
                                    <UserIcon className="mr-2 h-[1.25rem] w-[1.25rem]" />
                                    <span>Cikey</span>
                                </div>
                                <div className="flex items-center">
                                    <ClockIcon className="mr-2 h-[1.25rem] w-[1.25rem]" />
                                    <span>{course.date}</span>
                                </div>
                            </div>
                            <div>
                                <button className="mx-auto mb-4 block w-[17.75rem] border-[1px] border-solid border-[#00A9D3] py-4 text-base font-normal text-[#00A9D3]">
                                    Chi tiết khóa học{' '}
                                </button>
                                <button className="mx-auto block w-[17.75rem] bg-[#00A9D3] py-4 text-base font-normal text-[#fff]">
                                    Mua ngay
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mx-auto block border-[1px] border-solid border-[#00A9D3] py-4 px-[3.375rem] text-base font-normal text-[#00A9D3]">
                Xem tất cả các khóa học{' '}
            </button>
        </div>
    );
}

export default Courses;
