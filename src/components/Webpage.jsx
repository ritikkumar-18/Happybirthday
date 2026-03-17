import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Heart,
  Gift,
  Cake,
  Music,
  Moon,
  Sun,
  Sparkles,
  Coffee,
  Star,
  Video,
  Camera,
  MessageCircle,
  Infinity,
  Feather,
  Globe,
  Clock,
  Wind,
  Cloud,
  Zap,
  Award,
  BookOpen,
  Coffee as CoffeeIcon,
  Phone,
  MapPin,
  Umbrella,
  Volume2,
  VolumeX,
  Send,
  Rocket,
  Home,
  Bell,
  Diamond,
  Flower,
  Leaf,
  Smile,
  Sunrise,
  Sunset,
  Camera as PhotoIcon,
  PartyPopper,
  HeartCrack,
  HeartHandshake,
  HeartPulse,
  Sparkle,
  Stars,
  Flame,
  Crown,
  Gem,
  Music4,
  Film,
  Image as ImageIcon,
  Calendar,
  Clock as ClockIcon,
  Map,
  Plane,
  Car,
  Pizza,
  Wine,
  Gift as GiftIcon,
  Lock,
  Key,
  Pen,
  Mail,
  Phone as PhoneIcon,
  Video as VideoIcon
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import confetti from "canvas-confetti";

