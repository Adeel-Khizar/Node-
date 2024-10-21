import { ReactNode } from 'react';
"use client";

import { useRef, useEffect, memo } from "react";
import { useAnimation, useInView } from "framer-motion";
import localFont from "next/font/local";
import * as motion from "framer-motion/client";
import MaskedCursor from '@/components/MaskedCursor/MaskedCursor';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const blackSlideControls = useAnimation();
    const whiteSlideControls = useAnimation();
  
    // Trigger animations on scroll when in view
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
        blackSlideControls.start("visible");
        whiteSlideControls.start("visible");
      }
    }, [isInView]);
  return (
    <main>
 <div
          ref={ref}
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* Main content animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {children}
          </motion.div>

          {/* Black overlay animation */}
          <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: "100%" },
            }}
            initial="hidden"
            animate={blackSlideControls}
            transition={{ duration: 1.5, ease: "easeIn" }}
            style={{
              position: "absolute",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              background: "#000000",
              zIndex: 20,
            }}
          />

          {/* White overlay animation (delayed) */}
          <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: "100%" },
            }}
            initial="hidden"
            animate={whiteSlideControls}
            transition={{ duration: 1.5, delay: 0.10, ease: "easeIn" }}
            style={{
              position: "absolute",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              background: "#ffffff",
              zIndex: 19,
            }}
          />
              <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: "100%" },
            }}
            initial="hidden"
            animate={whiteSlideControls}
            transition={{ duration: 1.5, delay: 0.05, ease: "easeIn" }}
            style={{
              position: "absolute",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              background: "#3B82F6",
              zIndex: 19,
            }}
          />
        </div>
    </main>
  );
};

export default RootLayout;