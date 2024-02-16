import Image from 'next/image'
import React from 'react'

export default function Carousel() {
    return (
        <div className="carousel w-[60%] h-[30rem]">
            <div id="slide1" className="carousel-item relative w-full">
                <Image src="/image/act1.png" className="w-full object-contain"
                    height={500}
                    width={500}
                    alt='image'
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <Image src="/image/act2.jpg" className="w-full object-contain"
                    height={500}
                    width={500}
                    alt='image'
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <Image src="/image/thumbnail.png" className="w-full object-contain"
                    height={500}
                    width={500}
                    alt='image'
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <Image src="/image/thumbnail.png" className="w-full object-contain"
                    height={500}
                    width={500}
                    alt='image'
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}
