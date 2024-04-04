import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className='max-w-[1400px] mx-auto mt-5 mb-5'> {children}</div>
      <Footer />
    </>
  );
}
