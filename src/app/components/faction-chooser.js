import React, { useState } from "react";

const FactionChooser = () => {
    const [hovered, setHovered] = useState(null);
    const [touched, setTouched] = useState(null);

    const handleTouch = (side) => {
        setTouched(side);
        setTimeout(() => setTouched(null), 300);
    };

    return (
        <>
            <div className="md:hidden min-h-[100vh] bg-slate-900 flex flex-col justify-center items-center px-4 py-3">
                <div
                    className={`relative w-full h-[47vh] rounded-2xl cursor-pointer overflow-hidden
                        transition-all duration-300 ease-in-out
                        bg-[linear-gradient(to_bottom,theme(colors.blue.900),theme(colors.slate.900))]
                        border-2 border-blue-700/50`}
                    onClick={() => (window.location.href = "/talents")}
                    onTouchStart={() => handleTouch("talents")}
                >
                    <div 
                        className="absolute top-0 left-0 w-full h-full opacity-20 bg-center bg-no-repeat bg-contain"
                        style={{ backgroundImage: "url('/vstar.png')" }}
                    />
                    
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider">
                            V-STAR
                        </h1>
                    </div>
                </div>

                <div
                    className={`relative w-full h-[47vh] rounded-2xl cursor-pointer overflow-hidden mt-[6vh]
                        transition-all duration-300 ease-in-out
                        bg-[linear-gradient(to_top,theme(colors.red.900),theme(colors.slate.900))]
                        border-2 border-red-700/50`}
                    onClick={() => (window.location.href = "/talents")}
                    onTouchStart={() => handleTouch("talents")}
                >
                    <div 
                        className="absolute top-0 left-0 w-full h-full opacity-20 bg-center bg-no-repeat bg-contain"
                        style={{ backgroundImage: "url('/VINFERNIA/VINFERNIA/Vinfernia_Black.png')" }}
                    />
                    
                    <div className="relative z-10 h-full flex items-center justify-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider">
                            VINFERNIA
                        </h1>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex flex-row min-h-[100vh] overflow-hidden relative">
                <div
                    className={`absolute inset-0 transition-all duration-500 ease-in-out
                        bg-[linear-gradient(135deg,theme(colors.blue.900),theme(colors.slate.900))]
                        overflow-hidden pointer-events-none
                        ${hovered === "left" ? "brightness-125" : hovered === "right" ? "brightness-75" : ""}`}
                    style={{
                        clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
                        transition: "filter 0.4s ease-in-out 0.1s, brightness 0.4s ease-in-out"
                    }}
                >
                    <div 
                        className="absolute top-0 left-0 w-full h-full opacity-40 blur-sm bg-center bg-no-repeat bg-cover"
                        style={{ 
                            backgroundImage: "url('/vstar.png')",
                            backgroundSize: "80%",
                            backgroundPosition: "left",
                         }}
                    />
                    
                    <div className="flex items-start justify-center pt-[15vh] h-full">
                        <h1 className="relative z-10 text-7xl font-bold text-white tracking-wider pr-150 pt-60">
                            VSTAR
                        </h1>
                    </div>

                    <div 
                        className="absolute top-0 left-[60%] h-full w-[1px] bg-white/20 origin-top"
                        style={{
                            transform: "rotate(-11.3deg)",
                            transformOrigin: "top left",
                            height: "102%"
                        }}
                    />
                </div>

                <div
                    className={`absolute inset-0 transition-all duration-500 ease-in-out
                        bg-[linear-gradient(315deg,theme(colors.red.900),theme(colors.slate.900))]
                        overflow-hidden pointer-events-none
                        ${hovered === "right" ? "brightness-125" : hovered === "left" ? "brightness-75" : ""}`}
                    style={{
                        clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
                        transition: "filter 0.4s ease-in-out 0.1s, brightness 0.4s ease-in-out"
                    }}
                >
                    <div 
                        className="absolute top-0 left-0 w-full h-full opacity-40 blur-sm bg-center bg-no-repeat bg-cover"
                        style={{ 
                            backgroundImage: "url('/VINFERNIA/VINFERNIA/Vinfernia_Black.png')",
                            backgroundSize: "80%",
                            backgroundPosition: "right",
                         }}
                    />
                    
                    <div className="flex items-end justify-center pb-[15vh] h-full">
                        <h1 className="relative z-10 text-7xl font-bold text-white tracking-wider pl-150 pb-50">
                            VINFERNIA
                        </h1>
                    </div>
                </div>

                <div
                    className="relative flex-1 cursor-pointer z-10"
                    onMouseEnter={() => setHovered("left")}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => (window.location.href = "/talents")}
                />

                <div
                    className="relative flex-1 cursor-pointer z-10"
                    onMouseEnter={() => setHovered("right")}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => (window.location.href = "/talents")}
                />
            </div>
        </>
    );
};

export default FactionChooser;