import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
      color: "bg-blue-500/20 text-blue-400 border-blue-400/30"
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
      color: "bg-green-500/20 text-green-400 border-green-400/30"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB", "Firebase"],
      color: "bg-purple-500/20 text-purple-400 border-purple-400/30"
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Linux", "Docker", "VS Code", "IntelliJ", "Postman", "Figma"],
      color: "bg-orange-500/20 text-orange-400 border-orange-400/30"
    },
    {
      title: "Relevant Coursework",
      icon: "📚",
      skills: ["Data Structures and Algorithms", "Database Management Systems", "Object-Oriented Programming", "Operating Systems", "Computer Networks"],
      color: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30"
    }
  ];

  return (
    <section id="skills" className="py-16 gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`bg-card/40 backdrop-blur-sm border-white/10 card-shadow animate-fade-in flex flex-col sm:flex-row items-stretch w-full relative overflow-hidden`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`absolute -left-10 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl opacity-10 ${category.color.split(' ')[0]}`}></div>
              
              <div className="p-6 sm:p-8 sm:w-1/3 w-full border-b sm:border-b-0 sm:border-r border-white/10 flex items-center justify-center sm:justify-start relative z-10 bg-black/20">
                <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left">{category.title}</h3>
              </div>
              
              <div className="p-6 sm:p-8 sm:w-2/3 w-full flex flex-wrap gap-3 items-center relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="outline"
                    className={`${category.color} px-4 py-2 text-sm sm:text-base backdrop-blur-md cursor-default flex-grow text-center justify-center`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
