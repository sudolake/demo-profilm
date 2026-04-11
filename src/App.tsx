/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Shield, 
  Car, 
  Users, 
  CheckCircle2, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  ArrowRight,
  Settings,
  Zap,
  Award,
  Globe,
  Leaf,
  GraduationCap,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'home' | 'b2c' | 'b2b' | 'training' | 'about' | 'contact' | 'find-center' | 'become-partner';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutOpen(false);
  }, [currentPage]);

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00b063]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <img 
              src="https://i.ibb.co/0RGTC9V1/logo.png" 
              alt="Profilm Logo" 
              className="h-[47.6px] w-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => setCurrentPage('home')} className={`text-xs font-bold text-white hover:opacity-80 transition-opacity uppercase tracking-wider ${currentPage === 'home' ? 'border-b-2 border-white pb-1' : ''}`}>Domov</button>
            <button onClick={() => setCurrentPage('b2c')} className={`text-xs font-bold text-white hover:opacity-80 transition-opacity uppercase tracking-wider ${currentPage === 'b2c' ? 'border-b-2 border-white pb-1' : ''}`}>Pre majiteľov vozidiel</button>
            <button onClick={() => setCurrentPage('b2b')} className={`text-xs font-bold text-white hover:opacity-80 transition-opacity uppercase tracking-wider ${currentPage === 'b2b' ? 'border-b-2 border-white pb-1' : ''}`}>Pre aplikačné centrá</button>
            <button onClick={() => setCurrentPage('training')} className={`text-xs font-bold text-white hover:opacity-80 transition-opacity uppercase tracking-wider ${currentPage === 'training' ? 'border-b-2 border-white pb-1' : ''}`}>Školenie</button>
            
            <button onClick={() => setCurrentPage('about')} className={`text-xs font-bold text-white hover:opacity-80 transition-opacity uppercase tracking-wider ${currentPage === 'about' ? 'border-b-2 border-white pb-1' : ''}`}>O nás</button>
            <button onClick={() => setCurrentPage('contact')} className={`text-xs font-bold text-white hover:opacity-80 transition-opacity uppercase tracking-wider ${currentPage === 'contact' ? 'border-b-2 border-white pb-1' : ''}`}>Kontakt</button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#00b063] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button onClick={() => setCurrentPage('home')} className="block w-full text-left px-3 py-4 text-sm font-bold text-white hover:bg-white/10 rounded-lg uppercase">Domov</button>
              <button onClick={() => setCurrentPage('b2c')} className="block w-full text-left px-3 py-4 text-sm font-bold text-white hover:bg-white/10 rounded-lg uppercase">Pre majiteľov vozidiel</button>
              <button onClick={() => setCurrentPage('b2b')} className="block w-full text-left px-3 py-4 text-sm font-bold text-white hover:bg-white/10 rounded-lg uppercase">Pre aplikačné centrá</button>
              <button onClick={() => setCurrentPage('training')} className="block w-full text-left px-3 py-4 text-sm font-bold text-white hover:bg-white/10 rounded-lg uppercase">Školenie</button>
              <button onClick={() => setCurrentPage('about')} className="block w-full text-left px-3 py-4 text-sm font-bold text-white hover:bg-white/10 rounded-lg uppercase">O nás</button>
              <button onClick={() => setCurrentPage('contact')} className="block w-full text-left px-3 py-4 text-sm font-bold text-white hover:bg-white/10 rounded-lg uppercase">Kontakt</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-[#00af62] pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://i.ibb.co/VcFj20pG/image.png" 
                alt="Profilm Logo" 
                className="h-[57.6px] w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Pre majiteľov vozidiel</h4>
            <ul className="space-y-4 text-base text-white/80">
              <li><button onClick={() => setCurrentPage('b2c')} className="hover:text-profilm-dark transition-colors">Ochrana laku</button></li>
              <li><button onClick={() => setCurrentPage('b2c')} className="hover:text-profilm-dark transition-colors">Ochrana skiel</button></li>
              <li><button onClick={() => setCurrentPage('find-center')} className="hover:text-profilm-dark transition-colors">Nájsť centrum</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Pre aplikačné centrá</h4>
            <ul className="space-y-4 text-base text-white/80">
              <li><button onClick={() => setCurrentPage('b2b')} className="hover:text-profilm-dark transition-colors">Produkty</button></li>
              <li><button onClick={() => setCurrentPage('training')} className="hover:text-profilm-dark transition-colors">Školenia</button></li>
              <li><button onClick={() => setCurrentPage('become-partner')} className="hover:text-profilm-dark transition-colors">Stať sa partnerom</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Sledujte nás</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-profilm-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-profilm-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-profilm-dark transition-colors flex items-center justify-center w-9 h-9">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-base text-white/60">
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <p>© 2026 Profilm. Všetky práva vyhradené.</p>
            <p className="mt-2 md:mt-0">www.profilm-czechoslovakia.sk</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-profilm-dark transition-colors">Ochrana osobných údajov</a>
            <a href="#" className="hover:text-profilm-dark transition-colors">Obchodné podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/q3KTSLmn/Lamborghini-1.png" 
            alt="Lamborghini" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40 md:from-black/80 md:via-black/40 md:to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-col mb-8">
              <h1 className="text-6xl md:text-9xl font-normal leading-[1.1] tracking-wide md:tracking-tight text-outline uppercase mb-4 font-anton">
                Váš partner pre
              </h1>
              <h1 className="text-5xl md:text-8xl font-normal leading-[1.2] tracking-tight text-white uppercase font-anton">
                špičkovú ochranu <br /> vozidiel
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white md:text-gray-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Sme výhradným distribútorom Profilm Group pre SR a ČR. Spájame technologickú špičku v oblasti fólií s 10+ rokmi praxe a odborným know-how.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => setCurrentPage('find-center')} 
                className="bg-profilm-green hover:bg-profilm-green/90 text-white font-bold py-4 px-10 rounded-lg transition-all flex items-center justify-center group cursor-pointer shadow-lg shadow-profilm-green/20"
              >
                Nájsť aplikačné centrum <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => setCurrentPage('become-partner')} 
                className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-10 rounded-lg border-2 border-white/30 hover:border-white transition-all flex items-center justify-center cursor-pointer"
              >
                Stať sa aplikačným centrom
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Choice Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-profilm-dark">Vyberte si svoju cestu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-10 flex flex-col justify-between h-full rounded-2xl shadow-sm border border-gray-100"
            >
              <div>
                <Car className="text-profilm-green mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-profilm-dark">Pre majiteľov vozidiel</h3>
                <p className="text-gray-600 mb-8">
                  Chcete ochrániť svoje vozidlo pred škrabancami, kamienkami, UV žiarením a inými nástrahami? Hľadáte riešenie, ktoré zachová hodnotu auta a jeho vzhľad? Nájdite si certifikovaného aplikátora vo vašom okolí.
                </p>
              </div>
              <button onClick={() => setCurrentPage('b2c')} className="btn-primary w-full py-4 px-8 flex items-center justify-center">
                Chcem si ochrániť vozidlo <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-10 flex flex-col justify-between h-full rounded-2xl shadow-sm border border-gray-100"
            >
              <div>
                <Users className="text-profilm-green mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-profilm-dark">Pre aplikačné centrá</h3>
                <p className="text-gray-600 mb-8">
                  Hľadáte kvalitný produkt, technickú podporu a systém, ktorý vám uľahčí prácu? Chcete rásť a ponúkať klientom profesionálne riešenie s garanciou?
                </p>
              </div>
              <button onClick={() => setCurrentPage('b2b')} className="btn-primary w-full py-4 px-8 flex items-center justify-center">
                Chcem sa stať partnerom <ArrowRight className="ml-2" size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="pt-8 pb-14 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-profilm-dark">Naši certifikovaní partneri</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-y-8 md:gap-y-12 opacity-40">
            {/* First Row: 4 partners */}
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
              <div className="text-2xl font-bold text-profilm-dark hover:opacity-100 transition-opacity cursor-default">DETAIL WORKS</div>
              <div className="text-2xl font-bold text-profilm-dark hover:opacity-100 transition-opacity cursor-default">AUTO PROTECT</div>
              <div className="text-2xl font-bold text-profilm-dark hover:opacity-100 transition-opacity cursor-default">PREMIUM WRAP</div>
              <div className="text-2xl font-bold text-profilm-dark hover:opacity-100 transition-opacity cursor-default">GLOSS STUDIO</div>
            </div>
            {/* Second Row: 3 partners */}
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
              <div className="text-2xl font-bold text-profilm-dark hover:opacity-100 transition-opacity cursor-default">ELITE SHIELD</div>
              <div className="text-2xl font-bold text-profilm-dark hover:opacity-100 transition-opacity cursor-default">WRAP MASTER</div>
              <div className="text-2xl font-bold text-profilm-dark hover:opacity-100 transition-opacity cursor-default">PROTECT CAR</div>
            </div>
          </div>
        </div>
        <div className="h-12"></div>
      </section>

      {/* Unique Offer Section */}
      <section className="py-16 bg-[#22343b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Prečo si vybrať Profilm</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { img: "https://i.ibb.co/35ncpjJR/image.png", title: "Špičkové a najmodernejšie technológie" },
              { img: "https://i.ibb.co/4w6dTdFZ/image.png", title: "Technická podpora" },
              { img: "https://i.ibb.co/5gbjBgqY/image.png", title: "Pokročilé postupy" },
              { img: "https://i.ibb.co/QF1DN02d/image.png", title: "Tím popredných odborníkov v odbore" },
              { img: "https://i.ibb.co/nqFV2vfm/image.png", title: "Konkurencieschopné ceny" },
              { img: "https://i.ibb.co/hFfrThZy/image.png", title: "Výhradná distribúcia pre Slovenskú a Českú republiku" },
              { img: "https://i.ibb.co/SZ2zhF1/image.png", title: "Ohľaduplnosť k životnému prostrediu" },
              { img: "https://i.ibb.co/vCJqnhwT/image.png", title: "Individuálne služby" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-[10px] md:text-xs font-bold text-[#00AF62] uppercase tracking-wider leading-tight max-w-[150px]">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustworthy Protection Section */}
      <section className="py-16 bg-[#f4f4f4] text-profilm-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ochrana, ktorej môžete dôverovať</h2>
            <p className="text-[#00AF62] font-semibold text-lg">PPF a automobilové okenné fólie:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* PPF Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative">
                <img 
                  src="https://i.ibb.co/ymcDfWM7/image.png" 
                  alt="Paint Protection Film" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10">
                <ul className="space-y-3 text-gray-600 font-medium">
                  <li><span className="text-profilm-dark font-bold">Profilm</span> reGen - najviac používané číre PPF</li>
                  <li><span className="text-profilm-dark font-bold">Profilm</span> Ultra Clear Pro <span className="text-[#00AF62] text-xs font-bold ml-1">***NOVINKA***</span></li>
                  <li><span className="text-profilm-dark font-bold">Profilm</span> Matte</li>
                  <li><span className="text-profilm-dark font-bold">Profilm</span> Black Shine</li>
                  <li><span className="text-profilm-dark font-bold">Profilm</span> ProColor</li>
                </ul>
              </div>
            </motion.div>

            {/* Window Film Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative">
                <img 
                  src="https://i.ibb.co/LXC808L7/image.png" 
                  alt="Automotive Window Film" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10">
                <p className="text-gray-400 text-xs font-bold mb-4">***PRIPRAVUJEME***</p>
                <ul className="space-y-3 text-gray-600 font-medium">
                  <li><span className="text-profilm-dark font-bold">Profilm</span> Classic Extruded</li>
                  <li><span className="text-profilm-dark font-bold">Profilm</span> Carbon Ultra</li>
                  <li><span className="text-profilm-dark font-bold">Profilm</span> High Performance Hybrid</li>
                  <li><span className="text-profilm-dark font-bold">Profilm</span> Skincare Ceramic</li>
                  <li><span className="text-profilm-dark font-bold">Profilm</span> Safety</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );

  const B2CPage = () => (
    <div className="pt-16 bg-white text-profilm-dark">
      <section className="relative h-[90vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/bkCyNGZ/Technician-Training-3.png" 
            alt="Lamborghini" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40 md:from-black/80 md:via-black/40 md:to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-col mb-8">
              <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] tracking-wide md:tracking-tight text-outline uppercase mb-1 font-anton">
                Ochrana laku a skiel
              </h1>
              <h1 className="text-4xl md:text-6xl font-normal leading-[1.2] tracking-tight text-white uppercase font-anton">
                ktorá zachová hodnotu <br /> vášho vozidla
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white md:text-gray-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Vaše vozidlo je investícia. Ochranné fólie Profilm chránia lak pred poškodením, znižujú riziko drahých opráv a pomáhajú udržať jeho hodnotu.
            </p>
            
            <button 
              onClick={() => setCurrentPage('find-center')} 
              className="bg-profilm-green hover:bg-profilm-green/90 text-white font-bold py-4 px-10 rounded-lg transition-all flex items-center justify-center group cursor-pointer shadow-lg shadow-profilm-green/20"
            >
              Nájsť aplikačné centrum <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center bg-profilm-green/10 text-profilm-green px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                <Shield size={14} className="mr-2" /> Ochrana laku
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-profilm-dark">Fyzická bariéra medzi lakom a vonkajšími nástrahami</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Ochrana pred kamienkami a škrabancami",
                  "Zníženie rizika opráv laku",
                  "Zachovanie originálneho vzhľadu",
                  "Vyššia dôvera pri predaji vozidla"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-profilm-green mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 italic">
                Fólia absorbuje bežné mechanické poškodenie. Lak pod ňou ostáva neporušený.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square">
              <img 
                src="https://i.ibb.co/zT4qh67b/Artboard-37.png" 
                alt="Paint Protection" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl aspect-square">
              <img 
                src="https://i.ibb.co/fGvtpm2t/Window-Film-Technician.png" 
                alt="Window Protection" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center bg-profilm-green/10 text-profilm-green px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                <Globe size={14} className="mr-2" /> Ochrana skiel
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-profilm-dark">Okenné sklo pod kontrolou</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Menej tepla v interiéri",
                  "Ochrana palubnej dosky",
                  "Vyšší komfort v lete"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-profilm-green mr-3" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 italic">
                Okenné fólie chránia pred UV žiarením a zvyšujú komfort jazdy.
              </p>
            </div>
          </div>

          {/* Redesigned Wider CTA Section - Light Version */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gray-50 px-6 py-12 md:p-20 text-center border border-gray-200 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-profilm-green/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-profilm-green/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto">
              <Shield className="text-profilm-green mx-auto mb-8 opacity-30" size={64} />
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-profilm-dark">
                Chcete ochrániť svoje vozidlo pred škrabancami, kamienkami, UV žiarením a inými nástrahami?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Nájdite si certifikovaného aplikátora vo vašom okolí a doprajte svojmu vozidlu prémiovú ochranu Profilm.
              </p>
              <button 
                onClick={() => setCurrentPage('find-center')} 
                className="btn-primary text-lg px-12 py-4 shadow-lg"
              >
                Nájsť aplikačné centrum
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );

  const B2BPage = () => (
    <div className="pt-16 bg-white text-profilm-dark">
      <section className="relative h-[90vh] md:h-[80vh] flex items-start md:items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/nTY4y41/U2A3930.jpg" 
            alt="Workshop" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40 md:from-black/80 md:via-black/40 md:to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl pt-6 md:pt-0"
          >
            <div className="flex flex-col mb-6 md:mb-8">
              <h1 className="text-5xl md:text-7xl font-normal leading-[1.3] md:leading-[1.1] tracking-wide md:tracking-tight text-outline uppercase mb-2 md:mb-1 font-anton">
                Stabilný produkt. Silná značka.
              </h1>
              <h1 className="text-4xl md:text-6xl font-normal leading-[1.2] tracking-tight text-white uppercase font-anton">
                Reálny rast pre vaše <br /> podnikanie
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white md:text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-2xl font-medium">
              Budujeme sieť profesionálnych aplikátorov. Ponúkame PPF fólie najvyššej kvality, školenia, technickú podporu a systém, ktorý vám pomôže rásť vo Vašom podnikaní.
            </p>
            
            <button 
              onClick={() => setCurrentPage('become-partner')} 
              className="bg-profilm-green hover:bg-profilm-green/90 text-white font-bold py-4 px-10 rounded-lg transition-all flex items-center justify-center group cursor-pointer shadow-lg shadow-profilm-green/20"
            >
              Stať sa aplikačným centrom <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-profilm-dark">Pre koho je Profilm vhodný?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: "Chcete rozšíriť svoje portfólio?", desc: "Ste detailer alebo majiteľ autoservisu a hľadáte vysoko ziskovú službu s rastúcim dopytom." },
              { title: "Hľadáte kvalitnejšiu fóliu?", desc: "Už vás nebavia reklamácie na žltnutie, praskanie alebo zlé lepidlo? Ponúkame materiál s optickou dokonalosťou a zárukou až 12 rokov." },
              { title: "Potrebujete spoľahlivého dodávateľa?", desc: "Už žiadne dlhé čakacie doby. Máme vlastné distribučné centrum a materiál, ktorý je vyrábaný pod prísnym dohľadom odborníkov." },
              { title: "Bojujete s náročnou inštaláciou?", desc: "Naše fólie sú mimoriadne pružné s vynikajúcou priľnavosťou na hranách, čo vám ušetrí čas a nervy pri práci." },
              { title: "Chýba vám technická podpora?", desc: "Ponúkame osobný prístup, individuálne školenia a technické poradenstvo na telefóne vždy, keď to potrebujete." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
                <h3 className="text-2xl font-bold mb-4 text-profilm-green">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Profilm Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-profilm-dark">Prečo si vybrať Profilm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-profilm-green/10 rounded-2xl flex items-center justify-center text-profilm-green">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-profilm-dark">PPF fólia najvyššej kvality</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Naše suroviny pochádzajú z celého sveta – najlepšie substráty TPU v kombinácii s najlepšími lepidlami a coatingmi. Či už sa jedná o náš reGen s najlepšími samohojivými vlastnosťami, Ultra Clear alebo niektorý z našej rozsiahlej rady ProColor, fólie sú vyrábané na najmodernejších strojoch a za prísneho dohľadu popredných špecialistov v odbore.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-profilm-green/10 rounded-2xl flex items-center justify-center text-profilm-green">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-profilm-dark">Jednoduchá inštalácia</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Naše fólie PPF sú pružné v kombinácii s vynikajúcou priľnavosťou pozdĺž hrán. Po odstránení PPF nezostávajú na laku žiadne fragmenty. Profilm PPF ponúka bezkonkurenčnú povrchovú úpravu.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-profilm-green/10 rounded-2xl flex items-center justify-center text-profilm-green">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-profilm-dark">Školenia a technická podpora</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Skúsený tréner vás prevedie inštaláciou krok za krokom. Ponúkame kurzy ako pre začiatočníkov tak aj pre pokročilých - každý kurz individuálne upravujeme podľa Vašich potrieb a požiadaviek.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-profilm-green/10 rounded-2xl flex items-center justify-center text-profilm-green">
                  <Settings size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-profilm-dark">Plotrovací systém Pro Cut</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Náš plotrovací softvér je užívateľsky prívetivý, knižnica vzorov je rozsiahla a denne aktualizovaná. Kombinujeme najnovší 3D softvér technológie s ručným testovaním, aby sme zaistili dokonalú presnosť vzorov.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-profilm-green/10 rounded-2xl flex items-center justify-center text-profilm-green">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-profilm-dark">Marketingová podpora značky</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Podporujeme našich partnerov v raste ich biznisu prostredníctvom marketingových materiálov a budovania silnej značky Profilm na trhu.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-profilm-green/10 rounded-2xl flex items-center justify-center text-profilm-green">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-profilm-dark">Sieť partnerov</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Objavte sieť certifikovaných partnerov Profilm. Skúsené aplikačné centrá po celom Slovensku a Česku poskytujú profesionálnu aplikáciu fólií, technickú podporu a jednotný štandard kvality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Profilm PPF je vyrábaný v súlade s požiadavkami nariadenia REACH, ISO 9001 a niekoľkými špecifickými normami OEM.
            </p>
          </div>
        </div>
      </section>

      {/* Product Series - Light Theme */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-profilm-dark">Naša séria ochranných fólií na lak</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 border-t-4 border-profilm-green rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-profilm-dark">reGen</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Samohojivosť pri izbovej teplote</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Farebná stálosť - nežltne</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Vysoká rezistencia voči škodlivým vplyvom</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Veľmi jednoduchá inštalácia</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> 7 rokov záruka</li>
              </ul>
            </div>
            <div className="bg-white p-8 border-t-4 border-profilm-green rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-profilm-dark">Ultra Clear Pro</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Samohojivé vlastnosti</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Farebná stálosť - nežltne</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Najvyššia rezistencia voči škodlivým vplyvom</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Hydrofóbne vlastnosti</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Jednoduchá inštalácia</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> 12 rokov záruka</li>
              </ul>
            </div>
            <div className="bg-white p-8 border-t-4 border-profilm-green rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-profilm-dark">Matte</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Textúrovaný saténový povrch</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Nesmerový povrch</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> Jednoduchá aplikácia</li>
                <li className="flex items-center"><CheckCircle2 size={16} className="text-profilm-green mr-2" /> 7 rokov záruka</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 border-t-4 border-profilm-green rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-profilm-dark">ProColor Series</h3>
              <ul className="space-y-3 text-sm text-gray-600 border-t border-gray-100 pt-4">
                <li className="py-1">Black Shine / Silver Shine / Gold Shine</li>
                <li className="py-1 border-t border-gray-50">Pink Diamond / Blue Diamond /</li>
                <li className="py-1 border-t border-gray-50">Champagne Diamond / Green Diamond</li>
                <li className="py-1 border-t border-gray-50">Green Chameleon / Purple Chameleon</li>
              </ul>
            </div>
            <div className="bg-white p-8 border-t-4 border-profilm-green rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-profilm-dark">Pružný PPF Coating</h3>
              <div className="space-y-4 text-sm text-gray-600 border-t border-gray-100 pt-4">
                <p>Keramický Coating PPF na predĺženie životnosti PPF</p>
                <p className="font-semibold text-profilm-dark">Powered by GTechniq (na báze GTechniq)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible PPF Coating Section */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-profilm-dark leading-tight">Pružný/Flexibilný (Flexible) PPF Coating</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Profilm PPF Coating ešte vylepšuje vlastnosti ochrannej fólie. Jedná sa o chemicky spojivú, ultra hustú pružnú ochranu, ktorá sa stáva ďalšou vrstvou ochrannej fólie – chráni ju pred možnými škodlivými vplyvmi, ktorým je vozidlo denne vystavené.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-bold text-profilm-dark mb-4 text-sm">Udržuje stálosť vzhľadu vašej PPF po dlhší čas</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start"><span className="text-profilm-green mr-2">•</span> Vynikajúco chráni povrch PPF</li>
                  <li className="flex items-start"><span className="text-profilm-green mr-2">•</span> Zvyšuje prirodzené hydrofóbne vlastnosti a lesk Profilm PPF</li>
                  <li className="flex items-start"><span className="text-profilm-green mr-2">•</span> Uľahčuje údržbu</li>
                  <li className="flex items-start"><span className="text-profilm-green mr-2">•</span> Možno použiť na lesklé a matné povrchy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-profilm-dark mb-4 text-sm">Každý box/Každá krabička obsahuje:</h4>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start"><span className="text-profilm-green mr-2">•</span> 30 ml PPF Coating</li>
                  <li className="flex items-start"><span className="text-profilm-green mr-2">•</span> Pár nitrilových rukavíc</li>
                  <li className="flex items-start"><span className="text-profilm-green mr-2">•</span> Aplikátor AP2 ultra mäkkou penovou hubkou</li>
                  <li className="flex items-start"><span className="text-profilm-green mr-2">•</span> Návod na použitie</li>
                </ul>
              </div>
            </div>
            
            <a href="#" className="text-profilm-green font-bold text-sm hover:underline">Bezpečnostné pokyny</a>
          </div>
          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <img 
              src="https://i.ibb.co/rGY9fX9j/image.png" 
              alt="Flexible PPF Coating" 
              className="max-w-full h-auto rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* ProCut System Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-profilm-dark">Plotrovací systém PPF ProCut</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Náš plotrovací softvér je užívateľsky prívetivý, knižnica vzorov je rozsiahla a denne aktualizovaná. Kombinujeme najnovší 3D softvér technológie s ručným testovaním, aby sme zaistili dokonalú presnosť vzorov.
              </p>
              <p>
                Naše úzke vzťahy s výrobcami OEM a predajcami automobilov po celom svete, zaisťujú prístup k najnovším modelom automobilov a aktuálnej knižnici vzorov. Naše britské štúdio na výrobu vzorov je plne vybavené a umožňuje nám naskenovať nové modely podľa nutnosti. Neplatíte žiadne predplatné ani skryté náklady. Naším cieľom je maximálna efektivita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ProCut Features Section */}
      <section className="py-16 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-24 flex items-center justify-center">
                  <img src="https://i.ibb.co/Q3dfrsB6/image.png" alt="Knižnica vzorov" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-profilm-green uppercase tracking-wider mb-4">ROZSIAHLA KNIŽNICA VZOROV</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Knižnica vzorov ProCut je rozsiahla a denne aktualizovaná.</p>
            </div>
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-24 flex items-center justify-center">
                  <img src="https://i.ibb.co/qLj92btM/image.png" alt="Presné vzory" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-profilm-green uppercase tracking-wider mb-4">PRESNÉ VZORY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Kombinujeme najnovšie 3D technológie s manuálnym testovaním na vytvorenie dokonalých výrezov. ProCut vám ponúka pokoj na duši.</p>
            </div>
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-24 flex items-center justify-center">
                  <img src="https://i.ibb.co/nGcWZ07/image.png" alt="Softvér" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-profilm-green uppercase tracking-wider mb-4">UŽÍVATEĽSKY PRÍVETIVÝ SOFTVÉR</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Používanie programu ProCut je jednoduché a intuitívne. Samozrejmosťou je možnosť upravovať, prispôsobovať a ukladať vlastné návrhy. Ak potrebujete asistenciu, je vám k dispozícii kompletná technická podpora od Profilm Slovakia.</p>
            </div>
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-32 h-24 flex items-center justify-center">
                  <img src="https://i.ibb.co/LDkz6KvP/image.png" alt="Kredity" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-profilm-green uppercase tracking-wider mb-4">PLOTROVACIE KREDITY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Plotrovacie kredity sú automaticky načítané na Váš účet pri nákupe role, takže sa nemusíte obávať, že vám dôjdu. ProCut je jednoduchý a efektívny.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Subfooter CTA - Light Version matching B2C */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gray-50 px-6 py-12 md:p-20 text-center border border-gray-200 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-profilm-green/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-profilm-green/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto">
              <Shield className="text-profilm-green mx-auto mb-8 opacity-30" size={64} />
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-profilm-dark">
                Hľadáte kvalitný produkt, technickú podporu a systém, ktorý vám uľahčí prácu? Chcete rásť a ponúkať klientom profesionálne riešenie s garanciou?
              </h2>
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Vyplňte krátky dotazník a my sa Vám do 24h hodín ozveme s následnou ponukou.
              </p>
              <button 
                onClick={() => setCurrentPage('become-partner')} 
                className="btn-primary text-lg px-12 py-4 shadow-lg"
              >
                Stať sa aplikačným centrom
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );

  const TrainingPage = () => (
    <div className="pt-16 bg-white text-profilm-dark">
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/LmH0Lvy/Technician-Training-2.png" 
            alt="Training" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40 md:from-black/80 md:via-black/40 md:to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-col mb-8">
              <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] tracking-wide md:tracking-tight text-outline uppercase mb-1 font-anton">
                Školenia a podpora
              </h1>
              <h1 className="text-4xl md:text-6xl font-normal leading-[1.2] tracking-tight text-white uppercase font-anton">
                pre našich partnerov
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-white md:text-gray-300 mb-0 leading-relaxed max-w-2xl font-medium">
              Skúsený tréner vás prevedie inštaláciou krok za krokom. Ponúkame kurzy ako pre začiatočníkov tak aj pre pokročilých.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-profilm-dark">Individuálny prístup ku každému</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Každý kurz individuálne upravujeme podľa Vašich potrieb a požiadaviek. Naším cieľom je, aby ste od nás odchádzali s istotou v každom kroku inštalácie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-profilm-dark">Štartovací kurz</h3>
                  <span className="bg-profilm-green/20 text-profilm-green px-3 py-1 rounded-full text-xs font-bold uppercase">Základy</span>
                </div>
                <span className="text-3xl font-bold text-profilm-dark">4 dni</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kurz je určený pre začiatočníkov, ktorí si chcú ozrejmiť techniku lepenia úplne od základov. Bude sa vám venovať skúsený tréner, ktorý vám bude neustále k dispozícii. Najskôr vás oboznámi s teóriou o materiáli a jeho aplikácii, a v ďalších dňoch sa budete učiť aplikovať PPF na diely auta. Týmto kurzom získate potrebné vzdelanie na začatie lepenia PPF.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Teoretická náuka o produkte</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Príprava vozidla</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Nástroje a ako ich používať</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Miešanie aplikačných roztokov</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Praktická inštalácia pomocou výrezov na dieloch auta</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Kontrola inštalácie a kontrola kvality</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Získanie osvedčenie o absolvovaní</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Marketingový materiál + podpora</li>
              </ul>
              <button onClick={() => setCurrentPage('contact')} className="btn-primary w-full py-4 mt-auto">Mám záujem o školenie</button>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-profilm-dark">Kurz pre pokročilých</h3>
                  <span className="bg-profilm-dark/10 text-profilm-dark px-3 py-1 rounded-full text-xs font-bold uppercase">Rozšírte zručnosti</span>
                </div>
                <span className="text-3xl font-bold text-profilm-dark">1 deň</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Toto školenie je zamerané pre aplikátorov, ktorým sa venujeme individuálne podľa ich presných požiadaviek.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Zameranie na náročné inštalácie</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Individuálny prístup</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Prispôsobenie vašim špecifickým požiadavkám</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Len pre aplikátorov, ktorí majú predchádzajúce aspoň 6-mesačné skúsenosti s lepením PPF</li>
                <li className="flex items-start"><CheckCircle2 size={16} className="text-profilm-green mr-2 mt-0.5 flex-shrink-0" /> Praktické Tipy a triky</li>
              </ul>
              <button onClick={() => setCurrentPage('contact')} className="btn-primary w-full py-4 mt-auto">Mám záujem o školenie</button>
            </div>
          </div>
          
          <div className="mt-16 p-10 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm text-center">
            <GraduationCap className="text-profilm-green mx-auto mb-6" size={48} />
            <div className="text-gray-600 max-w-4xl mx-auto space-y-4 leading-relaxed">
              <p>
                Všetky naše školiace kurzy sú v malých skupinách (1-2 osoby) pre intenzívny vzdelávací zážitok.
              </p>
              <p>
                Naše distribučné centrum je plne vybavené. Školenia prebiehajú priamo u nás v stredisku alebo po vzájomnej dohode u vás – vo vašom stredisku.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-16 bg-white text-profilm-dark">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20 md:mb-32">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-profilm-dark">Kto sme?</h1>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Sme výhradným distribútorom Profilm Group pre Slovenskú a Českú republiku - poprednej spoločnosti zaoberajúcej sa výrobou okenných fólií a ochranou laku (PPF), ktorú založili odborníci z celého sveta.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Náš tím sa skladá zo skúsených odborníkov v oblasti výskumu, vývoja, výroby, logistiky, predaja a marketingu. Spojili sme sa ako skupina Profilm Group s jediným poslaním - ponúknuť Vám najlepšie dostupné ochranné PPF a okenné fólie.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img 
                src="https://i.ibb.co/TDCdR7mY/Technician.png" 
                alt="Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl aspect-square">
              <img 
                src="https://i.ibb.co/fYdbmz3B/U2A3853.jpg" 
                alt="Vision" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-profilm-dark">Naša vízia</h2>
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-profilm-green/10 rounded-2xl flex items-center justify-center text-profilm-green">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-profilm-dark font-bold mb-2 text-xl">Náš záväzok voči Vám</h4>
                    <p className="text-gray-600">Dodávame produkty najvyššieho štandardu kvality. Obchodovanie s nami je ľahké, efektívne a príjemné.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-profilm-green/10 rounded-2xl flex items-center justify-center text-profilm-green">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-profilm-dark font-bold mb-2 text-xl">Trvalá podpora</h4>
                    <p className="text-gray-600">
                      Náš interný technický tím je tu, aby Vám poskytol potrebné informácie pre správnu aplikáciu fólií, poradenstvo a podporu softvéru ProCut.
                      Spokojnosť našich odberateľov je pre nás na prvom mieste
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-profilm-green/10 rounded-2xl flex items-center justify-center text-profilm-green">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h4 className="text-profilm-dark font-bold mb-2 text-xl">Náš záväzok voči našej planéte</h4>
                    <p className="text-gray-600">
                      Prijímame osvedčené postupy enviromentálneho manažmentu (ISO 14001). Produkty Profilm sú
                      vyrábané v najmodernejších, ekologicky šetrných zariadeniach využívajúcich energiu z
                      obnoviteľných zdrojov. Všetky naše kartónové obaly majú certifikáciu Forest Stewardship Council
                      (FSC).
                    </p>
                  </div>
                </div>
                
                <p className="mt-6 text-profilm-dark font-medium text-center">
                  Sme členom <span className="text-profilm-green font-bold">IWFA</span> (International Window Film Association)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-10 md:mt-16 md:pt-16 border-t border-gray-100">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://i.ibb.co/MDtFQKDB/IWFA-poblbuqll6gy7m8pv1wy039se2t4a4m1upj8zc7yzs.png" alt="IWFA" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/cX6HvgKt/icon-acc-01-ofu8dw5x4sejkta62fekkgambhqzudhkqq3c883560.png" alt="Certification 1" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/b5sQFdKT/icon-acc-02-ofu8dx3rbmftwf8swxt74y22wvmd22lb2uqtpi1qzs.png" alt="Certification 2" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/bgTH0KTN/icon-acc-03-ofu8dx3rbmftwf8swxt74y22wvmd22lb2uqtpi1qzs.png" alt="Certification 3" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/gLDyHCD2/icon-acc-04-ofu8dx3rbmftwf8swxt74y22wvmd22lb2uqtpi1qzs.png" alt="Certification 4" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/pr4TXYCN/icon-acc-05-ofu8dy1ligh4817frg7tpftji9hq9rp1ezeb6s0ctk.png" alt="Certification 5" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-16 bg-white text-profilm-dark">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-profilm-dark">Vyberte si svoju cestu:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-8 text-profilm-dark">Chcem si ochrániť vozidlo</h3>
                <button 
                  onClick={() => setCurrentPage('find-center')}
                  className="btn-primary w-full py-4 px-12 text-base mt-auto"
                >
                  Nájsť aplikačné centrum
                </button>
              </div>
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-8 text-profilm-dark">Chcem sa stať aplikačným centrom</h3>
                <button 
                  onClick={() => setCurrentPage('become-partner')}
                  className="btn-primary w-full py-4 px-12 text-base mt-auto"
                >
                  Stať sa aplikačným centrom
                </button>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100 w-full mb-12"></div>

          <h2 className="text-3xl font-bold text-center mb-16 text-profilm-dark">Kontaktujte nás</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-profilm-dark">Potrebujete pomoc?</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Phone className="text-profilm-green mr-4" size={20} />
                    <span>+421 907 033 404</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="text-profilm-green mr-4" size={20} />
                    <span>info@profilm-czechoslovakia.sk</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="text-profilm-green mr-4" size={20} />
                    <span>www.profilm-czechoslovakia.sk</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-profilm-dark">Fakturačné údaje</h3>
                <div className="space-y-4 text-sm text-gray-500 mb-8">
                  <div className="flex items-start">
                    <MapPin className="text-profilm-green mr-4 mt-1" size={20} />
                    <span>DETAIL WORKS s.r.o.<br />Boleráz 468, 919 08 Boleráz</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p>IČO: 53457692</p>
                    <p>DIČ: 2121378138</p>
                    <p>IČ DPH: SK2121378138</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.2635209112242!2d17.492133926989652!3d48.46514235529594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476ca44ec99f4be7%3A0x2505dbbbc602de2e!2sBoler%C3%A1z%20468%2C%20919%2008%20Boler%C3%A1z!5e0!3m2!1ssk!2ssk!4v1775845257040!5m2!1ssk!2ssk" 
                    width="100%" 
                    height="200" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-profilm-dark">Napíšte nám</h3>
                <form className="space-y-6 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">Meno a priezvisko</label>
                      <input type="text" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-profilm-green transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">Email *</label>
                      <input type="email" required className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-profilm-green transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Telefón</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-profilm-green transition-colors" />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <label className="block text-sm font-medium text-gray-500 mb-2">Správa</label>
                    <textarea className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-profilm-green transition-colors flex-grow min-h-[200px]"></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4">Odoslať dopyt</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const FindCenterPage = () => (
    <div className="pt-16 bg-white text-profilm-dark">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-profilm-dark">Nájsť aplikačné centrum</h1>
          <div className="bg-gray-50 p-10 text-center rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-xl text-gray-600 mb-8">Zoznam partnerských aplikačných centier Profilm:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Bratislava", "Trnava", "Nitra", "Žilina", "Banská Bystrica", "Košice", "Praha", "Brno", "Ostrava"].map((city, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-profilm-green transition-colors cursor-pointer group shadow-sm">
                  <h4 className="font-bold text-lg text-profilm-dark group-hover:text-profilm-green transition-colors">{city}</h4>
                  <p className="text-xs text-gray-500 mt-2">Certifikovaný partner Profilm</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const BecomePartnerPage = () => (
    <div className="pt-16 bg-white text-profilm-dark">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-profilm-dark">Stať sa aplikačným centrom</h1>
            <p className="text-gray-600">
              Ďakujeme za záujem stať sa partnerským aplikačným centrom Profilm. Prosím, nižšie vyplňte kontaktné údaje a my sa Vám do 24h hodín ozveme s následnou ponukou.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-[#00af62] p-10 rounded-2xl shadow-xl text-white">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Meno a priezvisko</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Email *</label>
                <input type="email" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Telefón *</label>
                <input type="tel" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Názov firmy / IČO</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Správa</label>
                <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors text-white placeholder:text-white/40"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-white text-[#00af62] font-bold rounded-xl hover:bg-profilm-dark hover:text-white transition-all shadow-lg">Odoslať dopyt</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'b2c': return <B2CPage />;
      case 'b2b': return <B2BPage />;
      case 'training': return <TrainingPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'find-center': return <FindCenterPage />;
      case 'become-partner': return <BecomePartnerPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
