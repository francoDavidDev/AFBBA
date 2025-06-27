// src/components/ui/SubmitButtonMorph.jsx
import { motion, AnimatePresence } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const SubmitButtonMorph = ({ loading, sent, text = "Enviar" }) => {
  return (
    <AnimatePresence>
      {!sent && (
        <motion.button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center text-white font-semibold bg-gradient-to-r from-blue-400 to-blue-500 shadow-xl"
          initial={{ width: "200px", height: "48px", borderRadius: "9999px" }}
          animate={{
            width: loading ? "48px" : "200px",
            height: "48px",
            borderRadius: "9999px",
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.3 },
          }}
        >
          {loading ? (
            <FaSpinner className="animate-spin text-white text-lg" />
          ) : (
            text
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default SubmitButtonMorph;
