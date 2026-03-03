"use client";

const backButtonStyles = `
    .back-to-talents-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 10px 18px;
        border-radius: 8px;
        border: 1px solid color-mix(in srgb, var(--hover-color) 30%, transparent);
        color: #ffffff;
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;
        overflow: hidden;
        background: color-mix(in srgb, var(--hover-color) 10%, transparent);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        cursor: pointer;
    }
    .back-to-talents-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--hover-color);
        transform: translateX(101%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
    }
    .back-to-talents-btn:hover::before {
        transform: translateX(0);
    }
    .back-to-talents-btn:hover span {
        color: var(--text-hover-color, #ffffff);
    }
    .back-to-talents-btn .back-chevron {
        font-size: 1.2rem;
        opacity: 0.5;
        transition: transform 0.2s ease, opacity 0.2s ease;
        position: relative;
        z-index: 1;
    }
    .back-to-talents-btn:hover .back-chevron {
        transform: translateX(-3px);
        opacity: 1;
    }
`;

export function BackToTalentsButton({ signatureColor, hoverTextColor }) {
    return (
        <>
            <style>{backButtonStyles}</style>
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <a
                        href="/vinfernia"
                        className="back-to-talents-btn"
                        style={{
                            "--hover-color": signatureColor,
                            "--text-hover-color": hoverTextColor ?? "#ffffff",
                        }}
                    >
                        <span className="back-chevron" style={{ position: "relative", zIndex: 1 }}>‹</span>
                        <span style={{ position: "relative", zIndex: 1 }}>Back to Vinfernia Talents</span>
                    </a>
                </div>
            </section>
        </>
    );
}