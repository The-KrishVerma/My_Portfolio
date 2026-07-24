import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const Education = () => {
  const education = [{
    degree: "B.Tech in Information Technology",
    institution: "Indian Institute of Information Technology Allahabad",
    location: "Prayagraj, Uttar Pradesh",
    year: "2024 - 2028",
    status: "Current",
    description: "CGPA: 8.81 (Top 5% of batch)"
  }, {
    degree: "Class XII (CBSE)",
    institution: "Police DAV Public School",
    location: "Ambala City, Haryana",
    year: "2023 - 2024",
    status: "Completed",
    description: "Score: 93.8%"
  }, {
    degree: "Class X (CBSE)",
    institution: "DAV Public School",
    location: "Ambala Cantt, Haryana",
    year: "2021 - 2022",
    status: "Completed",
    description: "Score: 92%"
  }];

  return (
    <section id="education" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="absolute left-4 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block glow-accent z-10"></div>
                
                <Card className="md:ml-16 bg-card border-border hover:border-accent/50 transition-all duration-300 group card-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold group-hover:text-accent transition-colors duration-200">
                        {edu.institution}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${edu.status === 'Current' ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'}`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-accent font-medium">{edu.degree}</p>
                      <p className="text-muted-foreground text-sm">{edu.year}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;