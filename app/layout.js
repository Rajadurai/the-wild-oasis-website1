import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
import "./_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "The Wild Oasis is a nature retreat offering cozy cabins, outdoor activities, and a tranquil escape from city life. Experience the beauty of nature and unwind in our serene environment.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">{children}</main>
        </div>

        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
