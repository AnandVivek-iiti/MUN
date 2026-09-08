import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from "lucide-react";

export default function LovelyAlert({ 
  type = "info", 
  message = "This is a lovely alert!", 
  duration = 4000 
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const icons = {
    success: <CheckCircle2 className="text-[#00ffff]" size={28} />,
    error: <XCircle className="text-[#00ffff]" size={28} />,
    warning: <AlertTriangle className="text-[#00ffff]" size={28} />,
    info: <Info className="text-[#00ffff]" size={28} />,
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed top-20 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-lg 
                     bg-gradient-to-r from-[#00ffff] to-[#00ffff]/70 text-black font-medium 
                     backdrop-blur-lg border border-white/30"
        >
          <div className="flex items-center gap-2">
            {icons[type]}
            <span>{message}</span>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="ml-2 text-black/70 hover:text-black transition"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
