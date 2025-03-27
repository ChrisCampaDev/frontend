// components/PartnersSection.tsx
import Image from "next/image";
import React from "react";

const PartnersSection: React.FC = () => {
  const partners = [
    "/Medico1.png",
    "/Medico2.png",
    "/Medico1.png",
    "/Medico2.png",
  ];

  return (
    <section className="mb-8">
      <div className="flex justify-center space-x-8 ">
        {partners.map((partner, index) => (
          <Image
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
