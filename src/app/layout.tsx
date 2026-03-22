import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/navbar";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import { ContextProvider} from "./context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="scroll-smooth!" lang="en">
      <body>
        <ContextProvider>
          <div className="isolate relative">
            <Header />
            {children}

            <Footer />
            <ScrollToTop />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
