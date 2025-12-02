import React from "react"
import Image from "next/image"
import Link from "next/link"
import shareIcon from '@/public/images/share.svg'
import SARIcon from '@/public/images/SAR.svg'
import { t } from "@/lib/i18n"
export default function AuctionCard({auction, lang}) {

    return (
        <Link href={`/auction/${auction?.id}`} className="auction-card">
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
                {
                    auction.hint && (
                        <p className="auction-hint">{auction.hint}</p>
                    )
                }
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
                    <div className="pricing-cont">
                        <div className="auction-price">
                            <span>{auction.price}</span>
                            <Image src={SARIcon} alt="SAR" width={20} height={20} />
                        </div>
                        <p className="auction-subtitle">{auction.subtitle}</p>
                    </div>
                    <h3 className="auction-title">{auction.name}</h3>
                </div>

                <p className="auction-description">{auction.description}</p>

                <Link href={`/auctions/${auction?.id}`} className="auction-btn">
                    {t(lang, "view_auction_details")}
                </Link>
            </div>
        </Link>
    )
}
