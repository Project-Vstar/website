"use client";
import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const styles = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { opacity: 0; animation: heroFadeUp 0.9s ease forwards; }
  .fade-1 { animation-delay: 0.1s; }
  .fade-2 { animation-delay: 0.3s; }
  .fade-3 { animation-delay: 0.5s; }

  .lang-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.03);
    color: #94a3b8;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
    text-align: left;
  }
  .lang-btn:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.15);
    color: #e2e8f0;
  }
  .lang-btn.active {
    background: rgba(96,165,250,0.1);
    border-color: rgba(96,165,250,0.3);
    color: #60a5fa;
  }

  .lang-popup {
    position: absolute;
    left: calc(100% + 12px);
    top: 50%;
    transform: translateY(-50%);
    background: #0f172a;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    padding: 10px;
    min-width: 160px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    gap: 4px;
    z-index: 60;
  }
  .lang-popup::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 7px solid transparent;
    border-right-color: rgba(255,255,255,0.08);
  }
  .lang-popup::after {
    content: '';
    position: absolute;
    right: calc(100% - 1px);
    top: 50%;
    transform: translateY(-50%);
    border: 7px solid transparent;
    border-right-color: #0f172a;
  }

  .terms-content h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #e2e8f0;
    margin: 2.5rem 0 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .terms-content h3:first-child { margin-top: 0; }
  .terms-content h4 {
    font-size: 0.75rem;
    font-weight: 700;
    color: #475569;
    margin: 1.5rem 0 0.4rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .terms-content p {
    color: #94a3b8;
    font-size: 0.9rem;
    line-height: 1.8;
    margin: 0 0 0.5rem;
  }
`;

const translations = {
  en: {
    title: "General Terms and Conditions",
    content: `### General Terms and Conditions
GTC

### § 1 - General Scope

The following General Terms and Conditions apply to every purchase contract between VINFERNIA UG (haftungsbeschränkt) & Co.KG and the purchaser within the Federal Republic of Germany, in the EU countries, and in third countries, regardless of whether the purchaser is a consumer or a business.

The purchaser agrees to their validity upon conclusion of the contract.

### § 2 - Conclusion of contract

The presentation of products in the online shop does not constitute a legally binding offer, but rather a non-binding online catalog. By clicking the "Buy" button, you place a binding order for the goods contained in your shopping cart. Confirmation of receipt and acceptance of your order will be sent via automated email immediately after submission. This email confirmation constitutes the conclusion of the purchase contract.

### § 3 - Delivery and purchase price payment

1. Delivery will be made by sending the ordered goods to the address provided electronically by the customer. Delivery will only take place after receipt of the invoice amount without deductions to the specified account.

2. Payment will be made by transferring the total amount (purchase price plus shipping costs) to the account of VINFERNIA UG (haftungsbeschränkt) & Co.KG:

IBAN: DE73 8509 0000 4209 0010 00
BIC/SWIFT: GENO DEF1 DRS
Volksbank Dresden-Bautzen
Purpose: Order number, name, address
The purchaser undertakes to pay the total amount immediately after placing the order.

3. If the purchaser defaults on payment, he or she shall pay interest on the purchase price in accordance with statutory provisions.

### § 4 - Warranty and Liability

1. The goods are delivered in the qualities, dimensions, weights, and prices specified by VINFERNIA UG (limited liability) & Co.KG. Average quality and quality are owed. The dimensions and quality specifications do not constitute a guarantee.

2. Color or minor changes or deviations do not constitute a defect. The purchaser is aware that the color representation on the Internet may differ from the actual color. Otherwise, the statutory warranty claims apply.

3. VINFERNIA UG (limited liability) & Co.KG is not liable for damages incurred by the purchaser due to a defective delivery. This does not apply to damages resulting from injury to life, limb, or health resulting from a negligent breach of duty by VINFERNIA UG (limited liability) & Co.KG or an intentional or negligent breach of duty by its representative or vicarious agent. For other damages, liability is limited to intent or gross negligence.

### § 5 - Retention of Title

The ordered goods remain the property of VINFERNIA UG (limited liability) & Co.KG until full payment has been made.

### § 6 - On Bill

The customer is only entitled to a right of set-off if his counterclaims have been legally established or have been undisputedly recognized by VINFERNIA UG (limited liability) & Co.KG.

### § 7 - Right of Withdrawal

If a raw material shortage occurs after the conclusion of the contract, or if delivery is incorrect or delayed, VINFERNIA UG (limited liability) & Co.KG is entitled to withdraw from the contract. VINFERNIA UG (limited liability) & Co.KG undertakes to notify the customer immediately and to refund any payments already made without delay.

### § 8 - Cancellation policy

Right of withdrawal

You have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period shall be fourteen days in the case of... :
a) ...a purchase contract on which you or a third party other than the carrier designated by you takes possession of the goods.
b) ...a contract for multiple goods ordered by the buyer as part of a single order and delivered separately, on which you or a third party other than the carrier designated by you takes possession of the last good.
c) ...a contract for the delivery of goods in several partial deliveries or pieces, on which you or a third party other than the carrier designated by you takes possession of the last partial delivery or piece.
d) ...a contract for the regular delivery of goods over a specified period of time, on which you or a third party other than the carrier designated by you takes possession of the first good.

