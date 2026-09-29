import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Building,
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Shield,
  Coffee,
  Calendar,
  Star,
  Quote,
  History,
  Truck,
  Package,
  Store,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ShoppingBag
} from 'lucide-react';

const pageData = {
  name: "BeanFlow",
  phone: "6289529605601",
  address: "Jl. Rungkut Industri Raya No.12, Surabaya, Jawa Timur.",
  title: "Distributor Biji Kopi Nusantara Premium",
  description: "Menyediakan biji kopi pilihan terbaik dari seluruh pelosok Nusantara untuk kebutuhan Cafe, Restoran, dan Hotel Anda. Kualitas konsisten, harga kompetitif.",
  profileImg: "./logo.png", 
  heroImg: "./hero-bg.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  highlights: [
    { text: "Biji Kopi Fresh", icon: "Coffee" },
    { text: "Harga Grosir", icon: "Package" },
    { text: "Kirim Seluruh ID", icon: "Truck" }
  ],
  services: [
    { name: "Kualitas Grade A", icon: "Shield", desc: "Biji kopi disortir ketat untuk hasilkan rasa terbaik." },
    { name: "Support Cafe", icon: "Store", desc: "Konsultasi menu dan kalibrasi mesin untuk mitra." },
    { name: "Kapasitas Besar", icon: "Package", desc: "Siap penuhi kebutuhan supply ratusan kilogram." },
    { name: "Roasting Konsisten", icon: "History", desc: "Profil roasting presisi dengan mesin modern." }
  ],
  history: {
    year: "2018",
    content: "Berawal dari kecintaan kami terhadap kopi lokal pada tahun 2018, BeanFlow mulai menyusuri perkebunan kopi di Sumatera, Jawa, hingga Indonesia Timur. Kami menjalin kemitraan langsung dengan petani lokal (Direct Trade) untuk memastikan kesejahteraan mereka sekaligus menjaga kualitas panen terbaik. Kini, kami bangga telah mensuplai lebih dari 150+ kedai kopi di seluruh Indonesia."
  },
  catalog: [
    {
      name: "Arabica Gayo Wash",
      origin: "Aceh Tengah",
      notes: "Citrus, Floral, Black Tea",
      price: "Rp 185.000",
      unit: "/ kg",
      img: "./catalog-arabica-gayo.webp"
    },
    {
      name: "Robusta Dampit",
      origin: "Malang, Jawa Timur",
      notes: "Dark Chocolate, Caramel, Bold",
      price: "Rp 110.000",
      unit: "/ kg",
      img: "./catalog-robusta-dampit.webp"
    },
    {
      name: "House Blend Espresso",
      origin: "70% Arabica, 30% Robusta",
      notes: "Sweet Nutty, Brown Sugar",
      price: "Rp 150.000",
      unit: "/ kg",
      img: "./catalog-house-blend.webp"
    },
    {
      name: "Arabica Toraja Sapan",
      origin: "Toraja, Sulawesi",
      notes: "Herbal, Fruity, Clean Aftertaste",
      price: "Rp 195.000",
      unit: "/ kg",
      img: "./catalog-toraja-sapan.webp"
    }
  ],
  faqs: [
    { q: "Berapa minimal order untuk harga grosir?", a: "Minimal order untuk mendapatkan harga distributor/grosir adalah 5 Kg (bisa mix varian)." },
    { q: "Apakah melayani pengiriman ke luar pulau?", a: "Tentu, kami bekerja sama dengan berbagai ekspedisi cargo untuk pengiriman hemat ke seluruh Indonesia." },
    { q: "Bisa pesan sampel (sample beans) dulu?", a: "Bisa. Kami menyediakan Sample Pack isi 3 varian (@100gr) dengan harga khusus." },
    { q: "Berapa lama kopi dikirim setelah diroasting?", a: "Kami menerapkan sistem 'Roast to Order' atau maksimal umur kopi 7 hari pasca-roasting saat dikirim untuk menjaga kesegaran." }
  ],
  testimonials: [
    { name: "Andi - Owner Kedai Titik Koma", rating: 5, text: "Supply kopi dari BeanFlow tidak pernah mengecewakan. Espresso blend-nya sangat cocok dengan selera customer kami, crema tebal dan rasanya stabil!" },
    { name: "Sarah - Barista Kopi Senja", rating: 5, text: "Pelayanannya sangat profesional. Kalau butuh kalibrasi atau ada kendala, tim BeanFlow cepat respons dan membantu. Sukses terus!" },
    { name: "Budi - Roastery Lokal", rating: 4, text: "Green beans (biji mentah) dari sini kualitasnya sangat bersih, defect-nya minim. Sangat memudahkan pekerjaan roaster kami." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const scrollToForm = () => {
    document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const business = formData.get('business');
    const product = formData.get('product');
    const qty = formData.get('qty');
    const notes = formData.get('notes');
    
    let textMessage = `Halo Tim ${pageData.name}, saya ${name}`;
    if(business) textMessage += ` dari ${business}`;
    textMessage += `. Saya tertarik untuk order/tanya mengenai produk ${product} dengan estimasi kebutuhan ${qty}.`;
    if(notes) textMessage += ` Catatan: ${notes}`;

    const waUrl = `https://wa.me/${pageData.phone}?text=${encodeURIComponent(textMessage)}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try { await navigator.share(shareData); } catch (err) { console.error(err); }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(pageData.title + ' ' + window.location.href)}`, '_blank');
  const shareToFacebook = () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  const shareToTwitter = () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(pageData.name)}`, '_blank');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #FDF9F1;
          color: #2C1A12;
          margin: 0;
          font-family: 'Outfit', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#FDF9F1] min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-[#2C1A12]">
          
          <button
            onClick={handleShare}
            aria-label="Share this page"
            className="absolute top-6 right-6 z-20 p-3 bg-[#2C1A12]/40 backdrop-blur-md rounded-full border border-[#D4A373]/30 text-[#D4A373] hover:bg-[#2C1A12]/60 transition-all shadow-sm"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1209] via-[#1F1209]/80 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-full p-2.5 bg-white mb-6 shadow-2xl border-2 border-[#D4A373]/60 flex items-center justify-center overflow-hidden">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-[#FDF9F1] mb-2 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <h2 className="text-[#D4A373] font-medium text-lg mb-4">{pageData.title}</h2>
            <p className="text-slate-300 font-light text-sm leading-relaxed mb-6 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-3">
              <a 
                href={pageData.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#D4A373]/30 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <Instagram size={18} className="text-[#D4A373]"/> Instagram
              </a>
              <a 
                href={pageData.links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#D4A373]/30 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4A373]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
            </div>

            <div className="w-full max-w-sm mb-8">
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-[#D4A373]/30 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <MapPin size={18} className="text-[#D4A373]"/> Lokasi
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#D4A373] text-[#1F1209] rounded-2xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#c2915f] transition-all shadow-lg"
            >
              Mulai Pesan Sekarang
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* HIGHLIGHTS BAR */}
        <section className="py-4 px-4 bg-[#1F1209] shadow-inner border-t border-white/5">
          <div className="flex justify-between items-center w-full max-w-md mx-auto">
            {pageData.highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5 px-2 text-center w-1/3">
                {item.icon === 'Coffee' && <Coffee size={20} className="text-[#D4A373]" />}
                {item.icon === 'Package' && <Package size={20} className="text-[#D4A373]" />}
                {item.icon === 'Truck' && <Truck size={20} className="text-[#D4A373]" />}
                <span className="text-[11px] text-slate-300 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TENTANG KAMI & HISTORY */}
        <section className="pt-12 pb-8 px-6 bg-[#FDF9F1]">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="bg-[#D4A373]/10 p-3 rounded-full mb-3 text-[#B07B46]">
              <Store size={26} />
            </div>
            <h2 className="text-2xl font-extrabold text-[#2C1A12] tracking-tight">Tentang Kami</h2>
            <div className="w-12 h-1 bg-[#D4A373] rounded-full mt-3 mb-4"></div>
            <p className="text-[#5D4037] text-sm leading-relaxed text-center">
              BeanFlow adalah mitra supply kopi terpercaya untuk bisnis Anda. Kami mendedikasikan diri untuk merosting dan mendistribusikan biji kopi nusantara dengan standar kualitas yang tinggi.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E8DCC4] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <History size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#2C1A12] mb-3">
                <History className="text-[#D4A373]" size={20} /> Perjalanan Kami
              </h3>
              <p className="text-[#5D4037] text-sm leading-relaxed">
                <span className="font-bold text-[#B07B46]">Sejak {pageData.history.year}, </span>
                {pageData.history.content}
              </p>
            </div>
          </div>
        </section>

        {/* KATALOG & HARGA */}
        <section className="py-10 bg-white border-y border-[#E8DCC4]">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-[#D4A373]" size={22} />
              <h2 className="text-2xl font-extrabold text-[#2C1A12] tracking-tight">Katalog Produk</h2>
            </div>
            <p className="text-[#5D4037] text-xs ml-8">Pilihan biji kopi terbaik dan harga kompetitif untuk bisnis Anda.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((item, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[220px] rounded-[1.5rem] overflow-hidden relative group border border-[#E8DCC4] shadow-md bg-[#FDF9F1] flex flex-col"
              >
                <div className="h-[200px] w-full overflow-hidden bg-[#E8DCC4]">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-[#B07B46] uppercase tracking-wider mb-1">{item.origin}</span>
                  <h3 className="font-bold text-[#2C1A12] text-[15px] leading-tight mb-2">{item.name}</h3>
                  <p className="text-xs text-[#5D4037] mb-4 flex-grow italic">"{item.notes}"</p>
                  
                  <div className="mt-auto pt-3 border-t border-[#E8DCC4]/60 flex items-end justify-between">
                    <div>
                      <span className="block text-[10px] text-slate-500 mb-0.5">Mulai dari</span>
                      <span className="font-extrabold text-[#2C1A12] text-sm">{item.price}</span>
                      <span className="text-[10px] text-slate-500">{item.unit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="px-6">
            <button onClick={scrollToForm} className="w-full py-3.5 bg-[#FDF9F1] border border-[#D4A373] text-[#B07B46] rounded-xl font-bold text-sm hover:bg-[#D4A373] hover:text-white transition-all text-center">
              Minta Pricelist Lengkap (PDF)
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-6 bg-[#FDF9F1]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-[#D4A373]" size={22} />
              <h2 className="text-2xl font-extrabold text-[#2C1A12] tracking-tight">Tanya Jawab (FAQ)</h2>
            </div>
            <p className="text-[#5D4037] text-xs ml-8">Informasi seputar pemesanan dan pengiriman.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#E8DCC4] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span className="font-semibold text-[13px] text-[#2C1A12] pr-4">{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp size={18} className="text-[#D4A373] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-5 text-[13px] text-[#5D4037] bg-[#FAFAFA] transition-all duration-300 overflow-hidden ${
                    openFaqIndex === idx ? "max-h-40 py-4 border-t border-[#E8DCC4]" : "max-h-0 py-0"
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI PELANGGAN */}
        <section className="py-10 px-6 bg-white border-y border-[#E8DCC4]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#D4A373]" size={22} />
              <h2 className="text-2xl font-extrabold text-[#2C1A12] tracking-tight">Mitra Kami</h2>
            </div>
            <p className="text-[#5D4037] text-xs ml-8">Apa kata pemilik cafe dan roaster tentang BeanFlow.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-[#FDF9F1] p-5 rounded-3xl border border-[#E8DCC4] shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D4A373] text-[#D4A373]" />
                  ))}
                </div>
                <p className="text-[#5D4037] text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-[#E8DCC4] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#2C1A12] flex items-center justify-center text-[#D4A373] font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-[#2C1A12]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING/ORDER FORM */}
        <section id="order-form" className="py-12 px-6 bg-[#2C1A12] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3E2723] rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="bg-white border border-[#E8DCC4] rounded-[2rem] p-8 shadow-xl relative z-10">
            <div className="relative z-10 mb-6">
              <h2 className="text-2xl font-extrabold text-[#2C1A12] mb-2">Form Pemesanan / Tanya Kopi</h2>
              <p className="text-[#5D4037] text-sm leading-relaxed">Hubungi admin kami untuk menanyakan stok, harga grosir, atau berkonsultasi mengenai kebutuhan kopi bisnis Anda.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#8D6E63] uppercase tracking-wide ml-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama Anda"
                  className="w-full bg-[#FDF9F1] border border-[#E8DCC4] rounded-xl px-4 py-3.5 text-sm text-[#2C1A12] placeholder-slate-400 focus:outline-none focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#8D6E63] uppercase tracking-wide ml-1">Nama Bisnis / Cafe (Opsional)</label>
                <input 
                  type="text" 
                  name="business" 
                  placeholder="Cth: Kedai Kopi Senja"
                  className="w-full bg-[#FDF9F1] border border-[#E8DCC4] rounded-xl px-4 py-3.5 text-sm text-[#2C1A12] placeholder-slate-400 focus:outline-none focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#8D6E63] uppercase tracking-wide ml-1">Produk yang Diminati</label>
                <select 
                  name="product" 
                  required
                  className="w-full bg-[#FDF9F1] border border-[#E8DCC4] rounded-xl px-4 py-3.5 text-sm text-[#2C1A12] focus:outline-none focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] transition-all appearance-none"
                >
                  <option value="">Pilih varian...</option>
                  <option value="Arabica Gayo Wash">Arabica Gayo Wash</option>
                  <option value="Robusta Dampit">Robusta Dampit</option>
                  <option value="House Blend Espresso">House Blend Espresso</option>
                  <option value="Arabica Toraja Sapan">Arabica Toraja Sapan</option>
                  <option value="Sample Pack (All Variant)">Sample Pack (All Variant)</option>
                  <option value="Lainnya / Tanya Dulu">Lainnya / Ingin Konsultasi</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#8D6E63] uppercase tracking-wide ml-1">Estimasi Kebutuhan</label>
                <select 
                  name="qty" 
                  required
                  className="w-full bg-[#FDF9F1] border border-[#E8DCC4] rounded-xl px-4 py-3.5 text-sm text-[#2C1A12] focus:outline-none focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] transition-all appearance-none"
                >
                  <option value="">Pilih jumlah...</option>
                  <option value="Tanya Sampel (< 1 Kg)">Tanya Sampel / Ecer</option>
                  <option value="Skala Kecil (1 - 5 Kg)">Skala Kecil (1 - 5 Kg)</option>
                  <option value="Skala Menengah (5 - 20 Kg)">Skala Menengah (5 - 20 Kg)</option>
                  <option value="Skala Besar (> 20 Kg)">Skala Besar ({'>'} 20 Kg)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#8D6E63] uppercase tracking-wide ml-1">Pesan / Catatan Tambahan</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Cth: Butuh bentuk bubuk kasar, atau minta dikirim pricelist..."
                  className="w-full bg-[#FDF9F1] border border-[#E8DCC4] rounded-xl px-4 py-3.5 text-sm text-[#2C1A12] placeholder-slate-400 focus:outline-none focus:border-[#D4A373] focus:ring-1 focus:ring-[#D4A373] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#25D366] text-white font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors shadow-md border border-[#1DA851]"
              >
                Kirim Pesan WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-[#E8DCC4] mb-8"></div>
          
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-[#E8DCC4] flex items-center justify-center mb-4 p-1.5 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="text-[#5D4037] text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-[#2C1A12] text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-[#B07B46] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#2C1A12] backdrop-blur-xl border border-[#D4A373]/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(44,26,18,0.4)] hover:bg-[#3E2723] active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-sm tracking-wide text-[#FDF9F1]">Pesan Biji Kopi</span>
            <div className="bg-[#D4A373] text-[#1F1209] p-2 rounded-xl">
              <ShoppingBag size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-[#2C1A12] font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1 text-slate-500 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#FDF9F1] border border-[#E8DCC4] rounded-[24px] p-8 flex flex-col items-center justify-center mb-8 shadow-sm">
              <img src={pageData.profileImg} alt="Profile" className="w-[72px] h-[72px] rounded-full border border-[#E8DCC4] mb-4 object-contain bg-white p-1.5" />
              <h4 className="text-[#2C1A12] font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-[#5D4037] text-sm mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all shadow-sm border border-slate-200"
                >
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToTwitter}
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToFacebook}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  onClick={shareToWhatsApp}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 transition-all shadow-sm"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}