import React from "react";

export default function Marquee({ targetId = "early-access-form" }) {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const MarqueeItem = () => (
    <div className="flex items-center whitespace-nowrap text-white font-light">
      <span className="mr-2">Request Early Access</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </div>
  );

  return (
    <div className="marquee-text py-2 bg-black/85 cursor-pointer" onClick={scrollToTarget}>
      <div className="marquee-text-track">
        {Array.from({ length: 20 }, (_, i) => (
          <MarqueeItem key={i} />
        ))}
      </div>
    </div>
  );
}
