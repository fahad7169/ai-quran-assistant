// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {


  return (
    <nav className="backdrop-blur-lg bg-white/10 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          {/* <QuranIcon className="h-8 w-8 text-primary" /> */}
          <motion.span 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Quran AI
          </motion.span>
        </Link>

        <div className="flex items-center gap-6">
            <motion.div whileHover={{ transition: { duration: 0.2 } }}>
  <Link to="/about">
    <Button variant="ghost" className="text-lg relative group">
      <motion.span
        className="relative"
        initial={false}
        animate={{
          textDecoration: "none",
        }}
        whileHover={{
          textDecoration: "none",
        }}
      >
        About
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.span>
    </Button>
  </Link>
</motion.div>

     <motion.div whileHover={{ scale: 1.05 }}>


            
     </motion.div>
       

          

        
        </div>
      </div>
    </nav>
  );
}