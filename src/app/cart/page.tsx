import type { Metadata } from 'next';
import Navbar from '@/components/landingPage/Navbar';
import Footer from '@/components/landingPage/Footer';

export const metadata: Metadata = {
  title: 'Shopping Cart | Jewell',
  description: 'Review your shopping cart and proceed to checkout',
};

import CartContent from '@/components/cart/CartContent';

export default function Cart() {
  return (
    <>
      <Navbar />
      <CartContent />
      <Footer />
    </>
  );
} 