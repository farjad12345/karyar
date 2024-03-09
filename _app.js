import "@/styles/globals.css";
import localFont from "@next/font/local";
const Lobster = localFont({
  src: "../public/fonts/Gandom.ttf",
});
export default function App({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />;
    </>
)}
