import React, { useState } from "react";

const FactionChooser = () => {
    const [hovered, setHovered] = useState(null);

    const getFlexClass = (side) => {
        return hovered === side ? "flex-[2]" : "flex-[1]";
    };

    return (
        <div className="flex flex-1 md:flex-row min-h-[100vh] overflow-hidden">
            <div
                className={`transition-all duration-300 ease-in-out
                    bg-[linear-gradient(to_bottom,theme(colors.blue.900),theme(colors.slate.900))]
                    md:bg-[linear-gradient(to_right,theme(colors.blue.900),theme(colors.slate.900))]
                    ${getFlexClass("left")}
                    hover:scale-105
                    flex items-center justify-center cursor-pointer
                    overflow-hidden`}
                onMouseEnter={() => setHovered("left")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => (window.location.href = "/vstar")}
            >
                <div className="text-white text-3xl md:text-5xl font-bold transition">
                    VSTAR
                </div>
            </div>

            <div
                className="flex-[1] hover:cursor-default bg-slate-900 relative hidden md:block overflow-hidden"
                onMouseEnter={() => setHovered(null)}
            ></div>

            <div
                className={`transition-all duration-300 ease-in-out
                    bg-[linear-gradient(to_top,theme(colors.red.900),theme(colors.slate.900))]
                    md:bg-[linear-gradient(to_left,theme(colors.red.900),theme(colors.slate.900))]
                    ${getFlexClass("right")}
                    hover:scale-105
                    flex items-center justify-center cursor-pointer
                    overflow-hidden`}
                onMouseEnter={() => setHovered("right")}
                onMouseLeave={() => setHovered(null)}
                onClick={() => (window.location.href = "/vinfernia")}
            >
                <div className="text-white text-3xl md:text-5xl font-bold transition">
                    VINFERNIA
                </div>
            </div>
        </div>
    );
};

export default FactionChooser;