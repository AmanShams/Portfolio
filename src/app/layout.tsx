import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/contact-form-modal";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman-Shams | Portfolio",
  description:
    "Discover Amanullah's front-end developer portfolio featuring innovative projects, modern web technologies, and a passion for clean, user-friendly design. Explore expertise in React, Next.js, Tailwind CSS, and more.",
  keywords: [
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "UI/UX Design",
    "Responsive Web Design",
    "Tailwind CSS",
    "Web Development Projects",
    "Modern Web Technologies",
  ],
  authors: [{ name: "Amanullah", url: "https://amanshams.vercel.app/" }],
  openGraph: {
    title: "Amanullah Shams | Front-End Developer Portfolio",
    description:
      "Explore Amanullah's cutting-edge front-end development projects, utilizing modern frameworks like React, Next.js, and Tailwind CSS.",
    url: "https://amanshams.vercel.app/",
    siteName: "Aman-Shams Portfolio",
    images: [
      {
        url: "https://amanshams.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Amanullah Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanullah | Front-End Developer Portfolio",
    description:
      "Showcasing innovative web projects using React, Next.js, and modern UI/UX practices.",
    images: ["https://amanshams.vercel.app/"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased relative", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children} {/* Main Page Content */}
          <Footer />
          <ContactFormModal />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
