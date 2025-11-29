import type { NextPage } from 'next';
import Link from 'next/link';

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Your privacy is important to us
          </p>
          <p className="text-sm text-blue-200 mt-4">Last Updated: November 29, 2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              At Ajocks Store ("we," "our," or "us"), we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or make a purchase from us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website or place an order, we may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name and contact information (email address, phone number, shipping address)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Account credentials (username, password)</li>
              <li>Order history and preferences</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information when you visit our website:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Order Processing:</strong> To process and fulfill your orders, including shipping and delivery</li>
              <li><strong>Customer Service:</strong> To respond to your inquiries and provide customer support</li>
              <li><strong>Account Management:</strong> To create and manage your account</li>
              <li><strong>Marketing:</strong> To send you promotional emails about new products, special offers, and updates (with your consent)</li>
              <li><strong>Website Improvement:</strong> To analyze usage patterns and improve our website functionality</li>
              <li><strong>Fraud Prevention:</strong> To detect and prevent fraudulent transactions and protect our business</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping companies, email service providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through trusted providers</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small 
              text files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Keep you logged in to your account</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and recommendations</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookies through your browser settings. However, disabling cookies may affect your ability 
              to use certain features of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">
              Under applicable data protection laws (including GDPR), you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw your consent for marketing communications at any time</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@ajocksstore.com" className="text-blue-600 hover:text-blue-700">
                privacy@ajocksstore.com
              </a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our website is not intended for children under the age of 16. We do not knowingly collect personal 
              information from children. If you believe we have collected information from a child, please contact 
              us immediately so we can delete it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              As we are based in Germany, your information is primarily processed within the European Union. If we 
              transfer data outside the EU, we ensure appropriate safeguards are in place to protect your information 
              in accordance with GDPR requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required by law. When we no longer need your 
              information, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
              requirements. We will notify you of any material changes by posting the updated policy on our website 
              and updating the "Last Updated" date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <p className="text-gray-900 font-semibold mb-2">Ajocks Store GmbH</p>
              <p className="text-gray-700">Outdoor No 2, Adeyeye Street</p>
              <p className="text-gray-700">Mile 12 Kosofe 100241 Lagos, Nigeria</p>
              <p className="text-gray-700 mt-3">
                Email:{' '}
                <a href="mailto:privacy@ajocksstore.com" className="text-blue-600 hover:text-blue-700">
                  privacy@ajocksstore.com
                </a>
              </p>
              <p className="text-gray-700">
                Phone:{' '}
                <a href="tel:+2347065935194" className="text-blue-600 hover:text-blue-700">
                  +234(90) 678 000 20
                    +234(70) 659 351 94
                </a>
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Data Protection Officer:</strong> For specific data protection inquiries, you can contact 
                our Data Protection Officer at{' '}
                <a href="mailto:dpo@ajocksstore.com" className="text-blue-600 hover:text-blue-700">
                  dpo@ajocksstore.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Policies</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/terms-and-conditions" className="flex items-center text-blue-600 hover:text-blue-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Terms and Conditions
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

export default PrivacyPolicy;
