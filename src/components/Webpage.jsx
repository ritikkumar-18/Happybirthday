
// import { motion, AnimatePresence } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import Confetti from "react-confetti";

// import {
//   Heart,
//   Cake,
//   Gift,
//   Sparkles,
//   Music,
//   Coffee,
//   X
// } from "lucide-react";
// import { useEffect, useState } from "react";

// const Webpage = () => {

// const [showCard,setShowCard] = useState(false)
// const [showLetter,setShowLetter] = useState(false)
// const [loveQuote,setLoveQuote] = useState("")
// const [showConfetti,setShowConfetti] = useState(false)
// const [currentQuote,setCurrentQuote] = useState(0)

// const quotes = [
// "You make every day feel like magic.",
// "The world became brighter the day you were born.",
// "You are my favorite person.",
// "Every moment with you is beautiful.",
// "My heart chose you forever."
// ]

// const loveQuotes = [
// "Happy Birthday to the girl who stole my heart ❤️",
// "You are my today and all of my tomorrows.",
// "My favorite place in the world is next to you.",
// "Life with you feels like a dream.",
// "You make my universe complete."
// ]

// const generateQuote = () => {
// const random = Math.floor(Math.random()*loveQuotes.length)
// setLoveQuote(loveQuotes[random])
// }

// useEffect(()=>{
// const interval = setInterval(()=>{
// setCurrentQuote(prev => (prev+1)%quotes.length)
// },4000)

// return () => clearInterval(interval)

// },[])

// const containerVariants = {
// hidden:{opacity:0},
// visible:{
// opacity:1,
// transition:{
// staggerChildren:0.25
// }
// }
// }

// const itemVariants = {
// hidden:{opacity:0,y:30},
// visible:{opacity:1,y:0}
// }

// return (

// <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">

// {showConfetti && <Confetti />}

// {/* Floating Hearts */}

// <div className="fixed inset-0 pointer-events-none">

// {[...Array(10)].map((_,i)=>(

// <motion.div
// key={i}
// className="absolute text-pink-400"
// initial={{y:600,x:Math.random()*window.innerWidth}}
// animate={{y:-200}}
// transition={{
// duration:12+Math.random()*6,
// repeat:Infinity
// }}
// >
// ❤️
// </motion.div>

// ))}

// </div>

// {/* Floating Balloons */}

// <div className="fixed inset-0 pointer-events-none">

// {[...Array(6)].map((_,i)=>(

// <motion.div
// key={i}
// className="absolute text-5xl"
// initial={{y:600,x:Math.random()*window.innerWidth}}
// animate={{y:-200}}
// transition={{
// duration:15+Math.random()*5,
// repeat:Infinity
// }}
// >
// 🎈
// </motion.div>

// ))}

// </div>

// <motion.div
// variants={containerVariants}
// initial="hidden"
// animate="visible"
// className="max-w-6xl mx-auto px-6 py-12 relative z-10"
// >

// {/* Header */}

// <motion.div variants={itemVariants} className="text-center mb-12">

// <motion.h1
// className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
// animate={{scale:[1,1.1,1]}}
// transition={{duration:3,repeat:Infinity}}
// >

// Happy Birthday ❤️

// </motion.h1>

// <p className="text-xl text-gray-600 mt-4">
// To the most amazing person in my life
// </p>

// </motion.div>

// {/* Rotating Quote */}

// <motion.div
// variants={itemVariants}
// className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl text-center mb-12"
// >

// <AnimatePresence mode="wait">

// <motion.p
// key={currentQuote}
// initial={{opacity:0,y:20}}
// animate={{opacity:1,y:0}}
// exit={{opacity:0}}
// className="text-2xl italic text-gray-800"
// >

// "{quotes[currentQuote]}"

// </motion.p>

// </AnimatePresence>

// </motion.div>

// {/* 3D Love Cards */}

// <motion.div variants={itemVariants} className="mb-14">

