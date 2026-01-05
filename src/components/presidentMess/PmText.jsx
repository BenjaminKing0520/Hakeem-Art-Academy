// src/components/subHeroSection/PmText.jsx
import React from "react";

const PmText = () => {
  return (
    <div className="w-full bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
        Our Story
      </h2>

      {/* Quote */}
      <p className="text-gray-700 leading-relaxed mb-6 relative pl-6">
        <span className="absolute -left-2 top-0 text-green-500 text-3xl">“</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Saepe,
        earum itaque totam neque consequuntur error nostrum quisquam velit
        architecto? Modi dolor libero voluptas, excepturi, quos sequi
        obcaecati dolores sit, distinctio officiis pariatur aliquid
        reiciendis.
      </p>

      {/* Signature */}
      <div className="mt-6 flex items-center gap-4">
        <span className="text-3xl">✍️</span>
        <span className="text-gray-800 font-semibold text-lg">Dr. John Doe</span>
      </div>
    </div>
  );
};

export default PmText;
