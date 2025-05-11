import { IconSearch, IconBrain, IconBookDownload, IconShieldCheck } from "@tabler/icons-react";


import { motion } from "framer-motion";

const features = [
  {
    Icon: IconSearch,
    title: "AI-Powered Search",
    description: "Natural language understanding for Quranic concepts"
  },
  {
    Icon: IconBrain,
    title: "Contextual Analysis",
    description: "Deep learning models for verse interpretation"
  },
  {
    Icon: IconBookDownload,
    title: "Tafsir Integration",
    description: "Classical commentaries at your fingertips"
  },
  {
    Icon: IconShieldCheck,
    title: "Authentic Sources",
    description: "Verified translations and references"
  }
];

const FeatureGrid = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map(({ Icon, title, description }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-gray-800"
        >
          <div className="mb-4 text-primary">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default FeatureGrid;