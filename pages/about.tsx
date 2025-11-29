import type { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ajocks Store</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Your trusted partner for quality outdoor gear since 2024
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Founded in August 2024 in Nigeria, Ajocks Store has been dedicated to providing outdoor enthusiasts 
            with high-quality gear and apparel at affordable prices. Our journey began with a simple mission: 
            to make premium outdoor equipment accessible to everyone who loves adventure.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Over the years, we've built a reputation for excellence, earning an impressive 4.92-star rating 
            from 438 satisfied customers who trust us for their outdoor needs.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Wide Product Range</h3>
            </div>
            <p className="text-gray-700">
              We offer a diverse selection of outdoor products, including premium clothing, sportswear, 
              and essential gear for all your adventures.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Competitive Pricing</h3>
            </div>
            <p className="text-gray-700">
              Quality doesn't have to break the bank. We're committed to offering affordable prices 
              without compromising on the quality you deserve.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Excellent Customer Service</h3>
            </div>
            <p className="text-gray-700">
              Our knowledgeable and friendly staff are always ready to help. We pride ourselves on 
              providing exceptional support to ensure your complete satisfaction.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fast & Reliable Shipping</h3>
            </div>
            <p className="text-gray-700">
              Orders are processed promptly and delivered quickly, often within a few days. 
              Track your order every step of the way with our reliable shipping service.
            </p>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center mb-2">
              <div className="flex text-yellow-400 text-2xl">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">4.92 out of 5</p>
            <p className="text-gray-600">Based on 438 customer reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-700 text-sm">
                "Orders arrive quickly, often within a few days. The tracking system keeps me informed every step of the way!"
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Quality Products</h4>
              <p className="text-gray-700 text-sm">
                "Impressed with the durability and performance of my purchases. The quality exceeds my expectations every time!"
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Helpful Staff</h4>
              <p className="text-gray-700 text-sm">
                "The team is knowledgeable, friendly, and always responsive to my inquiries. Best customer service I've experienced!"
              </p>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Commitment to You</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-700 mb-4">
                Every product in our store is carefully selected and tested to ensure it meets our high standards. 
                We stand behind the quality of everything we sell.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Satisfaction</h3>
              <p className="text-gray-700 mb-4">
                Your satisfaction is our top priority. If you're not completely happy with your purchase, 
                our team is here to make it right.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Practices</h3>
              <p className="text-gray-700 mb-4">
                We're committed to environmental responsibility, working with suppliers who share our 
                values and implementing eco-friendly practices wherever possible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focus</h3>
              <p className="text-gray-700 mb-4">
                We believe in giving back to the outdoor community that has supported us. We regularly 
                participate in conservation efforts and outdoor education programs.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Join thousands of satisfied customers who trust Ajocks Store for their outdoor needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/cart"
              className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
            >
              View Cart
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-100 mb-2">Have questions? We're here to help!</p>
          <p className="text-gray-100 font-semibold">
            Contact us at{' '}
            <a href="mailto:support@ajocksstore.com" className="text-blue-600 hover:text-blue-700">
              support@ajocksstore.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
