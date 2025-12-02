"use client"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useState } from "react"
import Image from "next/image"
import { t } from "@/lib/i18n"
import FancyboxWrapper from "../ui/FancyboxWrapper"
import img9 from "@/public/images/birds/9.jpg"
import img10 from "@/public/images/birds/10.png"
import img11 from "@/public/images/birds/11.jpg"
import img12 from "@/public/images/birds/12.jpg"
import img13 from "@/public/images/birds/13.png"
import eyeIcon from "@/public/images/birds/eyeIcon.svg"

const IMAGES = [
    { id: 1, img: img9 },
    { id: 2, img: img10 },
    { id: 3, img: img11 },
    { id: 4, img: img12 },
    { id: 5, img: img13 },
]

export default function AuctionsHero({ lang }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeImage = IMAGES[activeIndex]

    return (
        <div className="hero auctions-hero">
            <video className="video" autoPlay muted loop playsInline>
                <source src="/images/new.mp4" type="video/mp4" />
                {t(lang, "video_not_supported")}
            </video>
            <div className="overlay">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={3.5}
                    loop={true}
                    pagination={true}
                    autoplay={false}
                    navigation={false}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="auctions-swiper"
                    breakpoints={{
                        1440: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        120: {
                            slidesPerView: 1,
                        }
                    }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SwiperSlide key={index} className="auction-slide">

                            <div className="container" key={index}>
                                <div className="overlay-cont">
                                    {/* Right – text */}
                                    <div className="r-side">
                                        <h1>{t(lang, "auctions_hero_title")}</h1>
                                        <p>{t(lang, "auctions_hero_description")}</p>
                                    </div>

                                    {/* Left – main image + thumbnails */}
                                    <div className="l-side">
                                        {/* Main image + Fancybox group */}
                                        <FancyboxWrapper>
                                            {/* visible main image */}
                                            <a data-fancybox={`auction-hero-${index}`} href={activeImage.img.src} className="main-auction-img">
                                                <Image src={activeImage.img} alt="auction pigeon" className="img-fluid" />
                                            </a>
                                            {/* hidden anchors so Fancybox can scroll through all images */}
                                            {IMAGES.map((item, indx) =>
                                                indx === activeIndex ? null : (
                                                    <a key={item.id} data-fancybox={`auction-hero-${index}`} href={item.img.src} className="hidden-fancybox-link" />
                                                )
                                            )}
                                        </FancyboxWrapper>

                                        {/* Thumbnails row */}
                                        <div className="thumbs-row">
                                            {IMAGES.map((item, idx) => (
                                                <div key={item.id} className={`auction-thumb ${index === activeIndex ? "active" : ""}`} onClick={() => setActiveIndex(idx)}>
                                                    <Image src={item.img} alt={`thumb-${item.id}`} className="thumb-img" />
                                                    {
                                                        idx == 3 &&
                                                        <div className="thumbs-eye">
                                                            <FancyboxWrapper>
                                                                <a
                                                                    data-fancybox={`auction-hero-${index}`}
                                                                    href={item.img.src}
                                                                    data-thumb={item.img.src}
                                                                    className="thumbs-eye-link"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                    }}
                                                                >
                                                                    <div className="thumbs-eye-cont">
                                                                        <Image src={eyeIcon} alt="eye icon" width={22} height={22} />
                                                                    </div>
                                                                </a>
                                                            </FancyboxWrapper>
                                                        </div>
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
