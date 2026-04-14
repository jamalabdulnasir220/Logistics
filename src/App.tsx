const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-start justify-between gap-3 py-4 md:flex-row md:items-center">
          {/* <div className="text-xl font-bold tracking-wide">
            The Fofana's <br /> <span className="text-sky-400">Rides &amp; Delivery Services</span>
          </div> */}
          <div className="text-2xl font-bold tracking-wide">The Fofanas</div>
          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold md:text-base">
            <a className="transition hover:text-sky-300" href="#about">
              About
            </a>
            <a className="transition hover:text-sky-300" href="#fleet">
              Fleet
            </a>
            <a className="transition hover:text-sky-300" href="#leadership">
              Leadership
            </a>
            <a className="transition hover:text-sky-300" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-linear-to-b from-slate-900 to-slate-950 py-16">
          <div className="mx-auto grid w-[92%] max-w-6xl gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Multi-Service Company Delivering Transport, Farming, Logistics,
                and Laundry Excellence
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300">
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
                  className="rounded-lg border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
                  href="#contact"
                >
                  View Contact Numbers
                </a>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-700 bg-white/5 p-4">
                  <strong className="block text-lg font-bold text-emerald-400">
                    24/7
                  </strong>
                  <span className="text-sm text-slate-300">
                    Operations Team
                  </span>
                </div>
                <div className="rounded-xl border border-slate-700 bg-white/5 p-4">
                  <strong className="block text-lg font-bold text-emerald-400">
                    Cars + Bikes
                  </strong>
                  <span className="text-sm text-slate-300">
                    Ride & Delivery Operations
                  </span>
                </div>
                <div className="rounded-xl border border-slate-700 bg-white/5 p-4">
                  <strong className="block text-lg font-bold text-emerald-400">
                    4 Divisions
                  </strong>
                  <span className="text-sm text-slate-300">
                    Transport, Farming, Logistics, Laundry
                  </span>
                </div>
              </div>
            </div>
            <aside className="rounded-2xl border border-slate-700 bg-linear-to-b from-sky-500/20 to-slate-900 p-5">
              <h3 className="text-xl font-bold">Why Choose THE FOFANA&apos;S</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
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

        <section id="about" className="py-12">
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold">What We Do</h2>
              <p className="mt-3 text-slate-300">
                These are the four core business units of The Fofana&apos;s.
              </p>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold text-sky-300">Mission</h3>
                <p className="mt-2 text-slate-300">
                  To provide essential daily services with integrity, speed, and
                  a human touch - helping our community move, eat, ship, and
                  live better.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold text-sky-300">Vision</h3>
                <p className="mt-2 text-slate-300">
                  To become Greater Accra&apos;s most trusted name for integrated
                  personal and business services by 2030.
                </p>
              </article>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">1. Ride &amp; Delivery Service</h3>
                <p className="mt-2 text-slate-300">
                  Move fast or move people - we handle both.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                  <li>Motorbike delivery for parcels, food, documents, and small packages</li>
                  <li>Safe, air-conditioned car rides for individuals and groups</li>
                  <li>Airport pickup and drop-off</li>
                  <li>Corporate and employee transport contracts</li>
                  <li>Beat traffic with bike delivery, travel in comfort with car rides</li>
                  <li>Vetted riders and drivers with real-time updates</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">2. Cattle Farming</h3>
                <p className="mt-2 text-slate-300">
                  Healthy livestock, quality supply, local growth.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                  <li>Rearing and supply of cattle for meat and breeding</li>
                  <li>Bulk orders for abattoirs, restaurants, and events</li>
                  <li>Eid and celebration livestock available seasonally</li>
                  <li>Ethical animal care and proper veterinary support</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">3. Logistics</h3>
                <p className="mt-2 text-slate-300">
                  We move it right, on time, every time.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                  <li>Last-mile delivery for e-commerce and SMEs</li>
                  <li>Intercity cargo and livestock transport</li>
                  <li>Warehouse pickup and distribution</li>
                  <li>Handles packages too big for motorbikes</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">4. Laundry Services</h3>
                <p className="mt-2 text-slate-300">
                  Fresh, clean, and hassle-free.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                  <li>Wash, dry and fold for homes and hostels</li>
                  <li>Corporate laundry for hotels, salons, and uniforms</li>
                  <li>Express 24-48hr turnaround available</li>
                  <li>Pickup and delivery at your doorstep</li>
                </ul>
              </article>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-700 bg-linear-to-r from-slate-900 to-slate-800 p-5">
              <h3 className="text-xl font-bold text-sky-300">Tagline Options</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>THE FOFANA&apos;S - Rides. Delivery. Cattle. Clean Clothes.</li>
                <li>From Bike to Benz, From Farm to Fresh Laundry</li>
                <li>Serving Accra, All Ways, Every Day</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="fleet" className="py-12">
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold">Ride &amp; Delivery Operations</h2>
              <p className="mt-3 text-slate-300">
                We deploy different vehicle types based on delivery size,
                urgency, and destination requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <strong className="text-lg font-bold text-sky-400">Cars</strong>
                <h3 className="mt-1 text-xl font-bold">
                  Urban & Intercity Runs
                </h3>
                <p className="mt-2 text-slate-300">
                  Best for medium loads, fragile items, and business dispatches.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <strong className="text-lg font-bold text-sky-400">
                  Motorbikes
                </strong>
                <h3 className="mt-1 text-xl font-bold">
                  Fast Last-Mile Delivery
                </h3>
                <p className="mt-2 text-slate-300">
                  Ideal for urgent documents, small parcels, and quick city
                  movement.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <strong className="text-lg font-bold text-sky-400">
                  Dedicated Team
                </strong>
                <h3 className="mt-1 text-xl font-bold">
                  Route Planning & Monitoring
                </h3>
                <p className="mt-2 text-slate-300">
                  Operations staff coordinate each movement to keep deliveries
                  on schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="py-12">
          <div className="mx-auto w-[92%] max-w-6xl rounded-2xl border border-slate-700 bg-linear-to-b from-blue-500/25 to-slate-900 p-8 text-center">
            <h2 className="text-3xl font-extrabold">Company Leadership</h2>
            <p className="mt-3 text-slate-300">
              Our leadership team drives operations, service quality, and
              long-term strategy for dependable logistics.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
              <article className="rounded-xl border border-slate-600 bg-slate-900/70 p-5">
                <h3 className="text-xl font-bold text-white">
                  Abdul Hamid Zalia
                </h3>
                <p className="mt-1 text-sm font-semibold text-sky-300">
                  Chief Executive Officer (CEO)
                </p>
                <p className="mt-3 text-slate-300">
                  Oversees company vision, partnerships, and expansion of
                  logistics operations.
                </p>
                <p className="mt-3 text-slate-200">
                  Direct Line:{" "}
                  <p className="text-sky-300 hover:text-sky-200">
                    +233 (20) 361-7839
                  </p>
                </p>
              </article>
              <article className="rounded-xl border border-slate-600 bg-slate-900/70 p-5">
                <h3 className="text-xl font-bold text-white">
                  Abdul Hamid Boushirah
                </h3>
                <p className="mt-1 text-sm font-semibold text-sky-300">
                  Co-CEO, Operations &amp; Compliance
                </p>
                <p className="mt-3 text-slate-300">
                  Leads daily operations, delivery standards, and rider/driver
                  performance management.
                </p>
                <p className="mt-3 text-slate-200">
                  Direct Line:{" "}
                  <p className="text-sky-300 hover:text-sky-200">
                    +233 (000) 000-0000
                  </p>
                </p>
              </article>
              <article className="rounded-xl border border-slate-600 bg-slate-900/70 p-5">
                <h3 className="text-xl font-bold text-white">
                  Abdul Hamid Alhassan
                </h3>
                <p className="mt-1 text-sm font-semibold text-sky-300">
                  Co-CEO, Operations &amp; Compliance
                </p>
                <p className="mt-3 text-slate-300">
                  Leads daily operations, delivery standards, and rider/driver
                  performance management.
                </p>
                <p className="mt-3 text-slate-200">
                  Direct Line:{" "}
                  <p className="text-sky-300 hover:text-sky-200">
                    +233 (000) 000-0000
                  </p>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold">Contact Us</h2>
              <p className="mt-3 text-slate-300">
                This website is for company information only. To work with us,
                call the numbers below directly.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">Main Office Line</h3>
                <p className="mt-2 text-slate-300">
                  <a className="text-sky-300 hover:text-sky-200" href="tel:+233000000000">
                    +233 (000) 000-0000
                  </a>
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">Dispatch / WhatsApp</h3>
                <p className="mt-2 text-slate-300">
                  <a className="text-sky-300 hover:text-sky-200" href="tel:+233000000000">
                    +233 (000) 000-0000
                  </a>
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">Email</h3>
                <p className="mt-2 text-slate-300">bawa@fofanarides.com</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">Operations</h3>
                <p className="mt-2 text-slate-300">
                  Monday - Sunday, 24 Hours | City-wide and nearby districts
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-8 border-t border-white/10 py-5 text-center text-slate-300">
        <div className="mx-auto w-[92%] max-w-6xl">
          &copy; {new Date().getFullYear()} Fofana Rides and Delivery Services.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
