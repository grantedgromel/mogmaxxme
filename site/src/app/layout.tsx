import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MogMaxxMe - The AI That Tells You What Your Gym Bros Won't",
  description:
    "Upload your physique photo. Get brutally honest AI analysis. Find out your tier. No cap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <div className="scanlines" />
        {children}
      </body>
    </html>
  );
}
