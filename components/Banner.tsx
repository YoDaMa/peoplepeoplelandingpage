"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 overflow-hidden bg-accent"
        >
          <div className="flex items-center justify-center px-6 py-2.5">
            <p className="text-sm font-medium text-foreground">
              our app is now LIVE!!! :)
            </p>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-4 text-foreground/60 transition-colors hover:text-foreground"
              aria-label="Dismiss banner"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="1" y1="1" x2="13" y2="13" />
                <line x1="13" y1="1" x2="1" y2="13" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
