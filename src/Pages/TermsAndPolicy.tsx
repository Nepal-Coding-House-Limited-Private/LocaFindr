import React from 'react';
import Navbar from '../components/Navbar';

const TermsAndPolicy: React.FC = () => (
  <>
    <Navbar />
    <main className="max-w-3xl mx-auto py-12 px-4 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-red-600">Terms & Privacy Policy</h1>
      <section className="mb-10">
        <h2 className="text-3xl font-extrabold mb-3 text-red-500">Motive of LocaFindr</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          LocaFindr exists to revolutionize how people and businesses discover local services, products, and experiences — fast, reliable, and hyper-relevant. In a world drowning in generic search results, LocaFindr cuts through the noise by connecting users to the exact local spots they need, when they need them. We empower businesses to get discovered by their ideal audience, boosting visibility and driving real growth. Simply put, LocaFindr makes local discovery effortless, accurate, and insanely effective.
        </p>
        <h3 className="text-2xl font-bold mb-2 text-blue-700">Why Users Will Pay for LocaFindr</h3>
        <ul className="list-disc pl-6 space-y-3 text-base text-gray-700">
          <li><span className="font-semibold text-red-600">Time is money — and LocaFindr saves both:</span> Users pay because it cuts down the endless scrolling and confusing searches. They get laser-focused local results in seconds. That convenience is worth the cost, especially if you’re a busy pro or a business owner.</li>
          <li><span className="font-semibold text-red-600">Exclusive, quality data:</span> If LocaFindr offers verified, up-to-date, and curated info that you can’t find anywhere else, users will pay for that trust. No more outdated listings or sketchy recommendations.</li>
          <li><span className="font-semibold text-red-600">Business owners need customers, fast:</span> For businesses, paying means serious exposure to targeted local customers who actually want their service. It’s like having a personal marketing team without the crazy price tag.</li>
          <li><span className="font-semibold text-red-600">Premium features that add serious value:</span> Stuff like advanced analytics, customer insights, priority listings, or direct chat with prospects? These extras make paying a no-brainer for users who want an edge.</li>
          <li><span className="font-semibold text-red-600">Seamless user experience:</span> No annoying ads, no spam, just smooth, slick interaction. People hate clutter and pay for clean, efficient tools.</li>
          <li><span className="font-semibold text-red-600">Community and trust:</span> If users feel part of a trusted, localized network where reviews and connections matter, they’ll invest to stay in the loop and keep getting value.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Terms of Service</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>By using this site, you agree to comply with all applicable laws and regulations.</li>
          <li>You may not use the service for any unlawful or prohibited purpose.</li>
          <li>We reserve the right to modify or terminate the service at any time without notice.</li>
          <li>All content and data are provided "as is" without warranty of any kind.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Privacy Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We respect your privacy and are committed to protecting your personal information.</li>
          <li>We may collect basic usage data to improve our services, but we do not sell your data to third parties.</li>
          <li>Cookies may be used for authentication and analytics purposes.</li>
          <li>You can contact us for any privacy-related concerns or data removal requests.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p>If you have any questions about our terms or privacy policy, please contact us at <a href="mailto:support@yourdomain.com" className="text-blue-600 underline">support@yourdomain.com</a>.</p>
      </section>
    </main>
   
  </>
);

export default TermsAndPolicy;
