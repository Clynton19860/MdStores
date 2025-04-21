import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-semibold font-heading text-primary">
                  DM
                </span>
                <span className="text-2xl font-light font-heading text-black">
                  Stores
                </span>
              </Link>
            </div>
            <p className="text-gray-700 mb-4">
              Luxury jewelry crafted with precision and passion. Each piece tells a unique story of elegance and sophistication.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Pinterest"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium font-heading mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-gray-700 hover:text-primary transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/categories/rings" className="text-gray-700 hover:text-primary transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/categories/necklaces" className="text-gray-700 hover:text-primary transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/categories/earrings" className="text-gray-700 hover:text-primary transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/categories/bracelets" className="text-gray-700 hover:text-primary transition-colors">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-medium font-heading mb-4 text-black">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-700 hover:text-primary transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-700 hover:text-primary transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-700 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-gray-700 hover:text-primary transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium font-heading mb-4 text-black">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">
                  123 Luxury Lane, Prestige City,<br />Gold Coast, Australia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">
                  +61 4 1234 5678
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">
                  info@dmstores.com
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">
                  Mon-Fri: 9am-6pm<br />
                  Sat: 10am-4pm | Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} DM Stores. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm hidden md:inline-block">
                Secure Payment:
              </span>
              
              {/* Payment method icons */}
              <div className="flex items-center space-x-3">
                <div className="bg-white p-1 rounded shadow-sm">
                  <svg className="h-6 w-auto text-gray-600" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" fill="currentColor"/>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" fill="#fff"/>
                    <path d="M15 19h2v-2h-2v2Zm-4 0h2v-2h-2v2Zm-4 0h2v-2H7v2Z" fill="#CAD0D8"/>
                    <path d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1Z" fill="#FCB131"/>
                    <path d="m23 14.4-.9.1c-.1 0-.1 0-.2-.1s-.1-.1-.1-.2l-.2-1.1-.4 2.7c0 .2.1.4.3.4h1.4c.2 0 .4-.2.5-.4l1-4.4c0-.1 0-.3-.2-.1l-1.2 3.1Z" fill="#F69E1E"/>
                    <path d="M31.4 12.2c-.2-.3-.5-.5-1-.7-.3-.1-.3-.3-.2-.5.2-.2.4-.1.5-.1.4.1.6 0 .8-.1l.3-1.8-.2.1c-.2.1-.4.2-.6.1-.2 0-.9 0-1.6-.3-.1 0-.1 0-.1-.1l.1 1c.2.3.4.6.7.8.3.2.4.5.3.7-.1.2-.2.4-.5.4l-.2.1c-.3 0-.7-.1-1-.3-.3-.2-.6-.3-1-.3-.4 0-.8.2-1.1.6-.4.6-.5 1.2-.3 1.9.2.7.7 1.1 1.5 1.3.1 0 .2.1.2.1l-.1-1.2c-.1-.3-.3-.5-.5-.7-.2-.2-.4-.4-.3-.7.1-.2.2-.4.5-.4h.2c.5 0 1 .2 1.4.6.2.2.5.3.8.3.3 0 .6-.1.9-.4.3-.3.6-.7.7-1.2 0-.3-.1-.3-.3-.5Z" fill="#FCB131"/>
                  </svg>
                </div>
                <div className="bg-white p-1 rounded shadow-sm">
                  <svg className="h-6 w-auto text-gray-600" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" fill="currentColor"/>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" fill="#fff"/>
                    <path d="M23 13.1c0-.5.2-.9.5-1.2.2-.2.5-.4.9-.5.4-.1.7-.1 1.1 0 .3.1.6.3.9.5.2.3.4.6.4 1 .1.4 0 .8-.1 1.2-.2.4-.4.7-.7 1-.3.2-.6.4-.9.5-.4.1-.7.1-1.1 0-.3-.1-.6-.2-.9-.5-.2-.2-.4-.5-.5-.9-.1-.3-.1-.7 0-1.1h.4Z" fill="#7672CF"/>
                    <path d="M17.9 7c-.1-.4-.3-.8-.6-1.1-.3-.3-.7-.5-1.1-.5-.4-.1-.7 0-1.1.1-.4.1-.7.3-1 .7l-.6 1c-.1.3-.2.7-.2 1 .1.4.2.7.5 1 .3.3.6.5 1 .6.4.1.7.1 1.1 0 .4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .1-.4.1-.8 0-1.2h.4Z" fill="#EB001B"/>
                    <path d="m19.4 15.1-.3-.4-.4.1h.7ZM18.7 7.7c.1.4.3.8.6 1.1.3.3.7.5 1.1.6.4.1.8 0 1.1-.1.4-.1.7-.4.9-.7l.6-1c.1-.3.2-.7.1-1-.1-.4-.3-.7-.5-1-.3-.3-.6-.5-1-.6-.4-.1-.8-.1-1.1 0-.4.1-.7.3-1 .6-.3.3-.5.6-.6 1-.1.4-.1.8 0 1.1h-.2ZM13.1 14.3c.1.4.3.8.6 1.1.3.3.7.5 1.1.6.4.1.8 0 1.1-.1.4-.1.7-.4.9-.7l.6-1c.1-.3.2-.7.1-1-.1-.4-.3-.7-.5-1-.3-.3-.6-.5-1-.6-.4-.1-.8-.1-1.1 0-.4.1-.7.3-1 .6-.3.3-.5.6-.6 1-.1.4-.1.8 0 1.1h-.2Z" fill="#0099DF"/>
                    <path d="m15.1 8.9.4-.3.1-.4h-.8l.3.7Z" fill="#007BC7"/>
                  </svg>
                </div>
                <div className="bg-white p-1 rounded shadow-sm">
                  <svg className="h-6 w-auto text-gray-600" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" fill="currentColor"/>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" fill="#fff"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="m21.9 9.4-2.2-2.2c-.9-.7-2.1-.8-3.1-.3-.8.5-1.3 1.3-1.5 2.2h6.8Z" fill="#FF5F00"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.2 9.6v7.8h8.9v-7.9l-8.9.1Z" fill="#EB001B"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.9 17.6c.9-.7 1.2-1.8 1.2-2.8 0-1-.6-2.1-1.2-2.7-.9-.7-1.9-.8-3-.8-1.2 0-2.2.2-3.1.9-.9.7-1.5 1.7-1.5 2.9 0 1 .5 2 1.3 2.6.9.7 2 .8 3.2.8 1.1 0 2.2-.1 3.1-.9Z" fill="#F79E1B"/>
                  </svg>
                </div>
                <div className="bg-white p-1 rounded shadow-sm">
                  <svg className="h-6 w-auto text-gray-600" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" fill="currentColor"/>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" fill="#fff"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.4 11.3c.3-.3.5-.7.6-1.1.1-.4 0-.9-.2-1.3s-.5-.7-.9-1c-.4-.2-.8-.3-1.3-.4H9.5V17h2.9v-2.9h.2l2.3 2.9h3.4l-3.2-3.6c.9-.4 1.6-1.1 1.6-2.1h-2.3ZM12.4 12h-1.3v-2.5h1.2c.7 0 1.5.2 1.5 1.2 0 1-.8 1.3-1.4 1.3Z" fill="#0C4EA0"/>
                    <path d="M25.2 7.5h-3.7L17.7 17h3.1l.5-1.3h2.9l.5 1.3h3.4l-2.9-9.5Zm-3.1 6.6 1-3 1 3h-2Z" fill="#0C4EA0"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 