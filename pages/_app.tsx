import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from '@/contexts/Cartcontext';
import { AuthProvider } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

function AppContent({ Component, pageProps }: AppProps) {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default function App(props: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent {...props} />
      </CartProvider>
    </AuthProvider>
  );
}
