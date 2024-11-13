// app/layout.tsx
import "./globals.css";
import { Providers } from "./Providers";
import { TooltipProvider } from "@/components/ui/tooltip"; // Adjust the import path if needed

export const metadata = {
  title: "Flu Fighters",
  description: "A flu simulation app for middle school students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TooltipProvider>
            <header>
              <h1>Flu Fighters</h1>
            </header>
            <main>{children}</main>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
