import React from "react";
import SectionHeader from "./SectioHeader";
import Image from "next/image";
import cup from "@/public/images/cup.svg";
import location from "@/public/images/location.svg";
import calendar from "@/public/images/calender.svg";
import calenderExpired from "@/public/images/calenderExpired.svg";
import birdsBg from "@/public/images/birdsBg.png";
export default function RacingSchedule() {
    const schedules = [
        {
            title: "بطوله الرياض لسباقات الحمام الزاجل",
            city: "مدينه الرياض",
            startDate: "الخميس 15 ابريل",
            endDate: "الاثنين 20 ابريل 2025"
        },
        {
            title: "بطوله الرياض لسباقات الحمام الزاجل",
            city: "مدينه الرياض",
            startDate: "الخميس 15 ابريل",
            endDate: "الاثنين 20 ابريل 2025"
        },
        {
            title: "بطوله الرياض لسباقات الحمام الزاجل",
            city: "مدينه الرياض",
            startDate: "الخميس 15 ابريل",
            endDate: "الاثنين 20 ابريل 2025"
        },
        {
            title: "بطوله الرياض لسباقات الحمام الزاجل",
            city: "مدينه الرياض",
            startDate: "الخميس 15 ابريل",
            endDate: "الاثنين 20 ابريل 2025"
        },
        {
            title: "بطوله الرياض لسباقات الحمام الزاجل",
            city: "مدينه الرياض",
            startDate: "الخميس 15 ابريل",
            endDate: "الاثنين 20 ابريل 2025"
        },
        {
            title: "بطوله الرياض لسباقات الحمام الزاجل",
            city: "مدينه الرياض",
            startDate: "الخميس 15 ابريل",
            endDate: "الاثنين 20 ابريل 2025"
        },
        {
            title: "بطوله الرياض لسباقات الحمام الزاجل",
            city: "مدينه الرياض",
            startDate: "الخميس 15 ابريل",
            endDate: "الاثنين 20 ابريل 2025"
        },
        {
            title: "بطوله الرياض لسباقات الحمام الزاجل",
            city: "مدينه الرياض",
            startDate: "الخميس 15 ابريل",
            endDate: "الاثنين 20 ابريل 2025"
        }
    ];

    return (
        <div className="racing-schedule-section">
            <div className="container">
                <SectionHeader
                    title="البرنامج الزمني لسباقات الحمام الزاجل"
                    description="تابع الجدول الزمني لسباقات الحمام الزاجل وكن أول من يعرف محطات التحدي القادمة في مدن المملكة."
                    link="/racing-schedule"
                />

                <div className="racing-schedule-grid">
                    {schedules.map((schedule, index) => (
                        <div className="" style={{ backgroundImage: `url(${birdsBg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div key={index} className="racing-schedule-card" >
                                <div className="racing-schedule-item" >
                                    <div className="racing-schedule-icon">
                                        <Image src={cup} alt="trophy" width={24} height={24} />
                                    </div>
                                    <span className="racing-schedule-text">{schedule.title}</span>
                                </div>

                                <div className="racing-schedule-item">
                                    <div className="racing-schedule-icon">
                                        <Image src={location} alt="location" width={24} height={24} />
                                    </div>
                                    <span className="racing-schedule-text">{schedule.city}</span>
                                </div>

                                <div className="racing-schedule-item">
                                    <div className="racing-schedule-icon">
                                        <Image src={calendar} alt="calendar" width={24} height={24} />
                                    </div>
                                    <span className="racing-schedule-text">{schedule.startDate}</span>
                                </div>

                                <div className="racing-schedule-item">
                                    <div className="racing-schedule-icon">
                                        <Image src={calenderExpired} alt="calendar expired" width={24} height={24} />
                                    </div>
                                    <span className="racing-schedule-text">{schedule.endDate}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}