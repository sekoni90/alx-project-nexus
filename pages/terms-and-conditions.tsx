import type { NextPage } from 'next';
import Link from 'next/link';

const TermsAndConditions: NextPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl text-blue-100">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-blue-200 mt-4">Last Updated: November 29, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Welcome to Ajocks Store. These Terms and Conditions ("Terms") govern your use of our website and 
              the purchase of products from Ajocks Store GmbH ("we," "our," or "us"). By accessing our website 
              or making a purchase, you agree to be bound by these Terms. If you do not agree with any part of 
              these Terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. General Information</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <p className="text-gray-900 font-semibold mb-2">Ajocks Store GmbH</p>
              <p className="text-gray-700">Map placeholder - Outdoor No 2, Adeyeye Street</p>
              <p className="text-gray-700">Mile 12 Kosofe 100241 Lagos, Nigeria</p>
              <p className="text-gray-700 mt-3">Email: support@ajocksstore.com</p>
              <p className="text-gray-700">Phone: +234(90) 678 000 20
                    +234(70) 659 351 94</p>
              <p className="text-gray-700 mt-3">VAT ID: DE123456789</p>
              <p className="text-gray-700">Commercial Register: HRB 12345 B</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Use of Our Website</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Eligibility</h3>
            <p className="text-gray-700 mb-4">
              You must be at least 18 years old to make purchases on our website. By placing an order, you 
              confirm that you are of legal age and have the legal capacity to enter into binding contracts.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Account Registration</h3>
            <p className="text-gray-700 mb-4">
              To access certain features, you may need to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Providing accurate and complete information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Prohibited Activities</h3>
            <p className="text-gray-700 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use our website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our website</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Collect or harvest information about other users</li>
              <li>Impersonate any person or entity</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Products and Orders</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Product Information</h3>
            <p className="text-gray-700 mb-6">
              We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant 
              that product descriptions or other content is error-free. If a product is not as described, your 
              sole remedy is to return it in accordance with our return policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Pricing</h3>
            <p className="text-gray-700 mb-4">
              All prices are displayed in Euros (EUR) and include applicable VAT unless otherwise stated. We 
              reserve the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Change prices at any time without prior notice</li>
              <li>Correct pricing errors, even after an order has been placed</li>
              <li>Cancel orders placed at incorrect prices</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Order Acceptance</h3>
            <p className="text-gray-700 mb-6">
              Your order constitutes an offer to purchase products. We reserve the right to accept or decline 
              any order for any reason. Order confirmation does not constitute acceptance. Acceptance occurs 
              when we ship the products or send you a shipping confirmation email.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Product Availability</h3>
            <p className="text-gray-700 mb-6">
              All products are subject to availability. If a product becomes unavailable after you place an 
              order, we will notify you and offer a refund or alternative product.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Payment</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Payment Methods</h3>
            <p className="text-gray-700 mb-4">
              We accept the following payment methods:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Credit and debit cards (Visa, Mastercard, American Express)</li>
              <li>PayPal</li>
              <li>Bank transfer (for orders over €500)</li>
              <li>Other payment methods as displayed at checkout</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Payment Security</h3>
            <p className="text-gray-700 mb-6">
              All payment transactions are processed securely through trusted third-party payment processors. 
              We do not store your complete credit card information on our servers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Payment Authorization</h3>
            <p className="text-gray-700 mb-6">
              By providing payment information, you authorize us to charge the total amount of your order, 
              including products, shipping, and applicable taxes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Shipping and Delivery</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Shipping Areas</h3>
            <p className="text-gray-700 mb-6">
              We ship to addresses within the European Union and selected international destinations. Shipping 
              costs and delivery times vary by location and will be displayed at checkout.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Delivery Times</h3>
            <p className="text-gray-700 mb-4">
              Estimated delivery times are provided for guidance only and are not guaranteed. Delivery times may 
              vary due to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Product availability</li>
              <li>Shipping destination</li>
              <li>Customs clearance (for international orders)</li>
              <li>Weather conditions or other unforeseen circumstances</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Risk of Loss</h3>
            <p className="text-gray-700 mb-6">
              Risk of loss and title for products pass to you upon delivery to the carrier. We are not 
              responsible for lost or stolen packages after delivery confirmation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Returns and Refunds</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Right of Withdrawal (EU Customers)</h3>
            <p className="text-gray-700 mb-6">
              In accordance with EU consumer protection laws, you have the right to withdraw from your purchase 
              within 14 days of receiving the products, without giving any reason. To exercise this right, you 
              must inform us of your decision and return the products in their original condition.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Return Conditions</h3>
            <p className="text-gray-700 mb-4">
              To be eligible for a return:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Products must be unused and in original packaging</li>
              <li>All tags and labels must be attached</li>
              <li>Proof of purchase must be provided</li>
              <li>Return must be initiated within the specified timeframe</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Refund Process</h3>
            <p className="text-gray-700 mb-6">
              Once we receive and inspect your return, we will process your refund within 14 days. Refunds 
              will be issued to the original payment method. Shipping costs are non-refundable unless the 
              return is due to our error.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.4 Exchanges</h3>
            <p className="text-gray-700 mb-6">
              We offer exchanges for different sizes or colors, subject to availability. Contact our customer 
              service team to arrange an exchange.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Warranty and Liability</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Product Warranty</h3>
            <p className="text-gray-700 mb-6">
              All products come with a manufacturer's warranty as specified. We guarantee that products are 
              free from defects in materials and workmanship under normal use. Warranty claims must be made 
              within the warranty period.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Limitation of Liability</h3>
            <p className="text-gray-700 mb-6">
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, 
              special, or consequential damages arising from your use of our website or products. Our total 
              liability shall not exceed the amount you paid for the products.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">8.3 Statutory Rights</h3>
            <p className="text-gray-700 mb-6">
              Nothing in these Terms affects your statutory rights as a consumer under applicable law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on our website, including text, images, logos, graphics, and software, is the 
              property of Ajocks Store or its licensors and is protected by copyright, trademark, and other 
              intellectual property laws. You may not reproduce, distribute, or create derivative works without 
              our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">10. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-6">
              Your use of our website is also governed by our Privacy Policy, which explains how we collect, 
              use, and protect your personal information. By using our website, you consent to our data 
              practices as described in the Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">11. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.1 Governing Law</h3>
            <p className="text-gray-700 mb-6">
              These Terms are governed by the laws of the Federal Republic of Germany, without regard to its 
              conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.2 Jurisdiction</h3>
            <p className="text-gray-700 mb-6">
              Any disputes arising from these Terms or your use of our website shall be subject to the 
              exclusive jurisdiction of the courts of Berlin, Germany.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">11.3 Alternative Dispute Resolution</h3>
            <p className="text-gray-700 mb-6">
              EU consumers may use the European Commission's Online Dispute Resolution platform at 
              https://ec.europa.eu/consumers/odr/
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">12. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting on our website. Your continued use of our website after changes are posted 
              constitutes your acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">13. Severability</h2>
            <p className="text-gray-700 mb-6">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions 
              shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">14. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <p className="text-gray-900 font-semibold mb-2">Ajocks Store GmbH</p>
              <p className="text-gray-700">Customer Service Department</p>
              <p className="text-gray-700">Outdoor No 2, Adeyeye Street</p>
              <p className="text-gray-700">Mile 12 Kosofe 100241 Lagos, Nigeria</p>
              <p className="text-gray-700 mt-3">
                Email:{' '}
                <a href="mailto:legal@ajocksstore.com" className="text-blue-600 hover:text-blue-700">
                  legal@ajocksstore.com
                </a>
              </p>
              <p className="text-gray-700">
                Phone:{' '}
                <a href="tel:+4912345678" className="text-blue-600 hover:text-blue-700">
                  +234(90) 678 000 20
                    +234(70) 659 351 94
                </a>
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-600 text-center">
                By using our website and services, you acknowledge that you have read, understood, and agree 
                to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/privacy-policy" className="flex items-center text-blue-600 hover:text-blue-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Privacy Policy
            </Link>
            <Link href="/contact" className="flex items-center text-blue-600 hover:text-blue-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
