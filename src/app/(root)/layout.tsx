export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='max-w-[1400px] mx-auto mt-5 mb-5'> {children}</div>
    </>
  );
}
