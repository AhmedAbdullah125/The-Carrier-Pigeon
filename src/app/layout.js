import './globals.css';
import '@/src/style/main.css';
import Header from '@/components/Header/Header';
// import Footer from '@/components/footer/Footer';
import ClientProviders from '@/src/utils/providers/ClientProviders';
// import logo from '@/public/images/blue-logo.svg';

export async function generateMetadata() {
  return {
    title: 'TheCarrierPigeon',
    description: 'TheCarrierPigeon',
    keywords: 'TheCarrierPigeon',
    openGraph: {
      title: 'TheCarrierPigeon',
      description: 'TheCarrierPigeon',
      url: 'TheCarrierPigeon-rose.vercel.com',
      siteName: 'TheCarrierPigeon',
      images: [
        {
          url: 'https://TheCarrierPigeon-rose.vercel.app/_next/static/media/blue-logo.62b83cbf.svg',
          width: 1200,
          height: 630,
          alt: 'TheCarrierPigeon',
        },
      ],
      type: 'website',
      locale: 'ar_SA',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning={true}>
        <ClientProviders>
          <Header />
          {children}
          {/* <Footer /> */}
        </ClientProviders>
      </body>
    </html>
  );
}
