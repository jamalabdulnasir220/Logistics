import { useEffect, useState } from "react";

const leadershipTeam = [
  {
    name: "Abdul Hamid Zalia",
    role: "Chief Executive Officer (CEO)",
    description:
      "Oversees company vision, partnerships, and expansion of logistics operations.",
    phone: "+233 (20) 361-7839",
    image:
      "",
  },
  {
    name: "Abdul Hamid Boushirah",
    role: "Co-CEO, Operations & Compliance",
    description:
      "Leads daily operations, delivery standards, and rider/driver performance management.",
    phone: "+233 (000) 000-0000",
    image:
      // "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
      ""
  },
  {
    name: "Abdul Hamid Alhassan",
    role: "Co-CEO, Operations & Compliance",
    description:
      "Leads daily operations, delivery standards, and rider/driver performance management.",
    phone: "+233 (000) 000-0000",
    image:
    // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    ""
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Fleet", href: "#fleet" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];
const sectionIds = ["home", "about", "fleet", "leadership", "contact"] as const;

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>(
    () =>
      sectionIds.reduce<Record<string, boolean>>((acc, id) => {
        acc[id] = id === "home";
        return acc;
      }, {}),
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          if (!id) return;
          setVisibleSections((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
        });
      },
      { threshold: 0.2, rootMargin: "-8% 0px -8% 0px" },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";
  const getSectionAnimationClass = (id: string) =>
    visibleSections[id]
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8";

  const navigateToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`relative min-h-screen scroll-smooth ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${isDark ? "bg-slate-950/45" : "bg-slate-100/20"}`}
      />
      <div className="relative z-10">
      <header className={`sticky top-0 z-30 border-b backdrop-blur-md ${isDark ? "border-slate-700/80 bg-slate-900/65" : "border-white/40 bg-white/50"}`}>
        <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between gap-3 py-4">
          {/* <div className="text-xl font-bold tracking-wide">
            The Fofana's <br /> <span className="text-sky-400">Rides &amp; Delivery Services</span>
          </div> */}
          <div className="text-2xl font-bold tracking-wide">FOFANAS</div>
          <div className="hidden items-center gap-3 text-sm font-semibold md:flex md:text-base">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`rounded-md px-2 py-1 transition duration-200 hover:-translate-y-0.5 hover:text-sky-600 focus:outline-none focus:ring-2 ${isDark ? "focus:ring-sky-400/60" : "focus:ring-sky-500/50"}`}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  navigateToSection(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className={`rounded-full border p-2 transition duration-200 hover:scale-105 active:scale-95 ${isDark ? "border-slate-600 bg-slate-800/80 text-amber-300 hover:border-sky-400 hover:text-sky-300" : "border-slate-300 bg-white/60 text-slate-900 hover:border-sky-500 hover:text-sky-700"}`}
            >
              {isDark ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 17.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm0-14.75a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 12 3Zm9 8.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5H21Zm-15 0a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5H6Zm10.243 5.182a.75.75 0 0 1 1.06 0l1.768 1.768a.75.75 0 0 1-1.06 1.06l-1.768-1.767a.75.75 0 0 1 0-1.061Zm-10.486 0a.75.75 0 0 1 1.06 1.06L5.05 19.26a.75.75 0 1 1-1.06-1.06l1.768-1.768Zm12.254-10.486a.75.75 0 0 1 1.06 1.06L17.304 8.77a.75.75 0 1 1-1.06-1.06l1.768-1.767Zm-12.254 0L7.525 7.72a.75.75 0 0 1-1.06 1.06L4.697 7.01a.75.75 0 1 1 1.06-1.06ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.598 2.152a.75.75 0 0 1 .835.094 9.75 9.75 0 1 0 11.321 11.321.75.75 0 0 1 1.122.741A11.25 11.25 0 1 1 9.857 1.294a.75.75 0 0 1-.259.858Z" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className={`rounded-full border p-2 transition duration-200 hover:scale-105 active:scale-95 ${isDark ? "border-slate-600 bg-slate-800/80 text-amber-300" : "border-slate-300 bg-white/60 text-slate-900"}`}
            >
              {isDark ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 17.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm0-14.75a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 12 3Zm9 8.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5H21Zm-15 0a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5H6Zm10.243 5.182a.75.75 0 0 1 1.06 0l1.768 1.768a.75.75 0 0 1-1.06 1.06l-1.768-1.767a.75.75 0 0 1 0-1.061Zm-10.486 0a.75.75 0 0 1 1.06 1.06L5.05 19.26a.75.75 0 1 1-1.06-1.06l1.768-1.768Zm12.254-10.486a.75.75 0 0 1 1.06 1.06L17.304 8.77a.75.75 0 1 1-1.06-1.06l1.768-1.767Zm-12.254 0L7.525 7.72a.75.75 0 0 1-1.06 1.06L4.697 7.01a.75.75 0 1 1 1.06-1.06ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.598 2.152a.75.75 0 0 1 .835.094 9.75 9.75 0 1 0 11.321 11.321.75.75 0 0 1 1.122.741A11.25 11.25 0 1 1 9.857 1.294a.75.75 0 0 1-.259.858Z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className={`rounded-lg border p-2 transition duration-200 hover:scale-105 active:scale-95 ${isDark ? "border-slate-600 bg-slate-800/80 text-slate-100" : "border-slate-300 bg-white/60 text-slate-900"}`}
            >
              {isMenuOpen ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-20 transition-opacity duration-200 md:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/45"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className={`relative ml-auto h-full w-72 p-6 shadow-xl transition-transform duration-200 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} ${isDark ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"}`}
            aria-hidden={!isMenuOpen}
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wide">Menu</p>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-lg border p-2 transition duration-200 hover:scale-105 active:scale-95 ${isDark ? "border-slate-600" : "border-slate-300"}`}
                aria-label="Close menu"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateToSection(link.href);
                  }}
                  className={`rounded-lg px-3 py-2 text-base font-semibold transition duration-200 hover:translate-x-1 ${isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

      <main>
        <section id="home" className={`py-16 transition-all duration-700 ease-out ${getSectionAnimationClass("home")}`}>
          <div className="mx-auto grid w-[92%] max-w-6xl gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Multi-Service Company Delivering Transport, Farming, Logistics,
                and Laundry Excellence
              </h1>
              <p className={`mt-4 max-w-2xl ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                THE FOFANA’S is a multi-service company built to make everyday
                life and business easier. We started with one goal: deliver
                dependable, affordable services that people actually need. Today
                we operate across four key sectors to serve individuals,
                families, and businesses in Accra and beyond.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {/* <a className="rounded-lg bg-linear-to-r from-sky-400 to-blue-500 px-5 py-3 font-bold text-white transition hover:opacity-90" href="tel:+10000000000">
                  Call Us Now
                </a> */}
                <a
                  className={`rounded-lg border px-5 py-3 font-bold backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${isDark ? "border-slate-600 bg-slate-900/45 text-slate-100 hover:border-sky-400 hover:text-sky-300" : "border-slate-300 bg-white/35 text-slate-900 hover:border-sky-500 hover:text-sky-700"}`}
                  href="#contact"
                >
                  View Contact Numbers
                </a>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className={`rounded-xl border p-4 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                  <strong className="block text-lg font-bold text-emerald-400">
                    24/7
                  </strong>
                  <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Operations Team
                  </span>
                </div>
                <div className={`rounded-xl border p-4 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                  <strong className="block text-lg font-bold text-emerald-400">
                    Cars + Bikes
                  </strong>
                  <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Ride & Delivery Operations
                  </span>
                </div>
                <div className={`rounded-xl border p-4 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                  <strong className="block text-lg font-bold text-emerald-400">
                    4 Divisions
                  </strong>
                  <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Transport, Farming, Logistics, Laundry
                  </span>
                </div>
              </div>
            </div>
            <aside className={`rounded-2xl border p-5 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${isDark ? "border-slate-600 bg-slate-900/45" : "border-white/50 bg-white/35"}`}>
              <h3 className="text-xl font-bold">Why Choose THE FOFANA&apos;S</h3>
              <ul className={`mt-3 list-disc space-y-2 pl-5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <li>
                  One partner, many solutions - from sending a parcel to booking
                  a ride to buying cattle
                </li>
                <li>
                  Local and accountable - we live here, and our reputation is on
                  every job
                </li>
                <li>Fair pricing - clear rates with no surprise charges</li>
                <li>
                  Customer-first - WhatsApp support, flexible booking, and quick
                  resolution
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className={`py-12 transition-all duration-700 ease-out ${getSectionAnimationClass("about")}`}>
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold">What We Do</h2>
              <p className={`mt-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                These are the four core business units of The Fofana&apos;s.
              </p>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <article className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold text-sky-300">Mission</h3>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  To provide essential daily services with integrity, speed, and
                  a human touch - helping our community move, eat, ship, and
                  live better.
                </p>
              </article>
              <article className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold text-sky-300">Vision</h3>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  To become Greater Accra&apos;s most trusted name for integrated
                  personal and business services by 2030.
                </p>
              </article>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <article className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold">1. Ride &amp; Delivery Service</h3>
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                  alt="Ride and delivery service"
                  className={`mt-3 h-44 w-full rounded-xl border object-cover transition duration-300 hover:scale-[1.02] ${isDark ? "border-slate-600" : "border-slate-300"}`}
                />
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Move fast or move people - we handle both.
                </p>
                <ul className={`mt-3 list-disc space-y-2 pl-5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <li>Motorbike delivery for parcels, food, documents, and small packages</li>
                  <li>Safe, air-conditioned car rides for individuals and groups</li>
                  <li>Airport pickup and drop-off</li>
                  <li>Corporate and employee transport contracts</li>
                  <li>Beat traffic with bike delivery, travel in comfort with car rides</li>
                  <li>Vetted riders and drivers with real-time updates</li>
                </ul>
              </article>
              <article className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold">2. Cattle Farming</h3>
                <img
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"
                  alt="Cattle farming"
                  className={`mt-3 h-44 w-full rounded-xl border object-cover transition duration-300 hover:scale-[1.02] ${isDark ? "border-slate-600" : "border-slate-300"}`}
                />
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Healthy livestock, quality supply, local growth.
                </p>
                <ul className={`mt-3 list-disc space-y-2 pl-5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <li>Rearing and supply of cattle for meat and breeding</li>
                  <li>Bulk orders for abattoirs, restaurants, and events</li>
                  <li>Eid and celebration livestock available seasonally</li>
                  <li>Ethical animal care and proper veterinary support</li>
                </ul>
              </article>
              <article className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold">3. Logistics</h3>
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Logistics operations"
                  className={`mt-3 h-44 w-full rounded-xl border object-cover transition duration-300 hover:scale-[1.02] ${isDark ? "border-slate-600" : "border-slate-300"}`}
                />
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  We move it right, on time, every time.
                </p>
                <ul className={`mt-3 list-disc space-y-2 pl-5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <li>Last-mile delivery for e-commerce and SMEs</li>
                  <li>Intercity cargo and livestock transport</li>
                  <li>Warehouse pickup and distribution</li>
                  <li>Handles packages too big for motorbikes</li>
                </ul>
              </article>
              <article className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold">4. Laundry Services</h3>
                <img
                  src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80"
                  alt="Laundry services"
                  className={`mt-3 h-44 w-full rounded-xl border object-cover transition duration-300 hover:scale-[1.02] ${isDark ? "border-slate-600" : "border-slate-300"}`}
                />
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Fresh, clean, and hassle-free.
                </p>
                <ul className={`mt-3 list-disc space-y-2 pl-5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <li>Wash, dry and fold for homes and hostels</li>
                  <li>Corporate laundry for hotels, salons, and uniforms</li>
                  <li>Express 24-48hr turnaround available</li>
                  <li>Pickup and delivery at your doorstep</li>
                </ul>
              </article>
            </div>
            <div className={`mt-6 rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
              <h3 className="text-xl font-bold text-sky-300">Tagline Options</h3>
              <ul className={`mt-3 list-disc space-y-2 pl-5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <li>THE FOFANA&apos;S - Rides. Delivery. Cattle. Clean Clothes.</li>
                <li>From Bike to Benz, From Farm to Fresh Laundry</li>
                <li>Serving Accra, All Ways, Every Day</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="fleet" className={`py-12 transition-all duration-700 ease-out ${getSectionAnimationClass("fleet")}`}>
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold">Ride &amp; Delivery Operations</h2>
              <p className={`mt-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                We deploy different vehicle types based on delivery size,
                urgency, and destination requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <strong className="text-lg font-bold text-sky-400">Cars</strong>
                <h3 className="mt-1 text-xl font-bold">
                  Urban & Intercity Runs
                </h3>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Best for medium loads, fragile items, and business dispatches.
                </p>
              </div>
              <div className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <strong className="text-lg font-bold text-sky-400">
                  Motorbikes
                </strong>
                <h3 className="mt-1 text-xl font-bold">
                  Fast Last-Mile Delivery
                </h3>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Ideal for urgent documents, small parcels, and quick city
                  movement.
                </p>
              </div>
              <div className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <strong className="text-lg font-bold text-sky-400">
                  Dedicated Team
                </strong>
                <h3 className="mt-1 text-xl font-bold">
                  Route Planning & Monitoring
                </h3>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Operations staff coordinate each movement to keep deliveries
                  on schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className={`py-12 transition-all duration-700 ease-out ${getSectionAnimationClass("leadership")}`}>
          <div className={`mx-auto w-[92%] max-w-6xl rounded-2xl border p-8 text-center backdrop-blur-md ${isDark ? "border-slate-600 bg-slate-900/45" : "border-white/50 bg-white/35"}`}>
            <h2 className="text-3xl font-extrabold">Company Leadership</h2>
            <p className={`mt-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
              Our leadership team drives operations, service quality, and
              long-term strategy for dependable logistics.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
              {leadershipTeam.map((leader) => (
                <article
                  key={leader.name}
                  className={`rounded-xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/55" : "border-white/50 bg-white/45"}`}
                >
                  <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className={`h-52 w-full rounded-xl border object-cover transition duration-300 hover:scale-[1.02] sm:h-44 sm:w-40 ${isDark ? "border-slate-600" : "border-slate-300"}`}
                    />
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${isDark ? "text-slate-100" : "text-slate-900"}`}>{leader.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-sky-300">
                        {leader.role}
                      </p>
                      <p className={`mt-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {leader.description}
                      </p>
                      <p className={`mt-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        Direct Line:{" "}
                        <span className="text-sky-300 hover:text-sky-200">
                          {leader.phone}
                        </span>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`py-12 transition-all duration-700 ease-out ${getSectionAnimationClass("contact")}`}>
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold">Contact Us</h2>
              <p className={`mt-3 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                This website is for company information only. To work with us,
                call the numbers below directly.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold">Main Office Line</h3>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <a className="text-sky-300 hover:text-sky-200" href="tel:+233000000000">
                    +233 (000) 000-0000
                  </a>
                </p>
              </div>
              <div className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold">Dispatch / WhatsApp</h3>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  <a className="text-sky-300 hover:text-sky-200" href="tel:+233000000000">
                    +233 (000) 000-0000
                  </a>
                </p>
              </div>
              <div className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold">Email</h3>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>bawa@fofanarides.com</p>
              </div>
              <div className={`rounded-2xl border p-5 backdrop-blur-sm ${isDark ? "border-slate-600 bg-slate-900/50" : "border-white/50 bg-white/40"}`}>
                <h3 className="text-xl font-bold">Operations</h3>
                <p className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Monday - Sunday, 24 Hours | City-wide and nearby districts
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`mt-8 border-t py-5 text-center ${isDark ? "border-slate-700 text-slate-300" : "border-white/60 text-slate-700"}`}>
        <div className="mx-auto w-[92%] max-w-6xl">
          &copy; {new Date().getFullYear()} Fofana Rides and Delivery Services.
          All rights reserved.
        </div>
      </footer>
      </div>
    </div>
  );
};

export default App;
