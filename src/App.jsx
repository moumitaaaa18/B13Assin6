function App() {
  const products = [
    {
      title: "AI Writing Pro",
      desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
      price: "$29",
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
      title: "Design Templates Pack",
      desc: "2000+ premium templates for social media, presentations, and marketing materials.",
      price: "$49",
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
      title: "Premium Stock Assets",
      desc: "Access millions of royalty-free photos, videos, and graphics for your projects.",
      price: "$19",
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
      title: "SEO Toolkit",
      desc: "Optimize your website ranking and monitor performance with smart SEO tools.",
      price: "$25",
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
      title: "UI Component Kit",
      desc: "Reusable modern UI components and layouts for faster website and app design.",
      price: "$39",
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
      title: "Video Editing Pack",
      desc: "Professional video templates, transitions, and effects for creators and editors.",
      price: "$29",
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

  return (
    <div className="min-h-screen bg-white">
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
            <button className="text-lg sm:text-xl">🛒</button>
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
        {/* Left Side */}
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
            software—all in one place. Start creating faster today.
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

        {/* Right Side Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-[300px] w-full max-w-[620px] overflow-hidden bg-[#f3f4fb] sm:h-[380px] md:h-[450px] lg:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e8e8d5d3b83?auto=format&fit=crop&w=900&q=80"
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

      {/* Products Section */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-bold text-[#2d2a6e] sm:text-4xl lg:text-5xl">
          Premium Digital Tools
        </h2>

        <p className="mx-auto mt-4 max-w-[700px] text-center text-base text-gray-500 sm:text-lg">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-3 text-sm font-medium text-white sm:text-base">
            Products
          </button>
          <button className="text-base text-gray-600 sm:text-lg">Cart (2)</button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Icon + Badge */}
              <div className="flex items-center justify-between">
                <span className="text-2xl">{item.icon}</span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-semibold text-[#2d2a6e]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-500">{item.desc}</p>

              {/* Price */}
              <h4 className="mt-5 text-3xl font-bold text-[#2d2a6e]">
                {item.price}
                <span className="text-lg font-normal text-gray-400">
                  {item.type}
                </span>
              </h4>

              {/* Features */}
              <ul className="mt-5 space-y-2 text-gray-500">
                {item.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-6 w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-500 py-3 text-white">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
function App() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Get Started In 3 Steps
      </h2>
      <p className="text-gray-500 mb-12">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

        {/* Card 1 */}
        <div className="bg-white p-8 rounded-xl shadow-md relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold">
            01
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M5.121 17.804A9 9 0 1118.88 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          <h3 className="font-semibold text-lg text-gray-800 mb-2">Create Account</h3>
          <p className="text-gray-500 text-sm">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow-md relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold">
            02
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10" />
              </svg>
            </div>
          </div>

          <h3 className="font-semibold text-lg text-gray-800 mb-2">Choose Products</h3>
          <p className="text-gray-500 text-sm">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow-md relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold">
            03
          </div>

          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  d="M9.75 17L4.5 21l4-5.25M14.25 17l5.25 4-4-5.25M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <h3 className="font-semibold text-lg text-gray-800 mb-2">Start Creating</h3>
          <p className="text-gray-500 text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </section>
  );
}

export default App;