To exercise your right of withdrawal, you must inform us (VINFERNIA UG (haftungsbeschränkt) & Co.KG, Onlineshop, Blasewitzer Straße 41, 01307 Dresden, email: VINFERNIA(at)gmail.com) of your decision to withdraw from this contract by means of a clear statement (e.g. a letter sent by post, fax, or email). You may use the sample text provided below for this purpose, but this is not mandatory.
To comply with the withdrawal period, it is sufficient that you send the notification of the exercise of the right of withdrawal before the expiry of the withdrawal period.

Consequences of Cancellation

If you cancel this contract, we will refund all payments we have received from you, including delivery costs (except for additional costs resulting from your choice of a delivery method other than the cheapest standard delivery offered by us), promptly and at the latest within fourteen days from the date on which we received notification of your cancellation of this contract. For this refund, we will, as far as possible, use the same means of payment that you used for the original transaction, unless something else was expressly agreed with you (e.g., a voucher); under no circumstances will you be charged any fees for this refund. We may refuse to refund until we have received the goods back or until you have provided proof that you have returned the goods, whichever is earlier.
You must return or hand over the goods to us (VINFERNIA UG (haftungsbeschränkt) & Co.KG, Onlineshop, Blasewitzer Straße 41, 01307 Dresden, email: VINFERNIA(at)gmail.com) promptly and in any event no later than fourteen days from the date on which you notify us that you have cancelled this contract. This deadline is met if you send the goods before the expiry of the fourteen-day period.

The buyer bears the direct costs of returning the goods. The buyer is only liable for any loss of value of the goods if this loss of value is due to handling of the goods that is not necessary to check their quality, properties, and functionality. "Checking the properties and functionality" means testing and trying out the respective goods, as is possible and customary in a retail store, for example.

Exclusion of the Right of Withdrawal

However, according to Section 312g Paragraph 2 of the German Civil Code (BGB), a right of withdrawal does not apply to the delivery of:
- goods that are not prefabricated and whose production is based on your individual selection or specification, or that are clearly tailored to your personal needs, or that, due to their nature, are not suitable for return, are susceptible to rapid perish, or whose expiration date would be exceeded;
- sealed goods that, due to health protection or hygiene reasons, are not suitable for return and whose seal was removed after delivery;
- goods that, due to their nature, have been inseparably mixed with other goods after delivery;
- alcoholic beverages under further strict conditions.
Your right of withdrawal expires if we have begun to perform the service with your express consent before the end of the withdrawal period, or if you have initiated the performance of the service yourself.

### End of the cancellation policy

Sample cancellation — If you wish to cancel the contract, please use this sample text.

