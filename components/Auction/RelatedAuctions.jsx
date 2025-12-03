'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import heroimg from "@/public/images/heroimg.png";
import { t } from "@/lib/i18n";
import AuctionCard from "../Auctions/AuctionCard";
import SectionHeader from "../Home/SectioHeader";

export default function RelatedAuctions({ lang }) {
    const auctions = [
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            image: heroimg,
            timeLeft: { days: "01", hours: "30", mins: "59" },
            id: 1,
            numberOfBids: 23
        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            image: heroimg,
            timeLeft: { days: "02", hours: "30", mins: "59" },
            id: 2,
            numberOfBids: 23

        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            image: heroimg,
            timeLeft: { days: "03", hours: "30", mins: "59" },
            id: 3,
            numberOfBids: 23

        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            image: heroimg,
            timeLeft: { days: "04", hours: "30", mins: "59" },
            id: 4,
            numberOfBids: 23

        },
        {
            name: t(lang, "auction_name"),
            price: "25,500",
            subtitle: t(lang, "auction_initial_price"),
            image: heroimg,
            timeLeft: { days: "05", hours: "30", mins: "59" },
            id: 5,
            numberOfBids: 23
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
                <div className="auctions-swiper-container" style={{ direction: lang == "ar" ? "rtl" : "ltr" }}>
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
                                <AuctionCard auction={auction} lang={lang} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}