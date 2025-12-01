'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link';
import React from "react";
import heroimg from "@/public/images/heroimg.png";
import Image from "next/image";
import SARIcon from '@/public/images/SAR.svg';
import SectionHeader from "./SectioHeader";
import shareIcon from '@/public/images/share.svg';
import { t } from "@/lib/i18n";

export default function HomeAuctions({ lang }) {
    const auctions = [
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" }
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" }
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" }
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" }
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            description: t(lang, "auction_description"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" }
        }
    ];

    return (
        <div className="auctions-section">
            <div className="container">
                <SectionHeader
                    title={t(lang, "current_auctions")}
                    description={t(lang, "auctions_description")}
                    link="/auctions"
                    lang={lang}
                />
                <div className="auctions-swiper-container" style={{direction:"ltr"}}>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={3.5}
                        loop={true}
                        autoplay={false}
                        navigation={false}
                        modules={[Autoplay, Navigation, Pagination]}
                        className="auctions-swiper"
                        breakpoints={{
                            1440: {
                                slidesPerView: 3.5,
                            },
                            1024: {
                                slidesPerView: 2.5,
                            },
                            768: {
                                slidesPerView: 2.2,
                            },
                            640: {
                                slidesPerView: 1.3,
                            },
                            120: {
                                slidesPerView: 1.2,
                            }
                        }}>
                        {auctions.map((auction, index) => (
                            <SwiperSlide key={index} className="auction-slide">
                                <div className="auction-card">
                                    <div className="auction-image-container">
                                        <Image
                                            src={auction.image}
                                            alt={auction.name}
                                            width={400}
                                            height={300}
                                            className="auction-image"
                                        />
                                        <button className="share-btn" aria-label={t(lang, "share")}>
                                            <Image src={shareIcon} alt="share" width={20} height={20} />
                                        </button>
                                        <div className="countdown-timer">
                                            <div className="time-unit">
                                                <span className="time-value">{auction.timeLeft.days}</span>
                                            </div>
                                            <span className="time-label">{t(lang, "time_days")}</span>
                                            <span className="time-separator">:</span>
                                            <div className="time-unit">
                                                <span className="time-value">{auction.timeLeft.hours}</span>
                                            </div>
                                            <span className="time-label">{t(lang, "time_hours")}</span>
                                            <span className="time-separator">:</span>
                                            <div className="time-unit">
                                                <span className="time-value">{auction.timeLeft.mins}</span>
                                            </div>
                                            <span className="time-label">{t(lang, "time_minutes")}</span>
                                        </div>
                                        <div className="overlay"></div>
                                    </div>

                                    <div className="auction-content">
                                        <div className="auction-header">
                                            <h3 className="auction-title">{auction.name}</h3>
                                            <div className="pricing-cont">
                                                <div className="auction-price">
                                                    <span>{auction.price}</span>
                                                    <Image src={SARIcon} alt="SAR" width={20} height={20} />
                                                </div>
                                                <p className="auction-subtitle">{auction.subtitle}</p>
                                            </div>
                                        </div>

                                        <p className="auction-description">{auction.description}</p>

                                        <Link href={`/auctions/${index}`} className="auction-btn">
                                            {t(lang, "view_auction_details")}
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}