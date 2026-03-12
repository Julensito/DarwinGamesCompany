import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  MessageSquare, 
  ChevronRight, 
  Users, 
  Gamepad2, 
  Briefcase, 
  Send,
  Menu,
  X,
  ExternalLink,
  Monitor,
  Smartphone,
  Cpu,
  Sun,
  Moon,
  Instagram,
  Youtube,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from './translations';
import { StarField } from './components/StarField';

// --- Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

const Marquee = ({ theme, language }: { theme: string, language: Language }) => {
  const t = translations[language].marquee;
  
  return (
    <div className={`py-12 overflow-hidden flex border-y transition-colors duration-500 ${theme === 'dark' ? 'bg-white border-black' : 'bg-black border-white'}`}>
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 whitespace-nowrap items-center"
      >
        {[...t.partners, ...t.partners, ...t.partners].map((partner, i) => (
          <span key={i} className={`font-black text-4xl tracking-tighter uppercase italic ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
            {partner}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Navbar = ({ theme, toggleTheme, language, toggleLanguage }: { 
  theme: string, 
  toggleTheme: () => void,
  language: Language,
  toggleLanguage: () => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t.home, href: '#' },
    { name: t.games, href: '#juegos' },
    { name: t.patches, href: '#parches' },
    { name: t.about, href: '#nosotros' },
    { name: t.careers, href: '#trabajo' },
    { name: t.support, href: '#soporte' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? (theme === 'dark' ? 'bg-black/90' : 'bg-white/90') + ' backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className={`w-10 h-10 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500`}>
            <Cpu className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tighter font-display uppercase">
            DARWIN <span className={theme === 'dark' ? 'text-white/50' : 'text-black/50'}>& CO.</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center gap-2 ml-4">
            <button 
              onClick={toggleLanguage}
              className={`text-[10px] font-black w-8 h-8 rounded-full border transition-all duration-300 ${theme === 'dark' ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'}`}
            >
              {language.toUpperCase()}
            </button>

            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 ${theme === 'dark' ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/20 hover:bg-black hover:text-white'}`}
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleLanguage}
            className={`text-[10px] font-black w-8 h-8 rounded-full border ${theme === 'dark' ? 'border-white/20' : 'border-black/20'}`}
          >
            {language.toUpperCase()}
          </button>
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full border ${theme === 'dark' ? 'border-white/20' : 'border-black/20'}`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button 
            className={theme === 'dark' ? 'text-white' : 'text-black'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 w-full border-b p-6 lg:hidden ${theme === 'dark' ? 'bg-black border-white/10' : 'bg-white border-black/10'}`}
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`text-sm font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ theme, language }: { theme: string, language: Language }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = translations[language].hero;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={`relative h-screen w-full overflow-hidden flex items-center justify-center transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 z-10 transition-colors duration-500 ${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'}`} />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-500 ${theme === 'dark' ? 'opacity-60' : 'opacity-40'}`}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-futuristic-city-4340-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={`text-7xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {t.title1}<br />
            <span>{t.title2}</span>
          </h1>
          <p className={`mt-8 text-xs md:text-sm font-bold uppercase tracking-[0.5em] mix-blend-difference opacity-50 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            {t.slogan}
          </p>
        </motion.div>
      </div>

      {/* Video Controls (Minimalist) */}
      <div className="absolute bottom-10 right-10 z-30 flex gap-4">
        <button 
          onClick={togglePlay} 
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 group ${theme === 'dark' ? 'border-white/20 hover:bg-white hover:text-black text-white' : 'border-black/20 hover:bg-black hover:text-white text-black'}`}
          aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        >
          {isPlaying ? <Pause size={24} className="group-hover:scale-110 transition-transform" /> : <Play size={24} className="ml-1 group-hover:scale-110 transition-transform" />}
        </button>
        <button 
          onClick={() => setIsMuted(!isMuted)} 
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 group ${theme === 'dark' ? 'border-white/20 hover:bg-white hover:text-black text-white' : 'border-black/20 hover:bg-black hover:text-white text-black'}`}
          aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
        >
          {isMuted ? <VolumeX size={24} className="group-hover:scale-110 transition-transform" /> : <Volume2 size={24} className="group-hover:scale-110 transition-transform" />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-40 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] vertical-text">{t.scroll}</span>
        <div className={`w-px h-16 bg-gradient-to-b from-current to-transparent`} />
      </motion.div>
    </section>
  );
};

const GamesSection = ({ theme, language, onSelectProject }: { theme: string, language: Language, onSelectProject: (project: any) => void }) => {
  const t = translations[language].games;
  const games = t.items.map((item, i) => ({
    ...item,
    img: `https://picsum.photos/seed/evolve${i + 1}/600/400`
  }));

  return (
    <section id="juegos" className="py-32 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter">{t.title}</h2>
          <div className={`h-px w-24 mt-4 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {games.map((game, i) => (
            <motion.div 
              key={i}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              onClick={() => onSelectProject(game)}
            >
              <img 
                src={game.img} 
                alt={game.title} 
                className="w-full h-full object-cover grayscale group-hover:scale-110 transition-all duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 transition-colors ${theme === 'dark' ? 'bg-black/40 group-hover:bg-black/20' : 'bg-white/40 group-hover:bg-white/20'}`} />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-black uppercase tracking-tighter">{game.title}</h3>
                <p className={`text-xs uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  {game.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  {t.playNow} <ChevronRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectDetail = ({ project, theme, language, onBack }: { project: any, theme: string, language: Language, onBack: () => void }) => {
  const t = translations[language].games;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className={`fixed inset-0 z-[100] overflow-y-auto transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} /> {t.back}
        </button>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">{project.title}</h2>
            <div className={`h-px w-24 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
            <p className={`text-lg uppercase tracking-widest leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
              {project.longDesc}
            </p>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-2 ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>{t.details.genre}</p>
                <p className="text-sm font-black uppercase tracking-tight">{project.genre}</p>
              </div>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-2 ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>{t.details.platforms}</p>
                <p className="text-sm font-black uppercase tracking-tight">{project.platforms}</p>
              </div>
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-2 ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>{t.details.specs}</p>
                <p className="text-sm font-black uppercase tracking-tight">{project.specs}</p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-black uppercase tracking-tighter">{t.details.updates}</h3>
              <div className="space-y-4">
                {project.updates.map((update: any, i: number) => (
                  <div key={i} className={`p-6 border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                    <span className="text-[10px] font-bold opacity-40">{update.date}</span>
                    <h4 className="text-sm font-black uppercase mt-1">{update.title}</h4>
                    <p className="text-xs mt-2 opacity-60">{update.desc || update.points?.join(' ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black uppercase tracking-tighter">{t.details.trailer}</h3>
              <div className={`aspect-video border overflow-hidden ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                <video controls className="w-full h-full object-cover">
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black uppercase tracking-tighter">{t.details.gallery}</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((img: string, i: number) => (
                  <div key={i} className={`aspect-square border overflow-hidden ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                    <img src={img} alt={`${project.title} gallery ${i}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PatchNotesSection = ({ theme, language, onSelectPatch }: { theme: string, language: Language, onSelectPatch: (patch: any) => void }) => {
  const t = translations[language].patches;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="parches" className={`py-32 border-y transition-colors duration-500 ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl font-black uppercase tracking-tighter">{t.title}</h2>
          <div className={`h-px w-24 mt-4 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
        </div>

        <div className={`space-y-px ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
          {t.items.map((note, i) => (
            <div key={i} className="overflow-hidden">
              <div 
                className={`p-8 transition-colors flex flex-col md:flex-row gap-8 items-start md:items-center cursor-pointer ${theme === 'dark' ? 'bg-black hover:bg-white/5' : 'bg-white hover:bg-black/5'}`}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                <div className={`min-w-[120px] font-bold text-xs tracking-[0.3em] ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>
                  {note.date}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 ${theme === 'dark' ? 'text-white/40 border-white/20' : 'text-black/40 border-black/20'}`}>
                      {note.game}
                    </span>
                    <h3 className="text-lg font-bold uppercase tracking-tight">{note.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {note.points.map((p, j) => (
                      <span key={j} className={`text-[10px] uppercase tracking-widest ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${expandedIndex === i ? 'rotate-90' : ''} ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>
                  <ChevronRight size={20} />
                </div>
              </div>
              
              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}
                  >
                    <div className="p-8 pt-0 md:pl-[152px] max-w-3xl">
                      <p className={`text-xs uppercase tracking-[0.2em] leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                        {note.content}
                      </p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectPatch(note);
                        }}
                        className={`mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
                      >
                        {t.readMore} <ExternalLink size={12} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PatchDetail = ({ patch, theme, language, onBack }: { patch: any, theme: string, language: Language, onBack: () => void }) => {
  const t = translations[language].games; // Reusing 'back' translation

  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className={`fixed inset-0 z-[100] overflow-y-auto ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-4xl mx-auto px-6 py-32">
        <button 
          onClick={onBack}
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-12 opacity-50 hover:opacity-100 transition-opacity`}
        >
          <ArrowLeft size={16} /> {t.back}
        </button>

        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 ${theme === 'dark' ? 'text-white/40 border-white/20' : 'text-black/40 border-black/20'}`}>
                {patch.game}
              </span>
              <span className={`text-xs font-bold tracking-[0.3em] ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>
                {patch.date}
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              {patch.title}
            </h2>
          </div>

          <div className={`h-px w-full ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <h3 className="text-xl font-bold uppercase tracking-tight">Detalles del Parche</h3>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-black/70'}`}>
                {patch.content}
              </p>
              
              <div className="space-y-6 pt-8">
                <h4 className="text-sm font-bold uppercase tracking-widest">Cambios Principales</h4>
                <div className="space-y-4">
                  {patch.points.map((point: string, i: number) => (
                    <div key={i} className={`flex items-start gap-4 p-4 border ${theme === 'dark' ? 'border-white/5 bg-white/5' : 'border-black/5 bg-black/5'}`}>
                      <div className={`mt-1 w-2 h-2 rounded-full ${point.startsWith('+') ? 'bg-emerald-500' : point.startsWith('-') ? 'bg-rose-500' : 'bg-blue-500'}`} />
                      <span className="text-sm font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className={`p-8 border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6 opacity-50">Información</h4>
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest opacity-30 mb-1">Estado</span>
                    <span className="text-xs font-bold uppercase">Desplegado</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest opacity-30 mb-1">Plataformas</span>
                    <span className="text-xs font-bold uppercase">PC, PS5, Xbox</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection = ({ theme, language, onOpenDetails }: { theme: string, language: Language, onOpenDetails: () => void }) => {
  const t = translations[language].about;

  return (
    <section id="nosotros" className="py-32 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className={`relative aspect-square overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
          <img 
            src="https://picsum.photos/seed/studio/800/800" 
            alt="Studio" 
            className="w-full h-full object-cover grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className={`absolute inset-0 border-[20px] transition-colors duration-500 ${theme === 'dark' ? 'border-black' : 'border-white'}`} />
        </div>

        <div className="space-y-8">
          <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
            {t.title1} <br /> {t.title2}
          </h2>
          <div className={`h-px w-24 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
          <p className={`text-sm leading-relaxed uppercase tracking-widest ${theme === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
            {t.desc}
          </p>
          <div className={`grid grid-cols-2 gap-12 pt-12 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
            <div>
              <p className="text-3xl font-black tracking-tighter">150+</p>
              <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mt-2 ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>{t.stats.talent}</p>
            </div>
            <div>
              <p className="text-3xl font-black tracking-tighter">12</p>
              <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mt-2 ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>{t.stats.awards}</p>
            </div>
          </div>
          <button 
            onClick={onOpenDetails}
            className={`mt-8 px-8 py-4 border text-xs font-black uppercase tracking-widest transition-all duration-300 ${theme === 'dark' ? 'border-white hover:bg-white hover:text-black' : 'border-black hover:bg-black hover:text-white'}`}
          >
            {t.readMore}
          </button>
        </div>
      </div>
    </section>
  );
};

const AboutDetail = ({ theme, language, onBack }: { theme: string, language: Language, onBack: () => void }) => {
  const t = translations[language].about;

  const sections = [
    { title: t.details.history.title, content: t.details.history.content },
    { title: t.details.culture.title, content: t.details.culture.content },
    { title: t.details.method.title, content: t.details.method.content },
    { title: t.details.goals.title, content: t.details.goals.content },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className={`fixed inset-0 z-[100] overflow-y-auto transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-20 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} /> {t.back}
        </button>

        <div className="space-y-32">
          <div className="space-y-12">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              {t.title1}<br />{t.title2}
            </h2>
            <div className={`h-px w-24 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
          </div>

          <div className="grid gap-24">
            {sections.map((section, i) => (
              <div key={i} className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-bold opacity-20 tracking-widest`}>0{i + 1}</span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">{section.title}</h3>
                </div>
                <p className={`text-lg uppercase tracking-widest leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="py-20 border-t border-white/10">
            <img 
              src="https://picsum.photos/seed/culture/1200/600" 
              alt="Darwin Culture" 
              className="w-full aspect-video object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CareersSection = ({ theme, language }: { theme: string, language: Language }) => {
  const t = translations[language].careers;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="trabajo" className={`py-32 relative transition-colors duration-500 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <AnimatePresence>
        {submitted && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-8 py-4 font-black uppercase tracking-widest text-xs ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
          >
            {t.form.success}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
              {t.title1} <br /> {t.title2}
            </h2>
            <div className="space-y-4">
              {t.jobs.map((job, i) => (
                <div key={i} className={`group flex justify-between items-center py-6 border-b cursor-pointer hover:px-4 transition-all ${theme === 'dark' ? 'border-black/10' : 'border-white/10'}`}>
                  <span className="text-xl font-bold uppercase tracking-tight">{job}</span>
                  <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">
              {t.desc}
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="text" required className={`w-full bg-transparent border-b py-4 outline-none transition-colors font-bold uppercase text-xs tracking-widest ${theme === 'dark' ? 'border-black/20 focus:border-black' : 'border-white/20 focus:border-white'}`} placeholder={t.form.name} />
              <input type="email" required className={`w-full bg-transparent border-b py-4 outline-none transition-colors font-bold uppercase text-xs tracking-widest ${theme === 'dark' ? 'border-black/20 focus:border-black' : 'border-white/20 focus:border-white'}`} placeholder={t.form.email} />
              <input type="text" required className={`w-full bg-transparent border-b py-4 outline-none transition-colors font-bold uppercase text-xs tracking-widest ${theme === 'dark' ? 'border-black/20 focus:border-black' : 'border-white/20 focus:border-white'}`} placeholder={t.form.role} />
              <input type="url" required className={`w-full bg-transparent border-b py-4 outline-none transition-colors font-bold uppercase text-xs tracking-widest ${theme === 'dark' ? 'border-black/20 focus:border-black' : 'border-white/20 focus:border-white'}`} placeholder={t.form.portfolio} />
              <button type="submit" className={`w-full py-6 font-black uppercase tracking-[0.3em] text-xs transition-colors ${theme === 'dark' ? 'bg-black text-white hover:bg-black/80' : 'bg-white text-black hover:bg-white/80'}`}>
                {t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SupportSection = ({ theme, language }: { theme: string, language: Language }) => {
  const t = translations[language].support;

  return (
    <section id="soporte" className="py-32 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="text-5xl font-black uppercase tracking-tighter">{t.title}</h2>
        <p className={`text-sm uppercase tracking-[0.2em] leading-loose ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
          {t.desc}
        </p>
        <button className={`px-16 py-6 border font-black uppercase tracking-[0.4em] text-xs transition-all ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-black/20 text-black hover:bg-black hover:text-white'}`}>
          {t.cta}
        </button>
      </div>
    </section>
  );
};

const Footer = ({ theme, language }: { theme: string, language: Language }) => {
  const t = translations[language].footer;

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: <Instagram size={16} /> },
    { name: 'TikTok', href: 'https://tiktok.com', icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    )},
    { name: 'YouTube', href: 'https://youtube.com', icon: <Youtube size={16} /> },
  ];

  return (
    <footer className={`py-12 border-t transition-colors duration-500 ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-sm font-black tracking-[0.4em] uppercase">Darwin Studios</span>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 border rounded-full flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'border-white/10 text-white/40 hover:text-white hover:border-white' : 'border-black/10 text-black/40 hover:text-black hover:border-black'}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className={`flex gap-8 text-[10px] font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>
            <a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>{t.privacy}</a>
            <a href="#" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>{t.terms}</a>
          </div>
          <p className={`text-[10px] uppercase tracking-widest ${theme === 'dark' ? 'text-white/10' : 'text-black/10'}`}>
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState<Language>('es');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedPatch, setSelectedPatch] = useState<any>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-white selection:text-black cursor-none ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <StarField theme={theme} />
      <CustomCursor />
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            theme={theme} 
            language={language} 
            onBack={() => setSelectedProject(null)} 
          />
        )}
        {isAboutOpen && (
          <AboutDetail 
            theme={theme} 
            language={language} 
            onBack={() => setIsAboutOpen(false)} 
          />
        )}
        {selectedPatch && (
          <PatchDetail 
            patch={selectedPatch} 
            theme={theme} 
            language={language} 
            onBack={() => setSelectedPatch(null)} 
          />
        )}
      </AnimatePresence>

      <main>
        <Hero theme={theme} language={language} />
        <Marquee theme={theme} language={language} />
        <GamesSection theme={theme} language={language} onSelectProject={setSelectedProject} />
        <PatchNotesSection theme={theme} language={language} onSelectPatch={setSelectedPatch} />
        <AboutSection theme={theme} language={language} onOpenDetails={() => setIsAboutOpen(true)} />
        <CareersSection theme={theme} language={language} />
        <SupportSection theme={theme} language={language} />
      </main>
      <Footer theme={theme} language={language} />
    </div>
  );
}
