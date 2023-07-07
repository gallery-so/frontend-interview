import { Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "../globals.css";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TooltipProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </TooltipProvider>
  );
}
