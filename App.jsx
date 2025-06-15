// SLP Motorsports single-page site
import React, { useState } from "react";
import { motion } from "framer-motion";

// ---------- data ------------------------------------------------------------
const logoSrc = "https://placehold.co/240x120?text=SLP+Logo";   // TODO replace

const services = [
  { title: "Exhaust System Upgrades", desc: "Custom exhaust fabrication and bolt-on systems for performance, sound and efficiency." },
  { title: "Full Diagnostics", desc: "Advanced computer diagnostics for all makes and models to pinpoint issues quickly and accurately." },
  { title: "Electrical System Repairs", desc: "Battery, alternator, wiring and full electrical troubleshooting to keep your car reliable." },
  { title: "Cooling System Service",  desc: "Radiators, hoses, pumps and coolant flushes to keep temps under control." },
  { title: "Oil & Fluid Service",     desc: "High-quality synthetic oils, fast changes and complete fluid maintenance." },
  { title: "Suspension Upgrades",     desc: "Coil-overs, lift / lowering kits and bushings for comfort or track handling." },
  { title: "AC & Climate",            desc: "Recharge, compressor replacement and full HVAC repairs that keep you cool." },
  { title: "Windshield Services",     desc: "Chip repairs and full replacements using OEM-grade glass." },
  { title: "Performance Mods",        desc: "Expert bolt-on upgrades, no dyno required." },
  { title: "Custom Fabrication",      desc: "Turbo kits, exhaust headers and more – built in-house to spec." },
  { title: "Restoration & Builds",    desc: "Ground-up builds or refreshes with modern power." },
  { title: "Brake Services",          desc: "Pads, rotors and full big-brake upgrades for safety and bite." },
  { title: "Alignment & Calibration", desc: "Precision alignment and sensor calibration for perfect handling." },
  { title: "Wheels & Tires",          desc: "Mount, balance and install all major brands." },
  { title: "Window Tinting",          desc: "Premium film applied by certified installers." }
];

const reviews = [
  { name: "Marcus G.", quote: "My Camaro came out an entirely different beast. The power jump is unreal and the staff kept me informed every step!" },
  { name: "Tiffany R.", quote: "They treated my dad’s Chevelle like a museum piece and you can see it in every detail of the restoration." },
  { name: "Jose P.",    quote: "Serious horsepower gains after the tune – the car pulls like crazy and idles silky smooth." },
  { name: "Danielle M.",quote: "Tint looks factory fresh and it keeps the cabin cool during those brutal Louisiana summers." },
  { name: "Ryan C.",    quote: "The coil-overs dialled in the stance perfectly. It feels glued to the road now!" },
  { name: "Felipe S.",  quote: "Brake upgrade finished same-day and pedal feel is night-and-day better." },
  { name: "Nicole A.",  quote: "Clean shop and a friendly crew. They turned my Jeep project into the trail rig I’d always wanted." },
  { name: "Bobby D.",   quote: "No more warning lights. Steering is laser-straight thanks to their alignment wizardry." },
  { name: "Carla B.",   quote: "New wheels and tires installed without a single scuff – perfect fitment." },
  { name: "Justin H.",  quote: "Windshield chip vanished and saved me a replacement. Five-star service." },
  { name: "Tasha E.",   quote: "AC is ice-cold again after their compressor swap and recharge." },
  { name: "Leo W.",     quote: "Custom exhaust is deep and aggressive, exactly how I wanted it." },
  { name: "Amber K.",   quote: "Fast oil change, honest inspection and zero upsell pressure." },
  { name: "Mike B.",    quote: "Electrical gremlin solved in one afternoon. Car finally starts every time." },
  { name: "Rachel T.",  quote: "Tint, tires and brakes all done in one visit. Convenience and quality together." }
];

const gallery = Array.from({ length: 21 }).map((_, i) => ({
  before: `https://placehold.co/400x250?text=Before+${i + 1}`,
  after:  `https://placehold.co/400x250?text=After+${i + 1}`
}));

