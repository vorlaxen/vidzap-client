import clsx from "clsx"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import VideoGrabber from "./Grabber" // Daha açıklayıcı isim

// Ana başlık render’ı
const LogoTitle = () => (
  <h1 className={clsx(
    'text-[5rem] sm:text-[9rem] font-medium tracking-tight leading-tight drop-shadow-sm min-h-[5rem]',
    'bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 dark:from-cyan-300 dark:via-violet-300 dark:to-fuchsia-400'
  )}>
    Vidzap
  </h1>
)

// Açıklama metni render’ı
const Tagline = () => (
  <p className='text-lg sm:text-xl dark:text-neutral-400 max-w-lg mx-auto text-center leading-relaxed mt-4'>
    The Ultimate Video Converter
  </p>
)

// Video URL input + indirme butonunu render eden component
const GrabberSection = () => (
  <div>
    <VideoGrabber />
  </div>
)

const HeroSection = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 0.80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const initialAnimation: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.95, ease: 'easeOut' } }
  };

  return (
    <motion.section
      variants={initialAnimation}
      initial="hidden"
      animate="visible"
      style={{ scale, opacity }}
      className="w-full relative min-h-screen flex flex-col items-center mt-32 overflow-hidden"
    >
      <LogoTitle />
      <Tagline />
      <GrabberSection />
    </motion.section>
  )
}

export default HeroSection
