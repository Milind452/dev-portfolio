import BlastText from "../../components/BlastText/BlastText";
import Button from "../../components/Button/Button";

import "./Home.css";

import { motion } from "framer-motion";

export default function Home() {
    const sentence = "Hi,I'm Milind,Web Developer";
    const title = "Full Stack Developer";

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.3 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 4,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            },
        },
    };

    return (
        <div id="home" class="section-wrapper section-full">
            <div class="text-zone">
                <h1 class="heading" aria-label={sentence}>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {sentence.split(",").map((phrase, index) => (
                            <>
                                {phrase.split("").map((letter, index) => {
                                    if (letter === " ") {
                                        return <span>&nbsp;</span>;
                                    } else {
                                        return (
                                            <motion.span variants={item}>
                                                <BlastText
                                                    aria-hidden="true"
                                                    key={`phrase${index}`}
                                                >
                                                    {letter}
                                                </BlastText>
                                            </motion.span>
                                        );
                                    }
                                })}
                                <motion.span variants={item}>
                                    <BlastText
                                        aria-hidden="true"
                                        key={`comma${index}`}
                                    >
                                        ,
                                    </BlastText>
                                </motion.span>
                                <br key={`break${index}`} />
                            </>
                        ))}
                    </motion.div>
                </h1>
                <p class="gray-text">{title}</p>
                <Button title="Contact me!" rel="contact" href="#contact" />
            </div>
        </div>
    );
}
