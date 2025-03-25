import React from "react";

const LayoutAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default LayoutAdmin;
