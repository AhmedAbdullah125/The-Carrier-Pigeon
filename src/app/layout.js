import '@/src/app/globals.css';
import '@/src/style/main.css';
import Header from '@/components/Header/Header';
import ClientProviders from '@/src/utils/providers/ClientProviders';
import Footer from '@/components/Footer/Footer';
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
          url: 'http://localhost:3000/_next/static/media/15.468e1ad0.png',
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
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
