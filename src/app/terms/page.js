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
    title: "General Terms and Conditions",
    content: `
### General Terms and Conditions
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

To exercise your right of withdrawal, you must inform us (VINFERNIA UG (haftungsbeschränkt& Co.KG, Onlineshop, Blasewitzer Straße 41, 01307 Dresden, email: VINFERNIA(at)gmail.com) of your decision to withdraw from this contract by means of a clear statement (e.g. a letter sent by post, fax, or email). You may use the sample text provided below for this purpose, but this is not mandatory.
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
## Sample cancellation
If you wish to cancel the contract, please use this sample text.

To VINFERNIA UG (haftungsbeschränkt) & Co.KG, Online Shop, Blasewitzer Straße 41, 01307 Dresden, Email: VINFERNIA(at)gmail.com. I/we (*) hereby cancel the contract concluded by me/us (*) for the purchase of the following goods (*)/the provision of the following service (*)
Ordered on (*)/received on (*)
Name of consumer(s)
Address of consumer(s)
Signature of consumer(s)
Date
(*) Delete/insert as appropriate.

### § 9 - Complaints

(1) The EU Commission provides a platform for out-of-court dispute resolution. This gives consumers the opportunity to resolve disputes related to their online order without involving a court. The dispute resolution platform is available at the external link
https://ec.europa.eu/consumers/odr/ Available from February 15, 2016.

(2) Our company is not willing to participate in dispute settlement proceedings before a consumer arbitration board.

### § 10 - Applicable law/place of jurisdiction

The contract between VINFERNIA UG (haftungsbeschränkt) & Co.KG and the customer is governed by the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods.

If the customer is an entrepreneur, the place of jurisdiction for all disputes arising from this contract is the registered office of VINFERNIA UG (haftungsbeschränkt) & Co.KG.
`
  },
  de: {
    title: "Allgemeine Geschäftsbedingungen",
    content: `
### Allgemeine Geschäftsbedingungen
AGB

### § 1 - Allgemeines, Geltungsbereich

Die folgenden Allgemeinen Geschäftsbedingungen gelten für jeden Kaufvertrag zwischen der VINFERNIA UG (haftungsbeschränkt) & Co.KG und dem Besteller innerhalb der Bundesrepublik Deutschland, in den Ländern der EU, sowie Drittländern unabhängig davon, ob der Besteller Verbraucher oder Unternehmer ist.

Der Besteller ist bei Vertragsschluss mit ihrer Geltung einverstanden.

### § 2 - Vertragsschluss

Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Durch Anklicken des Buttons „Kaufen“ geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab. Die Bestätigung des Eingangs Ihrer Bestellung erfolgt zusammen mit der Annahme der Bestellung unmittelbar nach dem Absenden durch automatisierte E-Mail. Mit dieser E-Mail-Bestätigung ist der Kaufvertrag zustande gekommen.

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

Ein Recht zur Aufrechnung steht dem Besteller nur zu, wenn seine Gegenansprüche rechtskräftig festgestellt oder von der VINFERNIA UG (haftungsbeschränkt) & Co.KG  unbestritten anerkannt sind.



### § 7 - Rücktrittsrecht

Liegt nach Vertragsschluss ein Rohstoffmangel vor oder erfolgt eine unrichtige oder nicht rechtzeitige Belieferung, ist die VINFERNIA UG (haftungsbeschränkt) & Co.KG zum Rücktritt vom Vertrag berechtigt. Sie verpflichtet sich, den Besteller unverzüglich zu unterrichten und bereits erfolgte Zahlungen unverzüglich zu erstatten.

### §8 - Widerrufsbelehrung

Widerrufsrecht

Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage im Falle… :
a) …eines Kaufvertrags, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
b) …eines Vertrags über mehrere Waren, die der Käufer im Rahmen einer einheitlichen Bestellung bestellt hat und die getrennt geliefert werden , an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
c) …eines Vertrags über die Lieferung einer Ware in mehreren Teilsendungen oder Stücken, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Teilsendung oder das letzte Stück in Besitz genommen haben bzw. hat.
d) … eines Vertrags zur regelmäßigen Lieferung von Waren über einen festgelegten Zeitraum hinweg, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die erste Ware in Besitz genommen haben bzw. hat.

Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (VINFERNIA UG (haftungsbeschränkt) & Co.KG, Onlineshop, Blasewitzer Straße 41, 01307 Dresden, E-Mail: VINFERNIA(at)gmail.com) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können hierfür den u.a. Mustertext verwenden, welcher jedoch nicht vorgeschrieben ist.
Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.

Folgen des Widerrufs

Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir soweit möglich dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart (z.B. Warengutschein); in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns (VINFERNIA UG (haftungsbeschränkt) & Co.KG, Onlineshop, Blasewitzer Straße 41, 01307 Dresden, E-Mail: VINFERNIA(at)gmail.com) zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.

Der Käufer trägt die unmittelbaren Kosten der Rücksendung der Waren. Der Käufer muss für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist. Unter „Prüfung der Eigenschaften und der Funktionsweise“ versteht man das Testen und Ausprobieren der jeweiligen Ware, wie es etwa im Ladengeschäft möglich und üblich ist.

Ausschluss des Widerrufsrechts

Ein Widerrufsrecht besteht allerdings gemäß § 312g Abs. 2 BGB nicht bei der Lieferung von
- Waren, die nicht vorgefertigt sind und für deren Herstellung Ihre individuelle Auswahl oder Bestimmung maßgeblich ist oder die eindeutig auf Ihre persönlichen Bedürfnisse zugeschnitten sind oder aufgrund ihrer Beschaffenheit nicht für eine Rücksendung geeignet sind oder schnell verderben können oder deren Verfallsdatum überschritten würde;
- versiegelten Waren, die aus Gründen des Gesundheitsschutzes oder aus Hygienegründen nicht zur Rückgabe geeignet sind und deren Versiegelung nach der Lieferung entfernt wurde;
- Waren, die nach der Lieferung aufgrund ihrer Eigenart untrennbar mit anderen Gütern vermischt wurden;
- alkoholischen Getränken unter weiteren engen Voraussetzungen.
Ihr Widerrufsrecht erlischt, wenn wir mit der Ausführung der Leistung mit Ihrer ausdrücklichen Zustimmung vor Ende der Widerrufsfrist begonnen haben oder Sie die Ausführung der Leistung selbst veranlasst haben.

### Ende der Widerrufsbelehrung - Muster Widerruf
Wenn Sie den Vertrag widerrufen wollen, dann nutzen Sie gern diesen Mustertext.

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


### § 10 - Anwendbares Recht/Gerichtsstand

Der Vertrag zwischen der VINFERNIA UG (haftungsbeschränkt) & Co.KG und dem Besteller unterliegt dem Recht der Bundesrepublik Deutschland unter Ausschluss von UN-Kaufrecht.

Ist der Besteller Unternehmer, so ist Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Geschäftssitz der VINFERNIA UG (haftungsbeschränkt) & Co.KG.

`
  }
};


  const currentTranslation = translations[language];

return (
    <div className="flex flex-col min-h-screen bg-slate-900">
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