// <h2 className="text-3xl text-center font-bold mb-8">
// Things I Love About You
// </h2>

// <div className="grid md:grid-cols-3 gap-8">

// {[
// {title:"Your Smile",text:"Your smile lights up my entire world."},
// {title:"Your Kind Heart",text:"You make everyone around you happy."},
// {title:"Your Laugh",text:"Your laugh is my favorite sound."}
// ].map((card,i)=>(

// <Tilt key={i} glareEnable={true} scale={1.05}>

// <div className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl">

// <Heart className="text-pink-500 mb-4"/>

// <h3 className="text-xl font-bold">{card.title}</h3>

// <p className="text-gray-700 mt-2">
// {card.text}
// </p>

// </div>

// </Tilt>

// ))}

// </div>

// </motion.div>

// {/* Love Quote Generator */}

// <motion.div variants={itemVariants} className="text-center mb-14">

// <button
// onClick={generateQuote}
// className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg"
// >

// Generate Love Quote 💌

// </button>

// {loveQuote && (

// <motion.p
// initial={{opacity:0,y:20}}
// animate={{opacity:1,y:0}}
// className="mt-6 text-2xl italic text-gray-800"
// >

// {loveQuote}

// </motion.p>

// )}

// </motion.div>

// {/* Interactive Buttons */}

// <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">

// <button
// onClick={()=>alert("Blow candles and make a wish 🎂")}
// className="bg-yellow-400 text-white px-6 py-3 rounded-full flex gap-2"
// >

// <Cake size={20}/> Blow Candle

// </button>

// <button
// onClick={()=>{setShowConfetti(true)}}
// className="bg-green-500 text-white px-6 py-3 rounded-full flex gap-2"
// >

// <Gift size={20}/> Open Present

// </button>

// <button
// onClick={()=>alert("Romantic music playing 🎵")}
// className="bg-purple-500 text-white px-6 py-3 rounded-full flex gap-2"
// >

// <Music size={20}/> Play Song

// </button>

// <button
// onClick={()=>alert("Coffee date time ☕")}
// className="bg-orange-500 text-white px-6 py-3 rounded-full flex gap-2"
// >

// <Coffee size={20}/> Coffee Time

// </button>

// </motion.div>

// {/* Love Letter */}

// <motion.div className="text-center mb-14">

// <button
// onClick={()=>setShowLetter(!showLetter)}
// className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-xl"
// >

// Open Love Letter 💌

// </button>

// <AnimatePresence>

// {showLetter && (

// <motion.div
// initial={{opacity:0,scale:0.8}}
// animate={{opacity:1,scale:1}}
// exit={{opacity:0}}
// className="mt-8 bg-white/80 p-8 rounded-2xl shadow-xl max-w-xl mx-auto"
// >

// <p className="text-lg text-gray-800">

// Happy Birthday my love ❤️  

// You make my world brighter every single day.  
// Every moment with you feels magical.  

// Thank you for being the most beautiful part of my life.

// I hope this year brings you happiness, dreams coming true, and endless love.

// </p>

// </motion.div>

// )}

// </AnimatePresence>

// </motion.div>

// </motion.div>

// </div>

// )

// }

// export default Webpage
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Confetti from "react-confetti";
import { Heart, Cake, Gift, Sparkles, Music, Coffee } from "lucide-react";
import { useEffect, useState } from "react";

