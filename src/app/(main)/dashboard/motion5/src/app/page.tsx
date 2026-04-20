"use client";
import "./globals.css";
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import styles from "../style/style.module.scss";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="p-20">
      <div
        className={styles.container}
        data-darkmode={isOn}
        onClick={() => setIsOn(!isOn)}
        style={{
          justifyContent: isOn ? "flex-end" : "flex-start",
          position: "relative",
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isOn ? 1 : 0 }}
          transition={{ delay: 0.2 }}
          className="text-black absolute top-2 left-3"
        >
          EN
        </motion.span>
        <motion.div layout className={styles.handle}>
          <AnimatePresence initial={false}>
            <motion.div
              className={`icon far fa-${isOn ? "moon" : "sun"}`}
              key={isOn ? "moon" : "sun"}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: !isOn ? 1 : 0 }}
          transition={{ delay: 0.2 }}
          className="text-black absolute top-2 right-3"
        >
          ES
        </motion.span>
      </div>
    </div>
  );
};

export default Switch;
