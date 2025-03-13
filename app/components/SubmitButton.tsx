import React from "react";

export default function SubmitButton({ text = "Submit", className = "" }) {
  return (
    <button
      type="submit"
      className={`bg-black/85 hover:bg-black/90 hover:scale-105 active:scale-95 active:translate-y-1 text-white font-light py-4 px-6 rounded-xl transition duration-300 ease-in-out transform flex items-center justify-center ${className}`}
    >
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2"
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
    </button>
  );
}