const Webpage = () => {

const [showLetter,setShowLetter] = useState(false)
const [loveQuote,setLoveQuote] = useState("")
const [showConfetti,setShowConfetti] = useState(false)
const [currentQuote,setCurrentQuote] = useState(0)
const [cursorHearts,setCursorHearts] = useState([])
const [musicPlaying,setMusicPlaying] = useState(false)
const [surprise,setSurprise] = useState("")

const quotes = [
"You make every day feel like magic.",
"The world became brighter the day you were born.",
"You are my favorite person.",
"Every moment with you is beautiful.",
"My heart chose you forever.",
"You are the best part of my life.",
"Every love story is beautiful, but ours is my favorite."
]

const loveQuotes = [
"You are my sunshine on cloudy days ☀️",
"My favorite place is next to you ❤️",
"Every day I fall for you again 💕",
"You make ordinary days extraordinary ✨",
"You are my happiness in human form",
"I love you more with every heartbeat",
"You make my universe complete 🌌"
]

const generateQuote = ()=>{
const random = Math.floor(Math.random()*loveQuotes.length)
setLoveQuote(loveQuotes[random])
}

useEffect(()=>{

const interval = setInterval(()=>{
setCurrentQuote(prev => (prev+1)%quotes.length)
},4000)

return ()=>clearInterval(interval)

},[])

useEffect(()=>{

const handleMove = (e)=>{

const heart = {
id:Date.now(),
x:e.clientX,
y:e.clientY
}

setCursorHearts(prev=>[...prev,heart])

setTimeout(()=>{
setCursorHearts(prev=>prev.slice(1))
},800)

}

window.addEventListener("mousemove",handleMove)

return ()=>window.removeEventListener("mousemove",handleMove)

},[])

const containerVariants={
hidden:{opacity:0},
visible:{opacity:1,transition:{staggerChildren:0.25}}
}

const itemVariants={
hidden:{opacity:0,y:40},
visible:{opacity:1,y:0}
}

return(

<div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 overflow-hidden relative">

{showConfetti && <Confetti/>}

{/* Cursor Hearts */}

{cursorHearts.map(h=>(
<motion.div
key={h.id}
initial={{opacity:1,scale:1}}
animate={{opacity:0,scale:2,y:-40}}
transition={{duration:0.8}}
style={{position:"fixed",left:h.x,top:h.y,pointerEvents:"none"}}
>
❤️
</motion.div>
))}

{/* Floating Hearts */}

<div className="fixed inset-0 pointer-events-none">

{[...Array(10)].map((_,i)=>(
<motion.div
key={i}
className="absolute text-pink-400"
initial={{y:600,x:Math.random()*window.innerWidth}}
animate={{y:-200}}
transition={{duration:12+Math.random()*6,repeat:Infinity}}
>
❤️
</motion.div>
))}

</div>

{/* Floating Balloons */}

<div className="fixed inset-0 pointer-events-none">

{[...Array(6)].map((_,i)=>(
<motion.div
key={i}
className="absolute text-5xl"
initial={{y:600,x:Math.random()*window.innerWidth}}
animate={{y:-200}}
transition={{duration:15+Math.random()*5,repeat:Infinity}}
>
🎈
</motion.div>
))}

</div>

{/* Sparkles */}

<div className="fixed inset-0 pointer-events-none">

{[...Array(8)].map((_,i)=>(
<motion.div
key={i}
className="absolute text-yellow-300"
initial={{y:500,x:Math.random()*window.innerWidth}}
animate={{y:-200,rotate:360}}
transition={{duration:10+Math.random()*5,repeat:Infinity}}
>
<Sparkles/>
</motion.div>
))}

</div>

<motion.div
variants={containerVariants}
initial="hidden"
animate="visible"
className="max-w-6xl mx-auto px-6 py-12 relative z-10"
>

{/* Header */}

<motion.div variants={itemVariants} className="text-center mb-14">

<motion.h1
className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
animate={{scale:[1,1.1,1]}}
transition={{duration:3,repeat:Infinity}}
>

Happy Birthday ❤️

</motion.h1>

<p className="text-xl text-gray-600 mt-4">
To the most amazing person in my life
</p>

</motion.div>

{/* Rotating Quotes */}

<motion.div variants={itemVariants} className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl text-center mb-12">

<AnimatePresence mode="wait">

<motion.p
key={currentQuote}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
exit={{opacity:0}}
className="text-2xl italic text-gray-800"
>

"{quotes[currentQuote]}"

</motion.p>

</AnimatePresence>

</motion.div>

{/* Love Cards */}

<motion.div variants={itemVariants} className="mb-14">

<h2 className="text-3xl text-center font-bold mb-8">
Things I Love About You
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
{title:"Your Smile",text:"Your smile lights up my entire world."},
{title:"Your Kind Heart",text:"You make everyone around you happy."},
{title:"Your Laugh",text:"Your laugh is my favorite sound."},
{title:"Your Eyes",text:"I could get lost in your eyes forever."},
{title:"Your Care",text:"You care about people beautifully."},
{title:"Your Presence",text:"Everything feels better when you're around."}
].map((card,i)=>(

<Tilt key={i} glareEnable={true} scale={1.05}>

<div className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl">

<Heart className="text-pink-500 mb-4"/>

<h3 className="text-xl font-bold">{card.title}</h3>

<p className="text-gray-700 mt-2">{card.text}</p>

</div>

</Tilt>

))}

