import React from "react";
import birdsBg from "@/public/images/birdsBg.png";
import hummer from "@/public/images/hummer.gif";
import Image from "next/image";


export default function AuctionBirdDitails({ lang }) {

    const strongDetails = [
        { id: 1, title: "اسم الحمامه", description: "SA123-2023" },
        { id: 2, title: "رقم الخاتم الرسمي", description: "548972-KSA" },
        { id: 3, title: "الجنس", description: "ذكر" },
        { id: 4, title: "سنة الميلاد", description: "2023" },
        { id: 5, title: "السلالة", description: "بلجيكية أصلية" },
        { id: 6, title: "المكان", description: "الرياض . السعودية" },
    ]
    const achivements = [
        { id: 1, title: "المركز الأول - البطولة الوطنية 2023", description: "سباق 500 كيلومتر بمشاركة 1200 مشارك" },
        { id: 2, title: "المركز الثاني - كأس المنطقة 2023", description: "سباق 500 كيلومتر بمشاركة 1200 مشارك" },
        { id: 3, title: "المركز الثاني - كأس المنطقة 2023", description: "سباق 500 كيلومتر بمشاركة 1200 مشارك" },
        { id: 4, title: "حامل سجل السرعة", description: "سباق 500 كيلومتر بمشاركة 1200 مشارك" },

    ]
    const birdFamily = {
        grandfather: {
            title: "تفاصيل الجد",
            details: [
                { label: "اسم الجد", value: "إيراندو" },
                { label: "رقم الخاتم", value: "AU-2018" },
                { label: "الإنجازات", value: "بطل أولمبي" }
            ]
        },
        grandmother: {
            title: "تفاصيل الجدة",
            details: [
                { label: "اسم الجدة", value: "ملكة العاصفة" },
                { label: "رقم الخاتم", value: "RPRC-1876" },
                { label: "الإنجازات", value: "بطل أقليمي" }
            ]
        },
        father: {
            title: "تفاصيل الأب",
            details: [
                { label: "اسم الأب", value: "الصقر الذهبي" },
                { label: "رقم الخاتم", value: "RPRC-1876" },
                { label: "الإنجازات", value: "بطل إقليمي" }
            ]
        },
        mother: {
            title: "تفاصيل الأم",
            details: [
                { label: "اسم الجد", value: "النوازة" },
                { label: "رقم الخاتم", value: "RPRC-1876" },
                { label: "الإنجازات", value: "بطل إقليمي" }
            ]
        }
    };
    const auctionStarted = false;
    return (
        <div className="auction-bird-ditails">
            <div className="container">
                <div className="auction-bird-ditails-content">
                    <div className="stron-dets">

                        <div className="card">
                            <h3 className="card-title">تفاصيل الحمامه</h3>
                            <div className="card-body">
                                {
                                    strongDetails.map((item) =>
                                        <div className="item" key={item.id}>
                                            <h4 className="item-title">{item.title}</h4>
                                            <p className="item-value">{item.description}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="card bird-achivements">
                            <h3 className="card-title">إنجازات الحمامة</h3>
                            <div className="card-body">
                                {
                                    achivements.map((item) =>
                                        <div className="item" key={item.id}>
                                            <h4 className="item-title">{item.title}</h4>
                                            <p className="item-value">{item.description}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="stron-dets">
                        <div className={`card family-tree ${auctionStarted ? "started" : "not-started"}`}>
                            <h3 className="card-title">معلومات النسب</h3>
                            <div className="card-body">
                                {Object.entries(birdFamily).map(([key, family]) => (
                                    <div key={key} className="item">
                                        <h4 className="item-title">{family.title}</h4>
                                        <div className="detss-cont">
                                            {family.details.map((detail, idx) => (
                                                <div key={idx} className="detail-cont">
                                                    <span className="detail-label">{detail.label}</span>
                                                    <span className="detail-value">{detail.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {
                            auctionStarted ? null :
                                <div className="card non-padding" style={{ backgroundImage: `url(${birdsBg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                                    <div className="non-padding-cont">
                                        <Image src={hummer.src} alt="hummer" width={500} height={500} />
                                        <h5>لم يبداء المزاد بعد</h5>
                                        <p>ستظهر جميع المزايدات هنا عند بدء المزايدات</p>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
