
const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-start justify-between gap-3 py-4 md:flex-row md:items-center">
          <div className="text-lg font-bold tracking-wide">
            Fofana <span className="text-sky-400">Rides &amp; Delivery Services</span>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold md:text-base">
            <a className="transition hover:text-sky-300" href="#about">About</a>
            <a className="transition hover:text-sky-300" href="#fleet">Fleet</a>
            <a className="transition hover:text-sky-300" href="#leadership">Leadership</a>
            <a className="transition hover:text-sky-300" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-linear-to-b from-slate-900 to-slate-950 py-16">
          <div className="mx-auto grid w-[92%] max-w-6xl gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                Reliable Logistics Powered by Cars, Motorbikes, and Professional Teams
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300">
                Fofana Rides and Delivery Services is a logistics company focused
                on safe and efficient transportation of parcels, business goods,
                and urgent deliveries. We use a flexible fleet and trained
                riders and drivers to deliver on time every day.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {/* <a className="rounded-lg bg-linear-to-r from-sky-400 to-blue-500 px-5 py-3 font-bold text-white transition hover:opacity-90" href="tel:+10000000000">
                  Call Us Now
                </a> */}
                <a className="rounded-lg border border-slate-700 px-5 py-3 font-bold text-slate-100 transition hover:border-sky-400 hover:text-sky-300" href="#contact">
                  View Contact Numbers
                </a>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-700 bg-white/5 p-4">
                  <strong className="block text-lg font-bold text-emerald-400">24/7</strong>
                  <span className="text-sm text-slate-300">Operations Team</span>
                </div>
                <div className="rounded-xl border border-slate-700 bg-white/5 p-4">
                  <strong className="block text-lg font-bold text-emerald-400">Cars + Bikes</strong>
                  <span className="text-sm text-slate-300">Mixed Fleet</span>
                </div>
                <div className="rounded-xl border border-slate-700 bg-white/5 p-4">
                  <strong className="block text-lg font-bold text-emerald-400">Business Ready</strong>
                  <span className="text-sm text-slate-300">SME Logistics Support</span>
                </div>
              </div>
            </div>
            <aside className="rounded-2xl border border-slate-700 bg-linear-to-b from-sky-500/20 to-slate-900 p-5">
              <h3 className="text-xl font-bold">What We Are About</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Building trust through reliable logistics service</li>
                <li>Using the right vehicle type for every delivery need</li>
                <li>Supporting individuals, stores, and corporate clients</li>
                <li>Maintaining safety, speed, and professional communication</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="py-12">
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold">About The Company</h2>
              <p className="mt-3 text-slate-300">
                We are a logistics-focused company helping people and businesses
                move goods quickly and safely. From urgent parcels to planned
                supply movement, we deliver with discipline and consistency.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="mt-2 text-slate-300">
                  To provide dependable logistics and transportation services
                  that help our clients save time and run smoothly.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="mt-2 text-slate-300">
                  To become the most trusted logistics partner in our region by
                  combining speed, safety, and excellent customer care.
                </p>
              </article>
              <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">What We Value</h3>
                <p className="mt-2 text-slate-300">
                  Integrity, punctuality, and clear communication in every
                  movement we handle.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="fleet" className="py-12">
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold">Our Logistics Fleet</h2>
              <p className="mt-3 text-slate-300">
                We deploy different vehicle types based on delivery size,
                urgency, and destination requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <strong className="text-lg font-bold text-sky-400">Cars</strong>
                <h3 className="mt-1 text-xl font-bold">Urban & Intercity Runs</h3>
                <p className="mt-2 text-slate-300">Best for medium loads, fragile items, and business dispatches.</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <strong className="text-lg font-bold text-sky-400">Motorbikes</strong>
                <h3 className="mt-1 text-xl font-bold">Fast Last-Mile Delivery</h3>
                <p className="mt-2 text-slate-300">Ideal for urgent documents, small parcels, and quick city movement.</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <strong className="text-lg font-bold text-sky-400">Dedicated Team</strong>
                <h3 className="mt-1 text-xl font-bold">Route Planning & Monitoring</h3>
                <p className="mt-2 text-slate-300">Operations staff coordinate each movement to keep deliveries on schedule.</p>
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
                <h3 className="text-xl font-bold text-white">Mr. Alhassan Abdul Hamid</h3>
                <p className="mt-1 text-sm font-semibold text-sky-300">Chief Executive Officer (CEO)</p>
                <p className="mt-3 text-slate-300">
                  Oversees company vision, partnerships, and expansion of
                  logistics operations.
                </p>
                <p className="mt-3 text-slate-200">
                  Direct Line: <p className="text-sky-300 hover:text-sky-200">+233 (20) 361-7839</p>
                </p>
              </article>
              <article className="rounded-xl border border-slate-600 bg-slate-900/70 p-5">
                <h3 className="text-xl font-bold text-white">Mr. Fofana</h3>
                <p className="mt-1 text-sm font-semibold text-sky-300">Co-CEO, Operations &amp; Compliance</p>
                <p className="mt-3 text-slate-300">
                  Leads daily operations, delivery standards, and rider/driver
                  performance management.
                </p>
                <p className="mt-3 text-slate-200">
                  Direct Line: <p className="text-sky-300 hover:text-sky-200">+233 (000) 000-0000</p>
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
                  <p className="text-sky-300 hover:text-sky-200">+233 (000) 000-0000</p>
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">Dispatch / WhatsApp</h3>
                <p className="mt-2 text-slate-300">
                  <p className="text-sky-300 hover:text-sky-200">+233 (000) 000-0000</p>
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">Email</h3>
                <p className="mt-2 text-slate-300">bawa@fofanarides.com</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <h3 className="text-xl font-bold">Operations</h3>
                <p className="mt-2 text-slate-300">Monday - Sunday, 24 Hours | City-wide and nearby districts</p>
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
  )
}

export default App
