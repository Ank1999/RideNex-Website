import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Ridenex - The Digital Home of Every Biker's Life",
    description: "A complete biker operating system — unifying rides, tours, community, tracking, services, marketplace, and safety into one seamless digital ecosystem.",
    keywords: ["biking", "motorcycle", "rides", "tours", "biker community", "bike tracking", "bike services"],
    authors: [{ name: "Ridenex" }],
    openGraph: {
        title: "Ridenex - The Digital Home of Every Biker's Life",
        description: "A complete biker operating system for modern riders",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
