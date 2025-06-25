import { useRef } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";

// Define type for plan
type PricingPlan = {
  banner: string;
  amount: string;
  description: string;
  features: string[];
};

const pricingPlans: PricingPlan[] = [
  {
    banner: "Basic",
    amount: "NPR 3000 / 3 months",
    description: "Ideal for small businesses and startups looking to establish their online presence.",
    features: [
      "Up to 10,000 monthly searches",
      "Basic analytics dashboard",
      "Email support",
      "Access to community forums",
    ],
  },
  {
    banner: "Pro",
    amount: "NPR 6000 / 6 months",
    description: "Great for growing businesses that need advanced insights and support.",
    features: [
      "Up to 100,000 monthly searches",
      "Advanced analytics dashboard",
      "Priority email support",
      "Monthly performance reports",
    ],
  },
  {
    banner: "Enterprise",
    amount: "Contact us",
    description: "Custom solutions for large organizations with unique needs and full support.",
    features: [
      "Unlimited searches",
      "Custom dashboards",
      "Dedicated account manager",
      "24/7 support",
    ],
  },
];

function Pricing() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 text-white font-sans pt-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-black text-center px-3">
          Select the Plan That Best Fits Your Business
        </h1>
        <p className="text-lg md:text-xl max-w-[640px] text-gray-600 mb-8 text-center px-3">
          Whether you're a small SME or a large D2C brand, we have a plan tailored to meet your specific needs.
        </p>

        {/* Mobile Section with Side Scroll and Arrows */}
        <div className="relative w-full md:hidden flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-2 z-10 p-2 bg-white text-blue-600 rounded-full shadow-md"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 py-4 w-full"
          >
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl px-6 py-8 w-full max-w-[90vw] text-center border border-gray-200 flex-shrink-0 snap-start"
              >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{plan.banner}</h2>
                <p className="text-xl font-semibold mb-6 text-blue-600">{plan.amount}</p>
                <p className="text-gray-700 mb-6">{plan.description}</p>
                <ul className="text-left text-gray-600 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 flex items-center">
                      <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-2 z-10 p-2 bg-white text-blue-600 rounded-full shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Desktop Grid Section */}
        <div className="hidden md:grid grid-cols-3 gap-8 px-3 mt-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl px-8 py-10 text-center border border-gray-200"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{plan.banner}</h2>
              <p className="text-2xl font-semibold mb-6 text-blue-600">{plan.amount}</p>
              <p className="text-gray-700 mb-6">{plan.description}</p>
              <ul className="text-left text-gray-600 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2 flex items-center">
                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Pricing;
