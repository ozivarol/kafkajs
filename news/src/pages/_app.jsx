import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-[100vh] justify-between relative">
      <Component {...pageProps} />
    </div>
  );
}
