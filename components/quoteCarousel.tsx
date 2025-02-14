"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quotes } from "@/data/quote";

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-center max-w-3xl bg-white/20 p-6 rounded-xl shadow-lg text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl italic mb-4">
            "{quotes[index].text}"
          </p>
          <div className="mt-4">
            <p className="font-bold text-lg">{quotes[index].author}</p>
            <p className="text-sm text-gray-300">
              {quotes[index].company} - {quotes[index].country}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}