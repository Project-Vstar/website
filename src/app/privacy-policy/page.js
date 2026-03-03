"use client";
import React, { useState } from "react";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";

export default function PrivacyPolicy() {

  const [language, setLanguage] = useState("en");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" }
  ];

  const translations = {
    en: {
      title: "Privacy Policy",
      content: `
### VINFERNIA UG & Co. KG Privacy Policy

VINFERNIA UG & Co. KG (hereinafter "we/us/our") values the privacy of the users of its website and services (the "User" or "you"). Any personal information you may provide to the website shall be managed in accordance with this policy.

### 1. Privacy in General

#### General Information
The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is all data that can be used to identify you personally. Detailed information on data protection can be found in our privacy policy listed below this text.

#### Data collection on this website
Data processing on this website is carried out by the website operator. You can find their contact details in the "Information on the Responsible Party" section of this privacy policy.

Your data is collected, on the one hand, when you provide it to us. This may, for example, be data you enter into a contact form.

Other data is collected automatically or with your consent when you visit the website by our IT systems. This primarily includes technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.

Some of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior.

You have the right to obtain information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time with effect for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the responsible supervisory authority.

You can contact us at any time with regard to this and other questions regarding data protection.

### 2. Hosting

#### External Hosting
This website is hosted externally. The personal data collected on this website is stored on the servers of the host(s). This may primarily include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data generated via a website.

External hosting is carried out for the purpose of fulfilling our contract with our potential and existing customers (Art. 6 (1) (b) GDPR) and in the interest of ensuring the secure, fast, and efficient provision of our online offering by a professional provider (Art. 6 (1) (f) GDPR). If consent has been requested, processing is carried out exclusively on the basis of Art. 6 (1) (a) GDPR and Section 25 (1) TTDSG, insofar as the consent includes the storage of cookies or access to information on the user's device (e.g., device fingerprinting) within the meaning of the TTDSG. Consent can be revoked at any time.

Our host(s) will only process your data to the extent necessary to fulfill their service obligations and will follow our instructions regarding this data.

#### Data processing
We have entered into a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract required by data protection law, which guarantees that the personal data of our website visitors will only be processed in accordance with our instructions and in compliance with the GDPR.

### 3. General information and mandatory information

#### Privacy
The operators of these websites take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.

When you use this website, various personal data is collected. Personal data is data that can be used to identify you personally. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose.

We would like to point out that data transmission over the Internet (e.g., when communicating via email) may be subject to security gaps. Complete protection of data from access by third parties is not possible.

#### Note on the responsible body
The responsible body for data processing on this website is:

VINFENRIA UG (haftungsbeschränkt) & Co.KG
Blasewitzer Straße 41
01307 Dresden
Deutschland
Mail: vinfernia@gmail.com

The responsible body is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, e-mail addresses, etc.).

#### Storage Period
Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., retention periods under tax or commercial law); in the latter case, deletion will occur once these reasons no longer apply.

#### General information on the legal basis for data processing on this website
If you have consented to data processing, we will process your personal data on the basis of Art. 6 (1) (a) GDPR or Art. 9 (2) (a) GDPR if special categories of data are processed pursuant to Art. 9 (1) GDPR. In the event of express consent to the transfer of personal data to third countries, data processing will also be carried out on the basis of Art. 49 (1) (a) GDPR. If you have consented to the storage of cookies or to access information on your device (e.g. via device fingerprinting), data processing will also be carried out on the basis of Section 25 (1) TTDSG. Your consent can be revoked at any time. If your data is required to fulfil the contract or to carry out pre-contractual measures, we will process your data on the basis of Art. 6 (1) (b) GDPR. Furthermore, if your data is required to fulfil a legal obligation, we will process it on the basis of Art. 6 (1) (c) GDPR. Data processing may also be based on our legitimate interest pursuant to Art. 6 (1) (f) GDPR. The relevant legal bases in each individual case are explained in the following paragraphs of this privacy policy.

#### Recipients of personal data
As part of our business activities, we work with various external parties. In some cases, this also requires the transfer of personal data to these external parties. We only pass on personal data to external parties if this is necessary to fulfill a contract, if we are legally obliged to do so (e.g., passing on data to tax authorities), if we have a legitimate interest in the transfer pursuant to Art. 6 (1) (f) GDPR, or if another legal basis permits the data transfer. When using contract processors, we only pass on our customers' personal data on the basis of a valid contract for order processing. In the case of joint processing, a contract for joint processing is concluded.

#### Revocation of your consent to data processing
Many data processing operations are only possible with your express consent. You can revoke your consent at any time. The legality of the data processing carried out up to the time of revocation remains unaffected.

#### Right to object to data collection in special cases and to direct marketing (Article 21 GDPR)
If data processing is based on Article 6 (1) (e) or (f) of the GDPR, you have the right to object to the processing of your personal data at any time for reasons related to your particular situation; this also applies to profiling based on these provisions. The respective legal basis on which processing is based can be found in this privacy policy. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA UNLESS WE CAN PROVE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING SERVES TO ASSERT, EXERCISE OR DEFEND LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21 (1) GDPR).

If your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for such marketing purposes; this also applies to profiling insofar as it is associated with such direct marketing. If you object, your personal data will subsequently no longer be used for direct marketing purposes (objection pursuant to Art. 21 (2) GDPR).

#### Right to lodge a complaint with the competent supervisory authority
In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, place of work, or place of the alleged violation. This right of complaint is without prejudice to other administrative or judicial remedies.

#### Right to data portability
You have the right to have data that we process automatically based on your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done if technically feasible.

#### Information, Correction, and Deletion
Within the scope of applicable legal provisions, you have the right at any time to obtain free information about your stored personal data, its origin and recipient, and the purpose of data processing, as well as, if applicable, the right to have this data corrected or deleted. You can contact us at any time with any questions about this or other issues relating to personal data.

#### Right to restriction of processing
You have the right to request the restriction of the processing of your personal data. You can contact us at any time to do so. The right to restriction of processing applies in the following cases:

- If you dispute the accuracy of your personal data stored by us, we generally need time to verify this. For the duration of the verification, you have the right to request the restriction of the processing of your personal data.
- If the processing of your personal data was/is unlawful, you can request the restriction of data processing instead of deletion.
- If we no longer need your personal data, but you require it to exercise, defend or assert legal claims, you have the right to request that the processing of your personal data be restricted instead of deleted.
- If you have lodged an objection pursuant to Art. 21 (1) GDPR, your interests must be weighed against ours. As long as it is not yet clear whose interests prevail, you have the right to request that the processing of your personal data be restricted.

If you have restricted the processing of your personal data, this data may – with the exception of its storage – only be processed with your consent or for the establishment, exercise or defense of legal claims or to protect the rights of another natural or legal person or for reasons of important public interest of the European Union or a Member State.

#### SSL or TLS encryption
This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator. You can recognize an encrypted connection by the browser's address bar changing from "http://" to "https://" and by the lock symbol in your browser's address bar.

When SSL or TLS encryption is enabled, the data you transmit to us cannot be read by third parties.

### 4. Data collection on this website

#### Server-Log-Data
The website provider automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These include:

- Browser type and version
- Operating system used
- Referrer URL
- Hostname of the accessing computer
- Time of the server request
- IP address

This data will not be merged with other data sources.

This data is collected on the basis of Art. 6 (1) (f) GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of its website – for this purpose, the server log files must be collected.
`
    },
    de: {
      title: "Datenschutzerklärung",
      content: `
### Datenschutzerklärung

VINFERNIA UG & Co. KG (hiernach "wir/uns/unser" genannt) legt einen hohen Stellenwert auf die Privatsphäre der User dieser Website und unserer Dienste (die "User" oder "Du"). Alle persönlichen Informationen die du der Website zur Verfügung stellst, werden gemäß dieser Erklärung behandelt.

### 1. Datenschutz auf einen Blick

#### Allgemeine Hinweise
Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.

#### Datenerfassung auf dieser Website
Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.

Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.

Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.

Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.

Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.

Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.

### 2. Hosting

#### Externes Hosting
Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.

Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.

Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.

#### Auftragsverarbeitung
Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.

### 3. Allgemeine Hinweise und Pflichtinformationen

#### Datenschutz
Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.

Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.

#### Hinweis zur verantwortlichen Stelle
Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

VINFENRIA UG (haftungsbeschränkt) & Co.KG
Blasewitzer Straße 41
01307 Dresden
Deutschland
Mail: vinfernia@gmail.com

Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.

#### Speicherdauer
Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.

#### Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.

#### Empfänger von personenbezogenen Daten
Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.

#### Widerruf Ihrer Einwilligung zur Datenverarbeitung
Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.

#### Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).

WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).

#### Beschwerderecht bei der zuständigen Aufsichtsbehörde
Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.

#### Recht auf Datenübertragbarkeit
Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.

#### Auskunft, Berichtigung und Löschung
Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.

#### Recht auf Einschränkung der Verarbeitung
Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:

- Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
- Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
- Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
- Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.

Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.

#### SSL- bzw. TLS-Verschlüsselung
Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.

Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.

### 4. Datenerfassung auf dieser Website

#### Server-Log-Dateien
Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:

- Browsertyp und Browserversion
- verwendetes Betriebssystem
- Referrer URL
- Hostname des zugreifenden Rechners
- Uhrzeit der Serveranfrage
- IP-Adresse

Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.

Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
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
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${language === lang.code
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

      <div className="flex-grow flex items-center justify-center min-h-[90vh] pb-40">
        <div className="flex flex-col justify-center items-center w-full px-4 md:px-8">
          <h1 className="text-2xl font-bold mb-6 text-white">{currentTranslation.title}</h1>
          <div
            className="prose prose-invert text-white text-base leading-relaxed max-w-4xl"
            dangerouslySetInnerHTML={{ __html: marked(currentTranslation.content) }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );

}
