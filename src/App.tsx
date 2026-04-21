/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, MapPin, Clock, CheckCircle, 
  ChevronRight, Car, ShieldCheck, 
  CreditCard, Search, Menu, X, Star,
  MessageCircle
} from 'lucide-react';
import { CARS, TESTIMONIALS, GALLERY_IMAGES } from './data';

// Component: NavBar
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center transform -skew-x-12">
            <Car className="text-black w-6 h-6 transform skew-x-12" />
          </div>
          <span className="font-serif text-2xl font-bold uppercase tracking-wider text-white">Elengos</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#vehicles" className="hover:text-gold-400 transition-colors">Vehicles</a>
          <a href="#services" className="hover:text-gold-400 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex">
          <a href="tel:+260978013825" className="px-6 py-2 border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black transition-all rounded-full uppercase tracking-widest text-xs font-bold flex items-center gap-2">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#vehicles" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest hover:text-gold-400">Vehicles</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest hover:text-gold-400">Services</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest hover:text-gold-400">Gallery</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg uppercase tracking-widest hover:text-gold-400">Contact</a>
            <a href="tel:+260978013825" className="px-6 py-3 bg-gold-500 text-black text-center font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Component: Hero
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629897048514-3dd7414df8b5?auto=format&fit=crop&q=80" 
          alt="Toyota Car" 
          className="w-full h-full object-cover object-center transform scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-12 bg-gold-500"></div>
          <span className="uppercase tracking-[0.3em] text-gold-400 text-sm font-semibold">Elengos Car Dealership</span>
          <div className="h-[1px] w-12 bg-gold-500"></div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] text-white DropShadow-lg"
        >
          FIND YOUR PERFECT CAR IN LUSAKA
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl font-light"
        >
          High-quality, reliable everyday vehicles with trusted service and unbeatable deals. Visit our showroom in Ibex Main Street today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#vehicles" className="px-8 py-4 bg-gold-500 text-black uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 hover:bg-gold-400 transition-colors">
            <Car className="w-5 h-5" /> View Cars
          </a>
          <a href="https://wa.me/260978013825" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/30 bg-black/30 backdrop-blur-sm text-white uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors">
            <MessageCircle className="w-5 h-5" /> WhatsApp Inquiry
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="mt-16 flex flex-wrap justify-center gap-8 text-neutral-400 text-sm uppercase tracking-wider font-medium"
        >
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-500" /> Trusted Dealer</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-500" /> Quality Vehicles</span>
          <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold-500" /> 24/7 Availability</span>
        </motion.div>
      </div>
    </section>
  );
};

// Component: Reservation Modal
const ReservationModal = ({ isOpen, onClose, carName }: { isOpen: boolean, onClose: () => void, carName: string }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitted(false);
        setStep(1);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#141414] border border-white/10 p-8 max-w-md w-full shadow-2xl overflow-hidden rounded-xl">
         {/* Decorative elements */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-3xl rounded-full"></div>
         <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
         </button>
         
         {!isSubmitted ? (
           <>
             {step === 1 ? (
               <div className="animate-in fade-in zoom-in-95 duration-300">
                 <div className="mb-6">
                    <Clock className="w-10 h-10 text-gold-500 mb-4" />
                    <h3 className="font-serif text-3xl font-bold mb-2">Reserve Vehicle</h3>
                    <p className="text-neutral-400 text-sm">Hold the {carName} before finalizing your purchase.</p>
                 </div>

                 <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Full Name</label>
                      <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Phone Number</label>
                      <input type="tel" className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="097 8013825" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Hold Duration</label>
                         <select className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none" required>
                            <option value="24h">24 Hours</option>
                            <option value="48h">48 Hours</option>
                            <option value="72h">3 Days</option>
                            <option value="1w">1 Week</option>
                         </select>
                       </div>
                       <div>
                         <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Expected View Date</label>
                         <input type="date" className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors" required />
                       </div>
                    </div>
                    
                    <button type="submit" className="w-full py-4 mt-2 bg-white text-black font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors">
                      Continue to Deposit
                    </button>
                 </form>
               </div>
             ) : (
               <div className="animate-in slide-in-from-right-4 fade-in duration-300">
                 <div className="mb-6">
                    <button onClick={() => setStep(1)} className="text-gold-500 text-sm flex items-center gap-1 mb-4 hover:text-gold-400">
                      <ChevronRight className="w-4 h-4 rotate-180" /> Back
                    </button>
                    <CreditCard className="w-10 h-10 text-gold-500 mb-4" />
                    <h3 className="font-serif text-3xl font-bold mb-2">Secure Deposit</h3>
                    <p className="text-neutral-400 text-sm">A fully refundable deposit to secure your reservation.</p>
                 </div>

                 <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Card Number</label>
                      <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors tracking-widest" placeholder="**** **** **** ****" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Expiry Date</label>
                         <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="MM/YY" required />
                       </div>
                       <div>
                         <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">CVC</label>
                         <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="***" required />
                       </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center mb-2 mt-4">
                       <span className="text-sm font-bold uppercase tracking-wider">Deposit Amount</span>
                       <span className="text-gold-400 font-serif text-xl font-bold">ZMW 5,000</span>
                    </div>
                    <button type="submit" className="w-full py-4 mt-2 bg-gold-500 text-black font-bold uppercase tracking-widest hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20">
                      Confirm Reservation
                    </button>
                    <p className="text-center text-[10px] text-neutral-600 mt-4 uppercase tracking-widest flex items-center justify-center gap-1">
                       <ShieldCheck className="w-3 h-3" /> Encrypted Payment Gateway Mock
                    </p>
                 </form>
               </div>
             )}
           </>
         ) : (
           <div className="py-8 text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="font-serif text-3xl font-bold mb-2 text-white">Reservation Confirmed!</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Thank you! The <strong className="text-white font-medium">{carName}</strong> is successfully reserved. We have sent a confirmation email with the details and viewing schedule.
              </p>
              <button onClick={onClose} className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors text-sm">
                Return to Gallery
              </button>
           </div>
         )}
      </div>
    </div>
  )
}

