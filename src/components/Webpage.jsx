// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import {
//   Heart,
//   Gift,
//   Cake,
//   Music,
//   Moon,
//   Sun,
//   Sparkles,
//   Coffee,
//   Star,
//   Video,
//   Camera,
//   MessageCircle,
//   Infinity,
//   Feather,
//   Globe,
//   Cloud,
//   Award,
//   BookOpen,
//   Coffee as CoffeeIcon,
//   MapPin,
//   Volume2,
//   VolumeX,
//   Send,
//   Rocket,
//   Home,
//   Diamond,
//   Flower,
//   Leaf,
//   Smile,
//   Sunset,
//   Camera as PhotoIcon,
//   PartyPopper,
//   HeartPulse,
//   Sparkle,
//   Stars,
//   Flame,
//   Crown,
//   Gem,
//   Music4,
//   Film,
//   Image as ImageIcon,
//   Plane,
//   Car,
//   Pizza,
//   Wine,
//   Lock,
//   Key,
//   Mail,
//   Phone as PhoneIcon,
//   Video as VideoIcon,
//   Mic,
//   MicOff,
//   HeartHandshake,
//   HeartCrack,
//   Trophy,
//   Medal,
//   Gift as GiftIcon
// } from "lucide-react";
// import { Toaster, toast } from "react-hot-toast";
// import confetti from "canvas-confetti";

// export default function Webpage() {
//   const [nightMode, setNightMode] = useState(false);
//   const [modal, setModal] = useState(null);
//   const [quote, setQuote] = useState(0);
//   const [soundEnabled, setSoundEnabled] = useState(true);
//   const [floatingHearts, setFloatingHearts] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [showPhotoGallery, setShowPhotoGallery] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [activeSection, setActiveSection] = useState("home");
//   const [loveMeter, setLoveMeter] = useState(0);
//   const [showLoveQuiz, setShowLoveQuiz] = useState(false);
//   const [showFutureDreams, setShowFutureDreams] = useState(false);
//   const [showSecretMessage, setShowSecretMessage] = useState(false);
//   const [showTimeCapsule, setShowTimeCapsule] = useState(false);
//   const [showBirthdayWish, setShowBirthdayWish] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [secretCode, setSecretCode] = useState("");
//   const [timeCapsuleOpened, setTimeCapsuleOpened] = useState(false);
//   const [loveScore, setLoveScore] = useState(null);
//   const [showRomanticQuotes, setShowRomanticQuotes] = useState(false);
//   const [showLoveLetters, setShowLoveLetters] = useState(false);
//   const [showPromiseRing, setShowPromiseRing] = useState(false);
//   const [showMemoryGame, setShowMemoryGame] = useState(false);
  
//   const containerRef = useRef(null);
//   const audioRef = useRef(null);
//   const speechRef = useRef(null);
//   const { scrollYProgress } = useScroll();
  
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
//   const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   // Birthday wish text
//   const birthdayWish = `Happy Birthday Babu! 🎉

// On this beautiful day, I want to tell you how much you mean to me. You are the most precious gift life has ever given me. Every moment with you feels like a beautiful dream, and I never want to wake up.

// Your smile lights up my darkest days, your laughter is the sweetest melody to my ears, and your love is the warmth that keeps my heart beating. You've made my life complete in ways I never thought possible.

// Today, on your birthday, I wish you all the happiness in the world. May your life be filled with endless joy, success, and love. You deserve everything beautiful that life has to offer.

// Remember that I'll always be here for you, through every high and low, every laugh and tear, every moment and memory. You're not just my love; you're my best friend, my confidant, my everything.

// I love you more than the stars in the sky, more than the sand on the beaches, more than words could ever express. You are my forever, my always, my never-ending love story.

// Happy Birthday, my love. Today and always, you are celebrated, you are cherished, and you are deeply, deeply loved.

// I LOVE YOU MORE! ❤️`;

//   // Enhanced romantic quotes
//   const quotes = [
//     "You are the most beautiful thing that has ever happened to me",
//     "Every moment with you feels like a beautiful dream I never want to wake up from",
//     "My heart beats your name with every pulse - it's forever yours",
//     "You're not just my love, you're my home, my peace, my everything",
//     "In your eyes, I found the answer to every question my heart ever asked",
//     "Loving you is the easiest thing I've ever done, and the best thing that's ever happened to me",
//     "You are the poetry my heart always wanted to write",
//     "My world became infinitely beautiful the day you walked into my life",
//     "You are my today, my tomorrow, and all my forever",
//     "With you, every day feels like Valentine's Day"
//   ];

//   // Love letters
//   const loveLetters = [
//     {
//       title: "My Dearest Love",
//       content: "From the moment I met you, my life changed forever. You brought color to my world and music to my silence. Every day with you is a blessing, every moment a treasure. I love you more than words can express, more than the stars in the sky, more than all the beauty in this world. You are my everything.",
//       date: "July 09, 2024"
//     },
//     {
//       title: "To My Soulmate",
//       content: "In you, I found not just a partner, but a best friend, a confidant, and my soulmate. You understand me in ways no one else ever has. Thank you for being you, for being mine, for choosing me every single day. With you, I've found my forever home.",
//       date: "August 17, 2024"
//     },
//     {
//       title: "Forever Yours",
//       content: "I promise to love you not only today but always. Through every season, every challenge, every joy - my heart will always belong to you. You are my forever, my always, my never-ending love story. I'll hold your hand through everything life brings our way.",
//       date: "August 17, 2024"
//     }
//   ];

//   // Videos
//   const videos = [
//     { id: 1, name: "Our First Memory Together", src: "/video1.mp4", thumbnail: "/photo1.jpeg", date: "July 2024", description: "The day our journey began" },
//     { id: 2, name: "Beautiful Moments With You", src: "/video2.mp4", thumbnail: "/photo2.jpeg", date: "July 2024", description: "Every moment is precious" },
//     { id: 3, name: "Together Forever", src: "/video3.mp4", thumbnail: "/photo3.jpeg", date: "August 2024", description: "Building our love story" },
//     { id: 4, name: "Our Love Story", src: "/video5.mp4", thumbnail: "/photo4.jpeg", date: "August 2024", description: "Creating memories together" }
//   ];

//   // Photos
//   const photos = [
//     { id: 1, src: "/photo1.jpeg", caption: "Our first smile together", date: "July 2024", location: "Our Favorite Cafe" },
//     { id: 2, src: "/photo2.jpeg", caption: "Beautiful memories we created", date: "July 2024", location: "Hotel West Side" },
//     { id: 4, src: "/photo4.jpeg", caption: "Perfect moments captured forever", date: "Sept 2024", location: "Mountain View" },
//     { id: 5, src: "/photo5.jpeg", caption: "Together forever - My favorite person", date: "Feb 2026", location: "Cafe" }
//   ];

//   // Timeline events
//   const timelineEvents = [
//     { date: "July 09, 2024", title: "The Day We Met", description: "When our eyes met for the first time, I knew you were special.", icon: Heart, color: "from-pink-400 to-red-400" },
//     { date: "August 17, 2024", title: "Our First Date", description: "A perfect day that changed everything.", icon: CoffeeIcon, color: "from-purple-400 to-pink-400" },
//     { date: "August 17, 2024", title: "First Time You Said I Love You", description: "Three words that meant the world to me.", icon: MessageCircle, color: "from-blue-400 to-indigo-400" },
//     { date: "September 10, 2024", title: "Our First Trip Together", description: "Creating memories that will last forever.", icon: MapPin, color: "from-green-400 to-teal-400" },
//     { date: "March 20, 2026", title: "Today - Your Birthday", description: "Celebrating the most wonderful person in my life.", icon: Cake, color: "from-pink-400 to-purple-400" }
//   ];

//   // Reasons why I love you
//   const reasons = [
//     { text: "Your smile lights up my entire world", icon: Sun, color: "text-yellow-500" },
//     { text: "The way you laugh makes my heart skip a beat", icon: Music4, color: "text-pink-500" },
//     { text: "You understand me without me saying a word", icon: Heart, color: "text-red-500" },
//     { text: "Your kindness inspires me every day", icon: Feather, color: "text-blue-500" },
//     { text: "You make even ordinary moments feel magical", icon: Sparkle, color: "text-purple-500" },
//     { text: "Your strength amazes me constantly", icon: Flame, color: "text-orange-500" },
//     { text: "You believe in me when I doubt myself", icon: Crown, color: "text-yellow-500" },
//     { text: "Your love makes me a better person", icon: Gem, color: "text-pink-500" },
//     { text: "The way you look at me with those eyes", icon: Stars, color: "text-indigo-500" },
//     { text: "How you always know how to make me smile", icon: Smile, color: "text-green-500" }
//   ];

//   // Future dreams
//   const futureDreams = [
//     { icon: Globe, text: "Travel the world together", color: "from-blue-400 to-green-400" },
//     { icon: Home, text: "Build our dream home", color: "from-yellow-400 to-orange-400" },
//     { icon: Heart, text: "Grow old holding hands", color: "from-red-400 to-pink-400" },
//     { icon: Plane, text: "Watch sunset in Paris", color: "from-purple-400 to-indigo-400" },
//     { icon: Car, text: "Road trips across countries", color: "from-green-400 to-teal-400" },
//     { icon: Camera, text: "Fill albums with memories", color: "from-pink-400 to-purple-400" },
//     { icon: Pizza, text: "Cook together every Sunday", color: "from-orange-400 to-red-400" },
//     { icon: Wine, text: "Celebrate every anniversary", color: "from-purple-400 to-pink-400" }
//   ];

//   // Romantic compliments
//   const compliments = [
//     "You have the most beautiful smile I've ever seen",
//     "Your eyes sparkle brighter than the stars",
//     "You make my heart skip a beat every time I see you",
//     "Your love is the greatest gift I've ever received",
//     "You're more beautiful than a sunset",
//     "Your laughter is my favorite sound",
//     "You're the reason I believe in love",
//     "You make every day feel special"
//   ];

//   useEffect(() => {
//     // Initial confetti when page loads
//     confetti({
//       particleCount: 150,
//       spread: 100,
//       origin: { y: 0.6 },
//       colors: ['#ff69b4', '#ff1493', '#ff0000', '#ffa500', '#ffff00']
//     });

//     // Quote rotation
//     const interval = setInterval(() => {
//       setQuote(prev => (prev + 1) % quotes.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Floating hearts animation
//     const heartInterval = setInterval(() => {
//       const newHeart = {
//         id: Date.now(),
//         x: Math.random() * 100,
//         size: Math.random() * 40 + 20,
//         speed: Math.random() * 4 + 2,
//         delay: Math.random() * 2,
//         rotation: Math.random() * 360
//       };
//       setFloatingHearts(prev => [...prev, newHeart]);
      
//       setTimeout(() => {
//         setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
//       }, 12000);
//     }, 200);
    
//     return () => clearInterval(heartInterval);
//   }, []);

//   useEffect(() => {
//     // Love meter
//     const meterInterval = setInterval(() => {
//       setLoveMeter(prev => Math.min(prev + 0.1, 100));
//     }, 1000);
//     return () => clearInterval(meterInterval);
//   }, []);

//   const speakBirthdayWish = () => {
//     if (!soundEnabled) return;
    
//     if (speechRef.current) {
//       window.speechSynthesis.cancel();
//     }
    
//     const speech = new SpeechSynthesisUtterance();
//     speech.text = "Happy Birthday Babu! " + birthdayWish.split('\n').slice(1).join(' ');
//     speech.rate = 0.9;
//     speech.pitch = 1.1;
//     speech.volume = 1;
//     speech.lang = 'en-US';
    
//     window.speechSynthesis.speak(speech);
//     speechRef.current = speech;
//     setIsSpeaking(true);
    
//     speech.onend = () => {
//       setIsSpeaking(false);
//     };
//   };

//   const stopSpeaking = () => {
//     window.speechSynthesis.cancel();
//     setIsSpeaking(false);
//   };

//   const openBirthdayWish = () => {
//     setShowBirthdayWish(true);
//     speakBirthdayWish();
//     confetti({
//       particleCount: 200,
//       spread: 150,
//       origin: { y: 0.6 },
//       colors: ['#ff69b4', '#ff1493', '#ff0000', '#ffa500']
//     });
//   };

//   const closeModal = () => {
//     setModal(null);
//     setSelectedVideo(null);
//     setSelectedPhoto(null);
//     setShowPhotoGallery(false);
//     setShowLoveQuiz(false);
//     setShowFutureDreams(false);
//     setShowSecretMessage(false);
//     setShowTimeCapsule(false);
//     setShowBirthdayWish(false);
//     setShowRomanticQuotes(false);
//     setShowLoveLetters(false);
//     setShowPromiseRing(false);
//     setShowMemoryGame(false);
//     stopSpeaking();
//   };

//   const calculateLoveScore = () => {
//     const score = Math.floor(Math.random() * 31) + 70;
//     setLoveScore(score);
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 }
//     });
//   };

//   const checkSecretCode = () => {
//     if (secretCode.toLowerCase() === "i love you" || secretCode.toLowerCase() === "love") {
//       setShowSecretMessage(true);
//       confetti({
//         particleCount: 150,
//         spread: 100,
//         origin: { y: 0.6 }
//       });
//     }
//   };

//   const openTimeCapsule = () => {
//     setTimeCapsuleOpened(true);
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 }
//     });
//   };

//   const getRandomCompliment = () => {
//     const randomIndex = Math.floor(Math.random() * compliments.length);
//     toast.success(compliments[randomIndex], {
//       icon: '💝',
//       duration: 3000,
//       style: {
//         borderRadius: '20px',
//         background: '#ff69b4',
//         color: '#fff',
//       }
//     });
//   };

//   return (
//     <div className={`min-h-screen transition-all duration-1000 overflow-x-hidden ${
//       nightMode ? "bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900" : "bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
//     }`} ref={containerRef}>
      
//       {/* Floating Hearts */}
//       <AnimatePresence>
//         {floatingHearts.map(heart => (
//           <motion.div
//             key={heart.id}
//             initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0, scale: 0 }}
//             animate={{ 
//               y: "-20vh", 
//               opacity: [0, 0.9, 0.7, 0.4, 0],
//               scale: [0, 1.2, 1, 0.8, 0],
//               rotate: [heart.rotation, heart.rotation + 360]
//             }}
//             exit={{ opacity: 0 }}
//             transition={{ 
//               duration: heart.speed * 2, 
//               ease: "easeInOut",
//               delay: heart.delay
//             }}
//             className="fixed z-10 pointer-events-none"
//             style={{ fontSize: heart.size }}
//           >
//             {heart.size > 35 ? "❤️" : "💖"}
//           </motion.div>
//         ))}
//       </AnimatePresence>

//       <Toaster position="top-center" />

//       {/* Navigation Dots */}
//       <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 space-y-3">
//         {["home", "videos", "photos", "timeline", "surprises"].map((section) => (
//           <motion.div
//             key={section}
//             whileHover={{ scale: 1.3 }}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               activeSection === section ? "bg-pink-500 scale-125" : "bg-gray-400"
//             }`}
//             onClick={() => setActiveSection(section)}
//           />
//         ))}
//       </div>

//       {/* Love Meter */}
//       <motion.div 
//         className="fixed top-4 right-4 z-30 bg-white/30 backdrop-blur-lg rounded-full p-4 shadow-xl"
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="relative">
//           <HeartPulse className="w-8 h-8 text-pink-500" />
//           <motion.span 
//             className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
//             animate={{ scale: [1, 1.2, 1] }}
//             transition={{ duration: 1, repeat: Infinity }}
//           >
//             {Math.floor(loveMeter)}%
//           </motion.span>
//         </div>
//       </motion.div>

//       {/* Quick Action Buttons */}
//       <div className="fixed top-4 left-4 z-30 flex gap-2">
//         <motion.button
//           whileHover={{ scale: 1.1, rotate: 10 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setNightMode(!nightMode)}
//           className="bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-xl"
//         >
//           {nightMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-purple-500" />}
//         </motion.button>
        
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setSoundEnabled(!soundEnabled)}
//           className="bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-xl"
//         >
//           {soundEnabled ? <Volume2 className="w-5 h-5 text-pink-500" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={getRandomCompliment}
//           className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full shadow-xl"
//         >
//           <Heart className="w-5 h-5 text-white" />
//         </motion.button>
//       </div>

//       <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
//         {/* Hero Section */}
//         <motion.div
//           style={{ scale, rotate, y }}
//           className="text-center mb-16 sm:mb-20"
//         >
//           <motion.h1
//             className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
//             animate={{ 
//               scale: [1, 1.05, 1],
//               textShadow: [
//                 "0 0 20px rgba(255,105,180,0.3)",
//                 "0 0 40px rgba(255,105,180,0.6)",
//                 "0 0 20px rgba(255,105,180,0.3)"
//               ]
//             }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           >
//             Happy Birthday
//             <motion.span
//               className="block text-3xl sm:text-5xl mt-4"
//               animate={{ opacity: [0.8, 1, 0.8], y: [0, -5, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               My Forever Love ❤️
//             </motion.span>
//           </motion.h1>
          
//           <motion.div
//             animate={{ 
//               rotate: 360,
//               scale: [1, 1.2, 1]
//             }}
//             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//             className="inline-block"
//           >
//             <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 mx-auto" />
//           </motion.div>
//         </motion.div>

//         {/* Main Surprise Button */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ type: "spring", duration: 1.5 }}
//         >
//           <motion.button
//             whileHover={{ scale: 1.2, rotate: 5 }}
//             whileTap={{ scale: 0.9 }}
//             animate={{ 
//               boxShadow: [
//                 "0 0 20px rgba(255,105,180,0.5)",
//                 "0 0 40px rgba(255,105,180,0.8)",
//                 "0 0 20px rgba(255,105,180,0.5)"
//               ]
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//             onClick={openBirthdayWish}
//             className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-16 py-8 rounded-full text-3xl font-bold shadow-2xl relative overflow-hidden group"
//           >
//             <motion.span
//               animate={{ scale: [1, 1.5, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="absolute inset-0 bg-white/20"
//             />
//             <PartyPopper className="inline mr-4 w-10 h-10 animate-bounce" />
//             Click for Birthday Surprise!
//             <Gift className="inline ml-4 w-10 h-10 animate-pulse" />
//           </motion.button>
//         </motion.div>