To VINFERNIA UG (haftungsbeschränkt) & Co.KG, Online Shop, Blasewitzer Straße 41, 01307 Dresden, Email: VINFERNIA(at)gmail.com. I/we (*) hereby cancel the contract concluded by me/us (*) for the purchase of the following goods (*)/the provision of the following service (*)
Ordered on (*)/received on (*)
Name of consumer(s)
Address of consumer(s)
Signature of consumer(s)
Date
(*) Delete/insert as appropriate.

### § 9 - Complaints

(1) The EU Commission provides a platform for out-of-court dispute resolution. This gives consumers the opportunity to resolve disputes related to their online order without involving a court. The dispute resolution platform is available at: https://ec.europa.eu/consumers/odr/ (available from February 15, 2016).

(2) Our company is not willing to participate in dispute settlement proceedings before a consumer arbitration board.

### § 10 - Applicable law / Place of jurisdiction

The contract between VINFERNIA UG (haftungsbeschränkt) & Co.KG and the customer is governed by the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods.

If the customer is an entrepreneur, the place of jurisdiction for all disputes arising from this contract is the registered office of VINFERNIA UG (haftungsbeschränkt) & Co.KG.`
  },
  de: {
    title: "Allgemeine Geschäftsbedingungen",
    content: `### Allgemeine Geschäftsbedingungen
AGB

### § 1 - Allgemeines, Geltungsbereich

Die folgenden Allgemeinen Geschäftsbedingungen gelten für jeden Kaufvertrag zwischen der VINFERNIA UG (haftungsbeschränkt) & Co.KG und dem Besteller innerhalb der Bundesrepublik Deutschland, in den Ländern der EU, sowie Drittländern unabhängig davon, ob der Besteller Verbraucher oder Unternehmer ist.

Der Besteller ist bei Vertragsschluss mit ihrer Geltung einverstanden.

### § 2 - Vertragsschluss

Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Durch Anklicken des Buttons „Kaufen" geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab. Die Bestätigung des Eingangs Ihrer Bestellung erfolgt zusammen mit der Annahme der Bestellung unmittelbar nach dem Absenden durch automatisierte E-Mail. Mit dieser E-Mail-Bestätigung ist der Kaufvertrag zustande gekommen.

### § 3 - Lieferung und Kaufpreiszahlung

1. Die Lieferung erfolgt durch Versendung der bestellten Ware an die vom Besteller elektronisch mitgeteilte Adresse. Die Lieferung erfolgt erst nach Zahlungseingang des Rechnungsbetrages ohne Abzüge auf dem angegebenen Konto.

2. Die Zahlung erfolgt durch Überweisung des Gesamtbetrages (Kaufpreis zuzüglich Versandkosten) auf das Konto der VINFERNIA UG (haftungsbeschränkt) & Co.KG:

IBAN: DE73 8509 0000 4209 0010 00
BIC/SWIFT: GENO DEF1 DRS
Volksbank Dresden-Bautzen
Verwendungszweck: Bestellnummer, Name, Anschrift

Der Besteller verpflichtet sich, unverzüglich im Anschluss an die Bestellung den Gesamtbetrag zu zahlen.

3. Gerät der Besteller in Verzug, so hat er den Kaufpreis nach den gesetzlichen Bestimmungen zu verzinsen.

### § 4 - Gewährleistung und Haftung

1. Die Ware wird zu den von der VINFERNIA UG (haftungsbeschränkt) & Co.KG angegebenen Qualitäten, Maßen, Gewichten und Preisen geliefert. Geschuldet ist mittlere Art und Güte. Garantiezusagen stellen die Maß- und Qualitätsangaben nicht dar.

2. Farbliche oder unwesentliche Änderungen oder Abweichungen stellen keinen Mangel dar. Dem Besteller ist bekannt, dass die farbliche Darstellung im Internet von der tatsächlichen Farbe abweichen kann. Im Übrigen gelten die gesetzlichen Gewährleistungsansprüche.

