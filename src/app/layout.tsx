import "./globals.css";

export const metadata = {
  title: "Audfolio - Audrea Tabadero",
  description: "Audrea Tabadero’s Computer Vision & ML portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
