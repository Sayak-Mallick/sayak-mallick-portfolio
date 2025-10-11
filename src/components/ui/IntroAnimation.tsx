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
                        className="fixed inset-0 bg-black flex items-center justify-center z-50"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                            {greetings[index]}
                        </h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
export default IntroAnimation
