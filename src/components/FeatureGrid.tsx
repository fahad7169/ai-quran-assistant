import { motion } from "framer-motion";
import { IconSearch, IconBrain, IconBookDownload, IconShieldCheck } from "@tabler/icons-react";

const features = [
  {
    icon: <IconSearch className="h-8 w-8" />,
    title: "AI-Powered Search",
    description: "Natural language understanding for Quranic concepts"
  },
  {
    icon: <IconBrain className="h-8 w-8" />,
    title: "Contextual Analysis",
    description: "Deep learning models for verse interpretation"
  },
  {
    icon: <IconBookDownload className="h-8 w-8" />,
    title: "Tafsir Integration",
    description: "Classical commentaries at your fingertips"
  },
  {
    icon: <IconShieldCheck className="h-8 w-8" />,
    title: "Authentic Sources",
    description: "Verified translations and references"
  }
];

const FeatureGrid = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-gray-800"
        >
          <div className="mb-4 text-primary">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default FeatureGrid;