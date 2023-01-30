import Image from 'next/image';
import React from 'react';

function Banner() {
    return (
        <div className="w-full">
            <Image
                src="/images/banner.jpg"
                alt="Banner"
                height={100}
                width={100}
                className="h-96 w-auto"
            />
        </div>
    );
}

export default Banner;
