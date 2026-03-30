/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Package, 
  ArrowRight, 
  FileText, 
  Zap, 
  Globe, 
  Mail, 
  Linkedin, 
  MessageSquare,
  ChevronRight,
  Menu,
  X,
  Upload,
  Users,
  Building2,
  Rocket,
  AlertCircle,
  TrendingUp,
  Award,
  Truck,
  Search,
  Layers,
  Phone
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Constants & Data ---

const COMPANY_NAME = "Cube Apparels";
const CAPACITY = "50,000+ Units Monthly Capacity";
const CERTIFICATIONS = "BSCI / WRAP / SEDEX / ISO";
const CONTACT_EMAIL = "export@cubeapparels.com";
const CONTACT_WHATSAPP = "+880 1712-345678";

const COMPLIANCE_LOGOS = [
  { name: "BSCI", label: "BSCI Certified" },
  { name: "WRAP", label: "WRAP Gold" },
  { name: "SEDEX", label: "SEDEX Audited" },
  { name: "ISO", label: "ISO 9001:2015" }
];

const TRUST_METRICS = [
  { icon: <Clock className="w-6 h-6" />, value: "10+", label: "Years Export Experience" },
  { icon: <Layers className="w-6 h-6" />, value: "50,000+", label: "Units Monthly Capacity" },
  { icon: <Globe className="w-6 h-6" />, value: "8+", label: "Exporting to Countries" },
  { icon: <TrendingUp className="w-6 h-6" />, value: "98%", label: "On-Time Delivery" },
  { icon: <ShieldCheck className="w-6 h-6" />, value: "100%", label: "Certified Ethical Production" }
];

const AUDIENCES = [
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Apparel Brands",
    description: "Established global labels requiring consistent quality and high-volume production scalability.",
    orderSize: "MOQ: 1,000+ Units",
    benefit: "End-to-end supply chain reliability."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Importers & Wholesalers",
    description: "Bulk buyers looking for competitive FOB pricing and reliable lead times for seasonal stock.",
    orderSize: "MOQ: 5,000+ Units",
    benefit: "Direct factory pricing & logistics support."
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Private Label Startups",
    description: "Emerging brands needing rapid prototyping and guidance through the manufacturing process.",
    orderSize: "MOQ: 500 Units",
    benefit: "Low MOQ flexibility & design support."
  }
];

const CAPABILITIES = [
  { title: "Knitwear", desc: "Premium T-shirts, Hoodies, and Polos.", img: "https://picsum.photos/seed/knit/600/400" },
  { title: "Woven", desc: "Formal shirts, Chinos, and casual trousers.", img: "https://picsum.photos/seed/woven/600/400" },
  { title: "Denim", desc: "High-durability jeans and denim jackets.", img: "https://picsum.photos/seed/denim/600/400" },
  { title: "Sportswear", desc: "Performance activewear and gym apparel.", img: "https://picsum.photos/seed/sport/600/400" },
  { title: "Custom Manufacturing", desc: "Bespoke designs and technical garments.", img: "https://picsum.photos/seed/custom/600/400" }
];

const WHY_US = [
  {
    problem: "Inconsistent Quality",
    solution: "Multi-stage quality control at every production phase (AQL 1.5/2.5)."
  },
  {
    problem: "Delayed Shipments",
    solution: "Strict production timelines with real-time progress tracking."
  },
  {
    problem: "High MOQ Requirements",
    solution: "Flexible minimum order quantities tailored to brand growth."
  }
];

const PROCESS = [
  { title: "Inquiry & Tech Pack Review", desc: "Detailed analysis of your designs and specifications." },
  { title: "Sampling", desc: "Rapid prototyping and fit corrections within 7-10 days." },
  { title: "Material Sourcing", desc: "Ethical procurement of fabrics and trims from certified mills." },
  { title: "Bulk Production", desc: "High-speed manufacturing with inline quality checks." },
  { title: "Quality Inspection", desc: "Final AQL inspection before packaging and loading." },
  { title: "Shipment", desc: "Global logistics handling via Sea, Air, or Land." }
];

const CASE_STUDIES = [
  {
    client: "UK Streetwear Brand",
    product: "Custom Hoodies",
    volume: "20,000 Units",
    timeline: "45 Days",
    result: "Repeat orders for 12 months"
  },
  {
    client: "EU Retail Chain",
    product: "Organic Cotton Tees",
    volume: "50,000 Units",
    timeline: "60 Days",
    result: "Zero quality rejections in 2 years"
  }
];

const TESTIMONIALS = [
  { quote: "The most reliable partner we've found in Bangladesh. Their attention to detail on tech packs is unmatched.", name: "S. Miller", country: "United Kingdom" },
  { quote: "On-time delivery was our biggest pain point until we switched to [COMPANY NAME]. Highly recommended.", name: "A. Dubois", country: "France" }
];

