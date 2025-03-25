import React from "react";
import { Toaster } from "react-hot-toast";

import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Header />
      <main className="container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
