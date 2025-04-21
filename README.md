# Jewell - Fine Jewelry Store

A sophisticated online store for premium jewelry pieces, built with Next.js, React, and Tailwind CSS.

## Features

- **Modern UI**: Clean, responsive design with attention to detail
- **Product Catalog**: Browse jewelry by categories (rings, necklaces, earrings, bracelets)
- **Product Details**: View comprehensive product information, specifications, and images
- **Shopping Cart**: Add products to cart, adjust quantities, and proceed to checkout
- **Contact Form**: Get in touch with the store for inquiries or custom orders (with email functionality)
- **About Page**: Learn about the store's history, values, and team

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component for optimized loading
- **Email Integration**: Nodemailer for contact form submission

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Copy the contents from `.env.example` and update with your actual values
   - For email functionality, update the email configuration variables

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The project is ready for deployment to platforms such as Vercel or Netlify.

## Email Integration (Nodemailer)

The contact form is fully integrated with Nodemailer for email functionality. When a user submits the contact form:

1. The form data is sent to the API route at `/api/contact`
2. The server validates the data and uses Nodemailer to send an email
3. The user receives confirmation of successful submission

To configure this feature for production:

1. Update the email configuration in your `.env` file with your SMTP server details:
   ```
   EMAIL_HOST=your-smtp-server.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@example.com
   EMAIL_PASSWORD=your-email-password
   EMAIL_FROM=noreply@yourstore.com
   EMAIL_TO=admin@yourstore.com
   ```

2. For secure email transmission, use an app-specific password or OAuth2 if your email provider supports it.

3. Test the email functionality in a staging environment before deploying to production.

## Payment Integration

The checkout process will be integrated with a payment processor in the future.

## License

[MIT License](LICENSE)
