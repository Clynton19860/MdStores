import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Confirmation | Jewell',
  description: 'Your order has been successfully placed',
};

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 