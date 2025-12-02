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

const AUCTION_IMAGES = [
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
        status: "جاري",
        statusColor: "#1A7A5E"
    }

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
                                    <div className="countdown-segment">
                                        <span className="countdown-number">2</span>
                                    </div>
                                    <span className="countdown-separator">:</span>
                                    <div className="countdown-segment">
                                        <span className="countdown-number">59</span>
                                    </div>
                                    <span className="countdown-separator">:</span>
                                    <div className="countdown-segment">
                                        <span className="countdown-number">59</span>
                                    </div>
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
                    <div className="auction-info-side">
                        <h2 className="auction-details-title">{auctionData.title}</h2>
                        <h3 className="auction-details-subtitle">تفاصيل المزاد</h3>
                        <div className="auction-meta-grid">
                            {/* Duration */}
                            <div className="meta-item">
                                <span className="meta-label">مدة المزاد</span>
                                <span className="meta-value">{auctionData.duration}</span>
                            </div>

                            {/* Start Date */}
                            <div className="meta-item">
                                <span className="meta-label">تاريخ بدء المزاد</span>
                                <span className="meta-value">{auctionData.startDate}</span>
                            </div>

                            {/* End Date */}
                            <div className="meta-item">
                                <span className="meta-label">تاريخ نهاية المزاد</span>
                                <span className="meta-value">{auctionData.endDate}</span>
                            </div>

                            {/* Start Time */}
                            <div className="meta-item">
                                <span className="meta-label">وقت بدء المزاد</span>
                                <span className="meta-value">{auctionData.startTime}</span>
                            </div>

                            {/* Status */}
                            <div className="meta-item">
                                <span className="meta-label">حالة المزاد</span>
                                <div className="status-badge" style={{ backgroundColor: auctionData.statusColor }}>
                                    <span className="status-dot"></span>
                                    <span>{auctionData.status}</span>
                                </div>
                            </div>

                            {/* Initial Price */}
                            <div className="meta-item">
                                <span className="meta-label">القيمة المبدئية للمزاد</span>
                                <span className="meta-value price">₪ {auctionData.currentPrice}</span>
                            </div>
                        </div>

                        {/* Highest Bid Section */}
                        <div className="highest-bid-section">
                            <div className="bid-label">أعلى سعر حالي للمزاد</div>
                            <div className="bid-amount">₪ {auctionData.highestBid}</div>
                        </div>

                        {/* Participation Buttons */}
                        <div className="auction-actions">
                            <button className="participate-btn">الاشتراك بالمزاد</button>
                            <button className="terms-btn">يُرجى عليك الموافقة على الشروط والأحكام</button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}