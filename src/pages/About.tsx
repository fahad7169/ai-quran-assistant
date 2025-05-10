// src/pages/About.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { IconUsers, IconHeartHandshake, IconShieldLock } from "@tabler/icons-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-16 pb-16"
    >
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            About Quran AI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging traditional Islamic scholarship with modern AI technology
            to enhance your understanding of the Quran.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <Card className="backdrop-blur-lg bg-white/5 border-gray-800">
          <CardContent className="p-6 space-y-4">
            <IconHeartHandshake className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-400">
              To make Quranic knowledge accessible through AI while maintaining
              academic integrity and Islamic values.
            </p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-lg bg-white/5 border-gray-800">
          <CardContent className="p-6 space-y-4">
            <IconShieldLock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold">Authenticity</h3>
            <p className="text-gray-400">
              Verified by Islamic scholars and powered by state-of-the-art
              language models trained on authentic sources.
            </p>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-lg bg-white/5 border-gray-800">
          <CardContent className="p-6 space-y-4">
            <IconUsers className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold">Community</h3>
            <p className="text-gray-400">
              Join thousands of users worldwide exploring the Quran with
              AI-powered insights.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-primary text-center">
          Our Team
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Aisha Khan", role: "AI Researcher" },
            { name: "Omar Ahmed", role: "Quranic Scholar" },
            { name: "Fatima Ali", role: "Lead Developer" },
            { name: "Yusuf Ibrahim", role: "UI/UX Designer" },
          ].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary to-purple-400 mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;