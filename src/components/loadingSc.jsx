// src/components/LoadingScreen.jsx
import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    </div>
  </div>
  );
}
