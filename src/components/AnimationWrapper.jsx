import { motion } from "framer-motion";

const AnimationWrapper = ({ 
  children, 
  type = "fade-up", 
  delay = 0, 
  duration = 0.6,
  className = ""
}) => {
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    "fade-down": {
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0 }
    },
    "fade-left": {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    "fade-right": {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    "scale": {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variants[type]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
