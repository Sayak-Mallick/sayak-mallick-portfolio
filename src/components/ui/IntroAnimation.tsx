import {useEffect, useMemo, useState} from "react";
import { AnimatePresence, motion} from "framer-motion";

interface IntroAnimationProps {
    onFinish: () => void;
}

const IntroAnimation = ({ onFinish }: IntroAnimationProps) => {
    const greetings = useMemo(() => ["Welcome", "स्वागत है", "স্বাগतम", "സ്വാഗതം", "வணக்கம்",
        "స్వాగతం", "સ્વાગત છે", "ਸੁਆਗਤ ਹੈ", "স্বাগতম আসুন", "ସ୍ଵାଗତ", "स्वागत छ",
        "স্বাগত आहे", "स्वागतम्"], []) ;
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if(index < greetings.length - 1) {
            const id = setInterval(() => setIndex((i) => i + 1), 180);
            return () => clearInterval(id);
        } else {
            const timeoutId = setTimeout(() => setVisible(false), 1000);
            return () => clearTimeout(timeoutId);
        }
    },[index, greetings.length]);

    return (
        <>
            <AnimatePresence onExitComplete={onFinish}>
                {visible && (
                    <motion.div
                        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
                        initial={{ y:0 }}
                        exit={{ y: "-100%", transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } }}
                    >
                        <motion.h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
                        initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.12}}>
                            {greetings[index]}
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
export default IntroAnimation
