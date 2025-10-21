"use client";
import React, { useState } from "react";
import { marked } from "marked";

marked.setOptions({
  breaks: false,
});
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function PrivacyPolicy() {

  const [language, setLanguage] = useState("en");

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
**Links to external websites:** The content of external websites to which we directly or indirectly refer, including those of our artists (“Talents”), is outside our area of responsibility and is not assumed by us. We accept no responsibility for any content or disadvantages arising from the use of the information provided on the linked websites.  

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
    <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-grow flex items-center justify-center min-h-[90vh] pt-40 pb-40">
            <div className="flex flex-col justify-center items-center w-full px-4 md:px-8">
                <button
                    onClick={() => setLanguage(language === "en" ? "de" : "en")}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition mb-4"
                >
                    {language === "en" ? "Deutsch" : "English"}
                </button>
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