3. Die Haftung der VINFERNIA UG (haftungsbeschränkt) & Co.KG für Schäden, die dem Besteller durch eine mangelhafte Lieferung entstehen, ist ausgeschlossen. Dies gilt nicht für Schäden aus der Verletzung von Leben, Körper oder Gesundheit, die auf einer fahrlässigen Pflichtverletzung der VINFERNIA UG (haftungsbeschränkt) & Co.KG oder einer vorsätzlichen oder fahrlässigen Pflichtverletzung ihres Vertreters oder Erfüllungsgehilfen beruhen. Für sonstige Schäden ist die Haftung auf Vorsatz oder grobe Fahrlässigkeit beschränkt.

### § 5 - Eigentumsvorbehalt

Die bestellte Ware bleibt bis zur vollständigen Bezahlung Eigentum der VINFERNIA UG (haftungsbeschränkt) & Co.KG.

### § 6 - Aufrechnung

Ein Recht zur Aufrechnung steht dem Besteller nur zu, wenn seine Gegenansprüche rechtskräftig festgestellt oder von der VINFERNIA UG (haftungsbeschränkt) & Co.KG unbestritten anerkannt sind.

### § 7 - Rücktrittsrecht

Liegt nach Vertragsschluss ein Rohstoffmangel vor oder erfolgt eine unrichtige oder nicht rechtzeitige Belieferung, ist die VINFERNIA UG (haftungsbeschränkt) & Co.KG zum Rücktritt vom Vertrag berechtigt. Sie verpflichtet sich, den Besteller unverzüglich zu unterrichten und bereits erfolgte Zahlungen unverzüglich zu erstatten.

### § 8 - Widerrufsbelehrung

Widerrufsrecht

Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage im Falle… :
a) …eines Kaufvertrags, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
b) …eines Vertrags über mehrere Waren, die der Käufer im Rahmen einer einheitlichen Bestellung bestellt hat und die getrennt geliefert werden, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
c) …eines Vertrags über die Lieferung einer Ware in mehreren Teilsendungen oder Stücken, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Teilsendung oder das letzte Stück in Besitz genommen haben bzw. hat.
d) …eines Vertrags zur regelmäßigen Lieferung von Waren über einen festgelegten Zeitraum hinweg, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die erste Ware in Besitz genommen haben bzw. hat.

Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (VINFERNIA UG (haftungsbeschränkt) & Co.KG, Onlineshop, Blasewitzer Straße 41, 01307 Dresden, E-Mail: VINFERNIA(at)gmail.com) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können hierfür den u.a. Mustertext verwenden, welcher jedoch nicht vorgeschrieben ist.
Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.

Folgen des Widerrufs

Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir soweit möglich dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart (z.B. Warengutschein); in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns (VINFERNIA UG (haftungsbeschränkt) & Co.KG, Onlineshop, Blasewitzer Straße 41, 01307 Dresden, E-Mail: VINFERNIA(at)gmail.com) zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.

Der Käufer trägt die unmittelbaren Kosten der Rücksendung der Waren. Der Käufer muss für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist. Unter „Prüfung der Eigenschaften und der Funktionsweise" versteht man das Testen und Ausprobieren der jeweiligen Ware, wie es etwa im Ladengeschäft möglich und üblich ist.

Ausschluss des Widerrufsrechts

Ein Widerrufsrecht besteht allerdings gemäß § 312g Abs. 2 BGB nicht bei der Lieferung von
- Waren, die nicht vorgefertigt sind und für deren Herstellung Ihre individuelle Auswahl oder Bestimmung maßgeblich ist oder die eindeutig auf Ihre persönlichen Bedürfnisse zugeschnitten sind oder aufgrund ihrer Beschaffenheit nicht für eine Rücksendung geeignet sind oder schnell verderben können oder deren Verfallsdatum überschritten würde;
- versiegelten Waren, die aus Gründen des Gesundheitsschutzes oder aus Hygienegründen nicht zur Rückgabe geeignet sind und deren Versiegelung nach der Lieferung entfernt wurde;
- Waren, die nach der Lieferung aufgrund ihrer Eigenart untrennbar mit anderen Gütern vermischt wurden;
- alkoholischen Getränken unter weiteren engen Voraussetzungen.
Ihr Widerrufsrecht erlischt, wenn wir mit der Ausführung der Leistung mit Ihrer ausdrücklichen Zustimmung vor Ende der Widerrufsfrist begonnen haben oder Sie die Ausführung der Leistung selbst veranlasst haben.

