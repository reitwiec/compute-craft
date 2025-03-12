import React from "react";

export default function SubmitButton({ text = "Submit", className = "" }) {
  return (
    <button
      type="submit"
      className={`bg-black/85 hover:bg-black/90 hover:scale-105 active:scale-95 active:translate-y-1 text-white font-light py-4 px-6 rounded-xl transition duration-300 ease-in-out transform flex items-center justify-center ${className}`}
    >
      <span>{text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.293 14.707a1 1 0 010-1.414L13.586 5H10a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0V6.414l-8.293 8.293a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
