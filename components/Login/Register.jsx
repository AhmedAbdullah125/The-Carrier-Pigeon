"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Eye, EyeOff } from "lucide-react"
import { Select, SelectGroup, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import loginImage from "@/public/images/registeration/login.jpg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import flag from "@/public/images/flag.svg"
import Link from "next/link"
import mailIcon from '@/public/images/registeration/mailIcon.svg'
import { useRouter } from "next/navigation"
import termsIcon from '@/public/images/registeration/termsIcon.svg'
import termsArr from '@/public/images/registeration/termsArr.svg'

// Zod validation schema
const loginSchema = z.object({
    phone: z.string().min(1, { message: "رقم الجوال مطلوب" }).regex(/^[0-9]+$/, { message: "يجب أن يحتوي رقم الجوال على أرقام فقط" })
        .min(9, { message: "رقم الجوال يجب أن يكون 9 أرقام على الأقل" }),
    password: z.string().min(1, { message: "كلمة المرور مطلوبة" }).min(6, { message: " يجب أن تحتوي كلمة المرور على أرقام، حروف، ورموز. ولن يُقبل أي تنسيق مخالف" }),
    name: z.string().min(1, { message: "الاسم مطلوب" }).min(2, { message: "يجب ان يكون الاسم من حرفين علي الاقل" }),
    country: z.string().min(1, { message: "البلد مطلوب" }),
    email: z.string().email({ message: "البريد الالكتروني مطلوب" }),
    city: z.string().min(1, { message: "المدينة مطلوبة" }),
    repassword: z.string().min(1, { message: "تأكيد كلمة المرور مطلوب" }).min(6, { message: " يجب أن تحتوي كلمة المرور على أرقام، حروف، ورموز. ولن يُقبل أي تنسيق مخالف" }),
    terms: z.boolean().refine((val) => val === true, {
        message: "يجب الموافقة على الشروط والأحكام"
    })
}).refine((data) => data.password === data.repassword, {
    message: "كلمه المرور غير متطابقه",
    path: ["repassword"],
})
export default function Register({ formData, setFormData, step, setStep, lang }) {
    const [showPassword, setShowPassword] = useState(false)
    const [country, setCountry] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [showTermsModal, setShowTermsModal] = useState(false)

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: formData?.phone || "",
            name: formData?.name || "",
            email: formData?.email || "",
            password: "",
            country: "",
            city: formData?.city || "",
            repassword: "",
            terms: false,
        },
    })

    const onSubmit = (data) => {
        //loading for 2 seconds
        console.log(data);
        setLoading(true)
        setTimeout(() => {
            router.push("/")
            setLoading(false)
        }, 2000)
        setFormData({ ...formData, ...data })
        console.log(formData);

    }

    const countries = [
        {
            "id": 1,
            "name": "السعودية",
            "key": "+966",
            "flag": flag
        },
        {
            "id": 2,
            "name": "مصر",
            "key": "+20",
            "flag": flag
        },
    ]

    return (
        <div className="login-container">
            {/* Terms and Conditions Modal */}
            {showTermsModal && (
                <div className="modal-overlay" onClick={() => setShowTermsModal(false)}>
                    <div className="terms-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="terms-modal-close"
                            onClick={() => setShowTermsModal(false)}
                            type="button"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                        </button>
                        <div className="terms-modal-header-cont">

                            <div className="terms-modal-header">
                                <div className="terms-modal-icon">
                                    <Image src={termsIcon} alt="terms-icon" />
                                </div>
                                <h2 className="terms-modal-title">الشروط والاحكام</h2>
                                <div className="terms-modal-arr">
                                    <Image src={termsArr} alt="terms-icon" />
                                </div>

                            </div>
                        </div>

                        <div className="terms-modal-content">
                            <h3 className="terms-modal-subtitle">الشروط والأحكام</h3>
                            <p className="terms-modal-text">
                                بمشاركتي في هذا المزاد فإنني أقرّ وأوافق على جميع الشروط والأحكام المنظمة له، وأتعهد بأن جميع المزايدات التي أقوم بها عبر المنصة تعتبر ملزمة ولا يحق لي التراجع عنها بعد تسجيلها. كما ألتزم بسداد القيمة النهائية للمزاد في حال فوزي خلال المدة المحددة من قبل الإدارة، وأعلم أن عدم الالتزام قد يترتب عليه إلغاء الفوز وتحويل الحق إلى مزايد آخر. أوافق كذلك على أن تتم جميع المزايدات بشكل إلكتروني عبر المنصة وفق الضوابط المعتمدة لضمان الشفافية وحماية حقوق جميع المشاركين
                            </p>
                        </div>

                        <Button
                            type="button"
                            className="terms-modal-button"
                            onClick={() => {
                                form.setValue('terms', true);
                                setShowTermsModal(false);
                            }}
                        >
                            اوافق علي الشروط والاحكام
                        </Button>
                    </div>
                </div>
            )}
            <div className="login-card">
                <div className="login-grid">
                    {/* Form Section */}
                    <div className="login-form-section">
                        <div className="login-header">
                            <h1 className="login-title"> إنشاء حساب </h1>
                            <p className="login-subtitle">انشئ حسابك الان وابدا باستخدام خدمتنا .</p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="login-form">

                                {/* Name Field */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-password">
                                            <FormLabel className="password-label"> الاسم كامل </FormLabel>
                                            <FormControl >
                                                <div className={`password-input-wrapper ${form.formState.errors.name ? 'error-password' : form.formState.isDirty && field.value ? 'success-password' : ''}`}>
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        placeholder="الاسم كامل"
                                                        className="password-input name-input"
                                                        dir="rtl"
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage className="password-error" />
                                        </FormItem>
                                    )}
                                />
                                {/* Phone Number Field */}
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-mobile">
                                            <FormLabel className="password-label">
                                                رقم الجوال
                                            </FormLabel>
                                            <FormControl>
                                                <div className={`input-of-mobile-num ${form.formState.errors.phone || form.formState.errors.country
                                                    ? 'error-mob-input'
                                                    : form.formState.isDirty && (field.value && country && !form.formState.errors.phone && !form.formState.errors.country)
                                                        ? 'success-mob-input'
                                                        : ''
                                                    }`}>
                                                    <div className="country-select">
                                                        <FormField
                                                            control={form.control}
                                                            name="country"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Select
                                                                            value={field.value}
                                                                            onValueChange={(value) => {
                                                                                setCountry(value);
                                                                                field.onChange(value);
                                                                            }}
                                                                        >
                                                                            <SelectTrigger className="country-select-trigger ">
                                                                                <SelectValue placeholder={lang === 'ar' ? 'البلد' : 'Country'} />
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                <SelectGroup>
                                                                                    {countries?.map((item, index) => (
                                                                                        <SelectItem value={item.key} key={index}>
                                                                                            <div className="code-country-slug-cont">
                                                                                                <div className="select-country-item-cont">
                                                                                                    <Image
                                                                                                        src={item.flag}
                                                                                                        alt={item.name}
                                                                                                        width={20}
                                                                                                        height={20}
                                                                                                        className="country-flag"
                                                                                                    />
                                                                                                </div>
                                                                                                <p>({item.key})</p>
                                                                                            </div>
                                                                                        </SelectItem>
                                                                                    ))}
                                                                                </SelectGroup>
                                                                            </SelectContent>
                                                                        </Select>
                                                                    </FormControl>
                                                                    <FormMessage className="hidden" id="country-error" />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <Input
                                                        type="tel"
                                                        className="phone-input"
                                                        style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                                                        placeholder={lang === 'ar' ? 'أدخل رقم هاتفك' : 'Enter Your Phone'}
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <div className="flex items-center justify-between">
                                                <FormMessage id="phone-error" />
                                                {
                                                    form.formState.errors.country && (
                                                        <p className="country-error">{form.formState.errors.country?.message}</p>
                                                    )
                                                }
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-password">
                                            <FormLabel className="password-label">البريد الالكتروني</FormLabel>
                                            <FormControl >
                                                <div className={`password-input-wrapper ${form.formState.errors.email ? 'error-password' : form.formState.isDirty && field.value ? 'success-password' : ''}`}>
                                                    <Input
                                                        {...field}
                                                        type="text"
                                                        placeholder="البريد الالكتروني"
                                                        className="password-input name-input"
                                                        dir="rtl"
                                                    />
                                                    <div className="field-icon">
                                                        <Image className="eye-icon" src={mailIcon} alt="mailIcon" />
                                                    </div>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="password-error" />
                                        </FormItem>
                                    )}
                                />
                                {/* City Field */}
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-mobile">
                                            <FormLabel className="password-label">
                                                قم بتحديد المدينه
                                            </FormLabel>
                                            <FormControl>
                                                <div className={`input-of-mobile-num ${form.formState.errors.city || form.formState.errors.country
                                                    ? 'error-mob-input'
                                                    : form.formState.isDirty && (field.value && country && !form.formState.errors.city && !form.formState.errors.country)
                                                        ? 'success-mob-input'
                                                        : ''
                                                    }`}>
                                                    <div className="country-select">
                                                        <FormField
                                                            control={form.control}
                                                            name="country"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Select
                                                                            value={field.value}
                                                                            onValueChange={(value) => {
                                                                                setCountry(value);
                                                                                field.onChange(value);
                                                                            }}
                                                                        >
                                                                            <SelectTrigger className="country-select-trigger country-select-trigger-city">
                                                                                <SelectValue placeholder={lang === 'ar' ? 'البلد' : 'Country'} />
                                                                            </SelectTrigger>
                                                                            <SelectContent>
                                                                                <SelectGroup>
                                                                                    {countries?.map((item, index) => (
                                                                                        <SelectItem value={item.key} key={index}>
                                                                                            <div className="code-country-slug-cont">
                                                                                                <div className="select-country-item-cont">
                                                                                                    <Image
                                                                                                        src={item.flag}
                                                                                                        alt={item.name}
                                                                                                        width={20}
                                                                                                        height={20}
                                                                                                        className="country-flag"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </SelectItem>
                                                                                    ))}
                                                                                </SelectGroup>
                                                                            </SelectContent>
                                                                        </Select>
                                                                    </FormControl>
                                                                    <FormMessage className="hidden" id="country-error" />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <Input
                                                        type="text"
                                                        className="phone-input"
                                                        style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
                                                        placeholder={lang === 'ar' ? 'قم بتحديد المدينه ' : 'Enter Your City Name'}
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            <div className="flex items-center justify-between">
                                                <FormMessage id="phone-error" />
                                                {
                                                    form.formState.errors.country && (
                                                        <p className="country-error">{form.formState.errors.country?.message}</p>
                                                    )
                                                }
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                {/* Password Field */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-password">
                                            <FormLabel className="password-label">
                                                كلمة المرور
                                            </FormLabel>
                                            <FormControl >
                                                <div className={`password-input-wrapper ${form.formState.errors.password ? 'error-password' : form.formState.isDirty && field.value ? 'success-password' : ''}`}>
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="كلمة المرور"
                                                        className="password-input"
                                                        dir="rtl"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="field-icon"
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="eye-icon" />
                                                        ) : (
                                                            <Eye className="eye-icon" />
                                                        )}
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="password-error" />
                                        </FormItem>
                                    )}
                                />
                                {/* RePassword Field */}
                                <FormField
                                    control={form.control}
                                    name="repassword"
                                    render={({ field }) => (
                                        <FormItem className="from-input-wrapper-password">
                                            <FormLabel className="password-label">
                                                تأكيد كلمة المرور
                                            </FormLabel>
                                            <FormControl >
                                                <div className={`password-input-wrapper ${form.formState.errors.password ? 'error-password' : form.formState.isDirty && field.value ? 'success-password' : ''}`}>
                                                    <Input
                                                        {...field}
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="كلمة المرور"
                                                        className="password-input"
                                                        dir="rtl"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="field-icon"
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="eye-icon" />
                                                        ) : (
                                                            <Eye className="eye-icon" />
                                                        )}
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage className="password-error" />
                                        </FormItem>
                                    )}
                                />
                                {/* Terms and Conditions Checkbox */}
                                <FormField
                                    control={form.control}
                                    name="terms"
                                    render={({ field }) => (
                                        <FormItem className="terms-checkbox-wrapper">
                                            <div className="terms-checkbox-container">
                                                <FormControl>
                                                    <input
                                                        type="checkbox"
                                                        checked={field.value}
                                                        onChange={field.onChange}
                                                        className="terms-checkbox"
                                                        id="terms"
                                                    />
                                                </FormControl>
                                                <label htmlFor="terms" className="terms-label">
                                                    موافق على <button type="button" onClick={(e) => { e.preventDefault(); setShowTermsModal(true) }} className="terms-link">الشروط والأحكام</button>
                                                </label>
                                            </div>
                                            <FormMessage className="terms-error" />
                                        </FormItem>
                                    )}
                                />

                                {/* Submit Button */}
                                <Button type="submit" className="submit-btn" disabled={!form.formState.isValid || !form.formState.isDirty} >
                                    {
                                        loading ? (
                                            <span className="loader-btn"></span>
                                        ) : (
                                            <span>تسجيل الدخول</span>
                                        )
                                    }
                                </Button>
                            </form>
                        </Form>


                    </div>

                    {/* Image Section */}
                    <div className="login-image-section">
                        <Image
                            src={loginImage}
                            alt="login"
                            fill
                            className="login-image"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}