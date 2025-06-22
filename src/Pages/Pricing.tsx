import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  Star,
  Layers,
} from 'lucide-react';
import { RiBankCard2Line } from 'react-icons/ri';
import Navbar from '../components/Navbar';

type BillingCycle = 'weekly' | 'monthly' | 'annually';

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
    price: {
      weekly: 'Rs. 49/wk',
      monthly: 'Rs. 199/mo',
      annually: 'Rs. 1899/yr',
    },
    features: ['Advanced Search', 'Priority Support', 'No Ads'],
    icon: <Star size={28} className="text-yellow-500" />,
    needsRenewal: true,
  },
  {
    banner: 'Elite Access',
    title: 'Elite User',
    price: {
      weekly: 'Rs. 99/wk',
      monthly: 'Rs. 399/mo',
      annually: 'Rs. 3899/yr',
    },
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

const Pricing: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'individual' | 'shop' | null>(null);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [index, setIndex] = useState(0);

  const shopPlan = shopPlans[index];
  const handleNext = () => setIndex((prev) => (prev + 1) % shopPlans.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + shopPlans.length) % shopPlans.length);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 py-14 px-6 font-sans">
        {/* Hero */}
        {!selectedType && (
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
              Start Your Journey With Us 🚀
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Choose the path that fits you best. Whether you're an individual creator or a growing business, we’ve got you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setSelectedType('individual')}
                className="bg-sky-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-sky-600 transition"
              >
                I'm an Individual
              </button>
              <button
                onClick={() => setSelectedType('shop')}
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition"
              >
                I'm a Shop Owner
              </button>
            </div>
          </div>
        )}

        {/* Billing Toggle */}
      

        {selectedType === 'shop' && (
          <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto mt-14">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-sky-100 transition shadow-sm border border-gray-200"
              aria-label="Previous"
            >
              <ChevronLeft className="text-sky-500 w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={shopPlan.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-100 p-0 rounded-2xl shadow-xl w-full max-w-sm flex flex-col items-center overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-full bg-yellow-400 text-gray-900 py-3 px-4 text-lg font-bold text-center tracking-wide">
                  {shopPlan.banner}
                </div>
                <div className="flex flex-col items-center w-full px-6 py-8">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-1 text-center">
                    {shopPlan.title}
                  </h3>
                  <p className="text-sky-500 text-3xl font-bold mb-1">
                    {shopPlan.price.monthly}
                  </p>
                  {shopPlan.needsRenewal && (
                    <span className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
                      <RiBankCard2Line className="text-gray-400" size={16} />
                      Renew every 3 months
                    </span>
                  )}
                  <ul className="text-gray-700 text-sm mt-1 mb-6 space-y-2 leading-relaxed w-full">
                    {shopPlan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 bg-gray-50 rounded px-3 py-1 shadow-sm">
                        <span className="text-green-500 text-base">•</span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-base font-semibold shadow transition">
                    Choose Plan
                  </button>
                  <div className="mt-4">{shopPlan.icon}</div>
                </div>
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
        )}
      </main>
    </>
  );
};

export default Pricing;