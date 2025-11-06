"use client";
import React, { useState } from "react";
import { marked } from "marked";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

marked.setOptions({
    breaks: false,
});

export default function PrivacyPolicy() {
    const [language, setLanguage] = useState("en");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const languages = [
        { code: "en", name: "English", flag: "🇬🇧" },
        { code: "de", name: "Deutsch", flag: "🇩🇪" }
    ];

    const translations = {
    en: {
        title: "Imprint",
        content: `
### Imprint

VINFERNIA UG (haftungsbeschränkt)& Co.KG  
Blasewitzer Straße 41  
01307 Dresden  
Germany  

#### Contact details  
Email address: VINFERNIA(at)gmail.com  

#### Authorized representatives  
Sandro Pausin  

#### Audiovisual media services as of § 5 Abs. 1 Nr. 8 DDG  
Located in: Germany  

#### Competent regulatory or supervisory authority:  
Sächsiche Landesmedienanstalt https://www.slm-online.de/  

#### Company information  
VAT identification number (VAT ID): DE456458163  

#### Register and registration number  
Handelsregister: Amtsgericht Dresden  
Handelsregisternummer: HRA 12303  

#### Disclaimer and property rights information  
**Links to external websites:** The content of external websites to which we directly or indirectly refer, including those of our artists ("Talents"), is outside our area of responsibility and is not assumed by us. We accept no responsibility for any content or disadvantages arising from the use of the information provided on the linked websites.  

**Notifications of legal violations:** If you become aware of any legal violations on our website, please notify us. We will remove any illegal content and links immediately upon becoming aware of them.
`
    },
    de: {
        title: "Impressum",
        content: `
### Impressum

VINFERNIA UG (haftungsbeschränkt)& Co.KG  
Blasewitzer Straße 41  
01307 Dresden  
Germany  

#### Kontakt  
Email: VINFERNIA(at)gmail.com  

#### Berechtigte Vertreter:  
Sandro Pausin  

#### Audiovisuelle Mediendienste gem. § 5 Abs. 1 Nr. 8 DDG  
Sitzland: Deutschland  

#### Zuständige Regulierungs-, bzw. Aufsichtsbehörde::  
Sächsiche Landesmedienanstalt https://www.slm-online.de/  

#### Angaben zum Unternehmen  
Umsatzsteueridentifikationsnummer (Ust-ID): DE456458163  

#### Register and Registernummer  
Handelsregister: Amtsgericht Dresden  
Handelsregisternummer: HRA 12303  

#### Haftungsausschluss und Schutzrechtshinweise  
**Verlinkungen zu externen Webseiten:** Die Inhalte externer Webseiten, auf die wir direkt oder indirekt verweisen, v.a. die unserer Künstlerinnen und Künstler ("Talents"), liegen außerhalb unseres Verantwortungsbereiches und werden von uns nicht übernommen. Wir übernehmen keine Verantwortung für jegliche Inhalte oder Nachteile, die aus der Nutzung der auf den verlinkten Webseiten bereitgestellten Informationen entstehen.  

**Hinweise auf Rechtsverstöße:** Sollten Sie auf Rechtsverstöße innerhalb unseres Internetauftritts aufmerksam werden, bitten wir Sie, uns dies mitzuteilen. Wir werden rechtswidrige Inhalte und Links nach Bekanntwerden umgehend entfernen.
`
    }
};

    const currentTranslation = translations[language];

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />

            {/* Language Toggle Button with Popup */}
            <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
                <button
                    onClick={() => setIsPopupOpen(!isPopupOpen)}
                    className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                    aria-label="toggle Language popup"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                    </svg>
                </button>

                {/* Language Popup Bubble */}
                {isPopupOpen && (
                    <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-slate-800 rounded-2xl shadow-2xl p-4 min-w-[200px]">
                        {/* Triangle pointer */}
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-slate-800"></div>
                        
                        <div className="space-y-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsPopupOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
                                        language === lang.code
                                            ? "bg-blue-600 text-white shadow-md"
                                            : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                                    }`}
                                >
                                    <span className="text-xl">{lang.flag}</span>
                                    <span className="font-medium text-sm">{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay to close popup when clicking outside */}
            {isPopupOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsPopupOpen(false)}
                />
            )}

            <div className="flex-grow flex items-center justify-center min-h-[90vh] pt-40 pb-40">
                <div className="flex flex-col justify-center items-center w-full px-4 md:px-8">
                    <h1 className="text-2xl font-bold mb-6">{currentTranslation.title}</h1>
                    <div className="prose text-white text-base leading-relaxed max-w-4xl">
                        {currentTranslation.content.split("\n").map((line, index) => {
                            if (line.startsWith("### ")) {
                                return <h3 key={index} className="text-xl font-semibold mt-4">{line.replace("### ", "")}</h3>;
                            } else if (line.startsWith("#### ")) {
                                return <h4 key={index} className="text-lg font-medium mt-3">{line.replace("#### ", "")}</h4>;
                            } else if (line.trim() === "") {
                                return <br key={index} />;
                            } else {
                                return <p key={index}>{line}</p>;
                            }
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );

}