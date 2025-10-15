import React from "react";

const projects = [
  {
    name: "Bergen Works",
    description: "Frontend-utvikling for moderne webapplikasjon.",
    image: "Bergen.Works2.png",
    link: "https://bergen.works",
    github: "https://github.com/Enforsix",
  },
  {
    name: "OIID-Gules",
    description: "Prosjekt utviklet i React og Next.js.",
    image: "Oiid2.png",
    link: "https://oiid-gules.vercel.app",
    github: "https://github.com/Enforsix",
  },
  {
    name: "Napracare",
    description: "Webapplikasjon med fokus på responsivt design.",
    image: "Napracare2.png",
    link: "https://napracare.vercel.app",
    github: "https://github.com/Enforsix",
  },
  {
    name: "Kodeveret Bergen",
    description: "Webapplikasjon med fokus på responsivt design.",
    image: "KodeVerketBergen.png",
    link: "http://kodeverketbergen.no",
    github: "https://github.com/Enforsix",
  },

];


const skills = [
  "React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "TailwindCSS",
  "Figma", "GitHub", "Komponentbasert utvikling"
];

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hjem / Intro */}
      <section className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-lime-500 to-green-900 text-white text-center md:text-left p-8 gap-8">
  <div className="flex md:w-1/2 ">
  <div className="md:w-1/2 flex justify-center">
    <img 
      src="christian.jpg" 
      alt="Christian Gullaksen" 
      className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
    />
  </div>
  <div>
    <h1 className="text-5xl font-bold mb-4">Christian Gullaksen</h1>
    <p className="text-xl mb-6">Frontend-utvikler | React & Next.js</p>
    <a href="#contact" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
      Kontakt meg
    </a>
    </div>    
  </div>
  
</section>

      {/* Om meg */}
      <section id="about" className="p-8 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-4">Om meg</h2>
  <p className="mb-4">
    Frontend-utvikler med praktisk erfaring i utvikling av moderne webapplikasjoner ved bruk av React, TypeScript, Next.js og GitHub. Erfaring med komponentbasert utvikling, routing og state-håndtering.
  </p>
  <p className="mb-4">
    Tidligere erfaring innen elektro og teknisk arbeid, med sterk evne til å lære raskt, samarbeide godt og levere strukturert arbeid. Jeg liker å lære nye ting og bruker ofte tid på kurs på Scrimba for å holde meg oppdatert på moderne teknologier og verktøy.
  </p>
  <p>
    Har gjennomført kurs og prosjekter med fokus på brukervennlig og responsivt design, komponentbasert utvikling og moderne frontend-rammeverk.
  </p>
</section>

      {/* Prosjekter */}
      <div className="text-center text-3xl font-bold mb-3"><h2>Prosjekter jeg har jobbet med</h2></div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {projects.map((project) => (
    <a
      key={project.name}
      href={project.link}
      target="_blank"
      className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition transform hover:scale-105"
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </a>
  ))}
</div>


      {/* Ferdigheter */}
      <section id="skills" className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Ferdigheter</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-lime-500 hover:bg-green-900 text-black px-4 py-2 rounded-full">{skill}</span>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="p-8 bg-gray-100 w-full mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
        <p className="mb-2">gullaksen_christian@hotmail.com</p>
        <p className="mb-2">+47 950 66 640</p>
        <p className="mb-2">Bergen, Norge</p>
        <a href="https://github.com/Enforsix" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
      </section>
    </div>
  );
}