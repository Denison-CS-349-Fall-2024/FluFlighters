// app/layout.tsx
import "./globals.css";
import { Providers } from "./Providers";

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
          <header>
            <h1>Flu Fighters</h1>
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