const socials = [
  { name: "Facebook",  url: "#", icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png" },
  { name: "Instagram", url: "#", icon: "https://cdn-icons-png.flaticon.com/512/733/733558.png" },
  { name: "TikTok",    url: "#", icon: "https://cdn-icons-png.flaticon.com/512/3046/3046122.png" }
];

// ---------- component --------------------------------------------------------
export default function App() {
  const [reviewIdx, setReviewIdx] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [showCars, setShowCars] = useState(false);

  return (
    <main className="p-6 space-y-16 bg-gradient-to-b from-purple-900 via-black to-yellow-600 min-h-screen text-white">
      {/* Hero ------------------------------------------------------------------ */}
      <section className="text-center space-y-6">
        <motion.img src={logoSrc} alt="SLP logo" className="w-60 mx-auto rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} />
        <motion.h1 className="text-5xl font-extrabold text-yellow-400"
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          SLP Motorsports
        </motion.h1>
        <p className="max-w-2xl mx-auto">
          From bolt-on mods and brake service to full fabrication, tinting, tires and chip repair —
          we’re New Orleans’ one-stop performance shop.
        </p>
        <a href="#contact"
           className="inline-block px-6 py-3 mt-2 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-400">
          Schedule a Consultation
        </a>
      </section>

      {/* Services -------------------------------------------------------------- */}
      <section id="services" className="grid gap-6 md:grid-cols-3">
        {services.map(({ title, desc }) => (
          <div key={title} className="bg-purple-800 border border-yellow-400 p-6 rounded-2xl space-y-2 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-300">{title}</h3>
            <p className="text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      {/* Reviews carousel ------------------------------------------------------ */}
      <section id="reviews" className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-yellow-300">What Our Customers Say</h2>
        <div className="relative max-w-xl mx-auto">
          <div className="bg-purple-800 border border-yellow-400 rounded-xl p-6 shadow-md min-h-[185px] flex flex-col justify-center">
            <p className="italic text-lg">“{reviews[reviewIdx].quote}”</p>
            <p className="mt-4 font-semibold text-yellow-300">— {reviews[reviewIdx].name}</p>
          </div>
          <button onClick={() => setReviewIdx((reviewIdx - 1 + reviews.length) % reviews.length)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-yellow-400">
            ◀
          </button>
          <button onClick={() => setReviewIdx((reviewIdx + 1) % reviews.length)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-500 text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-yellow-400">
            ▶
          </button>
        </div>
      </section>

      {/* Gallery --------------------------------------------------------------- */}
      <section id="gallery" className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-yellow-300">Before &amp; After Gallery</h2>
        <button onClick={() => setShowGallery(!showGallery)}
                className="px-5 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400">
          {showGallery ? "Hide Gallery" : "View Projects"}
        </button>

        {showGallery && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
            {gallery.map(({ before, after }, i) => (
              <div key={i} className="bg-purple-900 p-4 rounded-xl shadow-md space-y-2">
                <p className="font-semibold text-yellow-300">Project {i + 1}</p>
                <img src={before} alt={`before ${i + 1}`} className="w-full rounded-md border border-purple-700" />
                <img src={after} alt={`after ${i + 1}`}  className="w-full rounded-md border border-yellow-500" />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Cars for sale placeholder -------------------------------------------- */}
      <section id="cars" className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-yellow-300">Cars for Sale</h2>
        <button onClick={() => setShowCars(!showCars)}
                className="px-5 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400">
          {showCars ? "Hide Inventory" : "View Inventory"}
        </button>
        {showCars && <p className="mt-4 text-purple-100">Inventory coming soon. Check back for available vehicles!</p>}
      </section>

      {/* Contact --------------------------------------------------------------- */}
      <section id="contact" className="text-center space-y-4 pt-10">
        <h2 className="text-2xl font-bold text-yellow-300">Get in Touch</h2>
        <p>Email <a href="mailto:info@slpmotorsports.com" className="underline">info@slpmotorsports.com</a> or call (504) 555-1234.</p>
        <div className="flex justify-center gap-6 pt-4">
          {socials.map(({ name, url, icon }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" className="hover:opacity-80">
              <img src={icon} alt={name} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
