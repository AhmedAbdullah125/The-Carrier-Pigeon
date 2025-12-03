'use client'
import React, { useState } from "react"
import Image from "next/image"
import { t } from "@/lib/i18n"
import FancyboxWrapper from "../ui/FancyboxWrapper"
import { Eye } from "lucide-react"
// Import sample images (you can replace with actual auction images)
import img9 from "@/public/images/birds/9.jpg"
import img10 from "@/public/images/birds/10.png"
import img11 from "@/public/images/birds/11.jpg"
import img12 from "@/public/images/birds/12.jpg"
import img13 from "@/public/images/birds/13.png"
import img14 from "@/public/images/birds/14.png"
import img15 from "@/public/images/birds/15.png"
import whiteRial from "@/public/images/SARwhite.svg"
import GreenRial from '@/public/images/SARMain.svg'
import check from '@/public/images/check.svg'
import { Button } from "../ui/button"

const AUCTION_IMAGES = [
    { id: 6, img: img14 },
    { id: 7, img: img15 },
    { id: 1, img: img9 },
    { id: 2, img: img10 },
    { id: 3, img: img11 },
    { id: 4, img: img12 },
    { id: 5, img: img13 },
]

export default function AuctionDetails({ lang }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeImage = AUCTION_IMAGES[activeIndex]

    // Sample auction data
    const auctionData = {
        title: "مزاد رسمي لبيع حمام زاجل أصيل بسجلات سباق موثقة، مع صور وتفاصيل دقيقة. المزايدة تبدأ بقيمة ابتدائية محددة وتستمر لوقت محدود عبر المنصة الإلكترونية",
        duration: "3 أيام",
        startDate: "20/10/2025",
        endDate: "18/10/2025",
        startTime: "22:25 صباحًا",
        currentPrice: "3500",
        highestBid: "15000",
        status: "soon",
        status_text: "جاري"

    }
    const [agreement, setAgreement] = useState(false)
    return (
        <div className="auction-details">
            <div className="container">
                <div className="auction-details-cont">
                    {/* Right Side - Image Gallery */}
                    <div className="auction-gallery-side">
                        {/* Main Image with Countdown */}
                        <div className="main-image-container">
                            <FancyboxWrapper>
                                <a
                                    data-fancybox="auction-gallery"
                                    href={activeImage.img.src}
                                    className="main-auction-image-link"
                                >
                                    <Image
                                        src={activeImage.img}
                                        alt="Auction Pigeon"
                                        className="main-auction-image"
                                        width={800}
                                        height={600}
                                    />
                                </a>

                                {/* Hidden links for gallery */}
                                {AUCTION_IMAGES.map((item, indx) =>
                                    indx === activeIndex ? null : (
                                        <a
                                            key={item.id}
                                            data-fancybox="auction-gallery"
                                            href={item.img.src}
                                            className="hidden-fancybox-link"
                                        />
                                    )
                                )}
                            </FancyboxWrapper>

                            {/* Countdown Timer Overlay */}
                            <div className="auction-countdown-overlay">
                                <div className="countdown-display">
                                    <span className="countdown-number">59</span>
                                    <span className="countdown-separator">:</span>
                                    <span className="countdown-number">59</span>
                                    <span className="countdown-separator">:</span>
                                    <span className="countdown-number">2</span>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnail Grid */}
                        <div className="thumbs-row">
                            {AUCTION_IMAGES.map((item, idx) => (
                                <div
                                    key={item.id}
                                    className={`auction-detail-thumb ${idx === activeIndex ? "active" : ""}`}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    <Image
                                        src={item.img}
                                        alt={`Thumbnail ${item.id}`}
                                        className="thumb-image"
                                        width={200}
                                        height={150}
                                    />
                                    {idx === 3 && (
                                        <div className="thumb-eye-overlay">
                                            <FancyboxWrapper>
                                                <a
                                                    data-fancybox="auction-gallery"
                                                    href={item.img.src}
                                                    className="thumb-eye-link"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <div className="thumb-eye-icon">
                                                        <Eye size={20} color="white" />
                                                    </div>
                                                </a>
                                            </FancyboxWrapper>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Side - Auction Info */}
                    <div className="l-side">
                        <div className="auction-info-side">
                            <h2 className="auction-details-title">{auctionData.title}</h2>
                            <h3 className="auction-details-subtitle">{t(lang, "auction_details_subtitle")}</h3>
                            <div className="auction-meta-grid">
                                {/* End Date */}
                                <div className="meta-item">
                                    <span className="meta-label">{t(lang, "auction_start_date")}</span>
                                    <span className="meta-value">{auctionData.endDate}</span>
                                </div>

                                {/* Start Date */}
                                <div className="meta-item">
                                    <span className="meta-label">{t(lang, "auction_end_date")}</span>
                                    <span className="meta-value">{auctionData.startDate}</span>
                                </div>

                                <div className="meta-item">
                                    <span className="meta-label">{t(lang, "auction_duration")}</span>
                                    <span className="meta-value">{auctionData.duration}</span>
                                </div>

                                {/* Start Time */}
                                <div className="meta-item">
                                    <span className="meta-label">{t(lang, "auction_start_time")}</span>
                                    <span className="meta-value">{auctionData.startTime}</span>
                                </div>

                                {/* Initial Price */}
                                <div className="meta-item">
                                    <span className="meta-label">{t(lang, "auction_initial_value")}</span>
                                    <p className="meta-value price">{auctionData.currentPrice} <Image src={whiteRial} alt="Zagel" /> </p>
                                </div>
                                {/* Status */}
                                <div className="meta-item">
                                    <span className="meta-label">{t(lang, "auction_status")}</span>
                                    <div className={`status-badge ${auctionData.status}`}>
                                        <span>{t(lang, "auction_status_ongoing")}</span>
                                        <span className="status-dot"></span>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="auction-info-side lower-part">
                            <div className="price-cont">
                                <div className="total-price">
                                    <span className="acc-price">15000</span>
                                    <Image src={GreenRial} alt="Rial" />
                                </div>
                                <h5>{t(lang, "auction_current_price")}</h5>
                            </div>
                            <div className="down">
                                <h4>{t(lang, "auction_subscribe")}</h4>
                                <Button className="subscribe-btn" disabled={!agreement}>{t(lang, "auction_subscribe")}</Button>
                                <div className="agreement-cont" onClick={() => {
                                    setAgreement(!agreement)
                                }}>
                                    <div className={`check-cont ${agreement ? "checked" : ""}`}>
                                        {
                                            agreement ? <Image src={check} alt="zagel" /> : null
                                        }
                                    </div>
                                    <p>{t(lang, "auction_terms_agreement")}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}