// Component: Featured Vehicles
const FeaturedVehicles = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  const handleReserveClick = (carName: string) => {
    setSelectedCar(carName);
    setModalOpen(true);
  };

  return (
    <section id="vehicles" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="uppercase tracking-[0.2em] text-gold-500 text-sm font-bold block mb-4">Our Collection</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Featured Vehicles</h2>
          </div>
          <a href="#contact" className="mt-6 md:mt-0 px-6 py-3 border border-white/20 text-white uppercase tracking-widest text-xs font-bold flex items-center gap-2 hover:border-gold-500 hover:text-gold-400 transition-colors">
            View All Inventory <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map(car => (
            <div key={car.id} className="group bg-[#141414] border border-white/5 rounded-xl overflow-hidden hover:border-gold-500/30 transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-black">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs uppercase tracking-widest font-bold border border-white/10">
                  Available
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gold-400 text-xl font-medium tracking-wide mb-6">{car.price}</p>
                
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4 mb-6">
                  <div className="text-center">
                    <span className="block text-neutral-500 text-xs uppercase tracking-wider mb-1">Engine</span>
                    <span className="text-sm font-medium">{car.specs.engine}</span>
                  </div>
                  <div className="text-center border-l border-r border-white/10">
                    <span className="block text-neutral-500 text-xs uppercase tracking-wider mb-1">Trans</span>
                    <span className="text-sm font-medium">{car.specs.trans}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-neutral-500 text-xs uppercase tracking-wider mb-1">Fuel</span>
                    <span className="text-sm font-medium">{car.specs.fuel}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href="#contact" className="flex-1 py-3 bg-white text-black text-center font-bold uppercase tracking-wider text-xs hover:bg-gold-500 transition-colors">
                    Inquire Now
                  </a>
                  <button onClick={() => handleReserveClick(car.name)} className="flex-1 py-3 px-4 border border-white/20 text-white hover:border-gold-500 hover:text-gold-500 transition-colors flex items-center justify-center gap-2 cursor-pointer font-bold uppercase tracking-wider text-xs" aria-label="Reserve Vehicle">
                    <Clock className="w-4 h-4" /> Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} carName={selectedCar} />
    </section>
  );
};

