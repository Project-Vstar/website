"use client";
import React, { useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";

const faqItems = [
    {
        question: "Can I send fan letters and presents to VINFERNIA / VSTAR talents?",
        answer: [
            {
                type: "text",
                content:
                    "We are not accepting presents at the moment. For fan letters please send them to the following address.",
            },
            {
                type: "address",
                content:
                    "VINFERNIA UG (haftungsbeschränkt) & Co.KG\nPresent for: (talent name)\nBlaswitzer Straße 41\n01307 Dresden, Saxony\nGermany",
            },
            {
                type: "text",
                content:
                    "Please make sure to include the name of the talent you're sending your letter to.",
            },
            {
                type: "note",
                content:
                    "* Please note that we cannot accept fan letters addressed to talents who have graduated or left the company.",
            },
            {
                type: "section",
                heading: "Important Notes",
                items: [
                    "Fan letters will be reviewed, and management reserves the right to withhold delivery to the talent if the content is deemed inappropriate.",
                    "Letters containing personal information (address, phone number, email, etc.) cannot be delivered.",
                    "Only the letter itself will be given to the talent. Envelopes will not be passed on. Please include only your real name, handle, or account name in the letter.",
                    "We do not accept gifts. If any items are included, both the gift and the letter will be discarded.",
                    "Any letters that violate these rules or are deemed unacceptable by management will be discarded at management's discretion.",
                ],
            },
            {
                type: "section",
                heading: "Frequently Asked Questions",
                items: [
                    "Can I send gifts other than fan letters? — At this time, we only accept gifts after prior consultation. Items such as doujinshi, group messages, albums, etc, can only be sent after prior consultation.",
                    "Can I send or attach photographs? — Sorry, for privacy protection reasons, we cannot accept photographs.",
                    "Are there limits on the length or number of pages of letters? — No specific limits are set.",
                    "Can I send letters from overseas? — International mail is accepted. However, please note that we cannot guarantee shipping fees or delivery times.",
                    "Can I send fan letters via email or digitally? — At this time, we only accept physical letters. Please use event digital message boards if you want to send electronic messages.",
                    "Can I send fan letters for multiple talents together in one package? — Yes, but please make sure to separate letters for each talent.",
                    "Will I receive a reply from the talent? — Replies are not provided.",
                    "Can I send fan letters via postcards or greeting cards? — Only letters placed in a mailing envelope are accepted. Please avoid including personal information, such as your address, directly on postcards or greeting cards.",
                    "How are fan letters given to the talent? — Envelopes are removed, and only the letter itself is delivered to the talent.",
                    "Can I have my fan letter delivered on a talent's birthday or for an event? — Delivery date requests cannot be accommodated, as all letters must first go through a review process by management.",
                    "Can I include a YouTube channel or social media URL for the talent? — Social media IDs or URLs may be included only if they do not contain personal information. Addresses and phone numbers are not allowed.",
                ],
            },
            {
                type: "section",
                heading: "Inquiries",
                intro:
                    "For the following items, please contact us in advance before sending them.\n* If no inquiry is made beforehand, the items you send may be discarded.",
                items: [
                    "Doujinshi (self-published and already distributed)",
                    "10 (ten) or more autograph boards (shikishi)",
                    "Drawings or illustrations",
                    "Fan books",
                ],
            },
        ],
    },
    {
        question:
            "Where do I inquire about promotional sponsorships or media appearance offerings for VSTAR talents?",
        answer: [
            {
                type: "text",
                content:
                    "For business inquiries regarding VINFERNIA / VSTAR and its affiliated VTubers, please inquire from the link below.",
            },
            {
                type: "link",
                label: "www.vstarproject.eu/partners",
                href: "https://www.vstarproject.eu/partners",
            },
        ],
    },
    {
        question:
            "Are there any guidelines to follow when creating derivative works with VINFERNIA / VSTAR's content?",
        answer: [
            {
                type: "text",
                content:
                    "We are willing to support our fans in their creative and supportive activities. For VINFERNIA and VSTAR derivative works, please read and follow our Derivative Works Guidelines.",
            },
            {
                type: "link",
                label: "Derivative Works Guidelines →",
                href: "/derivative-works-guidelines",
            },
        ],
    },
    {
        question: "Are there any guidelines to follow when creating clips of VSTAR talents?",
        answer: [
            {
                type: "text",
                content:
                    "The same guidelines apply to clips of VSTAR talents. Please read and follow our Derivative Works Guidelines.",
            },
            {
                type: "link",
                label: "Derivative Works Guidelines →",
                href: "/derivative-works-guidelines",
            },
        ],
    },
    {
        question: "Are there any guidelines to follow for fan support advertisements?",
        answer: [
            {
                type: "text",
                content:
                    "The same guidelines apply to fan-based advertisements. Please read and follow our Derivative Works Guidelines.",
            },
            {
                type: "link",
                label: "Derivative Works Guidelines →",
                href: "/derivative-works-guidelines",
            },
        ],
    },
    {
        question: "Do you have any plans for concerts or events?",
        answer: [
            {
                type: "text",
                content:
                    "Information regarding concerts and events will be posted to our official website's news section, press releases, and/or VINFERNIA / VSTAR official social media accounts.",
            },
        ],
    },
    {
        question: "Merchandise Inquiries",
        answer: [
            {
                type: "text",
                content: "For merchandise inquiries, please contact us from the URL below.",
            },
            {
                type: "link",
                label: "VINFERNIA / VSTAR Official Shop — Inquiries",
                href: "#",
            },
        ],
    },
];

function AnswerBlock({ blocks }) {
    return (
        <div className="mt-4 space-y-3">
            {blocks.map((block, i) => {
                switch (block.type) {
                    case "text":
                        return (
                            <p key={i} className="text-slate-300 text-sm leading-relaxed">
                                {block.content}
                            </p>
                        );
                    case "note":
                        return (
                            <p key={i} className="text-slate-400 text-xs italic leading-relaxed">
                                {block.content}
                            </p>
                        );
                    case "address":
                        return (
                            <pre
                                key={i}
                                className="text-slate-300 text-sm font-sans leading-relaxed bg-slate-800/50 border border-slate-700 rounded px-4 py-3 whitespace-pre-wrap"
                            >
                                {block.content}
                            </pre>
                        );
                    case "link":
                        return (
                            <a
                                key={i}
                                href={block.href}
                                className="inline-block text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors duration-150"
                            >
                                {block.label}
                            </a>
                        );
                    case "section":
                        return (
                            <div key={i} className="mt-5 pt-4 border-t border-slate-700/60">
                                <h4 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
                                    <span className="text-slate-500">■</span>
                                    {block.heading}
                                </h4>
                                {block.intro && (
                                    <div className="mb-3">
                                        {block.intro.split("\n").map((line, li) => (
                                            <p key={li} className="text-slate-400 text-xs leading-relaxed">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                )}
                                <ul className="space-y-2">
                                    {block.items.map((item, ii) => (
                                        <li key={ii} className="text-slate-300 text-sm leading-relaxed flex gap-2">
                                            <span className="text-slate-500 mt-1 shrink-0">·</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}

function AccordionItem({ item, index, isOpen, onToggle }) {
    return (
        <div
            className={`border-l-2 transition-colors duration-300 mb-5 ${
                isOpen ? "border-slate-400" : "border-slate-700 hover:border-slate-500"
            }`}
        >
            <button
                onClick={onToggle}
                className="w-full text-left flex items-start justify-between gap-4 px-5 py-5 group"
            >
                <div className="flex items-start gap-3">
                    <span className="text-slate-500 text-xs font-mono mt-1 shrink-0 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                        className={`text-base font-semibold leading-snug transition-colors duration-200 ${
                            isOpen ? "text-white" : "text-slate-200 group-hover:text-white"
                        }`}
                    >
                        {item.question}
                    </span>
                </div>
                <span
                    className={`text-slate-400 text-xl leading-none mt-0.5 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                    }`}
                >
                    +
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="px-5 pb-6 pl-[3.25rem]">
                    <AnswerBlock blocks={item.answer} />
                </div>
            </div>
        </div>
    );
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />

            <Hero
                title="FAQ"
                description="Frequently Asked Questions"
                dotPattern={{
                    size: 2,
                    spacing: 25,
                    color: "255, 255, 255",
                    opacity: 0.1,
                }}
            />

            <div className="flex-grow flex items-center justify-center min-h-[90vh] pt-2 pb-40">
                <div className="flex flex-col justify-center items-center w-full px-4 md:px-8">
                    <div className="w-full max-w-4xl">
                        <div className="divide-y divide-slate-800">
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    isOpen={openIndex === index}
                                    onToggle={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}