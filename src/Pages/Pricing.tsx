import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User, Briefcase, Star, Layers } from 'lucide-react';
import { RiBankCard2Line } from 'react-icons/ri';

type Plan = {
  banner: string;
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  needsRenewal?: boolean;
};

const individualPlans: Plan[] = [
  {
    banner: 'Small Audience',
    title: 'Free User',
    price: 'Free',
    features: ['Basic Search', 'Limited Access'],
    icon: <User size={28} className="text-red-600" />,
  },
  {
    banner: 'Growing User',
    title: 'Pro User',
    price: 'Rs. 199/mo',
    features: ['Advanced Search', 'Priority Support', 'No Ads'],
    icon: <Star size={28} className="text-yellow-600" />,
    needsRenewal: true,
  },
  {
    banner: 'Elite Access',
    title: 'Elite User',
    price: 'Rs. 399/mo',
    features: ['All Pro Features', 'Early Access', 'VIP Badge'],
    icon: <Layers size={28} className="text-purple-600" />,
    needsRenewal: true,
  },
];

const shopPlans: Plan[] = [
  {
    banner: 'Starter Pack',
    title: 'Starter Shop',
    price: 'Rs. 499/mo',
    features: ['List Your Business', 'Basic Analytics'],
    icon: <Briefcase size={28} className="text-blue-600" />,
    needsRenewal: true,
  },
  {
    banner: 'Growth Pack',
    title: 'Growth Shop',
    price: 'Rs. 999/mo',
    features: ['Featured Listings', 'Advanced Analytics', 'Support'],
    icon: <Star size={28} className="text-yellow-600" />,
    needsRenewal: true,
  },
  {
    banner: 'Premium Pack',
    title: 'Premium Shop',
    price: 'Rs. 1499/mo',
    features: ['All Tools', 'Custom Branding', 'Dedicated Manager'],
    icon: <Layers size={28} className="text-green-600" />,
    needsRenewal: true,
  },
];

const Pricing: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'individual' | 'shop'>('individual');
  const [index, setIndex] = useState(0);

  const plans = selectedType === 'individual' ? individualPlans : shopPlans;
  const plan = plans[index];

  const handleNext = () => setIndex((prev) => (prev + 1) % plans.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + plans.length) % plans.length);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 text-gray-900 py-14 px-6 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
          Tailored Pricing For Every Journey
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Whether you're just starting out or scaling fast, we've got a plan built for you.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {['individual', 'shop'].map((type) => (
          <button
            key={type}
            onClick={() => {
              setSelectedType(type as 'individual' | 'shop');
              setIndex(0);
            }}
            className={`px-6 py-2 text-lg font-medium rounded-full border transition-all duration-300 ${
              selectedType === type
                ? 'bg-red-600 text-white border-red-600 shadow-md'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {type === 'individual' ? 'Individual' : 'Shop'}
          </button>
        ))}
      </div>

      {/* Pricing Card */}
      <div className="flex items-center justify-center gap-6 max-w-5xl mx-auto">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="text-red-600 w-6 h-6" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white/70 backdrop-blur-lg border border-gray-200 p-10 rounded-3xl shadow-2xl w-full max-w-md pt-20 text-center"
          >
            {/* Banner */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-md">
              {plan.banner}
            </div>

            <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
              {plan.title}
            </h3>

            <p className="text-red-600 text-4xl font-bold">
              {plan.price}
              {plan.needsRenewal && (
                <span className="flex items-center justify-center gap-1 text-sm font-medium text-gray-500 mt-2">
                  <RiBankCard2Line size={16} />
                  Renew every 3 months
                </span>
              )}
            </p>

            <ul className="text-gray-600 text-base mt-6 mb-10 space-y-3 leading-relaxed">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>

            <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg font-medium transition">
              Choose Plan
            </button>

            <div className="mt-6">{plan.icon}</div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          aria-label="Next"
        >
          <ChevronRight className="text-red-600 w-6 h-6" />
        </button>
      </div>
    </main>
  );
};

export default Pricing;