//         {/* Romantic Quote Carousel */}
//         <div className="text-center mb-20 sm:mb-24 px-4">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={quote}
//               initial={{ opacity: 0, y: 40, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -40, scale: 0.9 }}
//               transition={{ duration: 1, ease: "easeInOut" }}
//               className="relative"
//             >
//               <motion.div 
//                 className="absolute -left-4 -top-4 text-4xl text-pink-300"
//                 animate={{ rotate: [0, 10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 "
//               </motion.div>
//               <p className="text-2xl sm:text-3xl md:text-4xl italic font-light text-gray-700 dark:text-gray-200 max-w-4xl mx-auto px-8">
//                 {quotes[quote]}
//               </p>
//               <motion.div 
//                 className="absolute -right-4 -bottom-4 text-4xl text-pink-300"
//                 animate={{ rotate: [0, -10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 "
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Video Gallery Section */}
//         <div className="mb-20" id="videos">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Our Beautiful Videos
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {videos.map((video, index) => (
//               <motion.div
//                 key={video.id}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.8 }}
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 40px 60px rgba(255,105,180,0.4)",
//                   rotateY: 5
//                 }}
//                 className="relative rounded-2xl overflow-hidden cursor-pointer group perspective"
//                 onClick={() => setSelectedVideo(video)}
//               >
//                 <div className="relative h-72">
//                   <img 
//                     src={video.thumbnail}
//                     alt={video.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     onError={(e) => {
//                       e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
//                     <div>
//                       <div className="flex items-center gap-2 mb-2">
//                         <VideoIcon className="w-6 h-6 text-pink-400" />
//                         <span className="text-pink-300 text-sm">{video.date}</span>
//                       </div>
//                       <h3 className="text-white text-2xl font-bold mb-2">{video.name}</h3>
//                       <p className="text-gray-200 text-sm">{video.description}</p>
//                     </div>
//                   </div>
//                   <motion.div 
//                     className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
//                   <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg rounded-full p-3">
//                     <Play className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Photo Gallery Section */}
//         <div className="mb-20" id="photos">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Our Precious Memories
//           </motion.h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {photos.map((photo, index) => (
//               <motion.div
//                 key={photo.id}
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 whileHover={{ scale: 1.1, rotate: 2, zIndex: 10 }}
//                 className="relative rounded-xl overflow-hidden cursor-pointer group"
//                 onClick={() => setSelectedPhoto(photo)}
//               >
//                 <img 
//                   src={photo.src}
//                   alt={photo.caption}
//                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                   onError={(e) => {
//                     e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
//                   }}
//                 />
//                 <motion.div 
//                   className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
//                   initial={{ y: 20 }}
//                   whileHover={{ y: 0 }}
//                 >
//                   <p className="text-white text-sm">{photo.date}</p>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
          
//           <motion.div
//             className="text-center mt-8"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <button
//               onClick={() => setShowPhotoGallery(true)}
//               className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500"
//             >
//               <Camera className="inline mr-2 w-5 h-5" />
//               View All Photos
//               <ImageIcon className="inline ml-2 w-5 h-5" />
//             </button>
//           </motion.div>
//         </div>

//         {/* Timeline */}
//         <div className="mb-20" id="timeline">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Our Love Story
//           </motion.h2>
//           <div className="space-y-6">
//             {timelineEvents.map((event, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.15, duration: 0.8 }}
//                 whileHover={{ scale: 1.02, x: 10 }}
//                 className="flex items-start gap-6 p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   transition={{ duration: 0.5 }}
//                   className={`bg-gradient-to-r ${event.color} p-4 rounded-full flex-shrink-0`}
//                 >
//                   <event.icon className="w-8 h-8 text-white" />
//                 </motion.div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-2">
//                     <h3 className="text-2xl font-bold">{event.title}</h3>
//                     <span className="text-pink-500 text-sm bg-pink-100 dark:bg-pink-900 px-3 py-1 rounded-full">
//                       {event.date}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
//                     {event.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Reasons Why I Love You */}
//         <div className="mb-20">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             10 Reasons Why I Love You
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {reasons.map((reason, index) => {
//               const Icon = reason.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   whileHover={{ scale: 1.05, x: 10 }}
//                   className="flex items-center gap-4 p-5 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-xl group"
//                 >
//                   <motion.div
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
//                   >
//                     <Icon className={`w-8 h-8 ${reason.color} group-hover:rotate-12 transition-transform`} />
//                   </motion.div>
//                   <p className="text-gray-700 dark:text-gray-200 text-lg flex-1">{reason.text}</p>
//                   <Heart className="w-5 h-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="#ff69b4" />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Special Surprises Section */}
//         <div className="mb-20" id="surprises">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Special Surprises
//           </motion.h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowLoveQuiz(true)}
//               className="bg-gradient-to-br from-pink-400 to-purple-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Heart className="w-8 h-8 mx-auto mb-2 animate-pulse" />
//               <span>Love Quiz</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowFutureDreams(true)}
//               className="bg-gradient-to-br from-blue-400 to-indigo-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Rocket className="w-8 h-8 mx-auto mb-2 animate-bounce" />
//               <span>Future Dreams</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowSecretMessage(true)}
//               className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Lock className="w-8 h-8 mx-auto mb-2" />
//               <span>Secret Message</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowTimeCapsule(true)}
//               className="bg-gradient-to-br from-green-400 to-teal-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Gift className="w-8 h-8 mx-auto mb-2 animate-pulse" />
//               <span>Time Capsule</span>
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Birthday Wish Modal - Full Page */}
//       <AnimatePresence>
//         {showBirthdayWish && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 z-50 p-4 sm:p-8"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{ type: "spring", damping: 20 }}
//           >
//             <motion.div
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-pink-300/30"
//             >
//               {/* Audio Control */}
//               <div className="absolute top-4 right-4 flex gap-2">
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={isSpeaking ? stopSpeaking : speakBirthdayWish}
//                   className="bg-white/20 backdrop-blur-lg p-3 rounded-full"
//                 >
//                   {isSpeaking ? <MicOff className="w-6 h-6 text-pink-300" /> : <Mic className="w-6 h-6 text-pink-300" />}
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={closeModal}
//                   className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full text-white"
//                 >
//                   Close
//                 </motion.button>
//               </div>

//               {/* Floating Hearts inside modal */}
//               <motion.div
//                 animate={{ 
//                   y: [0, -20, 0],
//                   rotate: [0, 10, -10, 0]
//                 }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute top-20 left-20 text-4xl opacity-30"
//               >
//                 ❤️
//               </motion.div>
//               <motion.div
//                 animate={{ 
//                   y: [0, -30, 0],
//                   rotate: [0, -10, 10, 0]
//                 }}
//                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//                 className="absolute bottom-20 right-20 text-4xl opacity-30"
//               >
//                 💖
//               </motion.div>

//               {/* Birthday Wish Content */}
//               <motion.div
//                 initial={{ scale: 0.9 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//                 className="text-center"
//               >
//                 <motion.h1 
//                   className="text-5xl sm:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text"
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   🎉 Happy Birthday! 🎉
//                 </motion.h1>

//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="mb-8"
//                 >
//                   <PartyPopper className="w-16 h-16 text-pink-300 mx-auto" />
//                 </motion.div>

//                 <motion.div 
//                   className="space-y-6 text-left"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                 >
//                   {birthdayWish.split('\n').map((paragraph, index) => (
//                     <motion.p
//                       key={index}
//                       initial={{ x: -50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: 1 + index * 0.2 }}
//                       className="text-white text-lg sm:text-xl leading-relaxed"
//                     >
//                       {paragraph}
//                     </motion.p>
//                   ))}
//                 </motion.div>

//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 3, type: "spring" }}
//                   className="mt-10"
//                 >
//                   <Heart className="w-20 h-20 text-pink-400 mx-auto animate-pulse" fill="#ff69b4" />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Video Modal */}
//         {selectedVideo && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedVideo(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.5, y: 100, opacity: 0, rotateX: -30 }}
//               animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
//               exit={{ scale: 0.5, y: -100, opacity: 0, rotateX: 30 }}
//               transition={{ type: "spring", damping: 20 }}
//               className="relative w-full max-w-5xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <video 
//                 src={selectedVideo.src}
//                 controls
//                 autoPlay
//                 className="w-full rounded-2xl shadow-2xl"
//                 poster={selectedVideo.thumbnail}
//               />
//               <motion.button
//                 whileHover={{ scale: 1.1, rotate: 90 }}
//                 onClick={() => setSelectedVideo(null)}
//                 className="absolute -top-12 right-0 text-white text-xl hover:text-pink-300 transition-colors bg-black/50 backdrop-blur-lg px-4 py-2 rounded-full"
//               >
//                 Close ✕
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Photo Gallery Modal */}
//         {showPhotoGallery && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowPhotoGallery(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
//               animate={{ scale: 1, opacity: 1, rotateY: 0 }}
//               exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
//               className="bg-white dark:bg-gray-800 p-8 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-4xl font-bold text-pink-500">Our Beautiful Memories</h2>
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   onClick={() => setShowPhotoGallery(false)}
//                   className="text-3xl hover:text-pink-500 transition-colors"
//                 >
//                   ✕
//                 </motion.button>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {photos.map((photo) => (
//                   <motion.div
//                     key={photo.id}
//                     whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
//                     className="cursor-pointer rounded-xl overflow-hidden shadow-xl group"
//                     onClick={() => setSelectedPhoto(photo)}
//                   >
//                     <div className="relative h-48">
//                       <img 
//                         src={photo.src}
//                         alt={photo.caption}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
//                         <p className="text-white text-sm font-bold">{photo.date}</p>
//                         <p className="text-gray-200 text-xs">{photo.location}</p>
//                       </div>
//                     </div>
//                     <p className="p-3 text-sm text-center bg-white dark:bg-gray-700">{photo.caption}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Single Photo Modal */}
//         {selectedPhoto && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/98 z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedPhoto(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
//               animate={{ scale: 1, rotate: 0, opacity: 1 }}
//               exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
//               className="relative max-w-5xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img 
//                 src={selectedPhoto.src} 
//                 alt={selectedPhoto.caption}
//                 className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
//                 <p className="text-white text-2xl font-bold">{selectedPhoto.caption}</p>
//                 <p className="text-gray-300">{selectedPhoto.date} • {selectedPhoto.location}</p>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 onClick={() => setSelectedPhoto(null)}
//                 className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg text-white px-4 py-2 rounded-full"
//               >
//                 Close
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Love Quiz Modal */}
//         {showLoveQuiz && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowLoveQuiz(false)}
//           >
//             <motion.div
//               initial={{ scale: 0, rotateY: 180 }}
//               animate={{ scale: 1, rotateY: 0 }}
//               exit={{ scale: 0, rotateY: -180 }}
//               className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl max-w-lg"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
//               <h2 className="text-3xl font-bold text-center mb-6">Love Quiz</h2>
//               <p className="text-xl mb-6 text-center">How much do we love each other?</p>
//               <button
//                 onClick={calculateLoveScore}
//                 className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl text-lg mb-4"
//               >
//                 Calculate Love Score
//               </button>
//               {loveScore && (
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="text-center"
//                 >
//                   <p className="text-2xl mb-2">Our Love Score:</p>
//                   <p className="text-5xl font-bold text-pink-500">{loveScore}%</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Future Dreams Modal */}
//         {showFutureDreams && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowFutureDreams(false)}
//           >
//             <motion.div
//               initial={{ scale: 0, rotateX: -90 }}
//               animate={{ scale: 1, rotateX: 0 }}
//               exit={{ scale: 0, rotateX: 90 }}
//               className="bg-white dark:bg-gray-800 p-10 rounded-3xl max-w-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Rocket className="w-16 h-16 text-pink-500 mx-auto mb-6" />
//               <h2 className="text-3xl font-bold text-center mb-8">Our Future Dreams</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {futureDreams.map((dream, index) => {
//                   const Icon = dream.icon;
//                   return (
//                     <motion.div
//                       key={index}
//                       whileHover={{ scale: 1.05 }}
//                       className={`bg-gradient-to-r ${dream.color} p-4 rounded-xl text-white flex items-center gap-3`}
//                     >
//                       <Icon className="w-6 h-6" />
//                       <span>{dream.text}</span>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Secret Message Modal */}
//         {showSecretMessage && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowSecretMessage(false)}
//           >
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0, rotate: 180 }}
//               className="bg-white dark:bg-gray-800 p-10 rounded-3xl max-w-md"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Lock className="w-16 h-16 text-pink-500 mx-auto mb-6" />
//               <h2 className="text-3xl font-bold text-center mb-6">Secret Message</h2>
//               <p className="text-center mb-4">Enter the secret code to reveal a special message:</p>
//               <input
//                 type="text"
//                 value={secretCode}
//                 onChange={(e) => setSecretCode(e.target.value)}
//                 placeholder="Enter code..."
//                 className="w-full p-3 border rounded-xl mb-4"
//               />
//               <button
//                 onClick={checkSecretCode}
//                 className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl"
//               >
//                 Unlock
//               </button>
//               {showSecretMessage && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mt-6 p-4 bg-pink-100 dark:bg-pink-900 rounded-xl text-center"
//                 >
//                   <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
//                   <p className="text-lg">You are the most precious person in my life. I love you forever! ❤️</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Time Capsule Modal */}
//         {showTimeCapsule && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowTimeCapsule(false)}
//           >
//             <motion.div
//               initial={{ scale: 0, rotateY: 180 }}
//               animate={{ scale: 1, rotateY: 0 }}
//               exit={{ scale: 0, rotateY: -180 }}
//               className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl max-w-lg"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Gift className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
//               <h2 className="text-3xl font-bold text-center mb-6">Time Capsule</h2>
//               {!timeCapsuleOpened ? (
//                 <>
//                   <p className="text-center mb-6">A special message for you, sealed with love...</p>
//                   <button
//                     onClick={openTimeCapsule}
//                     className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl"
//                   >
//                     Open Time Capsule
//                   </button>
//                 </>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-center"
//                 >
//                   <p className="text-xl mb-4">Dear My Love,</p>
//                   <p className="mb-4">Remember this beautiful moment. Our love grows stronger every day. Today is special because it's your birthday, but every day with you is a celebration. You are my greatest treasure, my happiest thought, my most beautiful dream come true.</p>
//                   <p className="text-pink-500 font-bold text-xl">Forever and always yours ❤️</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         .perspective {
//           perspective: 1000px;
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
        
//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.8; transform: scale(1.05); }
//         }
        
//         @keyframes heartBeat {
//           0% { transform: scale(1); }
//           14% { transform: scale(1.3); }
//           28% { transform: scale(1); }
//           42% { transform: scale(1.3); }
//           70% { transform: scale(1); }
//         }
//       `}</style>
//     </div>
//   );
// }

// // Play icon component
// const Play = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <polygon points="5 3 19 12 5 21 5 3" />
//   </svg>
// );
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import {
//   Heart,
//   Gift,
//   Cake,
//   Music,
//   Moon,
//   Sun,
//   Sparkles,
//   Coffee,
//   Star,
//   Video,
//   Camera,
//   MessageCircle,
//   Infinity,
//   Feather,
//   Globe,
//   Cloud,
//   Award,
//   BookOpen,
//   MapPin,
//   Volume2,
//   VolumeX,
//   Send,
//   Rocket,
//   Home,
//   Diamond,
//   Flower,
//   Leaf,
//   Smile,
//   Sunset,
//   PartyPopper,
//   HeartPulse,
//   Sparkle,
//   Stars,
//   Flame,
//   Crown,
//   Gem,
//   Music4,
//   Film,
//   Image as ImageIcon,
//   Plane,
//   Car,
//   Utensils,
//   Wine,
//   Lock,
//   Key,
//   Mail,
//   Phone as PhoneIcon,
//   Video as VideoIcon,
//   Mic,
//   MicOff,
//   HeartHandshake,
//   HeartCrack,
//   Trophy,
//   Medal,
//   ScrollText,
//   Scroll,
//   Pen,
//   MailOpen,
//   Mailbox,
//   MessageSquare,
//   HeartOff,
//   HeartIcon,
//   Quote,
//   Calendar,
//   Clock,
//   Briefcase,
//   Home as HomeIcon,
//   Wallet,
//   Activity,
//   Airplay,
//   AlarmClock,
//   AlertCircle,
//   AlertTriangle,
//   AlignCenter,
//   AlignJustify,
//   AlignLeft,
//   AlignRight,
//   Anchor,
//   Aperture,
//   Archive,
//   ArrowDown,
//   ArrowLeft,
//   ArrowRight,
//   ArrowUp,
//   AtSign,
//   Award as AwardIcon,
//   FileStack,
//   FileSymlink,
//   FileTerminal,
//   FileText,
//   FileType,
//   FileType2,
//   FileUp,
//   FileVideo,
//   FileVideo2,
//   FileVolume,
//   FileVolume2,
//   FileWarning,
//   FileX,
//   FileX2,
//   Files,
//   Filter,
//   FilterX,
//   Fingerprint,
//   FireExtinguisher,
//   Fish,
//   FishOff,
//   FishSymbol,
//   Flag,
//   FlagOff,
//   FlagTriangleLeft,
//   FlagTriangleRight,
//   FlameKindling,
//   Flashlight,
//   FlashlightOff,
//   FlaskConical,
//   FlaskConicalOff,
//   FlaskRound,
//   FlipHorizontal,
//   FlipHorizontal2,
//   FlipVertical,
//   FlipVertical2,
//   Flower2,
//   Focus,
//   FoldHorizontal,
//   FoldVertical,
//   Folder,
//   FolderArchive,
//   FolderCheck,
//   FolderClock,
//   FolderClosed,
//   FolderCode,
//   FolderCog,
//   FolderDot,
//   FolderDown,
//   FolderGit,
//   FolderGit2,
//   FolderHeart,
//   FolderInput,
//   FolderKanban,
//   FolderKey,
//   FolderLock,
//   FolderMinus,
//   FolderOpen,
//   FolderOpenDot,
//   FolderOutput,
//   FolderPen,
//   FolderPlus,
//   FolderRoot,
//   FolderSearch,
//   FolderSearch2,
//   FolderSymlink,
//   FolderSync,
//   FolderTree,
//   FolderUp,
//   FolderX,
//   Folders,
//   Footprints,
//   Forklift,
//   FormInput,
//   Forward,
//   Frame,
//   Framer,
//   Frown,
//   Fuel,
//   Fullscreen,
//   FunctionSquare,
//   GalleryHorizontal,
//   GalleryHorizontalEnd,
//   GalleryThumbnails,
//   GalleryVertical,
//   GalleryVerticalEnd,
//   Gamepad,
//   Gamepad2,
//   Gauge,
//   Gavel,
//   Ghost,
//   GitBranch,
//   GitBranchPlus,
//   GitCommitHorizontal,
//   GitCommitVertical,
//   GitCompare,
//   GitCompareArrows,
//   GitFork,
//   GitGraph,
//   GitMerge,
//   GitPullRequest,
//   GitPullRequestArrow,
//   GitPullRequestClosed,
//   GitPullRequestCreate,
//   GitPullRequestCreateArrow,
//   GitPullRequestDraft,
//   Github,
//   Gitlab,
//   GlassWater,
//   Glasses,
//   GlobeLock,
//   Goal,
//   Grab,
//   GraduationCap,
//   Grape,
//   Grid2x2,
//   Grid2x2Check,
//   Grid2x2X,
//   Grid3x3,
//   Grip,
//   GripHorizontal,
//   GripVertical,
//   Group,
//   Guitar,
//   Ham,
//   Hammer,
//   Hand,
//   HandCoins,
//   HandHeart,
//   HandHelping,
//   HandMetal,
//   HandPlatter,
//   HardDrive,
//   HardDriveDownload,
//   HardDriveUpload,
//   HardHat,
//   Hash,
//   Haze,
//   HdmiPort,
//   Heading,
//   Heading1,
//   Heading2,
//   Heading3,
//   Heading4,
//   Heading5,
//   Heading6,
//   Headphones,
//   Headset,
//   Heater,
//   Hexagon,
//   Highlighter,
//   History,
//   Hop,
//   HopOff,
//   Hotel,
//   Hourglass,
//   House,
//   HousePlug,
//   HousePlus,
//   IceCreamBowl,
//   IceCreamCone,
//   IdCard,
//   Image,
//   ImageDown,
//   ImageMinus,
//   ImageOff,
//   ImagePlus,
//   ImageUp,
//   Images,
//   Import,
//   Inbox,
//   IndentDecrease,
//   IndentIncrease,
//   IndianRupee,
//   Info,
//   InspectionPanel,
//   Instagram,
//   Italic,
//   IterationCcw,
//   IterationCw,
//   JapaneseYen,
//   Joystick,
//   Kanban,
//   KeyRound,
//   KeySquare,
//   Keyboard,
//   KeyboardMusic,
//   KeyboardOff,
//   Lamp,
//   LampCeiling,
//   LampDesk,
//   LampFloor,
//   LampWallDown,
//   LampWallUp,
//   LandPlot,
//   Landmark,
//   Languages,
//   Laptop,
//   LaptopMinimal,
//   Lasso,
//   LassoSelect,
//   Laugh,
//   Layers,
//   Layers2,
//   LayoutDashboard,
//   LayoutGrid,
//   LayoutList,
//   LayoutPanelLeft,
//   LayoutPanelTop,
//   LayoutTemplate,
//   LeafyGreen,
//   Library,
//   LifeBuoy,
//   Ligature,
//   Lightbulb,
//   LightbulbOff,
//   LineChart,
//   Link,
//   Link2,
//   Link2Off,
//   Linkedin,
//   List,
//   ListCheck,
//   ListChecks,
//   ListCollapse,
//   ListEnd,
//   ListFilter,
//   ListMinus,
//   ListMusic,
//   ListOrdered,
//   ListPlus,
//   ListRestart,
//   ListStart,
//   ListTodo,
//   ListTree,
//   ListVideo,
//   ListX,
//   Loader,
//   LoaderCircle,
//   LoaderPinwheel,
//   Locate,
//   LocateFixed,
//   LocateOff,
//   LockKeyhole,
//   LockKeyholeOpen,
//   LockOpen,
//   LogIn,
//   LogOut,
//   Lollipop,
//   Luggage,
//   MSquare,
//   Magnet,
//   MailCheck,
//   MailMinus,
//   MailPlus,
//   MailQuestion,
//   MailSearch,
//   MailWarning,
//   MailX,
//   Mails,
//   Map,
//   MapPinCheck,
//   MapPinCheckInside,
//   MapPinHouse,
//   MapPinMinus,
//   MapPinMinusInside,
//   MapPinOff,
//   MapPinPlus,
//   MapPinPlusInside,
//   MapPinX,
//   MapPinXInside,
//   MapPinned,
//   Martini,
//   Maximize,
//   Maximize2,
//   // Medal,
//   Megaphone,
//   MegaphoneOff,
//   Meh,
//   MemoryStick,
//   Menu,
//   Merge,
//   MessageCircleCode,
//   MessageCircleDashed,
//   MessageCircleHeart,
//   MessageCircleMore,
//   MessageCircleOff,
//   MessageCirclePlus,
//   MessageCircleQuestion,
//   MessageCircleReply,
//   MessageCircleWarning,
//   MessageCircleX,
//   MessageSquareCode,
//   MessageSquareDashed,
//   MessageSquareDiff,
//   MessageSquareDot,
//   MessageSquareHeart,
//   MessageSquareMore,
//   MessageSquareOff,
//   MessageSquarePlus,
//   MessageSquareQuote,
//   MessageSquareReply,
//   MessageSquareShare,
//   MessageSquareText,
//   MessageSquareWarning,
//   MessageSquareX,
//   MessagesSquare,
//   MicVocal,
//   Microscope,
//   Microwave,
//   Milestone,
//   Milk,
//   MilkOff,
//   Minimize,
//   Minimize2,
//   Minus,
//   Monitor,
//   MonitorCheck,
//   MonitorCog,
//   MonitorDot,
//   MonitorDown,
//   MonitorOff,
//   MonitorPause,
//   MonitorPlay,
//   MonitorSmartphone,
//   MonitorSpeaker,
//   MonitorStop,
//   MonitorUp,
//   MonitorX,
//   MoonStar,
//   Mountain,
//   MountainSnow,
//   Mouse,
//   MouseOff,
//   MousePointer,
//   MousePointer2,
//   MousePointerBan,
//   MousePointerClick,
//   Move,
//   Move3d,
//   MoveDiagonal,
//   MoveDiagonal2,
//   MoveDown,
//   MoveDownLeft,
//   MoveDownRight,
//   MoveHorizontal,
//   MoveLeft,
//   MoveRight,
//   MoveUp,
//   MoveUpLeft,
//   MoveUpRight,
//   MoveVertical,
//   Music2,
//   Music3,
//   Navigation,
//   Navigation2,
//   Navigation2Off,
//   NavigationOff,
//   Network,
//   Newspaper,
//   Nfc,
//   Notebook,
//   NotebookPen,
//   NotebookTabs,
//   NotebookText,
//   NotepadText,
//   NotepadTextDashed,
//   Nut,
//   NutOff,
//   Octagon,
//   OctagonAlert,
//   OctagonMinus,
//   OctagonPause,
//   OctagonX,
//   Omega,
//   Option,
//   Orbit,
//   Origami,
//   Package,
//   Package2,
//   PackageCheck,
//   PackageMinus,
//   PackageOpen,
//   PackagePlus,
//   PackageSearch,
//   PackageX,
//   PaintBucket,
//   PaintRoller,
//   Paintbrush,
//   PaintbrushVertical,
//   Palette,
//   PanelBottom,
//   PanelBottomClose,
//   PanelBottomDashed,
//   PanelBottomOpen,
//   PanelLeft,
//   PanelLeftClose,
//   PanelLeftDashed,
//   PanelLeftOpen,
//   PanelRight,
//   PanelRightClose,
//   PanelRightDashed,
//   PanelRightOpen,
//   PanelTop,
//   PanelTopClose,
//   PanelTopDashed,
//   PanelTopOpen,
//   PanelsLeftBottom,
//   PanelsRightBottom,
//   PanelsTopLeft,
//   Paperclip,
//   Parentheses,
//   ParkingMeter,
//   Pause,
//   PawPrint,
//   PcCase,
//   PenLine,
//   PenOff,
//   PenTool,
//   Pencil,
//   PencilLine,
//   PencilOff,
//   PencilRuler,
//   Pentagon,
//   Percent,
//   PersonStanding,
//   PhilippinePeso,
//   PhoneCall,
//   PhoneForwarded,
//   PhoneIncoming,
//   PhoneMissed,
//   PhoneOff,
//   PhoneOutgoing,
//   Pi,
//   Piano,
//   Pickaxe,
//   PictureInPicture,
//   PictureInPicture2,
//   PiggyBank,
//   Pilcrow,
//   PilcrowLeft,
//   PilcrowRight,
//   Pill,
//   PillBottle,
//   Pin,
//   PinOff,
//   Pipette,
//   Pizza,
//   PlaneLanding,
//   PlaneTakeoff,
//   Play,
//   PlayCircle,
//   PlaySquare,
//   Plug,
//   Plug2,
//   PlugZap,
//   Plus,
//   Pocket,
//   PocketKnife,
//   Podcast,
//   Pointer,
//   PointerOff,
//   Popcorn,
//   Popsicle,
//   PoundSterling,
//   Power,
//   PowerOff,
//   Presentation,
//   Printer,
//   PrinterCheck,
//   Projector,
//   Proportions,
//   Puzzle,
//   Pyramid,
//   QrCode,
//   Rabbit,
//   Radar,
//   Radiation,
//   Radical,
//   Radio,
//   RadioReceiver,
//   RadioTower,
//   Radius,
//   RailSymbol,
//   Rainbow,
//   Rat,
//   Ratio,
//   Receipt,
//   ReceiptCent,
//   ReceiptEuro,
//   ReceiptIndianRupee,
//   ReceiptJapaneseYen,
//   ReceiptPoundSterling,
//   ReceiptRussianRuble,
//   ReceiptSwissFranc,
//   ReceiptText,
//   RectangleEllipsis,
//   RectangleHorizontal,
//   RectangleVertical,
//   Recycle,
//   Redo,
//   Redo2,
//   RedoDot,
//   RefreshCcw,
//   RefreshCcwDot,
//   RefreshCw,
//   RefreshCwOff,
//   Refrigerator,
//   Regex,
//   RemoveFormatting,
//   Repeat,
//   Repeat1,
//   Repeat2,
//   Replace,
//   ReplaceAll,
//   Reply,
//   ReplyAll,
//   Rewind,
//   Ribbon,
//   RockingChair,
//   RollerCoaster,
//   Rotate3d,
//   RotateCcw,
//   RotateCcwSquare,
//   RotateCw,
//   RotateCwSquare,
//   Route,
//   RouteOff,
//   Router,
//   Rows,
//   Rows2,
//   Rows3,
//   Rows4,
//   Rss,
//   Ruler,
//   RussianRuble,
//   Sailboat,
//   Salad,
//   Sandwich,
//   Satellite,
//   SatelliteDish,
//   Save,
//   SaveAll,
//   SaveOff,
//   Scale,
//   Scale3d,
//   Scaling,
//   Scan,
//   ScanBarcode,
//   ScanEye,
//   ScanFace,
//   ScanHeart,
//   ScanLine,
//   ScanQrCode,
//   ScanSearch,
//   ScanText,
//   School,
//   Scissors,
//   ScissorsLineDashed,
//   ScreenShare,
//   ScreenShareOff,
//   ScrollText as ScrollTextIcon,
//   Search,
//   SearchCheck,
//   SearchCode,
//   SearchSlash,
//   SearchX,
//   Section,
//   SendHorizonal,
//   SendToBack,
//   SeparatorHorizontal,
//   SeparatorVertical,
//   Server,
//   ServerCog,
//   ServerCrash,
//   ServerOff,
//   Settings,
//   Settings2,
//   Shapes,
//   Share,
//   Share2,
//   Sheet,
//   Shell,
//   Shield,
//   ShieldAlert,
//   ShieldBan,
//   ShieldCheck,
//   ShieldEllipsis,
//   ShieldHalf,
//   ShieldMinus,
//   ShieldOff,
//   ShieldPlus,
//   ShieldQuestion,
//   ShieldX,
//   Ship,
//   ShipWheel,
//   Shirt,
//   ShoppingBag,
//   ShoppingBasket,
//   ShoppingCart,
//   Shovel,
//   ShowerHead,
//   Shrink,
//   Shrub,
//   Shuffle,
//   Sigma,
//   Signal,
//   SignalHigh,
//   SignalLow,
//   SignalMedium,
//   SignalZero,
//   Signature,
//   Signpost,
//   SignpostBig,
//   Siren,
//   SkipBack,
//   SkipForward,
//   Skull,
//   Slack,
//   Slash,
//   Slice,
//   SlidersHorizontal,
//   SlidersVertical,
//   Smartphone,
//   SmartphoneCharging,
//   SmartphoneNfc,
//   SmilePlus,
//   Snail,
//   Snowflake,
//   Sofa,
//   Soup,
//   Space,
//   Spade,
//   Speaker,
//   Speech,
//   SpellCheck,
//   SpellCheck2,
//   Spline,
//   Split,
//   SprayCan,
//   Sprout,
//   Square,
//   SquareActivity,
//   SquareArrowDown,
//   SquareArrowDownLeft,
//   SquareArrowDownRight,
//   SquareArrowLeft,
//   SquareArrowOutDownLeft,
//   SquareArrowOutDownRight,
//   SquareArrowOutUpLeft,
//   SquareArrowOutUpRight,
//   SquareArrowRight,
//   SquareArrowUp,
//   SquareArrowUpLeft,
//   SquareArrowUpRight,
//   SquareAsterisk,
//   SquareBottomDashedScissors,
//   SquareChartGantt,
//   SquareCheck,
//   SquareCheckBig,
//   SquareChevronDown,
//   SquareChevronLeft,
//   SquareChevronRight,
//   SquareChevronUp,
//   SquareCode,
//   SquareDashed,
//   SquareDashedBottom,
//   SquareDashedBottomCode,
//   SquareDashedKanban,
//   SquareDashedMousePointer,
//   SquareDivide,
//   SquareDot,
//   SquareEqual,
//   SquareFunction,
//   SquareKanban,
//   SquareLibrary,
//   SquareM,
//   SquareMenu,
//   SquareMinus,
//   SquareMousePointer,
//   SquareParking,
//   SquareParkingOff,
//   SquarePen,
//   SquarePercent,
//   SquarePi,
//   SquarePilcrow,
//   SquarePlay,
//   SquarePlus,
//   SquarePower,
//   SquareRadical,
//   SquareScissors,
//   SquareSigma,
//   SquareSlash,
//   SquareSplitHorizontal,
//   SquareSplitVertical,
//   SquareSquare,
//   SquareStack,
//   SquareTerminal,
//   SquareUser,
//   SquareUserRound,
//   SquareX,
//   Squircle,
//   Squirrel,
//   Stamp,
//   StarHalf,
//   StarOff,
//   StepBack,
//   StepForward,
//   Stethoscope,
//   Sticker,
//   StickyNote,
//   StopCircle,
//   Store,
//   StretchHorizontal,
//   StretchVertical,
//   Strikethrough,
//   Subscript,
//   SunDim,
//   SunMedium,
//   SunMoon,
//   SunSnow,
//   Sunrise,
//   Superscript,
//   SwatchBook,
//   SwissFranc,
//   SwitchCamera,
//   Sword,
//   Swords,
//   Syringe,
//   Table,
//   Table2,
//   TableCellsMerge,
//   TableCellsSplit,
//   TableColumnsSplit,
//   TableOfContents,
//   TableProperties,
//   TableRowsSplit,
//   Tablet,
//   TabletSmartphone,
//   Tablets,
//   Tag,
//   Tags,
//   Tally1,
//   Tally2,
//   Tally3,
//   Tally4,
//   Tally5,
//   Tangent,
//   Target,
//   Telescope,
//   Tent,
//   TentTree,
//   Terminal,
//   TestTube,
//   TestTubeDiagonal,
//   TestTubes,
//   Text,
//   TextCursor,
//   TextCursorInput,
//   TextQuote,
//   TextSearch,
//   TextSelect,
//   Theater,
//   Thermometer,
//   ThermometerSnowflake,
//   ThermometerSun,
//   ThumbsDown,
//   ThumbsUp,
//   Ticket,
//   TicketCheck,
//   TicketMinus,
//   TicketPercent,
//   TicketPlus,
//   TicketSlash,
//   TicketX,
//   Timer,
//   TimerOff,
//   TimerReset,
//   ToggleLeft,
//   ToggleRight,
//   Tornado,
//   Torus,
//   Touchpad,
//   TouchpadOff,
//   TowerControl,
//   ToyBrick,
//   Tractor,
//   TrafficCone,
//   TrainFront,
//   TrainFrontTunnel,
//   TrainTrack,
//   TramFront,
//   Trash,
//   Trash2,
//   TreeDeciduous,
//   TreePalm,
//   TreePine,
//   Trees,
//   Trello,
//   TrendingDown,
//   TrendingUp,
//   Triangle,
//   TriangleAlert,
//   TriangleRight,
//   Truck,
//   Turtle,
//   Tv,
//   TvMinimal,
//   TvMinimalPlay,
//   Twitch,
//   Twitter,
//   Type,
//   Umbrella,
//   UmbrellaOff,
//   Underline,
//   Undo,
//   Undo2,
//   UndoDot,
//   UnfoldHorizontal,
//   UnfoldVertical,
//   Ungroup,
//   University,
//   Unlink,
//   Unlink2,
//   Unplug,
//   Upload,
//   Usb,
//   User,
//   UserCheck,
//   UserCog,
//   UserMinus,
//   UserPen,
//   UserPlus,
//   UserRound,
//   UserRoundCheck,
//   UserRoundCog,
//   UserRoundMinus,
//   UserRoundPen,
//   UserRoundPlus,
//   UserRoundSearch,
//   UserRoundX,
//   UserSearch,
//   UserX,
//   Users,
//   UsersRound,
//   UtensilsCrossed,
//   UtilityPole,
//   Variable,
//   Vault,
//   Vegan,
//   VenetianMask,
//   Vibrate,
//   VibrateOff,
//   VideoOff,
//   Videotape,
//   View,
//   Voicemail,
//   Volleyball,
//   Volume1,
//   Volume,
//   Vote,
//   WalletCards,
//   WalletMinimal,
//   Wallpaper,
//   Wand,
//   WandSparkles,
//   Warehouse,
//   WashingMachine,
//   Watch,
//   Waves,
//   Waypoints,
//   Webcam,
//   Webhook,
//   WebhookOff,
//   Weight,
//   Wheat,
//   WheatOff,
//   WholeWord,
//   Wifi,
//   WifiHigh,
//   WifiLow,
//   WifiOff,
//   WifiZero,
//   Wind,
//   WineOff,
//   Workflow,
//   Worm,
//   WrapText,
//   Wrench,
//   X,
//   Youtube,
//   Zap,
//   ZapOff,
//   ZoomIn,
//   ZoomOut,
//   Camera as PhotoIcon
// } from "lucide-react";
// import { Toaster, toast } from "react-hot-toast";
// import confetti from "canvas-confetti";

// export default function Webpage() {
//   const [nightMode, setNightMode] = useState(false);
//   const [modal, setModal] = useState(null);
//   const [quote, setQuote] = useState(0);
//   const [soundEnabled, setSoundEnabled] = useState(true);
//   const [floatingHearts, setFloatingHearts] = useState([]);
//   const [floatingRoses, setFloatingRoses] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [showPhotoGallery, setShowPhotoGallery] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [activeSection, setActiveSection] = useState("home");
//   const [loveMeterValue, setLoveMeterValue] = useState(0);
//   const [showLoveQuiz, setShowLoveQuiz] = useState(false);
//   const [showFutureDreams, setShowFutureDreams] = useState(false);
//   const [showSecretMessage, setShowSecretMessage] = useState(false);
//   const [showTimeCapsule, setShowTimeCapsule] = useState(false);
//   const [showBirthdayWish, setShowBirthdayWish] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [secretCode, setSecretCode] = useState("");
//   const [timeCapsuleOpened, setTimeCapsuleOpened] = useState(false);
//   const [loveScore, setLoveScore] = useState(null);
//   const [showGreetingCard, setShowGreetingCard] = useState(null);
//   const [selectedLetter, setSelectedLetter] = useState(null);
//   const [showPromiseRing, setShowPromiseRing] = useState(false);
//   const [showLovePoem, setShowLovePoem] = useState(false);
//   const [showVirtualHug, setShowVirtualHug] = useState(false);
//   const [hugCount, setHugCount] = useState(0);
//   const [showLoveMeterModal, setShowLoveMeterModal] = useState(false);
//   const [showStarGazing, setShowStarGazing] = useState(false);
//   const [showHandwrittenLetter, setShowHandwrittenLetter] = useState(null);
  
//   const containerRef = useRef(null);
//   const audioRef = useRef(null);
//   const speechRef = useRef(null);
//   const { scrollYProgress } = useScroll();
  
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
//   const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   // Birthday wish text
//   const birthdayWish = `Happy Birthday Babu! 🎉

// On this beautiful day, I want to tell you how much you mean to me. You are the most precious gift life has ever given me. Every moment with you feels like a beautiful dream, and I never want to wake up.

// Your smile lights up my darkest days, your laughter is the sweetest melody to my ears, and your love is the warmth that keeps my heart beating. You've made my life complete in ways I never thought possible.

// Today, on your birthday, I wish you all the happiness in the world. May your life be filled with endless joy, success, and love. You deserve everything beautiful that life has to offer.

// Remember that I'll always be here for you, through every high and low, every laugh and tear, every moment and memory. You're not just my love; you're my best friend, my confidant, my everything.

// I love you more than the stars in the sky, more than the sand on the beaches, more than words could ever express. You are my forever, my always, my never-ending love story.

// Happy Birthday, my love. Today and always, you are celebrated, you are cherished, and you are deeply, deeply loved.

// I LOVE YOU MORE! ❤️`;

//   // Romantic quotes
//   const quotes = [
//     "You are the most beautiful thing that has ever happened to me",
//     "Every moment with you feels like a beautiful dream I never want to wake up from",
//     "My heart beats your name with every pulse - it's forever yours",
//     "You're not just my love, you're my home, my peace, my everything",
//     "In your eyes, I found the answer to every question my heart ever asked",
//     "Loving you is the easiest thing I've ever done, and the best thing that's ever happened to me",
//     "You are the poetry my heart always wanted to write",
//     "My world became infinitely beautiful the day you walked into my life",
//     "You are my today, my tomorrow, and all my forever",
//     "With you, every day feels like Valentine's Day"
//   ];

//   // Greeting Cards
//   const greetingCards = [
//     {
//       id: 1,
//       type: "anniversary",
//       title: "Our Love Story Begins",
//       date: "July 9, 2024",
//       message: "The day our eyes met for the first time, I knew my life would never be the same. You walked into my world and painted it with colors I never knew existed. That moment, that beautiful moment, was when my heart found its forever home.",
//       signature: "Forever Yours",
//       color: "from-pink-400 to-red-400",
//       icon: Heart,
//       bgImage: "bg-gradient-to-br from-pink-100 to-red-100"
//     },
//     {
//       id: 2,
//       type: "love",
//       title: "Why I Love You",
//       date: "August 17, 2024",
//       message: "I love you not just for who you are, but for who I become when I'm with you. You bring out the best in me, you make me want to be a better person. Your smile is my sunshine, your laughter is my favorite melody, and your love is my greatest treasure.",
//       signature: "With All My Heart",
//       color: "from-purple-400 to-pink-400",
//       icon: HeartPulse,
//       bgImage: "bg-gradient-to-br from-purple-100 to-pink-100"
//     },
//     {
//       id: 3,
//       type: "promise",
//       title: "My Promise to You",
//       date: "August 17, 2024",
//       message: "I promise to love you endlessly, to support you unconditionally, to stand by you through every storm. I promise to make you laugh when you're sad, to hold you when you're weak, and to celebrate with you when you're strong. You are my forever promise.",
//       signature: "Always and Forever",
//       color: "from-blue-400 to-indigo-400",
//       icon: HeartHandshake,
//       bgImage: "bg-gradient-to-br from-blue-100 to-indigo-100"
//     },
//     {
//       id: 4,
//       type: "birthday",
//       title: "Happy Birthday My Love",
//       date: "March 20, 2026",
//       message: "Today we celebrate the most beautiful soul I've ever known. You deserve all the happiness in the world and more. May your birthday be as wonderful as you are, filled with love, laughter, and all your heart's desires.",
//       signature: "Your Love",
//       color: "from-yellow-400 to-orange-400",
//       icon: Cake,
//       bgImage: "bg-gradient-to-br from-yellow-100 to-orange-100"
//     },
//     {
//       id: 5,
//       type: "future",
//       title: "Our Future Dreams",
//       date: "Forever",
//       message: "I dream of waking up next to you every morning, of growing old together, of watching sunsets holding your hand. I dream of our home filled with laughter, of adventures around the world, of quiet moments that mean everything. With you, every dream feels possible.",
//       signature: "Dreaming with You",
//       color: "from-green-400 to-teal-400",
//       icon: Rocket,
//       bgImage: "bg-gradient-to-br from-green-100 to-teal-100"
//     },
//     {
//       id: 6,
//       type: "gratitude",
//       title: "Thank You",
//       date: "Always",
//       message: "Thank you for being you. Thank you for your patience, your kindness, your unwavering love. Thank you for choosing me every single day. Thank you for making my world beautiful just by being in it. I am grateful for you beyond words.",
//       signature: "Gratefully Yours",
//       color: "from-indigo-400 to-purple-400",
//       icon: Star,
//       bgImage: "bg-gradient-to-br from-indigo-100 to-purple-100"
//     }
//   ];

//   // Handwritten letters
//   const handwrittenLetters = [
//     {
//       id: 1,
//       title: "My Dearest Love",
//       content: "My Dearest Love,\n\nI'm writing this with a heart full of emotions, trying to put into words what you mean to me. Every time I see you, my heart skips a beat. Every time you smile, my world lights up. You are the most beautiful thing that has ever happened to me, and I thank the stars every day for bringing you into my life.\n\nWith you, I've learned what true love means. It's not just about the grand gestures, but the little things - the way you hold my hand, the way you look at me, the way you make even ordinary moments feel extraordinary.\n\nI love you more than words can say.\n\nForever yours,\n❤️",
//       date: "March 20, 2026"
//     },
//     {
//       id: 2,
//       title: "To My Soulmate",
//       content: "To My Soulmate,\n\nThey say soulmates are two halves of the same soul, and I truly believe that's what we are. You complete me in ways I never knew I needed. You understand my silences, you laugh at my jokes, you hold me when I'm vulnerable.\n\nIn you, I've found not just a partner, but a best friend, a confidant, my home. Thank you for being exactly who you are - wonderful, beautiful, amazing you.\n\nWith all my love,\n❤️",
//       date: "March 20, 2026"
//     },
//     {
//       id: 3,
//       title: "Forever Promise",
//       content: "My Love,\n\nI want you to know that my love for you has no conditions, no limits, no end. It grows stronger with each passing day, deeper with every moment we share. You are my today, my tomorrow, and all my forever.\n\nNo matter what life brings our way, I'll be right here beside you. Through every joy, every challenge, every beautiful moment - my hand will always be in yours.\n\nI love you. Always have, always will.\n\nYours eternally,\n❤️",
//       date: "March 20, 2026"
//     }
//   ];

//   // Poems
//   const lovePoems = [
//     {
//       title: "You Are My Everything",
//       poem: "In a world full of temporary things,\nYou are my forever.\nIn a life full of ordinary moments,\nYou are my magic.\n\nYour smile lights up my darkness,\nYour love warms my soul,\nYour presence makes me whole.\n\nI never knew what love was,\nUntil I found you.\nNow I know,\nThat true love is real,\nAnd it lives in you."
//     },
//     {
//       title: "The Way I Love You",
//       poem: "I love you in ways\nYou've never been loved before.\nI love you with every heartbeat,\nWith every breath I take.\n\nYour name is etched in my soul,\nYour memory is my favorite thought,\nYour love is my greatest treasure.\n\nThere are no words to describe\nWhat you mean to me,\nBut if I had to choose one,\nIt would be... Everything."
//     },
//     {
//       title: "Forever Us",
//       poem: "Two hearts beating as one,\nTwo souls dancing in the sun,\nTwo lovers writing their story,\nTwo people in all their glory.\n\nThrough seasons that change,\nThrough winds that blow,\nOur love remains,\nAnd continues to grow.\n\nFor you and I,\nWere meant to be,\nFor all eternity,\nJust you and me."
//     }
//   ];

//   // Videos
//   const videos = [
//     { id: 1, name: "Our First Memory Together", src: "/video1.mp4", thumbnail: "/photo1.jpeg", date: "July 2024", description: "The day our journey began" },
//     { id: 2, name: "Beautiful Moments With You", src: "/video2.mp4", thumbnail: "/photo2.jpeg", date: "July 2024", description: "Every moment is precious" },
//     { id: 3, name: "Together Forever", src: "/video3.mp4", thumbnail: "/photo3.jpeg", date: "August 2024", description: "Building our love story" },
//     { id: 4, name: "Our Love Story", src: "/video5.mp4", thumbnail: "/photo4.jpeg", date: "August 2024", description: "Creating memories together" }
//   ];

//   // Photos
//   const photos = [
//     { id: 1, src: "/photo1.jpeg", caption: "Our first smile together", date: "July 2024", location: "Our Favorite Cafe" },
//     { id: 2, src: "/photo2.jpeg", caption: "Beautiful memories we created", date: "July 2024", location: "Hotel West Side" },
//     { id: 4, src: "/photo4.jpeg", caption: "Perfect moments captured forever", date: "Sept 2024", location: "Mountain View" },
//     { id: 5, src: "/photo5.jpeg", caption: "Together forever - My favorite person", date: "Feb 2026", location: "Cafe" }
//   ];

//   // Timeline events
//   const timelineEvents = [
//     { date: "July 09, 2024", title: "The Day We Met", description: "When our eyes met for the first time, I knew you were special.", icon: Heart, color: "from-pink-400 to-red-400" },
//     { date: "August 17, 2024", title: "Our First Date", description: "A perfect day that changed everything.", icon: Coffee, color: "from-purple-400 to-pink-400" },
//     { date: "August 17, 2024", title: "First Time You Said I Love You", description: "Three words that meant the world to me.", icon: MessageCircle, color: "from-blue-400 to-indigo-400" },
//     { date: "September 10, 2024", title: "Our First Trip Together", description: "Creating memories that will last forever.", icon: MapPin, color: "from-green-400 to-teal-400" },
//     { date: "March 20, 2026", title: "Today - Your Birthday", description: "Celebrating the most wonderful person in my life.", icon: Cake, color: "from-pink-400 to-purple-400" }
//   ];

//   // Reasons why I love you
//   const reasons = [
//     { text: "Your smile lights up my entire world", icon: Sun, color: "text-yellow-500" },
//     { text: "The way you laugh makes my heart skip a beat", icon: Music4, color: "text-pink-500" },
//     { text: "You understand me without me saying a word", icon: Heart, color: "text-red-500" },
//     { text: "Your kindness inspires me every day", icon: Feather, color: "text-blue-500" },
//     { text: "You make even ordinary moments feel magical", icon: Sparkle, color: "text-purple-500" },
//     { text: "Your strength amazes me constantly", icon: Flame, color: "text-orange-500" },
//     { text: "You believe in me when I doubt myself", icon: Crown, color: "text-yellow-500" },
//     { text: "Your love makes me a better person", icon: Gem, color: "text-pink-500" },
//     { text: "The way you look at me with those eyes", icon: Stars, color: "text-indigo-500" },
//     { text: "How you always know how to make me smile", icon: Smile, color: "text-green-500" }
//   ];

//   // Future dreams
//   const futureDreams = [
//     { icon: Globe, text: "Travel the world together", color: "from-blue-400 to-green-400" },
//     { icon: Home, text: "Build our dream home", color: "from-yellow-400 to-orange-400" },
//     { icon: Heart, text: "Grow old holding hands", color: "from-red-400 to-pink-400" },
//     { icon: Plane, text: "Watch sunset in Paris", color: "from-purple-400 to-indigo-400" },
//     { icon: Car, text: "Road trips across countries", color: "from-green-400 to-teal-400" },
//     { icon: Camera, text: "Fill albums with memories", color: "from-pink-400 to-purple-400" },
//     { icon: Utensils, text: "Cook together every Sunday", color: "from-orange-400 to-red-400" },
//     { icon: Wine, text: "Celebrate every anniversary", color: "from-purple-400 to-pink-400" }
//   ];

//   // Compliments
//   const compliments = [
//     "You have the most beautiful smile I've ever seen",
//     "Your eyes sparkle brighter than the stars",
//     "You make my heart skip a beat every time I see you",
//     "Your love is the greatest gift I've ever received",
//     "You're more beautiful than a sunset",
//     "Your laughter is my favorite sound",
//     "You're the reason I believe in love",
//     "You make every day feel special",
//     "Being with you feels like coming home",
//     "You're my favorite hello and hardest goodbye"
//   ];

//   // Star quotes
//   const starQuotes = [
//     "You are my North Star, guiding me home",
//     "I love you to the moon and back, and then to the stars",
//     "We are like stars - meant to shine together",
//     "You're the star that brightens my darkest night",
//     "Our love is written in the stars",
//     "Even the stars are jealous of how bright you shine"
//   ];

//   useEffect(() => {
//     // Initial confetti
//     confetti({
//       particleCount: 200,
//       spread: 150,
//       origin: { y: 0.6 },
//       colors: ['#ff69b4', '#ff1493', '#ff0000', '#ffa500', '#ffff00', '#00ff00', '#0000ff']
//     });

//     // Quote rotation
//     const interval = setInterval(() => {
//       setQuote(prev => (prev + 1) % quotes.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Floating hearts
//     const heartInterval = setInterval(() => {
//       const newHeart = {
//         id: Date.now(),
//         x: Math.random() * 100,
//         size: Math.random() * 40 + 20,
//         speed: Math.random() * 4 + 2,
//         delay: Math.random() * 2,
//         rotation: Math.random() * 360
//       };
//       setFloatingHearts(prev => [...prev, newHeart]);
      
//       setTimeout(() => {
//         setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
//       }, 12000);
//     }, 200);
    
//     return () => clearInterval(heartInterval);
//   }, []);

//   useEffect(() => {
//     // Floating roses
//     const roseInterval = setInterval(() => {
//       const newRose = {
//         id: Date.now(),
//         x: Math.random() * 100,
//         size: Math.random() * 30 + 15,
//         speed: Math.random() * 3 + 1,
//         delay: Math.random() * 3
//       };
//       setFloatingRoses(prev => [...prev, newRose]);
      
//       setTimeout(() => {
//         setFloatingRoses(prev => prev.filter(r => r.id !== newRose.id));
//       }, 15000);
//     }, 500);
    
//     return () => clearInterval(roseInterval);
//   }, []);

//   useEffect(() => {
//     // Love meter
//     const meterInterval = setInterval(() => {
//       setLoveMeterValue(prev => Math.min(prev + 0.1, 100));
//     }, 1000);
//     return () => clearInterval(meterInterval);
//   }, []);

//   const speakBirthdayWish = () => {
//     if (!soundEnabled) return;
    
//     if (speechRef.current) {
//       window.speechSynthesis.cancel();
//     }
    
//     const speech = new SpeechSynthesisUtterance();
//     speech.text = "Happy Birthday Babu! " + birthdayWish.split('\n').slice(1).join(' ');
//     speech.rate = 0.9;
//     speech.pitch = 1.1;
//     speech.volume = 1;
//     speech.lang = 'en-US';
    
//     window.speechSynthesis.speak(speech);
//     speechRef.current = speech;
//     setIsSpeaking(true);
    
//     speech.onend = () => {
//       setIsSpeaking(false);
//     };
//   };

//   const stopSpeaking = () => {
//     window.speechSynthesis.cancel();
//     setIsSpeaking(false);
//   };

//   const openBirthdayWish = () => {
//     setShowBirthdayWish(true);
//     speakBirthdayWish();
//     confetti({
//       particleCount: 300,
//       spread: 200,
//       origin: { y: 0.6 },
//       colors: ['#ff69b4', '#ff1493', '#ff0000', '#ffa500', '#ffff00', '#00ff00', '#0000ff']
//     });
//   };

//   const closeModal = () => {
//     setModal(null);
//     setSelectedVideo(null);
//     setSelectedPhoto(null);
//     setShowPhotoGallery(false);
//     setShowLoveQuiz(false);
//     setShowFutureDreams(false);
//     setShowSecretMessage(false);
//     setShowTimeCapsule(false);
//     setShowBirthdayWish(false);
//     setShowGreetingCard(null);
//     setSelectedLetter(null);
//     setShowPromiseRing(false);
//     setShowLovePoem(false);
//     setShowVirtualHug(false);
//     setShowLoveMeterModal(false);
//     setShowStarGazing(false);
//     setShowHandwrittenLetter(null);
//     stopSpeaking();
//   };

//   const calculateLoveScore = () => {
//     const score = Math.floor(Math.random() * 31) + 70;
//     setLoveScore(score);
//     confetti({
//       particleCount: 150,
//       spread: 100,
//       origin: { y: 0.6 }
//     });
//   };

//   const checkSecretCode = () => {
//     if (secretCode.toLowerCase() === "i love you" || secretCode.toLowerCase() === "love" || secretCode.toLowerCase() === "iloveyou") {
//       setShowSecretMessage(true);
//       confetti({
//         particleCount: 200,
//         spread: 120,
//         origin: { y: 0.6 }
//       });
//     } else {
//       toast.error("Try typing 'I love you'", {
//         icon: '💝',
//         duration: 2000
//       });
//     }
//   };

//   const openTimeCapsule = () => {
//     setTimeCapsuleOpened(true);
//     confetti({
//       particleCount: 150,
//       spread: 100,
//       origin: { y: 0.6 }
//     });
//   };

//   const getRandomCompliment = () => {
//     const randomIndex = Math.floor(Math.random() * compliments.length);
//     toast.success(compliments[randomIndex], {
//       icon: '💝',
//       duration: 3000,
//       style: {
//         borderRadius: '20px',
//         background: '#ff69b4',
//         color: '#fff',
//       }
//     });
//   };

//   const sendVirtualHug = () => {
//     setHugCount(prev => prev + 1);
//     toast.success(`You received hug #${hugCount + 1}! 🤗`, {
//       icon: '🫂',
//       duration: 2000
//     });
//     confetti({
//       particleCount: 50,
//       spread: 50,
//       origin: { y: 0.6 }
//     });
//   };

//   // Play icon component
//   const PlayIcon = (props) => (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="5 3 19 12 5 21 5 3" />
//     </svg>
//   );

//   return (
//     <div className={`min-h-screen transition-all duration-1000 overflow-x-hidden ${
//       nightMode ? "bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900" : "bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
//     }`} ref={containerRef}>
      
//       {/* Floating Hearts */}
//       <AnimatePresence>
//         {floatingHearts.map(heart => (
//           <motion.div
//             key={heart.id}
//             initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0, scale: 0 }}
//             animate={{ 
//               y: "-20vh", 
//               opacity: [0, 0.9, 0.7, 0.4, 0],
//               scale: [0, 1.2, 1, 0.8, 0],
//               rotate: [heart.rotation, heart.rotation + 360]
//             }}
//             exit={{ opacity: 0 }}
//             transition={{ 
//               duration: heart.speed * 2, 
//               ease: "easeInOut",
//               delay: heart.delay
//             }}
//             className="fixed z-10 pointer-events-none"
//             style={{ fontSize: heart.size }}
//           >
//             {heart.size > 35 ? "❤️" : "💖"}
//           </motion.div>
//         ))}
//       </AnimatePresence>

//       {/* Floating Roses */}
//       <AnimatePresence>
//         {floatingRoses.map(rose => (
//           <motion.div
//             key={rose.id}
//             initial={{ y: "110vh", x: `${rose.x}vw`, opacity: 0, scale: 0 }}
//             animate={{ 
//               y: "-20vh", 
//               opacity: [0, 0.8, 0.6, 0.3, 0],
//               scale: [0, 1.1, 1, 0.7, 0],
//               rotate: [0, 10, -10, 5, 0]
//             }}
//             exit={{ opacity: 0 }}
//             transition={{ 
//               duration: rose.speed * 2.5, 
//               ease: "easeInOut",
//               delay: rose.delay
//             }}
//             className="fixed z-10 pointer-events-none"
//             style={{ fontSize: rose.size }}
//           >
//             🌹
//           </motion.div>
//         ))}
//       </AnimatePresence>

//       <Toaster position="top-center" />

//       {/* Navigation Dots */}
//       <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 space-y-3">
//         {["home", "videos", "photos", "timeline", "cards", "surprises"].map((section) => (
//           <motion.div
//             key={section}
//             whileHover={{ scale: 1.3 }}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               activeSection === section ? "bg-pink-500 scale-125" : "bg-gray-400"
//             }`}
//             onClick={() => {
//               setActiveSection(section);
//               document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
//             }}
//           />
//         ))}
//       </div>

//       {/* Love Meter */}
//       <motion.div 
//         className="fixed top-4 right-4 z-30 bg-white/30 backdrop-blur-lg rounded-full p-4 shadow-xl"
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="relative">
//           <HeartPulse className="w-8 h-8 text-pink-500" />
//           <motion.span 
//             className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
//             animate={{ scale: [1, 1.2, 1] }}
//             transition={{ duration: 1, repeat: Infinity }}
//           >
//             {Math.floor(loveMeterValue)}%
//           </motion.span>
//         </div>
//       </motion.div>

//       {/* Quick Action Buttons */}
//       <div className="fixed top-4 left-4 z-30 flex gap-2">
//         <motion.button
//           whileHover={{ scale: 1.1, rotate: 10 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setNightMode(!nightMode)}
//           className="bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-xl"
//         >
//           {nightMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-purple-500" />}
//         </motion.button>
        
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setSoundEnabled(!soundEnabled)}
//           className="bg-white/30 backdrop-blur-lg p-3 rounded-full shadow-xl"
//         >
//           {soundEnabled ? <Volume2 className="w-5 h-5 text-pink-500" /> : <VolumeX className="w-5 h-5 text-gray-500" />}
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={getRandomCompliment}
//           className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full shadow-xl"
//         >
//           <Heart className="w-5 h-5 text-white" />
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={sendVirtualHug}
//           className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-full shadow-xl"
//         >
//           <HeartHandshake className="w-5 h-5 text-white" />
//         </motion.button>
//       </div>

//       <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
//         {/* Hero Section */}
//         <motion.div
//           style={{ scale, rotate, y }}
//           className="text-center mb-16 sm:mb-20"
//           id="home"
//         >
//           <motion.h1
//             className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
//             animate={{ 
//               scale: [1, 1.05, 1],
//               textShadow: [
//                 "0 0 20px rgba(255,105,180,0.3)",
//                 "0 0 40px rgba(255,105,180,0.6)",
//                 "0 0 20px rgba(255,105,180,0.3)"
//               ]
//             }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           >
//             Happy Birthday
//             <motion.span
//               className="block text-3xl sm:text-5xl mt-4"
//               animate={{ opacity: [0.8, 1, 0.8], y: [0, -5, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               My Forever Love ❤️
//             </motion.span>
//           </motion.h1>
          
//           <motion.div
//             animate={{ 
//               rotate: 360,
//               scale: [1, 1.2, 1]
//             }}
//             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//             className="inline-block"
//           >
//             <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 mx-auto" />
//           </motion.div>
//         </motion.div>

//         {/* Quote Carousel */}
//         <div className="text-center mb-20 sm:mb-24 px-4">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={quote}
//               initial={{ opacity: 0, y: 40, scale: 0.9 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -40, scale: 0.9 }}
//               transition={{ duration: 1, ease: "easeInOut" }}
//               className="relative"
//             >
//               <motion.div 
//                 className="absolute -left-4 -top-4 text-4xl text-pink-300"
//                 animate={{ rotate: [0, 10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 "
//               </motion.div>
//               <p className="text-2xl sm:text-3xl md:text-4xl italic font-light text-gray-700 dark:text-gray-200 max-w-4xl mx-auto px-8">
//                 {quotes[quote]}
//               </p>
//               <motion.div 
//                 className="absolute -right-4 -bottom-4 text-4xl text-pink-300"
//                 animate={{ rotate: [0, -10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 "
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Video Gallery */}
//         <div className="mb-20" id="videos">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Our Beautiful Videos
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {videos.map((video, index) => (
//               <motion.div
//                 key={video.id}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.8 }}
//                 whileHover={{ 
//                   scale: 1.05, 
//                   boxShadow: "0 40px 60px rgba(255,105,180,0.4)",
//                   rotateY: 5
//                 }}
//                 className="relative rounded-2xl overflow-hidden cursor-pointer group perspective"
//                 onClick={() => setSelectedVideo(video)}
//               >
//                 <div className="relative h-72">
//                   <img 
//                     src={video.thumbnail}
//                     alt={video.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     onError={(e) => {
//                       e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
//                     <div>
//                       <div className="flex items-center gap-2 mb-2">
//                         <VideoIcon className="w-6 h-6 text-pink-400" />
//                         <span className="text-pink-300 text-sm">{video.date}</span>
//                       </div>
//                       <h3 className="text-white text-2xl font-bold mb-2">{video.name}</h3>
//                       <p className="text-gray-200 text-sm">{video.description}</p>
//                     </div>
//                   </div>
//                   <motion.div 
//                     className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                   />
//                   <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg rounded-full p-3">
//                     <PlayIcon className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Photo Gallery */}
//         <div className="mb-20" id="photos">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Our Precious Memories
//           </motion.h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {photos.map((photo, index) => (
//               <motion.div
//                 key={photo.id}
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 whileHover={{ scale: 1.1, rotate: 2, zIndex: 10 }}
//                 className="relative rounded-xl overflow-hidden cursor-pointer group"
//                 onClick={() => setSelectedPhoto(photo)}
//               >
//                 <img 
//                   src={photo.src}
//                   alt={photo.caption}
//                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                   onError={(e) => {
//                     e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
//                   }}
//                 />
//                 <motion.div 
//                   className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
//                   initial={{ y: 20 }}
//                   whileHover={{ y: 0 }}
//                 >
//                   <p className="text-white text-sm">{photo.date}</p>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
          
//           <motion.div
//             className="text-center mt-8"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             <button
//               onClick={() => setShowPhotoGallery(true)}
//               className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500"
//             >
//               <Camera className="inline mr-2 w-5 h-5" />
//               View All Photos
//               <ImageIcon className="inline ml-2 w-5 h-5" />
//             </button>
//           </motion.div>
//         </div>

//         {/* Timeline */}
//         <div className="mb-20" id="timeline">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Our Love Story
//           </motion.h2>
//           <div className="space-y-6">
//             {timelineEvents.map((event, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.15, duration: 0.8 }}
//                 whileHover={{ scale: 1.02, x: 10 }}
//                 className="flex items-start gap-6 p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl"
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   transition={{ duration: 0.5 }}
//                   className={`bg-gradient-to-r ${event.color} p-4 rounded-full flex-shrink-0`}
//                 >
//                   <event.icon className="w-8 h-8 text-white" />
//                 </motion.div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-2">
//                     <h3 className="text-2xl font-bold">{event.title}</h3>
//                     <span className="text-pink-500 text-sm bg-pink-100 dark:bg-pink-900 px-3 py-1 rounded-full">
//                       {event.date}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
//                     {event.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Greeting Cards */}
//         <div className="mb-20" id="cards">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Love Letters For You 💌
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {greetingCards.map((card, index) => {
//               const IconComponent = card.icon;
//               return (
//                 <motion.div
//                   key={card.id}
//                   initial={{ opacity: 0, y: 50, rotateY: -30 }}
//                   whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
//                   transition={{ delay: index * 0.15, duration: 0.8 }}
//                   whileHover={{ 
//                     scale: 1.05, 
//                     rotateY: 5,
//                     boxShadow: "0 30px 50px rgba(255,105,180,0.4)"
//                   }}
//                   className={`${card.bgImage} dark:bg-gray-800 rounded-2xl p-8 shadow-xl cursor-pointer transform transition-all duration-500 relative overflow-hidden group`}
//                   onClick={() => setShowGreetingCard(card)}
//                 >
//                   <motion.div 
//                     className="absolute -right-10 -top-10 w-32 h-32 bg-white/20 rounded-full"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 3, repeat: Infinity }}
//                   />
                  
//                   <div className="relative z-10">
//                     <motion.div
//                       animate={{ rotate: [0, 10, 0] }}
//                       transition={{ duration: 3, delay: index * 0.2, repeat: Infinity }}
//                       className="mb-4"
//                     >
//                       <IconComponent className="w-16 h-16 text-pink-500 mx-auto" />
//                     </motion.div>
                    
//                     <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
//                       {card.title}
//                     </h3>
                    
//                     <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-4">
//                       {card.date}
//                     </p>
                    
//                     <p className="text-gray-700 dark:text-gray-300 text-center line-clamp-3 mb-4">
//                       {card.message}
//                     </p>
                    
//                     <motion.div 
//                       className="text-pink-500 font-semibold text-center"
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     >
//                       Open Card →
//                     </motion.div>
                    
//                     <p className="text-right text-gray-500 dark:text-gray-400 mt-4 italic">
//                       {card.signature}
//                     </p>
//                   </div>
                  
//                   <motion.div 
//                     className="absolute inset-0 bg-gradient-to-r from-pink-200/50 to-purple-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     initial={{ y: "100%" }}
//                     whileHover={{ y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Handwritten Letters */}
//         <div className="mb-20">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Handwritten With Love ✍️
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {handwrittenLetters.map((letter, index) => (
//               <motion.div
//                 key={letter.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.8 }}
//                 whileHover={{ scale: 1.05, rotate: -1 }}
//                 className="bg-amber-50 dark:bg-amber-900 p-8 rounded-2xl shadow-xl cursor-pointer border-2 border-amber-200 dark:border-amber-700"
//                 style={{ 
//                   backgroundImage: 'linear-gradient(45deg, #fef3c7 0%, #fde68a 100%)',
//                   boxShadow: '0 10px 30px rgba(245, 158, 11, 0.2)'
//                 }}
//                 onClick={() => setShowHandwrittenLetter(letter)}
//               >
//                 <Pen className="w-12 h-12 text-amber-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold text-center mb-2 text-amber-800 dark:text-amber-200">
//                   {letter.title}
//                 </h3>
//                 <p className="text-amber-700 dark:text-amber-300 text-center text-sm mb-2">
//                   {letter.date}
//                 </p>
//                 <p className="text-amber-800 dark:text-amber-200 text-center line-clamp-3">
//                   {letter.content.substring(0, 100)}...
//                 </p>
//                 <motion.div 
//                   className="mt-4 text-amber-600 text-center"
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   Read Letter →
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Poems Section */}
//         <div className="mb-20">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Love Poems For You 📜
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {lovePoems.map((poem, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.8 }}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl cursor-pointer border border-pink-200"
//                 onClick={() => {
//                   setShowLovePoem(true);
//                   setSelectedLetter(poem);
//                 }}
//               >
//                 <Scroll className="w-12 h-12 text-pink-500 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold text-center mb-4 text-pink-600">{poem.title}</h3>
//                 <p className="text-gray-700 dark:text-gray-300 text-center line-clamp-4">
//                   {poem.poem}
//                 </p>
//                 <motion.div 
//                   className="mt-4 text-pink-500 text-center"
//                   animate={{ y: [0, 3, 0] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   Read Full Poem 📖
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Reasons Why I Love You */}
//         <div className="mb-20">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             10 Reasons Why I Love You
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {reasons.map((reason, index) => {
//               const IconComponent = reason.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   whileHover={{ scale: 1.05, x: 10 }}
//                   className="flex items-center gap-4 p-5 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-xl group"
//                 >
//                   <motion.div
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
//                   >
//                     <IconComponent className={`w-8 h-8 ${reason.color} group-hover:rotate-12 transition-transform`} />
//                   </motion.div>
//                   <p className="text-gray-700 dark:text-gray-200 text-lg flex-1">{reason.text}</p>
//                   <Heart className="w-5 h-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="#ff69b4" />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Special Surprises Section */}
//         <div className="mb-20" id="surprises">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Special Surprises
//           </motion.h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowLoveQuiz(true)}
//               className="bg-gradient-to-br from-pink-400 to-purple-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Heart className="w-8 h-8 mx-auto mb-2 animate-pulse" />
//               <span>Love Quiz</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowFutureDreams(true)}
//               className="bg-gradient-to-br from-blue-400 to-indigo-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Rocket className="w-8 h-8 mx-auto mb-2 animate-bounce" />
//               <span>Future Dreams</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowSecretMessage(true)}
//               className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Lock className="w-8 h-8 mx-auto mb-2" />
//               <span>Secret Message</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowTimeCapsule(true)}
//               className="bg-gradient-to-br from-green-400 to-teal-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Gift className="w-8 h-8 mx-auto mb-2 animate-pulse" />
//               <span>Time Capsule</span>
//             </motion.button>
//           </div>
//         </div>

//         {/* Extra Romantic Features */}
//         <div className="mb-20">
//           <motion.h2 
//             className="text-4xl sm:text-5xl text-center mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             More Romance 💕
//           </motion.h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowPromiseRing(true)}
//               className="bg-gradient-to-br from-purple-400 to-pink-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Crown className="w-8 h-8 mx-auto mb-2 animate-pulse" />
//               <span>Promise Ring</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowStarGazing(true)}
//               className="bg-gradient-to-br from-indigo-400 to-purple-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <Stars className="w-8 h-8 mx-auto mb-2 animate-pulse" />
//               <span>Star Gazing</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setShowLoveMeterModal(true)}
//               className="bg-gradient-to-br from-red-400 to-pink-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <HeartPulse className="w-8 h-8 mx-auto mb-2 animate-pulse" />
//               <span>Love Meter</span>
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={sendVirtualHug}
//               className="bg-gradient-to-br from-orange-400 to-red-400 text-white p-6 rounded-xl shadow-lg"
//             >
//               <HeartHandshake className="w-8 h-8 mx-auto mb-2 animate-pulse" />
//               <span>Hugs: {hugCount}</span>
//             </motion.button>
//           </div>
//         </div>

//         {/* Main Surprise Button */}
//         <motion.div
//           className="text-center pb-20"
//           initial={{ scale: 0 }}
//           whileInView={{ scale: 1 }}
//           transition={{ type: "spring", duration: 1.5 }}
//         >
//           <motion.button
//             whileHover={{ scale: 1.2, rotate: 5 }}
//             whileTap={{ scale: 0.9 }}
//             animate={{ 
//               boxShadow: [
//                 "0 0 20px rgba(255,105,180,0.5)",
//                 "0 0 50px rgba(255,105,180,0.8)",
//                 "0 0 20px rgba(255,105,180,0.5)"
//               ]
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//             onClick={openBirthdayWish}
//             className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-20 py-10 rounded-full text-4xl font-bold shadow-2xl relative overflow-hidden group"
//           >
//             <motion.span
//               animate={{ scale: [1, 1.5, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="absolute inset-0 bg-white/20"
//             />
//             <PartyPopper className="inline mr-4 w-12 h-12 animate-bounce" />
//             Click for Final Surprise!
//             <Gift className="inline ml-4 w-12 h-12 animate-pulse" />
//           </motion.button>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="mt-6 text-2xl text-pink-500 font-semibold animate-pulse"
//           >
//             The biggest surprise awaits... 🎁
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Modals Section */}
//       <AnimatePresence>
//         {/* Greeting Card Modal */}
//         {showGreetingCard && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 z-50 p-4"
//             initial={{ opacity: 0, scale: 0.3 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.3 }}
//             transition={{ type: "spring", damping: 20 }}
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ y: 100, rotateY: -180 }}
//               animate={{ y: 0, rotateY: 0 }}
//               exit={{ y: -100, rotateY: 180 }}
//               transition={{ type: "spring", damping: 15 }}
//               className={`relative w-full max-w-2xl ${showGreetingCard.bgImage} dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border-4 border-white/30`}
//               onClick={(e) => e.stopPropagation()}
//               style={{
//                 boxShadow: '0 30px 60px rgba(255,105,180,0.4)'
//               }}
//             >
//               <motion.div 
//                 className="absolute -top-10 -left-10 w-32 h-32 bg-pink-300/30 rounded-full"
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               />
//               <motion.div 
//                 className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-300/30 rounded-full"
//                 animate={{ scale: [1.2, 1, 1.2] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               />

//               <div className="relative z-10">
//                 <motion.div
//                   animate={{ rotate: [0, 10, 0] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                   className="mb-6"
//                 >
//                   {showGreetingCard.icon && (
//                     <showGreetingCard.icon className="w-20 h-20 text-pink-500 mx-auto" />
//                   )}
//                 </motion.div>

//                 <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
//                   {showGreetingCard.title}
//                 </h1>

//                 <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
//                   {showGreetingCard.date}
//                 </p>

//                 <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 mb-6">
//                   <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
//                     {showGreetingCard.message}
//                   </p>
//                 </div>

//                 <p className="text-right text-2xl text-pink-600 dark:text-pink-400 italic">
//                   {showGreetingCard.signature}
//                 </p>

//                 <div className="flex justify-center gap-2 mt-8">
//                   {[...Array(5)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }}
//                     >
//                       ❤️
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
//               >
//                 Close ✕
//               </button>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Handwritten Letter Modal */}
//         {showHandwrittenLetter && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ scale: 0.5, rotate: -5 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0.5, rotate: 5 }}
//               className="relative w-full max-w-2xl bg-amber-50 p-12 rounded-2xl shadow-2xl"
//               style={{
//                 backgroundImage: 'radial-gradient(circle, #fef3c7 0%, #fde68a 100%)',
//                 border: '2px solid #b45309'
//               }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Pen className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              
//               <h2 className="text-3xl font-bold text-center mb-2 text-amber-800">
//                 {showHandwrittenLetter.title}
//               </h2>
              
//               <p className="text-center text-amber-600 mb-8">
//                 {showHandwrittenLetter.date}
//               </p>
              
//               <div className="bg-amber-100/50 p-8 rounded-xl mb-6">
//                 <p className="text-amber-900 text-xl whitespace-pre-line leading-relaxed">
//                   {showHandwrittenLetter.content}
//                 </p>
//               </div>
              
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full"
//               >
//                 Close
//               </button>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Love Poem Modal */}
//         {showLovePoem && selectedLetter && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900 z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           >
//             <motion.div
//               initial={{ y: -100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 100, opacity: 0 }}
//               className="relative w-full max-w-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 p-12 rounded-3xl shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Scroll className="w-20 h-20 text-pink-500 mx-auto mb-6" />
              
//               <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">
//                 {selectedLetter.title}
//               </h2>
              
//               <div className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-xl mb-8">
//                 <p className="text-gray-700 dark:text-gray-200 text-xl whitespace-pre-line text-center leading-relaxed">
//                   {selectedLetter.poem}
//                 </p>
//               </div>
              
//               <div className="flex justify-center gap-4">
//                 <button
//                   onClick={closeModal}
//                   className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full"
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Promise Ring Modal */}
//         {showPromiseRing && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-rose-900 to-pink-900 z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowPromiseRing(false)}
//           >
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0, rotate: 180 }}
//               className="relative w-full max-w-lg bg-gradient-to-br from-pink-200 to-rose-200 p-12 rounded-3xl shadow-2xl text-center"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="mb-6"
//               >
//                 <Crown className="w-24 h-24 text-pink-600 mx-auto" />
//               </motion.div>
              
//               <h2 className="text-3xl font-bold mb-4 text-pink-800">My Promise Ring</h2>
              
//               <p className="text-lg mb-6 text-pink-700">
//                 With this ring, I promise to love you endlessly, 
//                 to cherish you always, and to be yours forever.
//               </p>
              
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="text-5xl mb-6"
//               >
//                 💍
//               </motion.div>
              
//               <p className="text-pink-600 font-semibold">
//                 Will you wear this promise in your heart?
//               </p>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Star Gazing Modal */}
//         {showStarGazing && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-indigo-950 to-purple-950 z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowStarGazing(false)}
//           >
//             <motion.div
//               initial={{ y: -100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 100, opacity: 0 }}
//               className="relative w-full max-w-2xl bg-black/60 backdrop-blur-xl p-12 rounded-3xl text-center"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {[...Array(20)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute text-yellow-300"
//                   initial={{ 
//                     x: Math.random() * 500 - 250, 
//                     y: Math.random() * 500 - 250,
//                     opacity: Math.random() 
//                   }}
//                   animate={{ 
//                     opacity: [0, 1, 0],
//                     scale: [0, 1, 0]
//                   }}
//                   transition={{ 
//                     duration: 3 + Math.random() * 2,
//                     repeat: Infinity,
//                     delay: Math.random() * 2
//                   }}
//                 >
//                   ⭐
//                 </motion.div>
//               ))}
              
//               <Stars className="w-20 h-20 text-yellow-300 mx-auto mb-6 relative z-10" />
              
//               <h2 className="text-3xl font-bold mb-6 text-white relative z-10">Stargazing With You</h2>
              
//               <p className="text-xl text-yellow-200 mb-4 relative z-10">
//                 {starQuotes[Math.floor(Math.random() * starQuotes.length)]}
//               </p>
              
//               <p className="text-lg text-white/80 relative z-10">
//                 Every star in the sky reminds me of you - bright, beautiful, and forever shining.
//               </p>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Love Meter Modal */}
//         {showLoveMeterModal && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowLoveMeterModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0 }}
//               className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 p-12 rounded-3xl max-w-md text-center"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <HeartPulse className="w-20 h-20 text-pink-500 mx-auto mb-6" />
              
//               <h2 className="text-3xl font-bold mb-6">Love Meter</h2>
              
//               <div className="relative h-8 bg-gray-300 rounded-full mb-4 overflow-hidden">
//                 <motion.div 
//                   className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-purple-500"
//                   initial={{ width: "0%" }}
//                   animate={{ width: `${loveMeterValue}%` }}
//                   transition={{ duration: 1 }}
//                 />
//               </div>
              
//               <p className="text-5xl font-bold text-pink-500 mb-4">{Math.floor(loveMeterValue)}%</p>
              
//               <p className="text-lg text-gray-600 dark:text-gray-300">
//                 Our love keeps growing stronger every day!
//               </p>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Birthday Wish Modal */}
//         {showBirthdayWish && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 z-50 p-4 sm:p-8"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{ type: "spring", damping: 20 }}
//           >
//             <motion.div
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-pink-300/30"
//             >
//               <div className="absolute top-4 right-4 flex gap-2">
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={isSpeaking ? stopSpeaking : speakBirthdayWish}
//                   className="bg-white/20 backdrop-blur-lg p-3 rounded-full"
//                 >
//                   {isSpeaking ? <MicOff className="w-6 h-6 text-pink-300" /> : <Mic className="w-6 h-6 text-pink-300" />}
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={closeModal}
//                   className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full text-white"
//                 >
//                   Close
//                 </motion.button>
//               </div>

//               <motion.div
//                 animate={{ 
//                   y: [0, -20, 0],
//                   rotate: [0, 10, -10, 0]
//                 }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute top-20 left-20 text-4xl opacity-30"
//               >
//                 ❤️
//               </motion.div>
//               <motion.div
//                 animate={{ 
//                   y: [0, -30, 0],
//                   rotate: [0, -10, 10, 0]
//                 }}
//                 transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//                 className="absolute bottom-20 right-20 text-4xl opacity-30"
//               >
//                 💖
//               </motion.div>

//               <motion.div
//                 initial={{ scale: 0.9 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//                 className="text-center"
//               >
//                 <motion.h1 
//                   className="text-5xl sm:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text"
//                   animate={{ scale: [1, 1.1, 1] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   🎉 Happy Birthday! 🎉
//                 </motion.h1>

//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="mb-8"
//                 >
//                   <PartyPopper className="w-16 h-16 text-pink-300 mx-auto" />
//                 </motion.div>

//                 <motion.div 
//                   className="space-y-6 text-left"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                 >
//                   {birthdayWish.split('\n').map((paragraph, index) => (
//                     <motion.p
//                       key={index}
//                       initial={{ x: -50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: 1 + index * 0.2 }}
//                       className="text-white text-lg sm:text-xl leading-relaxed"
//                     >
//                       {paragraph}
//                     </motion.p>
//                   ))}
//                 </motion.div>

//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 3, type: "spring" }}
//                   className="mt-10"
//                 >
//                   <Heart className="w-20 h-20 text-pink-400 mx-auto animate-pulse" fill="#ff69b4" />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Video Modal */}
//         {selectedVideo && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedVideo(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.5, y: 100, opacity: 0, rotateX: -30 }}
//               animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
//               exit={{ scale: 0.5, y: -100, opacity: 0, rotateX: 30 }}
//               transition={{ type: "spring", damping: 20 }}
//               className="relative w-full max-w-5xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <video 
//                 src={selectedVideo.src}
//                 controls
//                 autoPlay
//                 className="w-full rounded-2xl shadow-2xl"
//                 poster={selectedVideo.thumbnail}
//               />
//               <motion.button
//                 whileHover={{ scale: 1.1, rotate: 90 }}
//                 onClick={() => setSelectedVideo(null)}
//                 className="absolute -top-12 right-0 text-white text-xl hover:text-pink-300 transition-colors bg-black/50 backdrop-blur-lg px-4 py-2 rounded-full"
//               >
//                 Close ✕
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Photo Gallery Modal */}
//         {showPhotoGallery && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowPhotoGallery(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0, rotateY: -30 }}
//               animate={{ scale: 1, opacity: 1, rotateY: 0 }}
//               exit={{ scale: 0.8, opacity: 0, rotateY: 30 }}
//               className="bg-white dark:bg-gray-800 p-8 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-center mb-8">
//                 <h2 className="text-4xl font-bold text-pink-500">Our Beautiful Memories</h2>
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: 90 }}
//                   onClick={() => setShowPhotoGallery(false)}
//                   className="text-3xl hover:text-pink-500 transition-colors"
//                 >
//                   ✕
//                 </motion.button>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {photos.map((photo) => (
//                   <motion.div
//                     key={photo.id}
//                     whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
//                     className="cursor-pointer rounded-xl overflow-hidden shadow-xl group"
//                     onClick={() => setSelectedPhoto(photo)}
//                   >
//                     <div className="relative h-48">
//                       <img 
//                         src={photo.src}
//                         alt={photo.caption}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
//                         }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
//                         <p className="text-white text-sm font-bold">{photo.date}</p>
//                         <p className="text-gray-200 text-xs">{photo.location}</p>
//                       </div>
//                     </div>
//                     <p className="p-3 text-sm text-center bg-white dark:bg-gray-700">{photo.caption}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Single Photo Modal */}
//         {selectedPhoto && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/98 z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedPhoto(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
//               animate={{ scale: 1, rotate: 0, opacity: 1 }}
//               exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
//               className="relative max-w-5xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img 
//                 src={selectedPhoto.src} 
//                 alt={selectedPhoto.caption}
//                 className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
//                 <p className="text-white text-2xl font-bold">{selectedPhoto.caption}</p>
//                 <p className="text-gray-300">{selectedPhoto.date} • {selectedPhoto.location}</p>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 onClick={() => setSelectedPhoto(null)}
//                 className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg text-white px-4 py-2 rounded-full"
//               >
//                 Close
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Love Quiz Modal */}
//         {showLoveQuiz && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowLoveQuiz(false)}
//           >
//             <motion.div
//               initial={{ scale: 0, rotateY: 180 }}
//               animate={{ scale: 1, rotateY: 0 }}
//               exit={{ scale: 0, rotateY: -180 }}
//               className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl max-w-lg"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
//               <h2 className="text-3xl font-bold text-center mb-6">Love Quiz</h2>
//               <p className="text-xl mb-6 text-center">How much do we love each other?</p>
//               <button
//                 onClick={calculateLoveScore}
//                 className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl text-lg mb-4"
//               >
//                 Calculate Love Score
//               </button>
//               {loveScore && (
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="text-center"
//                 >
//                   <p className="text-2xl mb-2">Our Love Score:</p>
//                   <p className="text-5xl font-bold text-pink-500">{loveScore}%</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Future Dreams Modal */}
//         {showFutureDreams && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowFutureDreams(false)}
//           >
//             <motion.div
//               initial={{ scale: 0, rotateX: -90 }}
//               animate={{ scale: 1, rotateX: 0 }}
//               exit={{ scale: 0, rotateX: 90 }}
//               className="bg-white dark:bg-gray-800 p-10 rounded-3xl max-w-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Rocket className="w-16 h-16 text-pink-500 mx-auto mb-6" />
//               <h2 className="text-3xl font-bold text-center mb-8">Our Future Dreams</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {futureDreams.map((dream, index) => {
//                   const IconComponent = dream.icon;
//                   return (
//                     <motion.div
//                       key={index}
//                       whileHover={{ scale: 1.05 }}
//                       className={`bg-gradient-to-r ${dream.color} p-4 rounded-xl text-white flex items-center gap-3`}
//                     >
//                       <IconComponent className="w-6 h-6" />
//                       <span>{dream.text}</span>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Secret Message Modal */}
//         {showSecretMessage && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowSecretMessage(false)}
//           >
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               exit={{ scale: 0, rotate: 180 }}
//               className="bg-white dark:bg-gray-800 p-10 rounded-3xl max-w-md"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Lock className="w-16 h-16 text-pink-500 mx-auto mb-6" />
//               <h2 className="text-3xl font-bold text-center mb-6">Secret Message</h2>
//               <p className="text-center mb-4">Enter the secret code to reveal a special message:</p>
//               <input
//                 type="text"
//                 value={secretCode}
//                 onChange={(e) => setSecretCode(e.target.value)}
//                 placeholder="Enter code..."
//                 className="w-full p-3 border rounded-xl mb-4"
//                 onKeyPress={(e) => e.key === 'Enter' && checkSecretCode()}
//               />
//               <button
//                 onClick={checkSecretCode}
//                 className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl"
//               >
//                 Unlock Secret
//               </button>
//               {showSecretMessage && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="mt-6 p-6 bg-pink-100 dark:bg-pink-900 rounded-xl text-center"
//                 >
//                   <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" fill="#ff69b4" />
//                   <p className="text-xl mb-2">✨ Secret Message Revealed! ✨</p>
//                   <p className="text-lg">You are the most precious person in my life. I love you more than words can say, more than the stars in the sky, more than all the love in the universe. You are my everything, my forever, my always.</p>
//                   <p className="text-pink-500 font-bold text-xl mt-4">I LOVE YOU! ❤️</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}

//         {/* Time Capsule Modal */}
//         {showTimeCapsule && (
//           <motion.div
//             className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShowTimeCapsule(false)}
//           >
//             <motion.div
//               initial={{ scale: 0, rotateY: 180 }}
//               animate={{ scale: 1, rotateY: 0 }}
//               exit={{ scale: 0, rotateY: -180 }}
//               className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-3xl max-w-lg"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <Gift className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
//               <h2 className="text-3xl font-bold text-center mb-6">Time Capsule</h2>
//               {!timeCapsuleOpened ? (
//                 <>
//                   <p className="text-center mb-6">A special message for you, sealed with love...</p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={openTimeCapsule}
//                     className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl"
//                   >
//                     Open Time Capsule
//                   </motion.button>
//                 </>
//               ) : (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="text-center"
//                 >
//                   <p className="text-xl mb-4">Dear My Love,</p>
//                   <p className="mb-4 text-lg">Remember this beautiful moment. Our love grows stronger every day. Today is special because it's your birthday, but every day with you is a celebration. You are my greatest treasure, my happiest thought, my most beautiful dream come true.</p>
//                   <p className="text-pink-500 font-bold text-2xl mt-6">Forever and always yours ❤️</p>
//                 </motion.div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         .perspective {
//           perspective: 1000px;
//         }
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .line-clamp-4 {
//           display: -webkit-box;
//           -webkit-line-clamp: 4;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// }
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
  Cloud,
  Award,
  BookOpen,
  MapPin,
  Volume2,
  VolumeX,
  Send,
  Rocket,
  Home,
  Diamond,
  Flower,
  Leaf,
  Smile,
  Sunset,
  PartyPopper,
  HeartPulse,
  Sparkle,
  Stars,
  Flame,
  Crown,
  Gem,
  Music4,
  Film,
  Image as ImageIcon,
  Plane,
  Car,
  Utensils,
  Wine,
  Lock,
  Phone as PhoneIcon,
  Video as VideoIcon,
  Mic,
  MicOff,
  HeartHandshake,
  HeartCrack,
  Scroll,
  Pen,
  Snowflake,
  Sofa,
  Soup,
  Space,
  Spade,
  Speaker,
  Speech,
  SpellCheck,
  SpellCheck2,
  Spline,
  Split,
  SprayCan,
  Sprout,
  Square,
  SquareActivity,
  SquareArrowDown,
  SquareArrowDownLeft,
  SquareArrowDownRight,
  SquareArrowLeft,
  SquareArrowOutDownLeft,
  SquareArrowOutDownRight,
  SquareArrowOutUpLeft,
  SquareArrowOutUpRight,
  SquareArrowRight,
  SquareArrowUp,
  SquareArrowUpLeft,
  SquareArrowUpRight,
  SquareAsterisk,
  SquareBottomDashedScissors,
  SquareChartGantt,
  SquareCheck,
  SquareCheckBig,
  SquareChevronDown,
  SquareChevronLeft,
  SquareChevronRight,
  SquareChevronUp,
  SquareCode,
  SquareDashed,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquareDashedKanban,
  SquareDashedMousePointer,
  SquareDivide,
  SquareDot,
  SquareEqual,
  SquareFunction,
  SquareKanban,
  SquareLibrary,
  SquareM,
  SquareMenu,
  SquareMinus,
  SquareMousePointer,
  SquareParking,
  SquareParkingOff,
  SquarePen,
  SquarePercent,
  SquarePi,
  SquarePilcrow,
  SquarePlay,
  SquarePlus,
  SquarePower,
  SquareRadical,
  SquareScissors,
  SquareSigma,
  SquareSlash,
  SquareSplitHorizontal,
  SquareSplitVertical,
  SquareSquare,
  SquareStack,
  SquareTerminal,
  SquareUser,
  SquareUserRound,
  SquareX,
  Squircle,
  Squirrel,
  Stamp,
  StarHalf,
  StarOff,
  StepBack,
  StepForward,
  Stethoscope,
  Sticker,
  StickyNote,
  StopCircle,
  Store,
  StretchHorizontal,
  StretchVertical,
  Strikethrough,
  Subscript,
  SunDim,
  SunMedium,
  SunMoon,
  SunSnow,
  Sunrise,
  Superscript,
  SwatchBook,
  SwissFranc,
  SwitchCamera,
  Sword,
  Swords,
  Syringe,
  Table,
  Table2,
  TableCellsMerge,
  TableCellsSplit,
  TableColumnsSplit,
  TableOfContents,
  TableProperties,
  TableRowsSplit,
  Tablet,
  TabletSmartphone,
  Tablets,
  Tag,
  Tags,
  Tally1,
  Tally2,
  Tally3,
  Tally4,
  Tally5,
  Tangent,
  Target,
  Telescope,
  Tent,
  TentTree,
  Terminal,
  TestTube,
  TestTubeDiagonal,
  TestTubes,
  Text,
  TextCursor,
  TextCursorInput,
  TextQuote,
  TextSearch,
  TextSelect,
  Theater,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  ThumbsDown,
  ThumbsUp,
  Ticket,
  TicketCheck,
  TicketMinus,
  TicketPercent,
  TicketPlus,
  TicketSlash,
  TicketX,
  Timer,
  TimerOff,
  TimerReset,
  ToggleLeft,
  ToggleRight,
  Tornado,
  Torus,
  Touchpad,
  TouchpadOff,
  TowerControl,
  ToyBrick,
  Tractor,
  TrafficCone,
  TrainFront,
  TrainFrontTunnel,
  TrainTrack,
  TramFront,
  Trash,
  Trash2,
  TreeDeciduous,
  TreePalm,
  TreePine,
  Trees,
  Trello,
  TrendingDown,
  TrendingUp,
  Triangle,
  TriangleAlert,
  TriangleRight,
  Truck,
  Turtle,
  Tv,
  TvMinimal,
  TvMinimalPlay,
  Twitch,
  Twitter,
  Type,
  Umbrella,
  UmbrellaOff,
  Underline,
  Undo,
  Undo2,
  UndoDot,
  UnfoldHorizontal,
  UnfoldVertical,
  Ungroup,
  University,
  Unlink,
  Unlink2,
  Unplug,
  Upload,
  Usb,
  User,
  UserCheck,
  UserCog,
  UserMinus,
  UserPen,
  UserPlus,
  UserRound,
  UserRoundCheck,
  UserRoundCog,
  UserRoundMinus,
  UserRoundPen,
  UserRoundPlus,
  UserRoundSearch,
  UserRoundX,
  UserSearch,
  UserX,
  Users,
  UsersRound,
  UtensilsCrossed,
  UtilityPole,
  Variable,
  Vault,
  Vegan,
  VenetianMask,
  Vibrate,
  VibrateOff,
  VideoOff,
  Videotape,
  View,
  Voicemail,
  Volleyball,
  Volume1,
  Volume,
  Vote,
  WalletCards,
  WalletMinimal,
  Wallpaper,
  Wand,
  WandSparkles,
  Warehouse,
  WashingMachine,
  Watch,
  Waves,
  Waypoints,
  Webcam,
  Webhook,
  WebhookOff,
  Weight,
  Wheat,
  WheatOff,
  WholeWord,
  Wifi,
  WifiHigh,
  WifiLow,
  WifiOff,
  WifiZero,
  Wind,
  WineOff,
  Workflow,
  Worm,
  WrapText,
  Wrench,
  X,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut,
  Camera as PhotoIcon,
  Award as AwardIcon,
  Home as HomeIcon,
  Phone,
  Volume2 as VolumeIcon,
  VolumeX as VolumeXIcon,
  Heart as HeartIcon
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import confetti from "canvas-confetti";

export default function Webpage() {
  const [nightMode, setNightMode] = useState(false);
  const [modal, setModal] = useState(null);
  const [quote, setQuote] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [floatingRoses, setFloatingRoses] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [loveMeterValue, setLoveMeterValue] = useState(0);
  const [showLoveQuiz, setShowLoveQuiz] = useState(false);
  const [showFutureDreams, setShowFutureDreams] = useState(false);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [showTimeCapsule, setShowTimeCapsule] = useState(false);
  const [showBirthdayWish, setShowBirthdayWish] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [secretCode, setSecretCode] = useState("");
  const [timeCapsuleOpened, setTimeCapsuleOpened] = useState(false);
  const [loveScore, setLoveScore] = useState(null);
  const [showGreetingCard, setShowGreetingCard] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showPromiseRing, setShowPromiseRing] = useState(false);
  const [proposalResponse, setProposalResponse] = useState(null);
  const [showLovePoem, setShowLovePoem] = useState(false);
  const [hugCount, setHugCount] = useState(0);
  const [showLoveMeterModal, setShowLoveMeterModal] = useState(false);
  const [showStarGazing, setShowStarGazing] = useState(false);
  const [showHandwrittenLetter, setShowHandwrittenLetter] = useState(null);
  
  const containerRef = useRef(null);
  const speechRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Birthday wish text
  const birthdayWish = `Happy Birthday Babu! 🎉

On this beautiful day, I want to tell you how much you mean to me. You are the most precious gift life has ever given me. Every moment with you feels like a beautiful dream, and I never want to wake up.

Your smile lights up my darkest days, your laughter is the sweetest melody to my ears, and your love is the warmth that keeps my heart beating. You've made my life complete in ways I never thought possible.

Today, on your birthday, I wish you all the happiness in the world. May your life be filled with endless joy, success, and love. You deserve everything beautiful that life has to offer.

Remember that I'll always be here for you, through every high and low, every laugh and tear, every moment and memory. You're not just my love; you're my best friend, my confidant, my everything.

I love you more than the stars in the sky, more than the sand on the beaches, more than words could ever express. You are my forever, my always, my never-ending love story.

Happy Birthday, my love. Today and always, you are celebrated, you are cherished, and you are deeply, deeply loved.

I LOVE YOU MORE! ❤️`;

  // Romantic quotes
  const quotes = [
    "You are the most beautiful thing that has ever happened to me",
    "Every moment with you feels like a beautiful dream I never want to wake up from",
    "My heart beats your name with every pulse - it's forever yours",
    "You're not just my love, you're my home, my peace, my everything",
    "In your eyes, I found the answer to every question my heart ever asked",
    "Loving you is the easiest thing I've ever done, and the best thing that's ever happened to me",
    "You are the poetry my heart always wanted to write",
    "My world became infinitely beautiful the day you walked into my life",
    "You are my today, my tomorrow, and all my forever",
    "With you, every day feels like Valentine's Day"
  ];

  // Greeting Cards
  const greetingCards = [
    {
      id: 1,
      title: "Our Love Story Begins",
      date: "July 9, 2024",
      message: "The day our eyes met for the first time, I knew my life would never be the same. You walked into my world and painted it with colors I never knew existed. That moment, that beautiful moment, was when my heart found its forever home.",
      signature: "Forever Yours",
      color: "from-pink-400 to-red-400",
      icon: Heart,
      bgImage: "bg-gradient-to-br from-pink-100 to-red-100"
    },
    {
      id: 2,
      title: "Why I Love You",
      date: "August 17, 2024",
      message: "I love you not just for who you are, but for who I become when I'm with you. You bring out the best in me, you make me want to be a better person. Your smile is my sunshine, your laughter is my favorite melody, and your love is my greatest treasure.",
      signature: "With All My Heart",
      color: "from-purple-400 to-pink-400",
      icon: HeartPulse,
      bgImage: "bg-gradient-to-br from-purple-100 to-pink-100"
    },
    {
      id: 3,
      title: "My Promise to You",
      date: "August 17, 2024",
      message: "I promise to love you endlessly, to support you unconditionally, to stand by you through every storm. I promise to make you laugh when you're sad, to hold you when you're weak, and to celebrate with you when you're strong. You are my forever promise.",
      signature: "Always and Forever",
      color: "from-blue-400 to-indigo-400",
      icon: HeartHandshake,
      bgImage: "bg-gradient-to-br from-blue-100 to-indigo-100"
    },
    {
      id: 4,
      title: "Happy Birthday My Love",
      date: "March 20, 2026",
      message: "Today we celebrate the most beautiful soul I've ever known. You deserve all the happiness in the world and more. May your birthday be as wonderful as you are, filled with love, laughter, and all your heart's desires.",
      signature: "Your Love",
      color: "from-yellow-400 to-orange-400",
      icon: Cake,
      bgImage: "bg-gradient-to-br from-yellow-100 to-orange-100"
    },
    {
      id: 5,
      title: "Our Future Dreams",
      date: "Forever",
      message: "I dream of waking up next to you every morning, of growing old together, of watching sunsets holding your hand. I dream of our home filled with laughter, of adventures around the world, of quiet moments that mean everything. With you, every dream feels possible.",
      signature: "Dreaming with You",
      color: "from-green-400 to-teal-400",
      icon: Rocket,
      bgImage: "bg-gradient-to-br from-green-100 to-teal-100"
    },
    {
      id: 6,
      title: "Thank You",
      date: "Always",
      message: "Thank you for being you. Thank you for your patience, your kindness, your unwavering love. Thank you for choosing me every single day. Thank you for making my world beautiful just by being in it. I am grateful for you beyond words.",
      signature: "Gratefully Yours",
      color: "from-indigo-400 to-purple-400",
      icon: Star,
      bgImage: "bg-gradient-to-br from-indigo-100 to-purple-100"
    }
  ];

  // Handwritten letters
  const handwrittenLetters = [
    {
      id: 1,
      title: "My Dearest Love",
      content: "My Dearest Love,\n\nI'm writing this with a heart full of emotions, trying to put into words what you mean to me. Every time I see you, my heart skips a beat. Every time you smile, my world lights up. You are the most beautiful thing that has ever happened to me, and I thank the stars every day for bringing you into my life.\n\nWith you, I've learned what true love means. It's not just about the grand gestures, but the little things - the way you hold my hand, the way you look at me, the way you make even ordinary moments feel extraordinary.\n\nI love you more than words can say.\n\nForever yours,\n❤️",
      date: "March 20, 2026"
    },
    {
      id: 2,
      title: "To My Soulmate",
      content: "To My Soulmate,\n\nThey say soulmates are two halves of the same soul, and I truly believe that's what we are. You complete me in ways I never knew I needed. You understand my silences, you laugh at my jokes, you hold me when I'm vulnerable.\n\nIn you, I've found not just a partner, but a best friend, a confidant, my home. Thank you for being exactly who you are - wonderful, beautiful, amazing you.\n\nWith all my love,\n❤️",
      date: "March 20, 2026"
    },
    {
      id: 3,
      title: "Forever Promise",
      content: "My Love,\n\nI want you to know that my love for you has no conditions, no limits, no end. It grows stronger with each passing day, deeper with every moment we share. You are my today, my tomorrow, and all my forever.\n\nNo matter what life brings our way, I'll be right here beside you. Through every joy, every challenge, every beautiful moment - my hand will always be in yours.\n\nI love you. Always have, always will.\n\nYours eternally,\n❤️",
      date: "March 20, 2026"
    }
  ];

  // Poems
  const lovePoems = [
    {
      title: "You Are My Everything",
      poem: "In a world full of temporary things,\nYou are my forever.\nIn a life full of ordinary moments,\nYou are my magic.\n\nYour smile lights up my darkness,\nYour love warms my soul,\nYour presence makes me whole.\n\nI never knew what love was,\nUntil I found you.\nNow I know,\nThat true love is real,\nAnd it lives in you."
    },
    {
      title: "The Way I Love You",
      poem: "I love you in ways\nYou've never been loved before.\nI love you with every heartbeat,\nWith every breath I take.\n\nYour name is etched in my soul,\nYour memory is my favorite thought,\nYour love is my greatest treasure.\n\nThere are no words to describe\nWhat you mean to me,\nBut if I had to choose one,\nIt would be... Everything."
    },
    {
      title: "Forever Us",
      poem: "Two hearts beating as one,\nTwo souls dancing in the sun,\nTwo lovers writing their story,\nTwo people in all their glory.\n\nThrough seasons that change,\nThrough winds that blow,\nOur love remains,\nAnd continues to grow.\n\nFor you and I,\nWere meant to be,\nFor all eternity,\nJust you and me."
    }
  ];

  // Videos
  const videos = [
    { id: 1, name: "Our First Memory Together", src: "/video1.mp4", thumbnail: "/photo1.jpeg", date: "July 2024", description: "The day our journey began" },
    { id: 2, name: "Beautiful Moments With You", src: "/video2.mp4", thumbnail: "/photo2.jpeg", date: "July 2024", description: "Every moment is precious" },
    { id: 3, name: "Together Forever", src: "/video3.mp4", thumbnail: "/photo3.jpeg", date: "August 2024", description: "Building our love story" },
    { id: 4, name: "Our Love Story", src: "/video5.mp4", thumbnail: "/photo4.jpeg", date: "August 2024", description: "Creating memories together" }
  ];

  // Photos
  const photos = [
    { id: 1, src: "/photo1.jpeg", caption: "Our first smile together", date: "July 2024", location: "Our Favorite Cafe" },
    { id: 2, src: "/photo2.jpeg", caption: "Beautiful memories we created", date: "July 2024", location: "Hotel West Side" },
    { id: 3, src: "/photo3.jpeg", caption: "Perfect moments captured forever", date: "Sept 2024", location: "Mountain View" },
    { id: 4, src: "/photo4.jpeg", caption: "Together forever - My favorite person", date: "Feb 2026", location: "Cafe" }
  ];

  // Timeline events
  const timelineEvents = [
    { date: "July 09, 2024", title: "The Day We Met", description: "When our eyes met for the first time, I knew you were special.", icon: Heart, color: "from-pink-400 to-red-400" },
    { date: "August 17, 2024", title: "Our First Date", description: "A perfect day that changed everything.", icon: Coffee, color: "from-purple-400 to-pink-400" },
    { date: "August 17, 2024", title: "First Time You Said I Love You", description: "Three words that meant the world to me.", icon: MessageCircle, color: "from-blue-400 to-indigo-400" },
    { date: "September 10, 2024", title: "Our First Trip Together", description: "Creating memories that will last forever.", icon: MapPin, color: "from-green-400 to-teal-400" },
    { date: "March 20, 2026", title: "Today - Your Birthday", description: "Celebrating the most wonderful person in my life.", icon: Cake, color: "from-pink-400 to-purple-400" }
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
    { icon: Globe, text: "Travel the world together", color: "from-blue-400 to-green-400", emoji: "🌍" },
    { icon: Home, text: "Build our dream home", color: "from-yellow-400 to-orange-400", emoji: "🏠" },
    { icon: Heart, text: "Grow old holding hands", color: "from-red-400 to-pink-400", emoji: "👴👵" },
    { icon: Plane, text: "Watch sunset in Paris", color: "from-purple-400 to-indigo-400", emoji: "🗼" },
    { icon: Car, text: "Road trips across countries", color: "from-green-400 to-teal-400", emoji: "🚗" },
    { icon: Camera, text: "Fill albums with memories", color: "from-pink-400 to-purple-400", emoji: "📸" },
    { icon: Utensils, text: "Cook together every Sunday", color: "from-orange-400 to-red-400", emoji: "🍳" },
    { icon: Wine, text: "Celebrate every anniversary", color: "from-purple-400 to-pink-400", emoji: "🥂" }
  ];

  // Compliments
  const compliments = [
    "You have the most beautiful smile I've ever seen",
    "Your eyes sparkle brighter than the stars",
    "You make my heart skip a beat every time I see you",
    "Your love is the greatest gift I've ever received",
    "You're more beautiful than a sunset",
    "Your laughter is my favorite sound",
    "You're the reason I believe in love",
    "You make every day feel special",
    "Being with you feels like coming home",
    "You're my favorite hello and hardest goodbye"
  ];

  // Star quotes
  const starQuotes = [
    "You are my North Star, guiding me home",
    "I love you to the moon and back, and then to the stars",
    "We are like stars - meant to shine together",
    "You're the star that brightens my darkest night",
    "Our love is written in the stars",
    "Even the stars are jealous of how bright you shine"
  ];

  useEffect(() => {
    // Initial confetti
    confetti({
      particleCount: 200,
      spread: 150,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ff0000', '#ffa500', '#ffff00']
    });

    // Quote rotation
    const interval = setInterval(() => {
      setQuote(prev => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Floating hearts
    const heartInterval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 30 + 15,
        speed: Math.random() * 3 + 1.5,
        delay: Math.random() * 2,
        rotation: Math.random() * 360
      };
      setFloatingHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 10000);
    }, 300);
    
    return () => clearInterval(heartInterval);
  }, []);

  useEffect(() => {
    // Floating roses
    const roseInterval = setInterval(() => {
      const newRose = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 25 + 10,
        speed: Math.random() * 2.5 + 1,
        delay: Math.random() * 3
      };
      setFloatingRoses(prev => [...prev, newRose]);
      
      setTimeout(() => {
        setFloatingRoses(prev => prev.filter(r => r.id !== newRose.id));
      }, 12000);
    }, 600);
    
    return () => clearInterval(roseInterval);
  }, []);

  useEffect(() => {
    // Love meter
    const meterInterval = setInterval(() => {
      setLoveMeterValue(prev => Math.min(prev + 0.1, 100));
    }, 1000);
    return () => clearInterval(meterInterval);
  }, []);

  const speakText = (text) => {
    if (!soundEnabled) return;
    
    if (speechRef.current) {
      window.speechSynthesis.cancel();
    }
    
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.9;
    speech.pitch = 1.1;
    speech.volume = 1;
    speech.lang = 'en-US';
    
    window.speechSynthesis.speak(speech);
    speechRef.current = speech;
    setIsSpeaking(true);
    
    speech.onend = () => {
      setIsSpeaking(false);
    };
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const openBirthdayWish = () => {
    setShowBirthdayWish(true);
    speakText("Happy Birthday Babu! " + birthdayWish.split('\n').slice(1).join(' '));
    confetti({
      particleCount: 300,
      spread: 200,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ff0000', '#ffa500', '#ffff00']
    });
  };

  const closeModal = () => {
    setModal(null);
    setSelectedVideo(null);
    setSelectedPhoto(null);
    setShowPhotoGallery(false);
    setShowLoveQuiz(false);
    setShowFutureDreams(false);
    setShowSecretMessage(false);
    setShowTimeCapsule(false);
    setShowBirthdayWish(false);
    setShowGreetingCard(null);
    setSelectedLetter(null);
    setShowPromiseRing(false);
    setProposalResponse(null);
    setShowLovePoem(false);
    setShowLoveMeterModal(false);
    setShowStarGazing(false);
    setShowHandwrittenLetter(null);
    stopSpeaking();
  };

  const calculateLoveScore = () => {
    const score = Math.floor(Math.random() * 31) + 70;
    setLoveScore(score);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  const checkSecretCode = () => {
    if (secretCode.toLowerCase() === "i love you" || secretCode.toLowerCase() === "love" || secretCode.toLowerCase() === "iloveyou") {
      setShowSecretMessage(true);
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
      });
    } else {
      toast.error("Try typing 'I love you'", {
        icon: '💝',
        duration: 2000
      });
    }
  };

  const openTimeCapsule = () => {
    setTimeCapsuleOpened(true);
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  };

  const getRandomCompliment = () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    toast.success(compliments[randomIndex], {
      icon: '💝',
      duration: 3000,
      style: {
        borderRadius: '20px',
        background: '#ff69b4',
        color: '#fff',
      }
    });
  };

  const sendVirtualHug = () => {
    setHugCount(prev => prev + 1);
    toast.success(`You received hug #${hugCount + 1}! 🤗`, {
      icon: '🫂',
      duration: 2000
    });
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  const handleProposal = (answer) => {
    setProposalResponse(answer);
    if (answer === 'yes') {
      speakText("I LOVE YOU! I LOVE YOU! I LOVE YOU!");
      confetti({
        particleCount: 300,
        spread: 200,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ff0000', '#ffa500', '#ffff00']
      });
    } else {
      speakText("You have no option! You are already belongs to me! I love you!");
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493']
      });
    }
  };

  // Play icon component
  const PlayIcon = (props) => (
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

  // Close button component for modals
  const CloseButton = ({ onClick }) => (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="absolute top-4 right-4 z-50 bg-black/50 backdrop-blur-lg text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
    >
      <X className="w-5 h-5" />
    </motion.button>
  );

  return (
    <div className={`min-h-screen transition-all duration-1000 overflow-x-hidden ${
      nightMode ? "bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900" : "bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100"
    }`} ref={containerRef}>
      
      {/* Floating Hearts */}
      <AnimatePresence>
        {floatingHearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0, scale: 0 }}
            animate={{ 
              y: "-20vh", 
              opacity: [0, 0.8, 0.6, 0.4, 0],
              scale: [0, 1.1, 1, 0.9, 0],
              rotate: [heart.rotation, heart.rotation + 180]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: heart.speed * 2.5, 
              ease: "easeOut",
              delay: heart.delay
            }}
            className="fixed z-10 pointer-events-none"
            style={{ fontSize: heart.size }}
          >
            {heart.size > 25 ? "❤️" : "💖"}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Roses */}
      <AnimatePresence>
        {floatingRoses.map(rose => (
          <motion.div
            key={rose.id}
            initial={{ y: "110vh", x: `${rose.x}vw`, opacity: 0, scale: 0 }}
            animate={{ 
              y: "-20vh", 
              opacity: [0, 0.7, 0.5, 0.2, 0],
              scale: [0, 1, 0.9, 0.6, 0],
              rotate: [0, 5, -5, 2, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: rose.speed * 3, 
              ease: "easeOut",
              delay: rose.delay
            }}
            className="fixed z-10 pointer-events-none"
            style={{ fontSize: rose.size }}
          >
            🌹
          </motion.div>
        ))}
      </AnimatePresence>

      <Toaster position="top-center" />

      {/* Navigation Dots */}
      <div className="fixed right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 space-y-2 sm:space-y-3">
        {["home", "videos", "photos", "timeline", "cards", "surprises"].map((section) => (
          <motion.div
            key={section}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              activeSection === section ? "bg-pink-500 scale-125" : "bg-gray-400 hover:bg-pink-300"
            }`}
            onClick={() => {
              setActiveSection(section);
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </div>

      {/* Love Meter */}
      {/* <motion.div 
        className="fixed top-2 sm:top-4 right-2 sm:right-4 z-30 bg-white/30 backdrop-blur-lg rounded-full p-2 sm:p-4 shadow-xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      > */}
        {/* <div className="relative">
          <HeartPulse className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
          <motion.span 
            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {Math.floor(loveMeterValue)}
          </motion.span>
        </div> */}
      {/* </motion.div> */}

      {/* Quick Action Buttons */}
      {/* <div className="fixed top-2 sm:top-4 left-2 sm:left-4 z-30 flex gap-1 sm:gap-2">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setNightMode(!nightMode)}
          className="bg-white/30 backdrop-blur-lg p-2 sm:p-3 rounded-full shadow-xl"
        >
          {nightMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />}
        </motion.button> */}
        
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="bg-white/30 backdrop-blur-lg p-2 sm:p-3 rounded-full shadow-xl"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" /> : <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={getRandomCompliment}
          className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 sm:p-3 rounded-full shadow-xl"
        >
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={sendVirtualHug}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 sm:p-3 rounded-full shadow-xl"
        >
          <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </motion.button> */}
      {/* </div> */}

      <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        
        {/* Hero Section */}
        <motion.div
          style={{ scale, rotate, y }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
          id="home"
        >
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
            animate={{ 
              scale: [1, 1.03, 1],
              textShadow: [
                "0 0 10px rgba(255,105,180,0.3)",
                "0 0 20px rgba(255,105,180,0.6)",
                "0 0 10px rgba(255,105,180,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Happy Birthday Dhakkan
            <motion.span
              className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4"
              animate={{ opacity: [0.8, 1, 0.8], y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              My Forever Love ❤️
            </motion.span>
          </motion.h1>
          
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-pink-500 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Quote Carousel */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={quote}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative"
            >
              <motion.div 
                className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 text-2xl sm:text-4xl text-pink-300"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "
              </motion.div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-light text-gray-700 dark:text-gray-200 max-w-4xl mx-auto px-4 sm:px-8">
                {quotes[quote]}
              </p>
              <motion.div 
                className="absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 text-2xl sm:text-4xl text-pink-300"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Video Gallery */}
        <div className="mb-16 sm:mb-20" id="videos">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Beautiful Videos
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 20px 40px rgba(255,105,180,0.3)",
                  rotateY: 3
                }}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group perspective"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
                  <img 
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6 md:p-8">
                    <div>
                      <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                        <VideoIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-400" />
                        <span className="text-pink-300 text-xs sm:text-sm">{video.date}</span>
                      </div>
                      <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{video.name}</h3>
                      <p className="text-gray-200 text-xs sm:text-sm">{video.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 backdrop-blur-lg rounded-full p-2 sm:p-3">
                    <PlayIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16 sm:mb-20" id="photos">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Precious Memories
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
                className="relative rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group aspect-square"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img 
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <p className="text-white text-xs sm:text-sm">{photo.date}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="text-center mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowPhotoGallery(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            >
              <Camera className="inline mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              View All Photos
              <ImageIcon className="inline ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-16 sm:mb-20" id="timeline">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Love Story
          </motion.h2>
          <div className="space-y-4 sm:space-y-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-3 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-xl sm:rounded-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-gradient-to-r ${event.color} p-2 sm:p-3 md:p-4 rounded-full flex-shrink-0`}
                >
                  <event.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">{event.title}</h3>
                    <span className="text-pink-500 text-xs sm:text-sm bg-pink-100 dark:bg-pink-900 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Greeting Cards */}
        <div className="mb-16 sm:mb-20" id="cards">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Love Letters For You 💌
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {greetingCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.03, 
                    rotateY: 3,
                    boxShadow: "0 20px 40px rgba(255,105,180,0.3)"
                  }}
                  className={`${card.bgImage} dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl cursor-pointer transform transition-all duration-500 relative overflow-hidden group`}
                  onClick={() => setShowGreetingCard(card)}
                >
                  <motion.div 
                    className="absolute -right-8 sm:-right-10 -top-8 sm:-top-10 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-white/20 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 3, delay: index * 0.2, repeat: Infinity }}
                      className="mb-3 sm:mb-4"
                    >
                      <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-pink-500 mx-auto" />
                    </motion.div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
                      {card.title}
                    </h3>
                    
                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center mb-2 sm:mb-3 md:mb-4">
                      {card.date}
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 text-center text-xs sm:text-sm line-clamp-3 mb-3 sm:mb-4">
                      {card.message}
                    </p>
                    
                    <motion.div 
                      className="text-pink-500 font-semibold text-center text-xs sm:text-sm"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Open Card →
                    </motion.div>
                    
                    <p className="text-right text-gray-500 dark:text-gray-400 mt-3 sm:mt-4 text-xs sm:text-sm italic">
                      {card.signature}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Handwritten Letters */}
        <div className="mb-16 sm:mb-20">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Handwritten With Love ✍️
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {handwrittenLetters.map((letter, index) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                className="bg-amber-50 dark:bg-amber-900 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl cursor-pointer border border-amber-200 dark:border-amber-700"
                style={{ 
                  backgroundImage: 'linear-gradient(45deg, #fef3c7 0%, #fde68a 100%)',
                  boxShadow: '0 10px 30px rgba(245, 158, 11, 0.2)'
                }}
                onClick={() => setShowHandwrittenLetter(letter)}
              >
                <Pen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-600 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-1 sm:mb-2 text-amber-800 dark:text-amber-200">
                  {letter.title}
                </h3>
                <p className="text-amber-700 dark:text-amber-300 text-center text-xs sm:text-sm mb-1 sm:mb-2">
                  {letter.date}
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-center text-xs sm:text-sm line-clamp-3">
                  {letter.content.substring(0, 80)}...
                </p>
                <motion.div 
                  className="mt-3 sm:mt-4 text-amber-600 text-center text-xs sm:text-sm"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Read Letter →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Poems Section */}
        <div className="mb-16 sm:mb-20">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Love Poems For You 📜
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {lovePoems.map((poem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl cursor-pointer border border-pink-200"
                onClick={() => {
                  setShowLovePoem(true);
                  setSelectedLetter(poem);
                }}
              >
                <Scroll className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-3 sm:mb-4 text-pink-600">{poem.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center text-xs sm:text-sm line-clamp-4">
                  {poem.poem}
                </p>
                <motion.div 
                  className="mt-3 sm:mt-4 text-pink-500 text-center text-xs sm:text-sm"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Read Full Poem 📖
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reasons Why I Love You */}
        <div className="mb-16 sm:mb-20">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            10 Reasons Why I Love You
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-lg sm:rounded-xl group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, delay: index * 0.1, repeat: Infinity }}
                  >
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${reason.color} group-hover:rotate-6 transition-transform`} />
                  </motion.div>
                  <p className="text-gray-700 dark:text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg flex-1">{reason.text}</p>
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="#ff69b4" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Special Surprises Section */}
        <div className="mb-16 sm:mb-20" id="surprises">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Special Surprises
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLoveQuiz(true)}
              className="bg-gradient-to-br from-pink-400 to-purple-400 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2 animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base">Love Quiz</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFutureDreams(true)}
              className="bg-gradient-to-br from-blue-400 to-indigo-400 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg"
            >
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2 animate-bounce" />
              <span className="text-xs sm:text-sm md:text-base">Future Dreams</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSecretMessage(true)}
              className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg"
            >
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm md:text-base">Secret Message</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTimeCapsule(true)}
              className="bg-gradient-to-br from-green-400 to-teal-400 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg"
            >
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2 animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base">Time Capsule</span>
            </motion.button>
          </div>
        </div>

        {/* Extra Romantic Features */}
        <div className="mb-16 sm:mb-20">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            More Romance 💕
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowPromiseRing(true);
                setProposalResponse(null);
              }}
              className="bg-gradient-to-br from-purple-400 to-pink-400 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg"
            >
              <Crown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2 animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base">Promise Ring</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowStarGazing(true)}
              className="bg-gradient-to-br from-indigo-400 to-purple-400 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg"
            >
              <Stars className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2 animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base">Star Gazing</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLoveMeterModal(true)}
              className="bg-gradient-to-br from-red-400 to-pink-400 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg"
            >
              <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2 animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base">Love Meter</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={sendVirtualHug}
              className="bg-gradient-to-br from-orange-400 to-red-400 text-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg"
            >
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2 animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base">Hugs: {hugCount}</span>
            </motion.button>
          </div>
        </div>

        {/* Main Surprise Button */}
        <motion.div
          className="text-center pb-12 sm:pb-16 md:pb-20"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", duration: 1.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 0 15px rgba(255,105,180,0.5)",
                "0 0 30px rgba(255,105,180,0.8)",
                "0 0 15px rgba(255,105,180,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={openBirthdayWish}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-10 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold shadow-2xl relative overflow-hidden group"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white/20"
            />
            <PartyPopper className="inline mr-2 sm:mr-3 md:mr-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 animate-bounce" />
            Click for Final Surprise!
            <Gift className="inline ml-2 sm:ml-3 md:ml-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 animate-pulse" />
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-pink-500 font-semibold animate-pulse"
          >
            The biggest surprise awaits... 🎁
          </motion.p>
        </motion.div>
      </div>

      {/* Modals Section */}
      <AnimatePresence>
        {/* Promise Ring Modal with Proposal */}
        {showPromiseRing && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-rose-900/90 to-pink-900/90 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPromiseRing(false)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="relative w-full max-w-sm sm:max-w-md bg-gradient-to-br from-pink-200 to-rose-200 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setShowPromiseRing(false)} />
              
              {!proposalResponse ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="mb-4 sm:mb-5 md:mb-6"
                  >
                    <Crown className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-pink-600 mx-auto" />
                  </motion.div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-pink-800">My Promise Ring</h2>
                  
                  <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 text-pink-700">
                    With this ring, I promise to love you endlessly, 
                    to cherish you always, and to be yours forever.
                  </p>
                  
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-5 md:mb-6"
                  >
                    💍
                  </motion.div>
                  
                  <p className="text-pink-600 font-semibold text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">
                    Will you accept this promise in your heart?
                  </p>
                  
                  <div className="flex gap-3 sm:gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleProposal('yes')}
                      className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg"
                    >
                      Yes 💖
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleProposal('no')}
                      className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg"
                    >
                      No 💔
                    </motion.button>
                  </div>
                </>
              ) : proposalResponse === 'yes' ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <Heart className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-pink-600 mx-auto mb-4 sm:mb-5 md:mb-6 animate-pulse" fill="#ff69b4" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-pink-800">I LOVE YOU! ❤️</h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-pink-700 mb-4 sm:mb-5 md:mb-6">
                    Thank you for saying YES! You've made my heart the happiest!
                  </p>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="text-4xl sm:text-5xl md:text-6xl"
                  >
                    💍💖
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <HeartCrack className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-pink-600 mx-auto mb-4 sm:mb-5 md:mb-6" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-pink-800">You have no option! 💕</h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-pink-700 mb-4 sm:mb-5 md:mb-6">
                    You are already belongs to me! I love you forever!
                  </p>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl sm:text-5xl md:text-6xl"
                  >
                    ❤️
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Greeting Card Modal */}
        {showGreetingCard && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, rotateY: -15 }}
              animate={{ scale: 1, y: 0, rotateY: 0 }}
              exit={{ scale: 0.8, y: -50, rotateY: 15 }}
              transition={{ type: "spring", damping: 20 }}
              className={`relative w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[85vh] overflow-y-auto ${showGreetingCard.bgImage} dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal} />
              
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-4 sm:mb-6"
              >
                {showGreetingCard.icon && (
                  <showGreetingCard.icon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-pink-500 mx-auto" />
                )}
              </motion.div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
                {showGreetingCard.title}
              </h1>

              <p className="text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">
                {showGreetingCard.date}
              </p>

              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 mb-4 sm:mb-5 md:mb-6">
                <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-line">
                  {showGreetingCard.message}
                </p>
              </div>

              <p className="text-right text-lg sm:text-xl md:text-2xl text-pink-600 dark:text-pink-400 italic">
                {showGreetingCard.signature}
              </p>

              <div className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-6 md:mt-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }}
                  >
                    ❤️
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Handwritten Letter Modal */}
        {showHandwrittenLetter && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 2 }}
              className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[85vh] overflow-y-auto bg-amber-50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl"
              style={{
                backgroundImage: 'radial-gradient(circle, #fef3c7 0%, #fde68a 100%)',
                border: '2px solid #b45309'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal} />
              
              <Pen className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-amber-600 mx-auto mb-4 sm:mb-5 md:mb-6" />
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-1 sm:mb-2 text-amber-800">
                {showHandwrittenLetter.title}
              </h2>
              
              <p className="text-center text-amber-600 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6">
                {showHandwrittenLetter.date}
              </p>
              
              <div className="bg-amber-100/50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl mb-4 sm:mb-5 md:mb-6">
                <p className="text-amber-900 text-sm sm:text-base md:text-lg lg:text-xl whitespace-pre-line leading-relaxed">
                  {showHandwrittenLetter.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Love Poem Modal */}
        {showLovePoem && selectedLetter && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal} />
              
              <Scroll className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-pink-500 mx-auto mb-4 sm:mb-5 md:mb-6" />
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-pink-600">
                {selectedLetter.title}
              </h2>
              
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl whitespace-pre-line text-center leading-relaxed">
                  {selectedLetter.poem}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Star Gazing Modal */}
        {showStarGazing && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-indigo-950/95 to-purple-950/95 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowStarGazing(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-black/60 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setShowStarGazing(false)} />
              
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-yellow-300"
                  initial={{ 
                    x: Math.random() * 400 - 200, 
                    y: Math.random() * 400 - 200,
                    opacity: Math.random() 
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                >
                  ⭐
                </motion.div>
              ))}
              
              <Stars className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-yellow-300 mx-auto mb-4 sm:mb-5 md:mb-6 relative z-10" />
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white relative z-10">Stargazing With You</h2>
              
              <p className="text-base sm:text-lg md:text-xl text-yellow-200 mb-3 sm:mb-4 relative z-10">
                {starQuotes[Math.floor(Math.random() * starQuotes.length)]}
              </p>
              
              <p className="text-sm sm:text-base text-white/80 relative z-10">
                Every star in the sky reminds me of you - bright, beautiful, and forever shining.
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Love Meter Modal */}
        {showLoveMeterModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLoveMeterModal(false)}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="relative w-full max-w-sm sm:max-w-md bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setShowLoveMeterModal(false)} />
              
              <HeartPulse className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-pink-500 mx-auto mb-4 sm:mb-5 md:mb-6" />
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">Love Meter</h2>
              
              <div className="relative h-5 sm:h-6 md:h-7 lg:h-8 bg-gray-300 rounded-full mb-3 sm:mb-4 overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loveMeterValue}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 mb-3 sm:mb-4">{Math.floor(loveMeterValue)}%</p>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Our love keeps growing stronger every day!
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Birthday Wish Modal */}
        {showBirthdayWish && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-pink-300/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex gap-1 sm:gap-2 z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={isSpeaking ? stopSpeaking : () => speakText("Happy Birthday Babu! " + birthdayWish.split('\n').slice(1).join(' '))}
                  className="bg-white/20 backdrop-blur-lg p-2 sm:p-3 rounded-full"
                >
                  {isSpeaking ? <MicOff className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" /> : <Mic className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300" />}
                </motion.button>
                <CloseButton onClick={closeModal} />
              </div>

              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 sm:top-20 left-5 sm:left-10 text-3xl sm:text-4xl opacity-30"
              >
                ❤️
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 text-3xl sm:text-4xl opacity-30"
              >
                💖
              </motion.div>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-center"
              >
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎉 Happy Birthday! 🎉
                </motion.h1>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="mb-4 sm:mb-5 md:mb-6 lg:mb-8"
                >
                  <PartyPopper className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-pink-300 mx-auto" />
                </motion.div>

                <motion.div 
                  className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {birthdayWish.split('\n').map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.15 }}
                      className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2, type: "spring" }}
                  className="mt-6 sm:mt-8 md:mt-10"
                >
                  <Heart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-pink-400 mx-auto animate-pulse" fill="#ff69b4" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: -30, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full rounded-xl sm:rounded-2xl shadow-2xl"
                poster={selectedVideo.thumbnail}
              />
              <CloseButton onClick={() => setSelectedVideo(null)} />
            </motion.div>
          </motion.div>
        )}

        {/* Photo Gallery Modal */}
        {showPhotoGallery && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPhotoGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -30 }}
              className="relative bg-white dark:bg-gray-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl w-full max-w-6xl max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4 sm:mb-5 md:mb-6 sticky top-0 bg-white dark:bg-gray-800 py-2 z-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-pink-500">Our Beautiful Memories</h2>
                <CloseButton onClick={() => setShowPhotoGallery(false)} />
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {photos.map((photo) => (
                  <motion.div
                    key={photo.id}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className="cursor-pointer rounded-lg sm:rounded-xl overflow-hidden shadow-lg group"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="relative aspect-square">
                      <img 
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3">
                        <p className="text-white text-xs font-bold">{photo.date}</p>
                        <p className="text-gray-200 text-[10px] sm:text-xs">{photo.location}</p>
                      </div>
                    </div>
                    <p className="p-2 sm:p-3 text-[10px] sm:text-xs text-center bg-white dark:bg-gray-700 line-clamp-2">{photo.caption}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Single Photo Modal */}
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/98 z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -2, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotate: 2, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.caption}
                className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-5 md:p-6 rounded-b-xl sm:rounded-b-2xl">
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold">{selectedPhoto.caption}</p>
                <p className="text-gray-300 text-xs sm:text-sm">{selectedPhoto.date} • {selectedPhoto.location}</p>
              </div>
              <CloseButton onClick={() => setSelectedPhoto(null)} />
            </motion.div>
          </motion.div>
        )}

        {/* Love Quiz Modal */}
        {showLoveQuiz && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLoveQuiz(false)}
          >
            <motion.div
              initial={{ scale: 0, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0, rotateY: -90 }}
              className="relative bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl max-w-sm sm:max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setShowLoveQuiz(false)} />
              
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-pink-500 mx-auto mb-4 sm:mb-5 md:mb-6" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 md:mb-6">Love Quiz</h2>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 text-center">How much do we love each other?</p>
              <button
                onClick={calculateLoveScore}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl text-sm sm:text-base md:text-lg mb-3 sm:mb-4"
              >
                Calculate Love Score
              </button>
              {loveScore && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center"
                >
                  <p className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2">Our Love Score:</p>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500">{loveScore}%</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Future Dreams Modal */}
        {showFutureDreams && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFutureDreams(false)}
          >
            <motion.div
              initial={{ scale: 0, rotateX: -45 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0, rotateX: 45 }}
              className="relative bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl max-w-lg sm:max-w-xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setShowFutureDreams(false)} />
              
              <Rocket className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-pink-500 mx-auto mb-4 sm:mb-5 md:mb-6" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-5 md:mb-6 lg:mb-8">Our Future Dreams</h2>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {futureDreams.map((dream, index) => {
                  const IconComponent = dream.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className={`bg-gradient-to-r ${dream.color} p-3 sm:p-4 rounded-lg sm:rounded-xl text-white flex items-center gap-2 sm:gap-3`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                      <span className="text-xs sm:text-sm md:text-base">{dream.text}</span>
                      <span className="text-sm sm:text-base ml-auto">{dream.emoji}</span>
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
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSecretMessage(false)}
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              className="relative bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl max-w-sm sm:max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setShowSecretMessage(false)} />
              
              <Lock className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-pink-500 mx-auto mb-4 sm:mb-5 md:mb-6" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 md:mb-6">Secret Message</h2>
              <p className="text-center text-sm sm:text-base mb-3 sm:mb-4">Enter the secret code to reveal a special message:</p>
              <input
                type="text"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                placeholder="Enter code..."
                className="w-full p-2 sm:p-2.5 md:p-3 border rounded-lg sm:rounded-xl mb-3 sm:mb-4 text-sm sm:text-base"
                onKeyPress={(e) => e.key === 'Enter' && checkSecretCode()}
              />
              <button
                onClick={checkSecretCode}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base"
              >
                Unlock Secret
              </button>
              {showSecretMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 sm:mt-5 md:mt-6 p-4 sm:p-5 md:p-6 bg-pink-100 dark:bg-pink-900 rounded-lg sm:rounded-xl text-center"
                >
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500 mx-auto mb-2 sm:mb-3" fill="#ff69b4" />
                  <p className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2">✨ Secret Message Revealed! ✨</p>
                  <p className="text-xs sm:text-sm md:text-base">You are the most precious person in my life. I love you more than words can say!</p>
                  <p className="text-pink-500 font-bold text-sm sm:text-base md:text-lg mt-2 sm:mt-3">I LOVE YOU! ❤️</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* Time Capsule Modal */}
        {showTimeCapsule && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTimeCapsule(false)}
          >
            <motion.div
              initial={{ scale: 0, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0, rotateY: -90 }}
              className="relative bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl max-w-sm sm:max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setShowTimeCapsule(false)} />
              
              <Gift className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-yellow-500 mx-auto mb-4 sm:mb-5 md:mb-6" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4 md:mb-6">Time Capsule</h2>
              {!timeCapsuleOpened ? (
                <>
                  <p className="text-center text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">A special message for you, sealed with love...</p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={openTimeCapsule}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base"
                  >
                    Open Time Capsule
                  </motion.button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-3">Dear My Love,</p>
                  <p className="text-sm sm:text-base mb-3 sm:mb-4">Remember this beautiful moment. Our love grows stronger every day. You are my greatest treasure!</p>
                  <p className="text-pink-500 font-bold text-base sm:text-lg md:text-xl">Forever yours ❤️</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}