// --- Components ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      {/* Sticky CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-[60]">
        <a href="#rfq" className="bg-black text-white px-6 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2">
          Request a Quote <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Section 12: Header / Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-100 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-lg">C</div>
            <span className="text-xl font-bold tracking-tighter uppercase">{COMPANY_NAME}</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#capabilities" className="text-sm font-medium hover:opacity-60 transition-opacity">Capabilities</a>
            <a href="#process" className="text-sm font-medium hover:opacity-60 transition-opacity">Process</a>
            <a href="#compliance" className="text-sm font-medium hover:opacity-60 transition-opacity">Compliance</a>
            <a href="#rfq" className="bg-black text-white px-6 py-2.5 text-sm font-bold hover:bg-neutral-800 transition-all">Request a Quote</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 px-4 py-8 flex flex-col gap-6"
          >
            <a href="#capabilities" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Capabilities</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Process</a>
            <a href="#compliance" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold">Compliance</a>
            <a href="#rfq" onClick={() => setIsMenuOpen(false)} className="bg-black text-white py-4 text-center font-bold">Request a Quote</a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Section 1: Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                  Reliable RMG Manufacturing Partner from Bangladesh for Global Apparel Brands
                </h1>
                <p className="text-lg sm:text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl">
                  Certified production, consistent quality, and on-time delivery for USA, UK, and EU buyers.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <a href="#rfq" className="px-8 py-4 bg-black text-white font-bold hover:bg-neutral-800 transition-all flex items-center gap-2">
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#capabilities" className="px-8 py-4 border border-neutral-200 font-bold hover:bg-neutral-50 transition-all">
                    View Capabilities
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 items-center opacity-40 grayscale">
                  {COMPLIANCE_LOGOS.map((logo) => (
                    <div key={logo.name} className="px-3 py-1 border border-neutral-400 text-[10px] font-bold tracking-widest">{logo.name}</div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-16 lg:mt-0 relative aspect-[4/3] bg-neutral-100 overflow-hidden"
              >
                <img 
                  src="https://picsum.photos/seed/factory-hero/1200/900" 
                  alt="Factory Production" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Trust Metrics */}
        <section className="py-20 bg-[#F4F4F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
              {TRUST_METRICS.map((metric, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 border border-neutral-200 text-center"
                >
                  <div className="flex justify-center mb-4 text-neutral-400">{metric.icon}</div>
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Who We Serve */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Who We Serve</h2>
              <div className="w-12 h-1 bg-black mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {AUDIENCES.map((item, idx) => (
                <div key={idx} className="p-8 border border-neutral-100 hover:border-black transition-all group">
                  <div className="mb-6 text-neutral-300 group-hover:text-black transition-colors">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400">Typical Order</div>
                    <div className="text-sm font-bold">{item.orderSize}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 pt-2">Key Benefit</div>
                    <div className="text-sm font-bold">{item.benefit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Product Capabilities */}
        <section id="capabilities" className="py-24 bg-[#F4F4F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Product Capabilities</h2>
              <div className="w-12 h-1 bg-black mx-auto" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {CAPABILITIES.map((cap, idx) => (
                <div key={idx} className="bg-white group overflow-hidden border border-neutral-200">
                  <div className="aspect-video overflow-hidden">
                    <img src={cap.img} alt={cap.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                    <p className="text-sm text-neutral-500">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Us</h2>
              <div className="w-12 h-1 bg-black mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {WHY_US.map((item, idx) => (
                <div key={idx} className="p-8 bg-neutral-50 border-l-4 border-black">
                  <div className="flex items-center gap-2 text-red-600 mb-4">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Problem</span>
                  </div>
                  <div className="text-lg font-bold mb-6 italic">“{item.problem}”</div>
                  <div className="flex items-center gap-2 text-green-600 mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Solution</span>
                  </div>
                  <div className="text-sm font-medium leading-relaxed">{item.solution}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Production Process */}
        <section id="process" className="py-24 bg-[#F4F4F4] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Production Process</h2>
              <div className="w-12 h-1 bg-black mx-auto" />
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-neutral-300" />
              <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
                {PROCESS.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full mb-6 font-bold text-xl ring-8 ring-[#F4F4F4]">
                      {idx + 1}
                    </div>
                    <h3 className="text-sm font-bold mb-3 px-2">{step.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed px-4">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Case Studies */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Case Studies</h2>
              <div className="w-12 h-1 bg-black mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {CASE_STUDIES.map((study, idx) => (
                <div key={idx} className="p-10 border border-neutral-200 hover:shadow-2xl transition-all">
                  <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">{study.client}</div>
                  <h3 className="text-2xl font-bold mb-8">{study.product}</h3>
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Volume</div>
                      <div className="font-bold">{study.volume}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Timeline</div>
                      <div className="font-bold">{study.timeline}</div>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 mb-8">
                    <div className="text-xs font-bold text-green-700 uppercase tracking-widest mb-1">Result</div>
                    <div className="text-sm font-bold">{study.result}</div>
                  </div>
                  <a href="#rfq" className="inline-flex items-center gap-2 font-bold text-sm hover:gap-4 transition-all">
                    Start Your Project <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Testimonials */}
        <section className="py-24 bg-[#F4F4F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-white p-12 relative">
                  <div className="text-6xl text-neutral-100 absolute top-6 left-6 font-serif">“</div>
                  <p className="text-lg font-medium italic mb-8 relative z-10 leading-relaxed">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-neutral-100 rounded-full" />
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-xs text-neutral-400 uppercase tracking-widest">{t.country}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Factory & Compliance */}
        <section id="compliance" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Factory & Compliance</h2>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  Our facility operates under the highest international standards for labor rights and environmental safety. We believe in complete transparency and ethical production.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-neutral-400" />
                    <span className="font-bold">Certifications: {CERTIFICATIONS}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-neutral-400" />
                    <span className="font-bold">0% Child Labor / 100% Fair Wages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-neutral-400" />
                    <span className="font-bold">Sustainable Waste Management Systems</span>
                  </div>
                </div>
                <button className="px-8 py-4 bg-black text-white font-bold hover:bg-neutral-800 transition-all flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Download Company Profile
                </button>
              </div>
              <div className="mt-16 lg:mt-0 grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/factory1/400/400" alt="Factory" className="w-full aspect-square object-cover grayscale" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/factory2/400/400" alt="Factory" className="w-full aspect-square object-cover grayscale" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/factory3/400/400" alt="Factory" className="w-full aspect-square object-cover grayscale" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/factory4/400/400" alt="Factory" className="w-full aspect-square object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 10 & 11: Final CTA & Contact Form */}
        <section id="rfq" className="py-24 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-8">Ready to Source Reliable Garments from Bangladesh?</h2>
                <ul className="space-y-6 mb-12">
                  <li className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-white/10 flex items-center justify-center rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="font-medium">Fast response within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-white/10 flex items-center justify-center rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="font-medium">Transparent pricing</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-white/10 flex items-center justify-center rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="font-medium">Dedicated support</span>
                  </li>
                </ul>
                
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Direct Contact</div>
                  <div className="flex items-center gap-4 mb-6">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span className="font-bold">{CONTACT_WHATSAPP} (WhatsApp)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="font-bold">{CONTACT_EMAIL}</span>
                  </div>
                </div>
              </div>

              <div className="mt-16 lg:mt-0">
                <form className="bg-white p-10 text-[#1A1A1A]">
                  <h3 className="text-2xl font-bold mb-8">Get a Custom Quote</h3>
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Name</label>
                        <input type="text" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-black outline-none transition-all" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Email</label>
                        <input type="email" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-black outline-none transition-all" placeholder="email@company.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Company</label>
                        <input type="text" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-black outline-none transition-all" placeholder="Company Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Product Type</label>
                        <input type="text" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-black outline-none transition-all" placeholder="e.g. Knitwear" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Quantity</label>
                      <input type="text" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-black outline-none transition-all" placeholder="e.g. 5,000 Units" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Message</label>
                      <textarea rows={4} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-black outline-none transition-all" placeholder="Your requirements..."></textarea>
                    </div>
                    <button className="w-full py-5 bg-black text-white font-bold hover:bg-neutral-800 transition-all">
                      Get My Custom Quote
                    </button>
                    <p className="text-center text-xs text-neutral-400 mt-4 italic">We respond within 24 hours</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Section 12: Footer */}
      <footer className="bg-white border-t border-neutral-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-lg">C</div>
                <span className="text-xl font-bold tracking-tighter uppercase">{COMPANY_NAME}</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-sm mb-8">
                Reliable RMG manufacturing partner from Bangladesh. Certified production, consistent quality, and on-time delivery for global brands.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-all"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="w-10 h-10 border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-all"><Mail className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-8">Export Regions</h4>
              <ul className="space-y-4 text-sm text-neutral-500 font-medium">
                <li>USA & Canada</li>
                <li>United Kingdom</li>
                <li>European Union</li>
                <li>Australia & NZ</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-8">Certifications</h4>
              <ul className="space-y-4 text-sm text-neutral-500 font-medium">
                <li>BSCI Certified</li>
                <li>WRAP Gold</li>
                <li>SEDEX Audited</li>
                <li>ISO 9001:2015</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-400">© 2024 {COMPANY_NAME}. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
