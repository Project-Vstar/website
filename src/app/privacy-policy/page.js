"use client";
import React, { useState } from "react";
import { marked } from "marked";

marked.setOptions({
  breaks: false,
});
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";

export default function PrivacyPolicy() {

  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      title: "Privacy Policy",
      content: `
### VINFERNIA UG & Co. KG Privacy Policy

VINFERNIA UG & Co. KG (hereinafter “we/us/our”) values the privacy of the users of its website and services (the “User” or “you”). Any personal information you may provide to the website shall be managed in accordance with this policy.

### Privacy in General

#### General Information
The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is all data that can be used to identify you personally. Detailed information on data protection can be found in our privacy policy listed below this text.

#### Data Collection on This Website
Data processing on this website is carried out by the website operator. You can find their contact details in the "Information on the Responsible Party" section of this privacy policy.

- **Your data is collected** when you provide it to us, e.g., data you enter into a contact form.
- **Other data is collected automatically** or with your consent when you visit the website by our IT systems, such as technical data (e.g., internet browser, operating system, or time of page access).

Some of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior.

#### Your Rights
You have the right to:
- Obtain information about the origin, recipient, and purpose of your stored personal data free of charge at any time.
- Request the correction or deletion of this data.
- Revoke your consent to data processing at any time with effect for the future.
- Request the restriction of the processing of your personal data under certain circumstances.
- Lodge a complaint with the responsible supervisory authority.

You can contact us at any time with regard to this and other questions regarding data protection.

### Hosting

#### External Hosting
This website is hosted externally. The personal data collected on this website is stored on the servers of the host(s). This may include:
- IP addresses
- Contact requests
- Meta and communication data
- Contract data
- Contact details
- Names
- Website access
- Other data generated via a website

External hosting is carried out for the purpose of fulfilling our contract with our potential and existing customers (Art. 6 (1) (b) GDPR) and in the interest of ensuring the secure, fast, and efficient provision of our online offering by a professional provider (Art. 6 (1) (f) GDPR). If consent has been requested, processing is carried out exclusively on the basis of Art. 6 (1) (a) GDPR.

#### Data Processing
We have entered into a data processing agreement (DPA) for the use of the above-mentioned service. This guarantees that the personal data of our website visitors will only be processed in accordance with our instructions and in compliance with the GDPR.

### General Information and Mandatory Information

#### Privacy
The operators of these websites take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.

#### Note on the Responsible Body
The responsible body for data processing on this website is:
VINFENRIA UG (haftungsbeschränkt) & Co.KG  
Blasewitzer Straße 41  
01307 Dresden  
Deutschland  
Mail: vinfernia@gmail.com

The responsible body is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data.

#### Storage Period
Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies.

#### General Information on the Legal Basis for Data Processing
If you have consented to data processing, we will process your personal data on the basis of Art. 6 (1) (a) GDPR. Other legal bases include Art. 6 (1) (b), (c), or (f) GDPR, depending on the specific case.

#### Recipients of Personal Data
We only pass on personal data to external parties if necessary to fulfill a contract, if legally required, or if we have a legitimate interest in the transfer.

#### Revocation of Your Consent to Data Processing
You can revoke your consent at any time. The legality of the data processing carried out up to the time of revocation remains unaffected.

#### Right to Object to Data Collection
You have the right to object to the processing of your personal data at any time for reasons related to your particular situation.

#### Right to Lodge a Complaint
In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority.

#### Right to Data Portability
You have the right to have data that we process automatically based on your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format.

#### Information, Correction, and Deletion
You have the right at any time to obtain free information about your stored personal data, its origin and recipient, and the purpose of data processing, as well as the right to have this data corrected or deleted.

#### SSL or TLS Encryption
This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content.

### Data Collection on This Website

#### Server-Log-Data
The website provider automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These include:
- Browser type and version
- Operating system used
- Referrer URL
- Hostname of the accessing computer
- Time of the server request
- IP address

This data is collected on the basis of Art. 6 (1) (f) GDPR.
`
    },
    de: {
      title: "Datenschutzrichtlinie",
      content: `
### Datenschutz­erklärung DE

VINFERNIA UG & Co. KG (hiernach “wir/uns/unser” genannt) legt einen hohen Stellenwert auf die Privatsphäre der User dieser Website und unserer Dienste (die “User” oder “Du”). Alle persönlichen Informationen die du der Website zur Verfügung stellst, werden gemäß dieser Erklärung behandelt.

---

### Datenschutz auf einen Blick

#### Allgemeine Hinweise
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.

#### Datenerfassung auf dieser Website
Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.

- **Ihre Daten werden erhoben**, wenn Sie uns diese mitteilen, z. B. Daten, die Sie in ein Kontaktformular eingeben.
- **Andere Daten werden automatisch oder nach Ihrer Einwilligung** beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).

Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.

#### Ihre Rechte
Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.

Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.

---

### Hosting

#### Externes Hosting
Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.

Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.

#### Auftragsverarbeitung
Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.

---

### Allgemeine Hinweise und Pflicht­informationen

#### Datenschutz
Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

#### Hinweis zur verantwortlichen Stelle
Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
VINFENRIA UG (haftungsbeschränkt) & Co.KG  
Blasewitzer Straße 41  
01307 Dresden  
Deutschland  
Mail: vinfernia@gmail.com

Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail- Adressen o. Ä.) entscheidet.

#### Speicherdauer
Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.

#### Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO.

#### Empfänger von personenbezogenen Daten
Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist.

#### Widerruf Ihrer Einwilligung zur Datenverarbeitung
Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.

#### Widerspruchsrecht gegen die Datenerhebung
WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN.

---

### Datenerfassung auf dieser Website

#### Server-Log-Dateien
Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
- Browsertyp und Browserversion
- verwendetes Betriebssystem
- Referrer URL
- Hostname des zugreifenden Rechners
- Uhrzeit der Serveranfrage
- IP-Adresse

Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
`
    }
  };

  const currentTranslation = translations[language];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />

            <Hero 
              title="Privacy Policy"
              description="Your privacy is important to us."
              dotPattern={{
                size: 2,
                spacing: 25,
                color: "255, 255, 255",
                opacity: 0.1
              }}
            />

      <div className="flex-grow flex items-center justify-center min-h-[90vh] pb-40">
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-8">
          <h1 className="text-2xl font-bold mb-6">{currentTranslation.title}</h1>
          <div
            className="text-white text-base leading-relaxed max-w-4xl whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: marked(currentTranslation.content) }}
          ></div>
        </div>
      </div>

      <Footer />
    </div>
  );

}
