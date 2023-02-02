import Image from 'next/image';
import React from 'react';

const posts = [
    {
        id: 1,
        title: 'Junior Developer là gì? Trở thành Junior Developer cần những gì?',
        description:
            'Junior Developer là những lập trình viên dưới 2 năm kinh nghiệm lập trình. Xét về cấp bậc phân chia theo kinh nghiệm, Junior Developer ở mức độ cơ bản, dần làm quen với hệ thống để hướng tới chuyên sâu hơn. Vậy Junior Developer là gì? Bài viết sau CodeGym sẽ giải đáp chi tiết!',
    },
    {
        id: 2,
        title: 'Junior Developer là gì? Trở thành Junior Developer cần những gì?',
        description:
            'Junior Developer là những lập trình viên dưới 2 năm kinh nghiệm lập trình. Xét về cấp bậc phân chia theo kinh nghiệm, Junior Developer ở mức độ cơ bản, dần làm quen với hệ thống để hướng tới chuyên sâu hơn. Vậy Junior Developer là gì? Bài viết sau CodeGym sẽ giải đáp chi tiết!',
    },
    {
        id: 3,
        title: 'Junior Developer là gì? Trở thành Junior Developer cần những gì?',
        description:
            'Junior Developer là những lập trình viên dưới 2 năm kinh nghiệm lập trình. Xét về cấp bậc phân chia theo kinh nghiệm, Junior Developer ở mức độ cơ bản, dần làm quen với hệ thống để hướng tới chuyên sâu hơn. Vậy Junior Developer là gì? Bài viết sau CodeGym sẽ giải đáp chi tiết!',
    },
    {
        id: 5,
        title: 'Junior Developer là gì? Trở thành Junior Developer cần những gì?',
        description:
            'Junior Developer là những lập trình viên dưới 2 năm kinh nghiệm lập trình. Xét về cấp bậc phân chia theo kinh nghiệm, Junior Developer ở mức độ cơ bản, dần làm quen với hệ thống để hướng tới chuyên sâu hơn. Vậy Junior Developer là gì? Bài viết sau CodeGym sẽ giải đáp chi tiết!',
    },
    {
        id: 6,
        title: 'Junior Developer là gì? Trở thành Junior Developer cần những gì?',
        description:
            'Junior Developer là những lập trình viên dưới 2 năm kinh nghiệm lập trình. Xét về cấp bậc phân chia theo kinh nghiệm, Junior Developer ở mức độ cơ bản, dần làm quen với hệ thống để hướng tới chuyên sâu hơn. Vậy Junior Developer là gì? Bài viết sau CodeGym sẽ giải đáp chi tiết!',
    },
    {
        id: 7,
        title: 'Junior Developer là gì? Trở thành Junior Developer cần những gì?',
        description:
            'Junior Developer là những lập trình viên dưới 2 năm kinh nghiệm lập trình. Xét về cấp bậc phân chia theo kinh nghiệm, Junior Developer ở mức độ cơ bản, dần làm quen với hệ thống để hướng tới chuyên sâu hơn. Vậy Junior Developer là gì? Bài viết sau CodeGym sẽ giải đáp chi tiết!',
    },
    {
        id: 8,
        title: 'Junior Developer là gì? Trở thành Junior Developer cần những gì?',
        description:
            'Junior Developer là những lập trình viên dưới 2 năm kinh nghiệm lập trình. Xét về cấp bậc phân chia theo kinh nghiệm, Junior Developer ở mức độ cơ bản, dần làm quen với hệ thống để hướng tới chuyên sâu hơn. Vậy Junior Developer là gì? Bài viết sau CodeGym sẽ giải đáp chi tiết!',
    },
];

const postHots = [
    {
        id: 1,
        title: 'JSON là gì? Sử dụng JSON khi nào?',
    },
    {
        id: 2,
        title: 'JSON là gì? Sử dụng JSON khi nào?',
    },
    {
        id: 3,
        title: 'JSON là gì? Sử dụng JSON khi nào?',
    },
    {
        id: 4,
        title: 'JSON là gì? Sử dụng JSON khi nào?',
    },
    {
        id: 5,
        title: 'JSON là gì? Sử dụng JSON khi nào?',
    },
];

function Posts() {
    return (
        <div className="flex h-auto flex-col justify-between bg-[#F3F3F3] px-4 pt-6 pb-[3.75rem] md:px-[4.0625rem] lg:flex-row lg:gap-14 lg:px-[7.5rem] lg:pt-[5.4375rem]">
            <div className="lg:flex-[1_1_60%]">
                <div className="md:flex md:flex-wrap md:justify-between">
                    {posts.map((post) => (
                        <div key={post.id} className="mt-9 md:w-[45%]">
                            <Image
                                src="/images/courses.png"
                                alt="logo"
                                width={100}
                                height={100}
                                className="h-[14.5rem] w-full"
                            />
                            <div className="mt-4 flex h-[11.8125rem] flex-col justify-between">
                                <p className="text-2xl font-medium">
                                    {post.title}
                                </p>
                                <p className="h-[4.5rem] overflow-hidden text-ellipsis text-base font-normal">
                                    {post.description}
                                </p>
                                <div>
                                    <span className="mr-6">Cộng đồng</span>
                                    <span>15 giờ trước</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mx-auto mt-14 block rounded-xl border-[1px] border-solid border-[#00A9D3] py-4 px-14 text-[#00A9D3]">
                    Xem thêm
                </button>
            </div>
            <div className="mt-[4.75rem] lg:flex-[1_1_30%]">
                <div>
                    <h1 className="text-2xl font-medium">Bài viết hot</h1>
                    <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                        {postHots.map((postHot) => (
                            <div className="mt-11 flex" key={postHot.id}>
                                <Image
                                    src="/images/courses.png"
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    className="mr-4 h-[5.3125rem] w-[9.125rem] rounded-xl md:w-[45%]"
                                />
                                <div>
                                    <h2 className="mb-3 text-base font-normal">
                                        {postHot.title}
                                    </h2>
                                    <div>
                                        <span className="mr-6">Cộng đồng</span>
                                        <span>15 giờ trước</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-[3.75rem] ">
                    <h1 className="mb-9 text-2xl font-medium">Về tác giả</h1>
                    <div className="flex h-[27.375rem] flex-col items-center justify-between border-[1px] border-solid border-[#00A9D3] py-[3.9375rem] px-4">
                        <Image
                            src="/images/courses.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="h-[6.25rem] w-[6.25rem] rounded-[50%] object-cover"
                        />
                        <h1 className="text-xl font-medium">Cikey Tong</h1>
                        <p className="text-base font-normal">
                            Every MLS match to air live on MLS Season Pass, the
                            unprecedented streaming service on the Apple TV app
                            launching February 1
                        </p>
                        <button className="border-[1px] border-solid border-[#00A9D3] py-[0.84375rem] px-[3.375rem] text-base font-normal text-[#00A9D3]">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;
