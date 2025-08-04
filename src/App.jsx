import React from "react";
import { Card } from "@/components/ui/Card";
import { Mail, Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 p-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">Bastien Tiffy</h1>
        <TypeAnimation
          sequence={[
            "Étudiant en MSc à Epitech...",
            1500,
            "Développeur Web & Logiciel...",
            1500,
            "À la recherche d'une alternance !",
            2000,
          ]}
          wrapper="p"
          repeat={Infinity}
          className="text-xl text-gray-700"
        />
      </motion.header>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">À propos de moi</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Passionné par la tech,le developpement et l'automatisation, je me forme à Epitech Montpellier. Volontaire au SDIS 34, je combine rigueur, adaptabilité et esprit d'équipe au quotidien.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-10 text-center">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Gestionnaire de tâches",
              desc: "Node.js avec MongoDB pour organiser ses tâches avec authentification.",
              link: "https://github.com/Bastient6/epitodo"
            },
            {
              title: "RPG",
              desc: "RPG en CSFML — projet d'initiation à la CSFML",
              link: "https://github.com/Bastient6/rpg"
            },
            {
                title: "42Sh",
                desc: "Projet mythique d'Epitech reproduire un terminal de code en C",
                link: "https://github.com/Bastient6/42sh"
            },
            {
                title: "ZAPPY",
                desc: "Projet de fin de deuxième année réalisé à Epitech, intégrant un serveur en C, une intelligence artificielle développée en Python, ainsi qu'une interface graphique en C++.",
                link: "https://github.com/Bastient6/zappy"
            }
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-4">{proj.desc}</p>
              <a href={proj.link} className="inline-flex items-center text-indigo-500 hover:underline">
                Voir le code <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">Me contacter</h2>
        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:bastien.tiffy@epitech.eu">
            <Mail className="w-7 h-7 text-gray-700 hover:text-blue-600" />
          </a>
          <a href="https://github.com/Bastient6" target="_blank">
            <Github className="w-7 h-7 text-gray-700 hover:text-black" />
          </a>
          <a href="https://www.linkedin.com/in/bastien-tiffy-34b7a2241/" target="_blank">
            <Linkedin className="w-7 h-7 text-gray-700 hover:text-blue-700" />
          </a>
        </div>
        <a
          href="/Bastien_Tiffy_CV.pdf"
          download
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700"
        >
          <Download className="w-4 h-4" /> Télécharger mon CV
        </a>
      </motion.section>
    </div>
  );
}
