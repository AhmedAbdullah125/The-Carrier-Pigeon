import React from "react";
import reportBg from "@/public/images/reportBg.png";
import jour from "@/public/images/jour.png";
import Image from "next/image";
import pdf from "@/public/images/pdf.svg";
export default function HomeReposts() {
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
                            <h2>التقارير السنوية</h2>
                            <p>اطّلع على التقارير الرسمية السنوية الصادرة عن اللجنة السعودية لسباقات الحمام الزاجل، والتي تتضمن الإنجازات، والإحصائيات، والأنشطة المعتمدة</p>
                            <div className="files-cont">
                                <div className="file-cont">
                                    <Image src={pdf} alt="" width={500} height={500} />
                                    <div className="text">
                                        <h3>التقارير السنوية لعام 2025</h3>
                                        <p>اطّلع على التقارير الرسمية السنوية الصادرة عن اللجنة السعودية</p>
                                        <div className="btn-cont">
                                            <button className="btn-main">تنزيل الملف</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="file-cont">
                                    <Image src={pdf} alt="" width={500} height={500} />
                                    <div className="text">
                                        <h3>التقارير السنوية لعام 2025</h3>
                                        <p>اطّلع على التقارير الرسمية السنوية الصادرة عن اللجنة السعودية</p>
                                        <div className="btn-cont">
                                            <button className="btn-main">تنزيل الملف</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="l-side">
                            <Image src={jour} alt="" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