// Component: Services & Why Choose Us
const ServicesAndTrust = () => {
  const services = [
    { icon: <Car />, title: "Vehicle Sales", desc: "Reliable new and pre-owned modern vehicles." },
    { icon: <MapPin />, title: "Vehicle Delivery", desc: "Safe and secure transport right to your door." },
    { icon: <Search />, title: "Vehicle Sourcing", desc: "Looking for something specific? We'll find it." },
    { icon: <CreditCard />, title: "Trade-In Options", desc: "Competitive valuation for your current vehicle." },
  ];

  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <span className="uppercase tracking-[0.2em] text-gold-500 text-sm font-bold block mb-4">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">Beyond finding your dream car.</h2>
          <p className="text-neutral-400 mb-10 text-lg">We offer a comprehensive suite of automotive services designed to make your purchasing experience as seamless as the vehicles we sell.</p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded bg-[#141414] border border-white/5 flex items-center justify-center shrink-0 text-gold-500">
                  {srv.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{srv.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl relative z-10 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80" 
              alt="Dealership" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Trust Card */}
          <div className="absolute -bottom-10 -left-10 lg:-left-20 bg-[#141414] border border-gold-500/30 p-8 rounded-xl w-72 lg:w-80 z-20 shadow-2xl shadow-black">
            <h4 className="font-serif text-2xl font-bold mb-6 inline-flex items-center gap-3">
              <ShieldCheck className="text-gold-500 w-8 h-8" /> Why Us
            </h4>
            <ul className="space-y-4">
              {['Trusted Local Dealer', 'Quality Checked Vehicles', 'Fast & Reliable Service', 'Affordable Deals'].map((itm, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> {itm}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Component: Gallery
const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <span className="uppercase tracking-[0.2em] text-gold-500 text-sm font-bold block mb-4">Inside Elengos</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold">The Showroom</h2>
      </div>
      
      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-6 pb-8 md:px-12 snap-x">
        {GALLERY_IMAGES.map((img, idx) => (
          <div key={idx} className="min-w-[85vw] md:min-w-[40vw] h-[60vh] shrink-0 snap-center relative group overflow-hidden rounded-xl border border-white/10">
            <img 
              src={img} 
              alt="Gallery" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Component: Contact & Location
const ContactAndLocation = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <span className="uppercase tracking-[0.2em] text-gold-500 text-sm font-bold block mb-4">Inquire</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Get Your Dream Car Today</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-[#141414] border border-white/10 p-4 text-white focus:outline-none focus:border-gold-500 transition-colors rounded-none" placeholder="Enter your name" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-[#141414] border border-white/10 p-4 text-white focus:outline-none focus:border-gold-500 transition-colors rounded-none" placeholder="097 8013825" required />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Interested Car</label>
                <select className="w-full bg-[#141414] border border-white/10 p-4 text-white focus:outline-none focus:border-gold-500 transition-colors rounded-none appearance-none">
                  <option value="">Select a vehicle...</option>
                  {CARS.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  <option value="other">Other / Sourcing Request</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Message</label>
                <textarea className="w-full bg-[#141414] border border-white/10 p-4 text-white focus:outline-none focus:border-gold-500 transition-colors rounded-none h-32 resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Location & Info */}
          <div className="flex flex-col gap-8">
            <div className="bg-[#141414] p-8 border border-white/5">
              <h4 className="font-serif text-2xl font-bold mb-6">Contact Details</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold-500 shrink-0 w-6 h-6" />
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Showroom Location</h5>
                    <p className="text-neutral-400">Ibex Main Street<br/>Lusaka, Zambia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold-500 shrink-0 w-6 h-6" />
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Direct Line</h5>
                    <a href="tel:+260978013825" className="text-neutral-400 hover:text-gold-400 text-lg">097 8013825</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-gold-500 shrink-0 w-6 h-6" />
                  <div>
                    <h5 className="font-bold text-sm uppercase tracking-wider mb-1">Business Hours</h5>
                    <p className="text-neutral-400">Open 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder - Visual only for styling purposes */}
            <div className="flex-1 min-h-[250px] bg-[#141414] border border-white/5 relative overflow-hidden flex items-center justify-center p-8 group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale group-hover:opacity-40 transition-opacity"></div>
               <div className="relative z-10 text-center">
                  <MapPin className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <a href="https://maps.google.com/?q=Ibex+Main+Street+Lusaka+Zambia" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors">Open in Maps</a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Component: Footer
const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center justify-center md:justify-start gap-2">
           <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center transform -skew-x-12">
            <Car className="text-black w-4 h-4 transform skew-x-12" />
          </div>
          <span className="font-serif text-xl font-bold uppercase tracking-wider">Elengos</span>
        </div>
        
        <div className="text-neutral-500 text-sm uppercase tracking-wider text-center flex flex-col md:flex-row justify-center gap-4 md:gap-8">
           <span>Quality Cars</span>
           <span className="hidden md:inline">•</span>
           <span>Trusted Dealer</span>
        </div>
        
        <div className="text-neutral-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Elengos Car Dealership Zambia.
        </div>
      </div>
    </footer>
  );
};

// Component: Floating WhatsApp
const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/260978013825?text=Hello%20Elengos%20Car%20Dealership!%20I%20am%20interested%20in..." 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/50 z-50 hover:scale-110 transition-transform active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white w-7 h-7" />
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-gold-500 selection:text-black">
      <NavBar />
      <Hero />
      <FeaturedVehicles />
      <ServicesAndTrust />
      
      {/* Testimonials Inline Component */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
           <span className="uppercase tracking-[0.2em] text-gold-500 text-sm font-bold block mb-4">Client Experience</span>
           <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16">What Our Clients Say</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-[#141414] p-8 border border-white/5 flex flex-col items-center">
                   <div className="flex gap-1 mb-4 text-gold-400">
                     {[...Array(t.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                   </div>
                   <p className="text-neutral-300 text-sm italic leading-relaxed mb-6 flex-1">"{t.text}"</p>
                   <p className="font-bold text-xs uppercase tracking-widest">{t.name}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Gallery />
      <ContactAndLocation />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

