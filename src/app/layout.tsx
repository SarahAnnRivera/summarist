import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/Provider";
import AuthModal from "@/components/AuthModal";



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Summarist",
  description: "Read and listen to powerful book summaries with Summarist.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          {children}
          <AuthModal />
          </ReduxProvider>
        </body>
    </html>
  );
}
