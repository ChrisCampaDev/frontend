// components/PartnersSection.tsx
import React from "react";

const PartnersSection: React.FC = () => {
  const partners = ["/next.svg", "/next.svg", "/next.svg", "/next.svg"];

  return (
    <section className="mb-8">
      <div className="flex justify-center space-x-8">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
            width={100}
            height={50}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
