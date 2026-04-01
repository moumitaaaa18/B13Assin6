import { useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      title: "AI Writing Pro",
      desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
      price: 29,
      type: "/Mo",
      badge: "Best Seller",
      icon: "✍️",
      badgeColor: "bg-orange-50 text-orange-400",
      features: [
        "Unlimited AI generations",
        "50+ writing templates",
        "Grammar checker",
      ],
    },
    {
      id: 2,
      title: "Design Templates Pack",
      desc: "2000+ premium templates for social media, presentations, and marketing materials.",
      price: 49,
      type: "/One Time",
      badge: "Popular",
      icon: "🎨",
      badgeColor: "bg-blue-50 text-blue-400",
      features: [
        "2000+ templates",
        "Monthly updates",
        "Commercial license",
      ],
    },
    {
      id: 3,
      title: "Premium Stock Assets",
      desc: "Access millions of royalty-free photos, videos, and graphics for your projects.",
      price: 19,
      type: "/Mo",
      badge: "New",
      icon: "📷",
      badgeColor: "bg-green-50 text-green-400",
      features: [
        "10M+ assets",
        "Commercial use",
        "No attribution",
      ],
    },
    {
      id: 4,
      title: "SEO Toolkit",
      desc: "Optimize your website ranking and monitor performance with smart SEO tools.",
      price: 25,
      type: "/Mo",
      badge: "Trending",
      icon: "🔍",
      badgeColor: "bg-purple-50 text-purple-400",
      features: [
        "Keyword research",
        "SEO analytics",
        "Competitor tracking",
      ],
    },
    {
      id: 5,
      title: "UI Component Kit",
      desc: "Reusable modern UI components and layouts for faster website and app design.",
      price: 39,
      type: "/One Time",
      badge: "Featured",
      icon: "🧩",
      badgeColor: "bg-pink-50 text-pink-400",
      features: [
        "Reusable components",
        "Modern UI",
        "Fully customizable",
      ],
    },
    {
      id: 6,
      title: "Video Editing Pack",
      desc: "Professional video templates, transitions, and effects for creators and editors.",
      price: 29,
      type: "/Mo",
      badge: "Pro",
      icon: "🎬",
      badgeColor: "bg-indigo-50 text-indigo-400",
      features: [
        "HD templates",
        "Transitions",
        "Effects included",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      subtitle: "Perfect for getting started",
      price: "$0",
      duration: "/Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      button: "Get Started Free",
      highlighted: false,
    },
    {
      name: "Pro",
      subtitle: "Best for professionals",
      price: "$29",
      duration: "/Month",
      badge: "Most Popular",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      button: "Start Pro Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      subtitle: "For teams and businesses",
      price: "$99",
      duration: "/Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      button: "Contact Sales",
      highlighted: false,
    },
  ];

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setActiveTab("cart");
    toast.success(`${product.title} added to cart`);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    const removedItem = cartItems[indexToRemove];
    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
    toast.error(`${removedItem.title} removed from cart`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is already empty");
      return;
    }
    setCartItems([]);
    toast.success("Proceed to checkout successful. Cart cleared.");
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-blue-600 sm:text-4xl lg:text-5xl">
            DigiTools
          </h1>

          <ul className="hidden items-center gap-6 text-base font-medium text-gray-800 lg:flex xl:gap-10 xl:text-[18px]">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            <button className="relative text-lg sm:text-xl">
              🛒
              {cartItems.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartItems.length}
                </span>
              )}
            </button>

            <button className="hidden text-sm font-medium text-gray-800 md:block lg:text-[18px]">
              Login
            </button>

            <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 lg:text-[16px]">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-12 sm:px-6 md:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-500 sm:text-base">
            <span className="mr-2 text-blue-500">●</span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-[#2d2a6e] sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.05]">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="mt-5 max-w-[700px] text-base leading-8 text-gray-400 sm:text-lg md:text-xl lg:mt-6 lg:text-[22px] lg:leading-10">
            Access premium AI tools, design assets, templates, and productivity
            software-all in one place. Start creating faster today.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:mt-10 lg:gap-5">
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-3 text-base font-medium text-white sm:px-8 sm:py-4 sm:text-lg">
              Explore Products
            </button>

            <button className="rounded-full border border-gray-300 px-6 py-3 text-base font-medium text-gray-500 sm:px-8 sm:py-4 sm:text-lg">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        <div className="w-full">
          <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] bg-[#f3f4fb] sm:h-[420px] md:h-[500px] lg:h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e8e8d5d3b83?auto=format&fit=crop&w=1200&q=80"
              alt="Hero"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full pb-14 sm:pb-16">
        <div className="grid w-full grid-cols-1 bg-gradient-to-r from-blue-600 to-purple-500 text-center text-white md:grid-cols-3">
          <div className="px-6 py-10 md:border-r md:border-white/30 lg:py-14">
            <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-7xl">
              50K+
            </h2>
            <p className="mt-3 text-lg text-white/90 sm:text-2xl lg:mt-4 lg:text-3xl">
              Active Users
            </p>
          </div>

          <div className="px-6 py-10 md:border-r md:border-white/30 lg:py-14">
            <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-7xl">
              200+
            </h2>
            <p className="mt-3 text-lg text-white/90 sm:text-2xl lg:mt-4 lg:text-3xl">
              Premium Tools
            </p>
          </div>

          <div className="px-6 py-10 lg:py-14">
            <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-7xl">
              4.9
            </h2>
            <p className="mt-3 text-lg text-white/90 sm:text-2xl lg:mt-4 lg:text-3xl">
              Rating
            </p>
          </div>
        </div>
      </section>

      {/* Products / Cart Section */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold text-[#2d2a6e] sm:text-4xl lg:text-5xl">
          Premium Digital Tools
        </h2>

        <p className="mx-auto mt-4 max-w-[700px] text-center text-base text-gray-500 sm:text-lg">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => setActiveTab("products")}
            className={`rounded-full px-6 py-3 text-sm font-medium sm:text-base ${
              activeTab === "products"
                ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`rounded-full px-6 py-3 text-sm font-medium sm:text-base ${
              activeTab === "cart"
                ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Cart ({cartItems.length})
          </button>
        </div>

        {activeTab === "products" ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-[#2d2a6e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500">{item.desc}</p>

                <h4 className="mt-5 text-3xl font-bold text-[#2d2a6e]">
                  ${item.price}
                  <span className="text-lg font-normal text-gray-400">
                    {item.type}
                  </span>
                </h4>

                <ul className="mt-5 space-y-2 text-gray-500">
                  {item.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-6 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-500 py-3 text-white"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12">
            {cartItems.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
                <h3 className="text-2xl font-semibold text-[#2d2a6e]">
                  Your cart is empty
                </h3>
                <p className="mt-3 text-gray-500">
                  No products added to cart yet.
                </p>
              </div>
            ) : (
              <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-lg sm:p-8">
                <h3 className="mb-8 text-2xl font-semibold text-[#2d2a6e]">
                  Your Cart
                </h3>

                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex items-center justify-between border-b border-gray-200 pb-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="text-lg font-medium text-[#2d2a6e]">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500">${item.price}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className="text-sm font-medium text-pink-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-500">Total</p>
                  <p className="text-2xl font-bold text-[#2d2a6e]">
                    ${totalPrice}
                  </p>
                </div>

                <button
                  onClick={handleCheckout}
                  className="mt-6 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-500 py-3 text-white"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Steps Section */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="mb-2 text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
          Get Started In 3 Steps
        </h2>
        <p className="mb-12 text-base text-gray-500 sm:text-lg">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
          <div className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              01
            </div>

            <div className="mb-5 flex justify-center">
              <div className="rounded-full bg-indigo-50 p-5">
                <svg
                  className="h-10 w-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A9 9 0 1118.88 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="mb-2 text-2xl font-semibold text-[#2d2a6e]">
              Create Account
            </h3>
            <p className="text-gray-400">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              02
            </div>

            <div className="mb-5 flex justify-center">
              <div className="rounded-full bg-indigo-50 p-5">
                <svg
                  className="h-10 w-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10"
                  />
                </svg>
              </div>
            </div>

            <h3 className="mb-2 text-2xl font-semibold text-[#2d2a6e]">
              Choose Products
            </h3>
            <p className="text-gray-400">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              03
            </div>

            <div className="mb-5 flex justify-center">
              <div className="rounded-full bg-indigo-50 p-5">
                <svg
                  className="h-10 w-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L4.5 21l4-5.25M14.25 17l5.25 4-4-5.25M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="mb-2 text-2xl font-semibold text-[#2d2a6e]">
              Start Creating
            </h3>
            <p className="text-gray-400">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 text-center lg:py-20">
        <h2 className="text-3xl font-bold text-[#2d2a6e] sm:text-4xl lg:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-base text-gray-500 sm:text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 text-left shadow-sm ${
                plan.highlighted
                  ? "scale-100 border-transparent bg-gradient-to-r from-blue-600 to-purple-500 text-white lg:scale-105"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-100 px-4 py-1 text-xs font-medium text-orange-500 shadow">
                  {plan.badge}
                </span>
              )}

              <h3
                className={`text-2xl font-semibold ${
                  plan.highlighted ? "text-white" : "text-[#2d2a6e]"
                }`}
              >
                {plan.name}
              </h3>

              <p
                className={`mt-2 ${
                  plan.highlighted ? "text-white/80" : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>

              <h4
                className={`mt-6 text-5xl font-bold ${
                  plan.highlighted ? "text-white" : "text-[#2d2a6e]"
                }`}
              >
                {plan.price}
                <span
                  className={`text-2xl font-normal ${
                    plan.highlighted ? "text-white/80" : "text-gray-400"
                  }`}
                >
                  {plan.duration}
                </span>
              </h4>

              <ul
                className={`mt-6 space-y-3 ${
                  plan.highlighted ? "text-white/90" : "text-gray-500"
                }`}
              >
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full py-3 font-medium ${
                  plan.highlighted
                    ? "bg-white text-[#2d2a6e]"
                    : "bg-gradient-to-r from-blue-600 to-purple-500 text-white"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-0 py-16 sm:px-0 lg:px-0 lg:py-20">
        <div className="w-full rounded-none bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-16 text-center text-white shadow-lg sm:px-10 lg:px-16 lg:py-20">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm text-white/90 sm:text-base lg:text-2xl lg:leading-10">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-10 lg:gap-6">
            <button className="rounded-full bg-white px-8 py-3 text-base font-medium text-[#2d2a6e] shadow sm:px-10 sm:py-4 lg:text-lg">
              Explore Products
            </button>

            <button className="rounded-full border border-white px-8 py-3 text-base font-medium text-white sm:px-10 sm:py-4 lg:text-lg">
              View Pricing
            </button>
          </div>

          <p className="mt-8 text-sm text-white/80 sm:text-base lg:text-xl">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 pt-16 pb-8 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-extrabold">DigiTools</h2>
              <p className="mt-4 max-w-md text-gray-300">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integrations</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Social Links</h3>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition hover:scale-110">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.7 15.5v-7l6.3 3.5-6.3 3.5z" />
                  </svg>
                </div>

                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition hover:scale-110">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7v-3h3.5V9.5c0-3.4 2-5.3 5.1-5.3 1.5 0 3 .3 3 .3v3.3h-1.7c-1.7 0-2.2 1-2.2 2.1V12H18l-.5 3h-2.8v7A10 10 0 0 0 22 12z" />
                  </svg>
                </div>

                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition hover:scale-110">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6.1 7H2l8.1-9.3L1 2h6.9l4.8 6.4L18.9 2zm-2.4 18h2.2L7.6 4H5.3l11.2 16z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-gray-300 md:flex-row">
            <p>© 2026 Digitools. All rights reserved.</p>

            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;