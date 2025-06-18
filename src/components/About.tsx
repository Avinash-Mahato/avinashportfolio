import { User, Code, Heart, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building complete web applications with modern technologies"
    },
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "Always exploring new technologies and best practices"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Finding innovative solutions to complex challenges"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Who I Am</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate Full Stack Developer and B.Tech Computer Science Engineering student 
              with a strong foundation in modern web technologies. I love creating innovative solutions 
              that solve real-world problems and enhance user experiences.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              With expertise in React.js, Node.js, and various modern frameworks, I specialize in 
              building scalable web applications. I'm constantly learning and adapting to new 
              technologies to stay at the forefront of web development.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-3 w-fit">
                    <highlight.icon className="text-white" size={20} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden flex items-center justify-center">
                  <img
                    src="assets/profile.jpeg"
                    alt="Avinash Kumar Mahato"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
            <div className="text-gray-400">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">kravinash442@gmail.com</div>
            <div className="text-gray-400">Email</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">9142831472</div>
            <div className="text-gray-400">Phone</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 