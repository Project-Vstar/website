"use client";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function DerivativeWorksGuidelines() {
    const content = `
### Derivative Works Guidelines

#### Introduction

VINFERNIA UG (haftungsbeschränkt) & Co.KG (hereinafter to be referred to as “We”, “Us”, or “Our” as the case may be) has established these guidelines (hereinafter to be referred to as “overall guidelines”) for the creation and use of derivative works so that fans may have the peace of mind to be able to enjoy our content in as many different forms as possible.

When creating derivative works that comply with these overall guidelines, there is no need to contact us for permission.

For derivative works that do not fall under any specified categories, please refer to the overall guidelines. For works based on our music content and/or clips, please also refer to the separate category guidelines.

#### Definition of Derivative Works

We consider derivative works to be creations born of fans’ ideas and creativity, based on content created by us.
We will not exercise our rights in regards to works that we deem to be derivative works, as long as they comply with these overall guidelines.

Please note that we may use any derivative works you create as stream thumbnails, on social media, etc.

* We do not consider the use of our content as is, or with modifications lacking creative input, to be classified as derivative works. Such use does not fall within the scope of these guidelines.

#### Our Requests

Please comply with the following guidelines regarding derivative works.

- Please be mindful of our talents, and refrain from creating derivative works that they may find unpleasant.
- Please limit your creation of derivative works to a fan or hobby level. Do not use our content for business purposes (including, but not limited to, cases where a business bears the production costs, etc., even if it is under the name of an individual), or for purposes that can be deemed as for-profit.
- Please comply with all applicable laws and regulations, including the terms and rules of any relevant platforms.
- Please refrain from creating derivative works that fall under the following categories:
    - Content that is falsely represented as official, or can be misinterpreted or mistaken as official
    - Content that is contradictory to public order and morality, or exceeds what is socially acceptable
    - Content that includes matters pertaining to any particular ideology, belief, religion, or politics
    - Content that damages our image, or that of our talents or our content
    - Content that damages a third party’s image, or violates their rights
    - Other content that we deem unsuitable

#### Additional Notes

We do not relinquish our copyright or related rights through these overall guidelines. We maintain these rights.

We make no guarantees in regards to the use of our content or related derivative works, including any actions that may violate a third party’s rights.

We shall not be responsible if the use, performance, or submission of our content, or a related derivative work, results in a dispute with a third party.

These overall guidelines are subject to change without notice. Please ensure that you follow the latest version of these guidelines at all times.
`;

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />

            <div className="flex-grow flex items-center justify-center min-h-[90vh] pt-40 pb-40">
                <div className="flex flex-col justify-center items-center w-full px-4 md:px-8">
                    <h1 className="text-2xl font-bold mb-6">Derivative Works Guidelines</h1>
                    <div className="prose text-white text-base leading-relaxed max-w-4xl">
                        {content.split("\n").map((line, index) => {
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
