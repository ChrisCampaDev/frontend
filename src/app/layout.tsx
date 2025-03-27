// app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Health Care",
  description:
    "Health Care brinda un servicio médico de alta calidad para mejorar tu bienestar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
