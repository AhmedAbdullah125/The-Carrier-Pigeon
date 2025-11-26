import React from "react";
import Image from "next/image";
import heroimg from "@/public/images/heroimg.png";

export default function Hero() {
    return (
        <div className="hero">
            <video className="video" autoPlay muted loop playsInline >
                <source src="/images/new.mp4" type="video/mp4" />
                {/* Optional fallback text */}
                متصفحك لا يدعم تشغيل الفيديو
            </video>

            <div className="overlay">
                <div className="container">
                    <div className="overlay-cont">
                        <div className="r-side">
                            <h1>اللجنة السعودية لسباق حمام الزاجل</h1>
                            <p>وفّرنا لكم بيئة رقمية متكاملة تُمكِّنكم من متابعة السباقات، والمشاركة في المزادات، وتسجيل حمامكم وإدارته بموثوقية وأمان، من أي مكان وفي أي وقت</p>
                            <div className="btns-cont">
                                <button className="main-btn">استعرض خدماتنا</button>
                                <button className="sec-btn">تصفح المزادات</button>
                            </div>
                        </div>
                        <div className="l-side">
                            <Image src={heroimg} alt="vid" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
