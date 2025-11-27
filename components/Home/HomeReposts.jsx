import React from "react";
import reportBg from "@/public/images/reportBg.png";
import jour from "@/public/images/jour.png";
import Image from "next/image";
import pdf from "@/public/images/pdf.svg";
import { t } from "@/lib/i18n";

export default function HomeReposts({ lang }) {
    return (
        <div className="home-report">
            <div className="container">
                <div className="reports-sec-cont">
                    <div className="bg-cont">
                        <Image src={reportBg} alt="" width={500} height={500} />
                        <Image src={reportBg} alt="" width={500} height={500} />
                        <Image src={reportBg} alt="" width={500} height={500} />
                    </div>
                    <div className="overlay">
                        <div className="r-side">
                            <h2>{t(lang, 'annual_reports')}</h2>
                            <p>{t(lang, 'annual_reports_description')}</p>
                            <div className="files-cont">
                                <div className="file-cont">
                                    <Image src={pdf} alt="" width={500} height={500} />
                                    <div className="text">
                                        <h3>{t(lang, 'annual_report_2025')}</h3>
                                        <p>{t(lang, 'annual_report_description_short')}</p>
                                        <div className="btn-cont">
                                            <button className="btn-main">{t(lang, 'download_file')}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-cont">
                                    <Image src={pdf} alt="" width={500} height={500} />
                                    <div className="text">
                                        <h3>{t(lang, 'annual_report_2025')}</h3>
                                        <p>{t(lang, 'annual_report_description_short')}</p>
                                        <div className="btn-cont">
                                            <button className="btn-main">{t(lang, 'download_file')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-side">
                                                        <Image src={jour} alt="" width={500} height={500} className={lang == "ar" ? "jour-img" : "jour-img-rtl"} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}