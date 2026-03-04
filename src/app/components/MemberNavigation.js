"use client";
import { memo } from "react";
import Link from "next/link";
import talentRoster from "@/app/talents/data.json";

const MemberCard = memo(function MemberCard({ talent, isCurrent, signatureColor }) {
    return (
        <Link
            href={talent.href}
            className={`group relative flex-shrink-0 w-40 h-56 rounded-xl overflow-hidden border transition-all duration-300 ${
                isCurrent
                    ? "opacity-40 pointer-events-none border-white/20"
                    : "hover:scale-105 hover:border-opacity-60 border-white/10"
            }`}
            style={{
                borderColor: isCurrent ? `${signatureColor}50` : undefined,
            }}
        >
            <div className="absolute inset-0">
                <img
                    src={talent.image}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ objectPosition: talent.objectPosition || "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <img
                    src={talent.char}
                    alt={talent.name}
                    className="w-full h-40 object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                    style={{ transform: `scale(${talent.imageScale || 1})` }}
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-semibold text-center truncate">
                    {talent.name}
                </p>
            </div>
        </Link>
    );
});

const MemberNavigation = memo(function MemberNavigation({ currentHref, signatureColor }) {
    const members = talentRoster.talents;

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                    Meet the Other Members
                </h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    {members.map((talent) => (
                        <MemberCard
                            key={talent.href}
                            talent={talent}
                            isCurrent={talent.href === currentHref}
                            signatureColor={signatureColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default MemberNavigation;
