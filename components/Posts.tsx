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
        <div className="flex flex-col bg-[#F3F3F3] px-4 pt-6 pb-[3.75rem] lg:flex-row">
            <div className="lg:flex-[1_1_60%]">
                {posts.map((post) => (
                    <div key={post.id} className="mt-9">
                        <Image
                            src="/images/courses.png"
                            alt="logo"
                            width={100}
                            height={100}
                            className="h-[14.5rem] w-full"
                        />
                        <div className="mt-4 flex h-[11.8125rem] flex-col justify-between">
                            <p className="text-2xl font-medium">{post.title}</p>
                            <p className="h-[4.5rem] overflow-hidden text-ellipsis text-base font-normal">
                                {post.description}
                            </p>
                            <div>
                                <span>Cộng đồng</span>
                                <span>15 giờ trước</span>
                            </div>
                        </div>
                    </div>
                ))}
                <button className="mx-auto mt-14 block rounded-xl border-[1px] border-solid border-[#00A9D3] py-4 px-14 text-[#00A9D3]">
                    Xem thêm
                </button>
            </div>
            <div className="mt-[4.75rem] lg:flex-[1_1_30%]">
                <h1 className="text-2xl font-medium">Bài viết hot</h1>
                <div className="mt-9 flex h-[25.625rem] flex-col justify-between">
                    {postHots.map((postHot) => (
                        <div className="flex" key={postHot.id}>
                            <Image
                                src="/images/courses.png"
                                alt="logo"
                                width={100}
                                height={100}
                                className="h-[5.3125rem] w-[9.125rem]"
                            />
                            <div>
                                <h2>{postHot.title}</h2>
                                <div>
                                    <span>Cộng đồng</span>
                                    <span>15 giờ trước</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Posts;
