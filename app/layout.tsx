"use client"

import { Footer, Navbar } from "@/components";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <ClerkProvider>
      <html lang="en">

        <body className="relative" suppressHydrationWarning={true}>
          <>
          <motion.div className="progress-bar" style={{ scaleX }} />
          <Navbar />
           <AnimatePresence>
           <motion.div
            initial={{ opacity:0, y:15 }}
            animate={{ opacity:1 , y:0 }}
            exit={{ opacity:0, y:15 }}
            transition={{ delay:0.25 }}
            
            >
            
            {children}
            </motion.div>
           </AnimatePresence>
          </>
          <Footer />
        </body>
      </html>
    </ClerkProvider>

  );
}
