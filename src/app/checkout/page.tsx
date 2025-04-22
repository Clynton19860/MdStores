'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/app/contexts/CartContext';
import Navbar from '@/components/landingPage/Navbar';
import Footer from '@/components/landingPage/Footer';

// Metadata doesn't work with 'use client', need to move it to a separate layout file
// export const metadata: Metadata = {
//   title: 'Checkout | Jewell',
//   description: 'Complete your purchase with our secure checkout process',
// };

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  nameOnCard: string;
  expiryDate: string;
  cvv: string;
}

const initialShippingInfo: ShippingInfo = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: 'US',
};

const initialPaymentInfo: PaymentInfo = {
  cardNumber: '',
  nameOnCard: '',
  expiryDate: '',
  cvv: '',
};

const CheckoutContent = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [step, setStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>(initialShippingInfo);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>(initialPaymentInfo);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/cart');
    }
  }, [cartItems, router]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleShippingInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const goToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart and redirect to success page
    clearCart();
    router.push('/checkout/success');
  };

  const isShippingFormValid = () => {
    return Object.values(shippingInfo).every(value => value.trim() !== '');
  };

  const isPaymentFormValid = () => {
    return Object.values(paymentInfo).every(value => value.trim() !== '');
  };

  const calculateTax = () => {
    return totalPrice * 0.07; // 7% tax rate
  };

  const calculateShipping = () => {
    return 10.99; // Flat shipping rate
  };

  const calculateTotal = () => {
    return totalPrice + calculateTax() + calculateShipping();
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Checkout</h1>
          <p className="mt-2 text-sm text-gray-600">
            {step === 1 ? 'Enter your shipping details' : 'Complete your payment'}
          </p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <div className={`flex items-center ${step >= 1 ? 'text-pink-500' : 'text-gray-400'}`}>
              <div className={`rounded-full h-7 w-7 flex items-center justify-center border-2 ${step >= 1 ? 'border-pink-500 bg-pink-50' : 'border-gray-300'}`}>
                <span className="text-sm font-medium">1</span>
              </div>
              <span className="ml-2 text-sm font-medium">Shipping</span>
            </div>
            <div className="h-0.5 w-10 bg-gray-200"></div>
            <div className={`flex items-center ${step >= 2 ? 'text-pink-500' : 'text-gray-400'}`}>
              <div className={`rounded-full h-7 w-7 flex items-center justify-center border-2 ${step >= 2 ? 'border-pink-500 bg-pink-50' : 'border-gray-300'}`}>
                <span className="text-sm font-medium">2</span>
              </div>
              <span className="ml-2 text-sm font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <div className="lg:col-span-7">
            {step === 1 ? (
              <form onSubmit={goToPayment} className="bg-white p-6 rounded-sm border border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={shippingInfo.firstName}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={shippingInfo.lastName}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={shippingInfo.zip}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <select
                      id="country"
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleShippingInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    disabled={!isShippingFormValid()}
                  >
                    Continue to Payment
                  </button>
                </div>
                
                <div className="mt-4 text-center">
                  <Link href="/cart" className="text-sm text-pink-600 hover:text-pink-700">
                    Return to cart
                  </Link>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-sm border border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Payment Method</h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Payment Options</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <input
                      id="credit-card"
                      name="payment-method"
                      type="radio"
                      checked
                      className="h-4 w-4 text-pink-500 focus:ring-pink-500 border-gray-300"
                    />
                    <label htmlFor="credit-card" className="text-sm text-gray-700">Credit Card</label>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={handlePaymentInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">Name on card</label>
                    <input
                      type="text"
                      id="nameOnCard"
                      name="nameOnCard"
                      value={paymentInfo.nameOnCard}
                      onChange={handlePaymentInfoChange}
                      className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-x-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry date (MM/YY)</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={paymentInfo.expiryDate}
                        onChange={handlePaymentInfoChange}
                        className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentInfoChange}
                        className="mt-1 block w-full border-gray-300 rounded-sm shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm px-3 py-2 border"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-4 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 flex items-center justify-center"
                    disabled={isProcessing || !isPaymentFormValid()}
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Complete Order'
                    )}
                  </button>
                </div>
                
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-pink-600 hover:text-pink-700"
                  >
                    Return to shipping
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 mt-10 lg:mt-0">
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
              
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-4 flex">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm border border-gray-200">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-sm font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
                          </div>
                          {item.options && (
                            <p className="mt-1 text-sm text-gray-500">
                              {Object.entries(item.options)
                                .map(([key, value]) => `${key}: ${value}`)
                                .join(', ')}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty {item.quantity}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium text-gray-900">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Shipping</span>
                  <span className="text-sm font-medium text-gray-900">{formatPrice(calculateShipping())}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Tax</span>
                  <span className="text-sm font-medium text-gray-900">{formatPrice(calculateTax())}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-gray-900">Total</span>
                    <span className="text-base font-medium text-gray-900">{formatPrice(calculateTotal())}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="rounded-sm bg-white px-4 py-3 border border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">Secure Checkout</h3>
                      <div className="mt-1 text-xs text-gray-500">
                        <p>Your payment information is secured</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <Navbar />
      <CheckoutContent />
      <Footer />
    </>
  );
};

export default CheckoutPage; 