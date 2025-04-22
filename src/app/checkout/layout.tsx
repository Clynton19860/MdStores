import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout | Jewell',
  description: 'Complete your purchase with our secure checkout process',
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 