export default function Webpage() {
  const [nightMode, setNightMode] = useState(false);
  const [modal, setModal] = useState(null);
  const [quote, setQuote] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [message, setMessage] = useState("");
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [loveMeter, setLoveMeter] = useState(0);
  const [loveScore, setLoveScore] = useState(null);
  const [showLoveQuiz, setShowLoveQuiz] = useState(false);
  const [showMemoryLane, setShowMemoryLane] = useState(false);
  const [showFutureDreams, setShowFutureDreams] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [secretCode, setSecretCode] = useState("");
  const [showTimeCapsule, setShowTimeCapsule] = useState(false);
  const [timeCapsuleOpened, setTimeCapsuleOpened] = useState(false);
  const [showLoveMap, setShowLoveMap] = useState(false);
  const [showMemoryGame, setShowMemoryGame] = useState(false);
  const [gameCards, setGameCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Enhanced romantic quotes
  const quotes = [
    "You are the most beautiful thing that has ever happened to me",
    "Every moment with you feels like a beautiful dream I never want to wake up from",
    "My heart beats your name with every pulse - it's forever yours",
    "You're not just my love, you're my home, my peace, my everything, my forever",
    "In your eyes, I found the answer to every question my heart ever asked",
    "Loving you is the easiest thing I've ever done, and the best thing that's ever happened to me",
    "You are the poetry my heart always wanted to write, the song my soul always wanted to sing",
    "My world became infinitely beautiful the day you walked into my life",
    "You are my today, my tomorrow, and all my forever - there's no one else I'd rather have",
    "With you, every day feels like Valentine's Day, every moment feels like magic"
  ];

  // Enhanced love letters
  const loveLetters = [
    {
      title: "My Dearest Love",
      content: "From the moment I met you, my life changed forever. You brought color to my world and music to my silence. Every day with you is a blessing, every moment a treasure. I love you more than words can express, more than the stars in the sky, more than all the beauty in this world. You are my everything.",
      date: "July 09, 2024"
    },
    {
      title: "To My Soulmate",
      content: "In you, I found not just a partner, but a best friend, a confidant, and my soulmate. You understand me in ways no one else ever has. Thank you for being you, for being mine, for choosing me every single day. With you, I've found my forever home.",
      date: "August 17, 2024"
    },
    {
      title: "Forever Yours",
      content: "I promise to love you not only today but always. Through every season, every challenge, every joy - my heart will always belong to you. You are my forever, my always, my never-ending love story. I'll hold your hand through everything life brings our way.",
      date: "August 17, 2024"
    }
  ];

  // Videos from public folder
  const videos = [
    { id: 1, name: "Our First Memory Together", src: "/video1.mp4", thumbnail: "/photo1.jpeg", date: "July 2024", description: "The day our journey began" },
    { id: 2, name: "Beautiful Moments With You", src: "/video2.mp4", thumbnail: "/photo2.jpeg", date: "July 2024", description: "Every moment is precious" },
    { id: 3, name: "Together Forever", src: "/video3.mp4", thumbnail: "/photo3.jpeg", date: "August 2024", description: "Building our love story" },
    { id: 4, name: "Our Love Story", src: "/video5.mp4", thumbnail: "/photo4.jpeg", date: "August 2024", description: "Creating memories together" }
  ];

  // Photos from public folder - updated to .jpeg
  const photos = [
    { id: 1, src: "/photo1.jpeg", caption: "Our first smile together - The beginning of forever", date: "July 2024", location: "Our Favorite Cafe" },
    { id: 2, src: "/photo2.jpeg", caption: "Beautiful memories we created", date: "July 2024", location: "Hotel West Side" },
    // { id: 3, src: "/photo3.jpeg", caption: "Love in the air - Can't stop smiling with you", date: "Sept 2024", location: "Delhi" },
    { id: 4, src: "/photo4.jpeg", caption: "Perfect moments captured forever", date: "Sept 2024", location: "Mountain View" },
    { id: 5, src: "/photo5.jpeg", caption: "Together forever - My favorite person", date: "Feb 2026", location: "Cafe" },
    // { id: 6, src: "/photo6.jpeg", caption: "My happiness - You make life beautiful", date: "Jun 2023", location: "Garden of Love" },
    // { id: 7, src: "/photo7.jpeg", caption: "Endless love - Growing together", date: "Jul 2023", location: "Lake House" },
    // { id: 8, src: "/photo8.jpeg", caption: "Perfect harmony - Two hearts one soul", date: "Aug 2023", location: "Starry Night" }
  ];

  // Timeline events
  const timelineEvents = [
    { date: "July 09, 2024", title: "The Day We Met", description: "When our eyes met for the first time, I knew you were special. The world stopped, and my heart found its home.", icon: Heart, color: "from-pink-400 to-red-400" },
    { date: "August 17, 2024", title: "Our First Date", description: "A perfect Valentine's Day that changed everything. You made my heart skip a beat.", icon: CoffeeIcon, color: "from-purple-400 to-pink-400" },
    { date: "August 17, 2024", title: "First Time You Said I Love You", description: "Three words that meant the world to me. I'll never forget that moment.", icon: MessageCircle, color: "from-blue-400 to-indigo-400" },
    { date: "September 10, 2024", title: "Our First Trip Together", description: "Creating memories that will last forever. Adventures are better with you.", icon: MapPin, color: "from-green-400 to-teal-400" },
    { date: "August 25, 2025", title: "Moving In Together", description: "Building our home, our life, our future. Every day feels like a blessing.", icon: Home, color: "from-yellow-400 to-orange-400" },
    { date: "March 20, 2026", title: "Today - Your Birthday", description: "Celebrating the most wonderful person in my life. You deserve all the happiness.", icon: Cake, color: "from-pink-400 to-purple-400" }
  ];

  // Reasons why I love you
  const reasons = [
    { text: "Your smile lights up my entire world", icon: Sun, color: "text-yellow-500" },
    { text: "The way you laugh makes my heart skip a beat", icon: Music4, color: "text-pink-500" },
    { text: "You understand me without me saying a word", icon: Heart, color: "text-red-500" },
    { text: "Your kindness inspires me every day", icon: Feather, color: "text-blue-500" },
    { text: "You make even ordinary moments feel magical", icon: Sparkle, color: "text-purple-500" },
    { text: "Your strength amazes me constantly", icon: Flame, color: "text-orange-500" },
    { text: "You believe in me when I doubt myself", icon: Crown, color: "text-yellow-500" },
    { text: "Your love makes me a better person", icon: Gem, color: "text-pink-500" },
    { text: "The way you look at me with those eyes", icon: Stars, color: "text-indigo-500" },
    { text: "How you always know how to make me smile", icon: Smile, color: "text-green-500" }
  ];

  // Future dreams
  const futureDreams = [
    { icon: Globe, text: "Travel the world together", done: false },
    { icon: Home, text: "Build our dream home", done: false },
    { icon: Heart, text: "Grow old holding hands", done: false },
    { icon: Plane, text: "Watch sunset in Paris", done: false },
    { icon: Car, text: "Road trips across countries", done: false },
    { icon: Camera, text: "Fill albums with memories", done: false },
    { icon: Pizza, text: "Cook together every Sunday", done: false },
    { icon: Wine, text: "Celebrate every anniversary", done: false }
  ];

  // Memory game cards
  const memoryGameImages = [
    "/photo1.jpeg", "/photo2.jpeg", "/photo3.jpeg", "/photo4.jpeg",
    "/photo5.jpeg", "/photo6.jpeg", "/photo7.jpeg", "/photo8.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(prev => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const heartInterval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 40 + 20,
        speed: Math.random() * 4 + 2,
        delay: Math.random() * 2,
        rotation: Math.random() * 360
      };
      setFloatingHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 12000);
    }, 200);
    
    return () => clearInterval(heartInterval);
  }, []);

  useEffect(() => {
    // Love meter increases slowly
    const meterInterval = setInterval(() => {
      setLoveMeter(prev => Math.min(prev + 0.1, 100));
    }, 1000);
    return () => clearInterval(meterInterval);
  }, []);

  const openModal = (name) => {
    if (name === 'surprise') {
      confetti({
        particleCount: 200,
        spread: 150,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ff0000', '#ffa500', '#ffff00']
      });
    }
    setModal(name);
  };

  const closeModal = () => {
    setModal(null);
    setSelectedVideo(null);
    setSelectedPhoto(null);
    setShowPhotoGallery(false);
    setShowLoveQuiz(false);
    setShowMemoryLane(false);
    setShowFutureDreams(false);
    setShowPlaylist(false);
    setShowPuzzle(false);
    setShowSecretMessage(false);
    setShowTimeCapsule(false);
    setShowLoveMap(false);
    setShowMemoryGame(false);
  };

  const sendMessage = () => {
    if (message.trim()) {
      setMessage("");
      setShowMessageModal(false);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const openVideo = (video) => {
    setSelectedVideo(video);
    setCurrentPlaying(video.id);
  };

  const calculateLoveScore = () => {
    const score = Math.floor(Math.random() * 31) + 70; // 70-100
    setLoveScore(score);
  };

  const checkSecretCode = () => {
    if (secretCode.toLowerCase() === "i love you" || secretCode.toLowerCase() === "love") {
      setShowSecretMessage(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  };

  const openTimeCapsule = () => {
    setTimeCapsuleOpened(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 overflow-x-hidden ${
      nightMode ? "bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900" : "bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
    }`} ref={containerRef}>
      
      {/* Enhanced Floating Hearts */}
      <AnimatePresence>
        {floatingHearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0, scale: 0 }}
            animate={{ 
              y: "-20vh", 
              opacity: [0, 0.9, 0.7, 0.4, 0],
              scale: [0, 1.2, 1, 0.8, 0],
              rotate: [heart.rotation, heart.rotation + 360]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: heart.speed * 2, 
              ease: "easeInOut",
              delay: heart.delay
            }}
            className="fixed z-10 pointer-events-none"
            style={{ fontSize: heart.size }}
          >
            {heart.size > 35 ? "❤️" : "💖"}
          </motion.div>
        ))}
      </AnimatePresence>

      <Toaster position="top-center" />

      {/* Navigation Dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 space-y-3">
        {["home", "videos", "photos", "timeline", "memories"].map((section) => (
          <motion.div
            key={section}
            whileHover={{ scale: 1.3 }}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activeSection === section ? "bg-pink-500 scale-125" : "bg-gray-400"
            }`}
            onClick={() => setActiveSection(section)}
          />
        ))}
      </div>

      {/* Love Meter */}
      <motion.div 
        className="fixed top-4 right-4 z-30 bg-white/30 backdrop-blur-lg rounded-full p-4 shadow-xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="relative">
          <HeartPulse className="w-8 h-8 text-pink-500" />
          <motion.span 
            className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {Math.floor(loveMeter)}%
          </motion.span>
        </div>
      </motion.div>

      {/* Quick Action Buttons */}
      <div className="fixed top-4 left-4 z-30 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setNightMode(!nightMode)}
          className="bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-xl"
        >
          {nightMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-purple-500" />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-xl"
        >
          {soundEnabled ? <Volume2 className="w-5 h-5 text-pink-500" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => openModal('surprise')}
          className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full shadow-xl"
        >
          <PartyPopper className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Hero Section */}
        <motion.div
          style={{ scale, rotate, y }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 20px rgba(255,105,180,0.3)",
                "0 0 40px rgba(255,105,180,0.6)",
                "0 0 20px rgba(255,105,180,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Happy Birthday
            <motion.span
              className="block text-3xl sm:text-5xl mt-4"
              animate={{ opacity: [0.8, 1, 0.8], y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              My Forever Love ❤️
            </motion.span>
          </motion.h1>
          
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Romantic Quote Carousel */}
        <div className="text-center mb-20 sm:mb-24 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={quote}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div 
                className="absolute -left-4 -top-4 text-4xl text-pink-300"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "
              </motion.div>
              <p className="text-2xl sm:text-3xl md:text-4xl italic font-light text-gray-700 dark:text-gray-200 max-w-4xl mx-auto px-8">
                {quotes[quote]}
              </p>
              <motion.div 
                className="absolute -right-4 -bottom-4 text-4xl text-pink-300"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Video Gallery Section */}
        <div className="mb-20" id="videos">
          <motion.h2 
            className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Beautiful Videos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 40px 60px rgba(255,105,180,0.4)",
                  rotateY: 5
                }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group perspective"
                onClick={() => openVideo(video)}
              >
                <div className="relative h-72">
                  <img 
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <VideoIcon className="w-6 h-6 text-pink-400" />
                        <span className="text-pink-300 text-sm">{video.date}</span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-2">{video.name}</h3>
                      <p className="text-gray-200 text-sm">{video.description}</p>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg rounded-full p-3">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-20" id="photos">
          <motion.h2 
            className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Precious Memories
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.slice(0, 8).map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 2, zIndex: 10 }}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img 
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <p className="text-white text-sm">{photo.date}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowPhotoGallery(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500"
            >
              <Camera className="inline mr-2 w-5 h-5" />
              View All {photos.length} Photos
              <ImageIcon className="inline ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Interactive Love Letter Cards */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Love Letters For You
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loveLetters.map((letter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  y: -20,
                  boxShadow: "0 30px 50px rgba(255,105,180,0.4)",
                  rotateY: 5
                }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl cursor-pointer transform transition-all duration-500"
                onClick={() => setModal(`letter${index}`)}
              >
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, delay: index * 0.5, repeat: Infinity }}
                >
                  <BookOpen className="w-16 h-16 text-pink-500 mb-4 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-center">{letter.title}</h3>
                <p className="text-gray-500 text-sm text-center mb-2">{letter.date}</p>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-center">{letter.content}</p>
                <motion.div 
                  className="mt-4 text-pink-500 font-semibold text-center"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Read More →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline with Descriptions */}
        <div className="mb-20" id="timeline">
          <motion.h2 
            className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Love Story
          </motion.h2>
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start gap-6 p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-r ${event.color} p-4 rounded-full flex-shrink-0`}
                >
                  <event.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <span className="text-pink-500 text-sm bg-pink-100 dark:bg-pink-900 px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reasons Why I Love You */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            10 Reasons Why I Love You
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-5 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-xl group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  >
                    <Icon className={`w-8 h-8 ${reason.color} group-hover:rotate-12 transition-transform`} />
                  </motion.div>
                  <p className="text-gray-700 dark:text-gray-200 text-lg flex-1">{reason.text}</p>
                  <Heart className="w-5 h-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="#ff69b4" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Fun Interactive Buttons */}
        <div className="mb-20">
          <motion.h2 
            className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Special Surprises
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowLoveQuiz(true)}
              className="bg-gradient-to-br from-pink-400 to-purple-400 text-white p-6 rounded-xl shadow-lg"
            >
              <Heart className="w-8 h-8 mx-auto mb-2" />
              <span>Love Quiz</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowFutureDreams(true)}
              className="bg-gradient-to-br from-blue-400 to-indigo-400 text-white p-6 rounded-xl shadow-lg"
            >
              <Rocket className="w-8 h-8 mx-auto mb-2" />
              <span>Future Dreams</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowSecretMessage(true)}
              className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white p-6 rounded-xl shadow-lg"
            >
              <Lock className="w-8 h-8 mx-auto mb-2" />
              <span>Secret Message</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowTimeCapsule(true)}
              className="bg-gradient-to-br from-green-400 to-teal-400 text-white p-6 rounded-xl shadow-lg"
            >
              <Gift className="w-8 h-8 mx-auto mb-2" />
              <span>Time Capsule</span>
            </motion.button>
          </div>
        </div>

        {/* Message Button */}
        <motion.div
          className="text-center pb-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => setShowMessageModal(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 relative overflow-hidden group"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white/20"
            />
            <Send className="inline mr-3 w-8 h-8 animate-bounce" />
            Write Your Love Message
            <Heart className="inline ml-3 w-8 h-8 animate-pulse" fill="white" />
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100, opacity: 0, rotateX: -30 }}
              animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.5, y: -100, opacity: 0, rotateX: 30 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full rounded-2xl shadow-2xl"
                poster={selectedVideo.thumbnail}
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white text-xl hover:text-pink-300 transition-colors bg-black/50 backdrop-blur-lg px-4 py-2 rounded-full"
              >
                Close ✕
              </motion.button>
              <div className="absolute -bottom-12 left-0 text-white">
                <p className="text-xl font-bold">{selectedVideo.name}</p>
                <p className="text-gray-300">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Photo Gallery Modal */}
        {showPhotoGallery && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPhotoGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-pink-500">Our Beautiful Memories</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  onClick={() => setShowPhotoGallery(false)}
                  className="text-3xl hover:text-pink-500 transition-colors"
                >
                  ✕
                </motion.button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {photos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
                    className="cursor-pointer rounded-xl overflow-hidden shadow-xl group"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="relative h-48">
                      <img 
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                        <p className="text-white text-sm font-bold">{photo.date}</p>
                        <p className="text-gray-200 text-xs">{photo.location}</p>
                      </div>
                    </div>
                    <p className="p-3 text-sm text-center bg-white dark:bg-gray-700">{photo.caption}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Single Photo Modal */}
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/98 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
              className="relative max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.caption}
                className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <p className="text-white text-2xl font-bold">{selectedPhoto.caption}</p>
                <p className="text-gray-300">{selectedPhoto.date} • {selectedPhoto.location}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg text-white px-4 py-2 rounded-full"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* Love Quiz Modal */}
        {showLoveQuiz && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLoveQuiz(false)}
          >
            <motion.div
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0, rotateY: -180 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-center mb-6">Love Quiz</h2>
              <p className="text-xl mb-6 text-center">How much do we love each other?</p>
              <button
                onClick={calculateLoveScore}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl text-lg mb-4"
              >
                Calculate Love Score
              </button>
              {loveScore && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center"
                >
                  <p className="text-2xl mb-2">Our Love Score:</p>
                  <p className="text-5xl font-bold text-pink-500">{loveScore}%</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Future Dreams Modal */}
        {showFutureDreams && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFutureDreams(false)}
          >
            <motion.div
              initial={{ scale: 0, rotateX: -90 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0, rotateX: 90 }}
              className="bg-white dark:bg-gray-800 p-10 rounded-3xl max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Rocket className="w-16 h-16 text-pink-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-center mb-8">Our Future Dreams</h2>
              <div className="grid grid-cols-2 gap-4">
                {futureDreams.map((dream, index) => {
                  const Icon = dream.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-4 bg-pink-50 dark:bg-gray-700 rounded-xl"
                    >
                      <Icon className="w-6 h-6 text-pink-500" />
                      <span>{dream.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Secret Message Modal */}
        {showSecretMessage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSecretMessage(false)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="bg-white dark:bg-gray-800 p-10 rounded-3xl max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Lock className="w-16 h-16 text-pink-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-center mb-6">Secret Message</h2>
              <p className="text-center mb-4">Enter the secret code to reveal a special message:</p>
              <input
                type="text"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                placeholder="Enter code..."
                className="w-full p-3 border rounded-xl mb-4"
              />
              <button
                onClick={checkSecretCode}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl"
              >
                Unlock
              </button>
              {showSecretMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-pink-100 dark:bg-pink-900 rounded-xl text-center"
                >
                  <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <p className="text-lg">You are the most precious person in my life. I love you forever! ❤️</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Time Capsule Modal */}
        {showTimeCapsule && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTimeCapsule(false)}
          >
            <motion.div
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0, rotateY: -180 }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Gift className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-center mb-6">Time Capsule</h2>
              {!timeCapsuleOpened ? (
                <>
                  <p className="text-center mb-6">A special message for you, sealed with love...</p>
                  <button
                    onClick={openTimeCapsule}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl"
                  >
                    Open Time Capsule
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <p className="text-xl mb-4">Dear Future Us,</p>
                  <p className="mb-4">Remember this beautiful moment. Our love grows stronger every day. Today is special because it's your birthday, but every day with you is a celebration.</p>
                  <p className="text-pink-500 font-bold">Forever yours ❤️</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Message Modal */}
        {showMessageModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMessageModal(false)}
          >
            <motion.div
              initial={{ y: -100, opacity: 0, rotateX: -30 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: 100, opacity: 0, rotateX: 30 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-white dark:bg-gray-800 p-10 rounded-3xl w-full max-w-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold mb-6 text-center text-pink-500">
                Write Your Heart Out 💌
              </h2>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="My love, I want to tell you..."
                className="w-full p-4 border-2 border-pink-200 rounded-xl dark:bg-gray-700 dark:text-white mb-6 text-lg"
                rows="6"
              />
              <div className="flex gap-3">
                <button
                  onClick={sendMessage}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-transform"
                >
                  Send with Love ❤️
                </button>
                <button
                  onClick={() => setShowMessageModal(false)}
                  className="flex-1 bg-gray-200 dark:bg-gray-600 px-6 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-transform"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes heartBeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }
        
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

// Missing Play icon import
const Play = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);