### Ende der Widerrufsbelehrung

Muster Widerruf — Wenn Sie den Vertrag widerrufen wollen, dann nutzen Sie gern diesen Mustertext.

An VINFERNIA UG (haftungsbeschränkt) & Co.KG, Onlineshop, Blasewitzer Straße 41, 01307 Dresden, E-Mail: VINFERNIA(at)gmail.com. Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)
Bestellt am (*)/erhalten am (*)
Name des/der Verbraucher(s)
Anschrift des/der Verbraucher(s)
Unterschrift des/der Verbraucher(s)
Datum
(*) Unzutreffendes streichen/eintragen.

### § 9 - Beschwerden

(1) Die EU-Kommission stellt eine Plattform für außergerichtliche Streitschlichtung bereit. Verbrauchern gibt dies die Möglichkeit, Streitigkeiten im Zusammenhang mit Ihrer Online-Bestellung zunächst ohne die Einschaltung eines Gerichts zu klären. Die Streitbeilegungs-Plattform ist unter dem externen Link https://ec.europa.eu/consumers/odr/ ab dem 15. Februar 2016 erreichbar.

(2) Unser Unternehmen ist nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

### § 10 - Anwendbares Recht / Gerichtsstand

Der Vertrag zwischen der VINFERNIA UG (haftungsbeschränkt) & Co.KG und dem Besteller unterliegt dem Recht der Bundesrepublik Deutschland unter Ausschluss von UN-Kaufrecht.

Ist der Besteller Unternehmer, so ist Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Geschäftssitz der VINFERNIA UG (haftungsbeschränkt) & Co.KG.`
  }
};

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

export default function TermsPage() {
  const [language, setLanguage] = useState("en");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const currentTranslation = translations[language];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <style>{styles}</style>
      <Header />

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 border-b border-white/5 pt-32 pb-20 px-6 text-center">
        <h1
          className="fade-up fade-1 font-oswald font-bold uppercase leading-none mb-5"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
        >
          <span style={{ color: "#ffffff" }}>Terms &amp; Conditions</span>
        </h1>
        <p className="fade-up fade-2 text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          Please read carefully before using our services.
        </p>
      </section>

      {/* ── Language toggle ───────────────────────────────────────────────── */}
      <div style={{ position: "fixed", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 50 }}>
        <button
          onClick={() => setIsPopupOpen(v => !v)}
          aria-label="Toggle language"
          style={{
            width: 40, height: 40, borderRadius: "50%",
            background: isPopupOpen ? "rgba(96,165,250,0.1)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${isPopupOpen ? "rgba(96,165,250,0.3)" : "rgba(255,255,255,0.1)"}`,
            color: isPopupOpen ? "#60a5fa" : "#64748b",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { if (!isPopupOpen) { e.currentTarget.style.borderColor = "rgba(96,165,250,0.3)"; e.currentTarget.style.color = "#60a5fa"; }}}
          onMouseLeave={e => { if (!isPopupOpen) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#64748b"; }}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        </button>

        {isPopupOpen && (
          <div className="lang-popup">
            {languages.map(lang => (
              <button
                key={lang.code}
                className={`lang-btn${language === lang.code ? " active" : ""}`}
                onClick={() => { setLanguage(lang.code); setIsPopupOpen(false); }}
              >
                <span style={{ fontSize: "1rem" }}>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {isPopupOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40 }} onClick={() => setIsPopupOpen(false)} />
      )}

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 pt-20 pb-32 px-6">
        <div className="max-w-3xl mx-auto terms-content">
          {currentTranslation.content.split("\n").map((line, i) => {
            if (line.startsWith("### "))  return <h3 key={i}>{line.replace("### ", "")}</h3>;
            if (line.startsWith("#### ")) return <h4 key={i}>{line.replace("#### ", "")}</h4>;
            if (line.trim() === "")       return <br key={i} />;
            return <p key={i}>{line}</p>;
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}