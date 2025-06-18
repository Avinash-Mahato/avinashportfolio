import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Maharishi University of Information Technology",
      location: "Lucknow, Uttar Pradesh",
      period: "2021 - Present (7th Semester)",
      status: "Ongoing",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Center for Bioinformatics",
      location: "Ranchi, Jharkhand",
      period: "2018 - 2021",
      status: "85% - Distinction",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Tata DAV School",
      location: "Jamadoba, Dhanbad",
      period: "2016 - 2018",
      status: "Completed",
      icon: GraduationCap,
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">My academic journey and achievements</p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className={`p-4 rounded-full bg-gradient-to-r ${edu.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <edu.icon className="text-white" size={32} />
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 font-semibold text-lg">{edu.institution}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-purple-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-purple-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <div className="inline-block">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${edu.color} text-white`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 