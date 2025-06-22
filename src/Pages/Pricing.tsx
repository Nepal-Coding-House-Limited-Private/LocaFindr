import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Briefcase, Star, Layers } from 'lucide-react';
import { RiBankCard2Line } from 'react-icons/ri';
import Navbar from '../components/Navbar';

type Plan = {
  banner: string;
  title: string;
  price: {
    weekly?: string;
    monthly: string;
    annually?: string;
  };
  features: string[];
  icon: React.ReactNode;
  needsRenewal?: boolean;
};

const individualPlans: Plan[] = [
  {
    banner: 'Small Audience',
    title: 'Free User',
    price: { monthly: 'Free' },
    features: ['Basic Search', 'Limited Access'],
    icon: <User size={28} className="text-sky-500" />,
  },
  {
    banner: 'Growing User',
    title: 'Pro User',
    price: { weekly: 'Rs. 49/wk', monthly: 'Rs. 199/mo', annually: 'Rs. 1899/yr' },
    features: ['Advanced Search', 'Priority Support', 'No Ads'],
    icon: <Star size={28} className="text-yellow-500" />,
    needsRenewal: true,
  },
  {
    banner: 'Elite Access',
    title: 'Elite User',
    price: { weekly: 'Rs. 99/wk', monthly: 'Rs. 399/mo', annually: 'Rs. 3899/yr' },
    features: ['All Pro Features', 'Early Access', 'VIP Badge'],
    icon: <Layers size={28} className="text-sky-500" />,
    needsRenewal: true,
  },
];

const shopPlans: Plan[] = [
  {
    banner: 'Starter Pack',
    title: 'Starter Shop',
    price: { monthly: 'Rs. 499/mo' },
    features: ['List Your Business', 'Basic Analytics'],
    icon: <Briefcase size={28} className="text-sky-500" />,
    needsRenewal: true,
  },
  {
    banner: 'Growth Pack',
    title: 'Growth Shop',
    price: { monthly: 'Rs. 999/mo' },
    features: ['Featured Listings', 'Advanced Analytics', 'Support'],
    icon: <Star size={28} className="text-yellow-500" />,
    needsRenewal: true,
  },
  {
    banner: 'Premium Pack',
    title: 'Premium Shop',
    price: { monthly: 'Rs. 1499/mo' },
    features: ['All Tools', 'Custom Branding', 'Dedicated Manager'],
    icon: <Layers size={28} className="text-green-500" />,
    needsRenewal: true,
  },
];

function Pricing() {
  const [selectedType, setSelectedType] = useState<'individual' | 'shop' | null>(null);
  const [index, setIndex] = useState(0);
  const pricingRef = useRef<HTMLDivElement>(null);

  const handleChooseType = (type: 'individual' | 'shop') => {
    setSelectedType(type);
    setTimeout(() => {
      pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const handlePrev = () => {
    const plans = selectedType === 'shop' ? shopPlans : individualPlans;
    setIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const handleNext = () => {
    const plans = selectedType === 'shop' ? shopPlans : individualPlans;
    setIndex((prev) => (prev + 1) % plans.length);
  };

  const plans = selectedType === 'shop' ? shopPlans : individualPlans;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 font-sans">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-800">
            Start Your Journey With Us 🚀
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Choose the path that fits you best. Whether you're an individual creator or a growing business, we’ve got you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleChooseType('individual')}
              className="bg-sky-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-sky-600 transition"
            >
              I'm an Individual
            </button>
            <button
              onClick={() => handleChooseType('shop')}
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
            >
              I'm a Shop Owner
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {selectedType && (
          <div ref={pricingRef} className="mt-16 flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-4 w-full max-w-6xl flex-wrap sm:flex-nowrap px-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-gray-100 hover:bg-sky-100 transition shadow-sm border border-gray-200"
                aria-label="Previous"
              >
                <ChevronLeft className="text-sky-500 w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={plans[index]?.title || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border p-5 sm:p-6 rounded-2xl shadow-xl w-full max-w-sm flex flex-col items-center text-center"
                >
                  <div className={`w-full py-2 text-lg font-bold rounded ${selectedType === 'shop' ? 'bg-yellow-400 text-gray-900' : 'bg-sky-100 text-sky-600'}`}>
                    {plans[index].banner}
                  </div>
                  <h3 className="text-2xl font-bold mt-4">{plans[index].title}</h3>
                  <p className="text-sky-500 text-2xl font-semibold mt-2">{plans[index].price.monthly}</p>
                  {plans[index].needsRenewal && (
                    <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                      <RiBankCard2Line className="text-gray-400" size={14} />
                      Renews every 3 months
                    </p>
                  )}
                  <ul className="mt-4 text-sm text-gray-700 space-y-2 w-full text-left">
                    {plans[index].features.map((feature, idx) => (
                      <li key={idx} className="bg-gray-50 rounded px-3 py-1 shadow-sm flex items-center gap-2">
                        <span className="text-green-500 text-base">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-semibold transition">
                    Choose Plan
                  </button>
                  <div className="mt-3">{plans[index].icon}</div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-sky-100 transition shadow-sm border border-gray-200"
                aria-label="Next"
              >
                <ChevronRight className="text-sky-500 w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Pricing;