</div>

</motion.div>

{/* Quote Generator */}

<motion.div variants={itemVariants} className="text-center mb-14">

<button
onClick={generateQuote}
className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg"
>
Generate Love Quote 💌
</button>

{loveQuote &&(

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="mt-6 text-2xl italic text-gray-800"
>

{loveQuote}

</motion.p>

)}

</motion.div>

{/* Interactive Buttons */}

<motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">

<button
onClick={()=>alert("Blow candles and make a wish 🎂")}
className="bg-yellow-400 text-white px-6 py-3 rounded-full flex gap-2"
>
<Cake size={20}/> Blow Candle
</button>

<button
onClick={()=>{

setShowConfetti(true)

setTimeout(()=>{
setShowConfetti(false)
},5000)

}}
className="bg-green-500 text-white px-6 py-3 rounded-full flex gap-2"
>
<Gift size={20}/> Open Present
</button>

<button
onClick={()=>setMusicPlaying(!musicPlaying)}
className="bg-purple-500 text-white px-6 py-3 rounded-full flex gap-2"
>
<Music size={20}/>
{musicPlaying ? "Pause Music":"Play Music"}
</button>

<button
onClick={()=>alert("Coffee date time ☕")}
className="bg-orange-500 text-white px-6 py-3 rounded-full flex gap-2"
>
<Coffee size={20}/> Coffee Time
</button>

</motion.div>

{/* Surprise Cards */}

<motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-14">

{[
"You're the most beautiful person in my universe 🌌",
"I still fall for you every single day 💕",
"Your smile is my favorite thing 😊",
"You make life feel magical ✨",
"I love every little thing about you ❤️",
"Being with you is my favorite place 🫶"
].map((msg,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05,rotate:2}}
whileTap={{scale:0.95}}
onClick={()=>setSurprise(msg)}
className="cursor-pointer bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg text-center"
>

<Heart className="mx-auto text-pink-500 mb-2"/>

<p className="font-semibold">
Tap for Surprise
</p>

</motion.div>

))}

</motion.div>

{surprise &&(

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="text-center mb-12 text-2xl text-pink-600 font-semibold"
>

{surprise}

</motion.div>

)}

{/* Love Letter */}

<motion.div className="text-center mb-14">

<button
onClick={()=>setShowLetter(!showLetter)}
className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-xl"
>
Open Love Letter 💌
</button>

<AnimatePresence>

{showLetter &&(

<motion.div
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
exit={{opacity:0}}
className="mt-8 bg-white/80 p-8 rounded-2xl shadow-xl max-w-xl mx-auto"
>

<p className="text-lg text-gray-800">

Happy Birthday my love ❤️  

You make my world brighter every single day.  
Every moment with you feels magical.  

Thank you for being the most beautiful part of my life.

I hope this year brings you happiness, dreams coming true, and endless love.

</p>

</motion.div>

)}

</AnimatePresence>

</motion.div>

</motion.div>

{musicPlaying &&(

<audio autoPlay loop>

<source src="https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a73467.mp3"/>

</audio>

)}

</div>

)

}

export default Webpage