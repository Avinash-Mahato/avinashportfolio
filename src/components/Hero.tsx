import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Avinash</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Full Stack Developer & B.Tech CSE Student
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions with modern technologies. 
            Currently pursuing B.Tech in Computer Science Engineering with expertise in 
            web development and emerging technologies.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-200"
          >
            View Projects
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Avinash-Mahato"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500 transition-all duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/avinashkumarmahato"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500 transition-all duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            <ArrowDown size={32} className="mx-auto" />
          </a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero; 