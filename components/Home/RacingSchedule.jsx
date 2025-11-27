import React from "react";
import SectionHeader from "./SectioHeader";
import Image from "next/image";
import cup from "@/public/images/cup.svg";
import location from "@/public/images/location.svg";
import calendar from "@/public/images/calender.svg";
import calenderExpired from "@/public/images/calenderExpired.svg";
import birdsBg from "@/public/images/birdsBg.png";
import { t } from "@/lib/i18n";

export default function RacingSchedule({ lang }) {
    const schedules = [
        {
            title: t(lang, 'race_riyadh_title'),
            city: t(lang, 'city_riyadh'),
            startDate: t(lang, 'race_start_date'),
            endDate: t(lang, 'race_end_date')
        },
        {
            title: t(lang, 'race_riyadh_title'),
            city: t(lang, 'city_riyadh'),
            startDate: t(lang, 'race_start_date'),
            endDate: t(lang, 'race_end_date')
        },
        {
            title: t(lang, 'race_riyadh_title'),
            city: t(lang, 'city_riyadh'),
            startDate: t(lang, 'race_start_date'),
            endDate: t(lang, 'race_end_date')
        },
        {
            title: t(lang, 'race_riyadh_title'),
            city: t(lang, 'city_riyadh'),
            startDate: t(lang, 'race_start_date'),
            endDate: t(lang, 'race_end_date')
        },
        {
            title: t(lang, 'race_riyadh_title'),
            city: t(lang, 'city_riyadh'),
            startDate: t(lang, 'race_start_date'),
            endDate: t(lang, 'race_end_date')
        },
        {
            title: t(lang, 'race_riyadh_title'),
            city: t(lang, 'city_riyadh'),
            startDate: t(lang, 'race_start_date'),
            endDate: t(lang, 'race_end_date')
        },
        {
            title: t(lang, 'race_riyadh_title'),
            city: t(lang, 'city_riyadh'),
            startDate: t(lang, 'race_start_date'),
            endDate: t(lang, 'race_end_date')
        },
        {
            title: t(lang, 'race_riyadh_title'),
            city: t(lang, 'city_riyadh'),
            startDate: t(lang, 'race_start_date'),
            endDate: t(lang, 'race_end_date')
        }
    ];

    return (
        <div className="racing-schedule-section">
            <div className="container">
                <SectionHeader
                    title={t(lang, 'racing_schedule_title')}
                    description={t(lang, 'racing_schedule_description')}
                    link="/racing-schedule"
                    lang={lang}
                />

                <div className="racing-schedule-grid">
                    {schedules.map((schedule, index) => (
                        <div className="" key={index} style={{ backgroundImage: `url(${birdsBg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="racing-schedule-card">
                                <div className="racing-schedule-item">
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