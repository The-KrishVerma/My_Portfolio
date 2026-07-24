import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Target, Star } from 'lucide-react';

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.473 3.835-1.452l2.609-2.636c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.9-.039zM20.811 11.25H10.667c-.735 0-1.333.598-1.333 1.333s.598 1.333 1.333 1.333h10.144c.735 0 1.333-.598 1.333-1.333s-.598-1.333-1.333-1.333z" />
  </svg>
);

const CodeforcesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7.5c0-.828.672-1.5 1.5-1.5h3z" />
  </svg>
);

const CodeChefIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.167 17.583c-.886.887-2.031 1.33-3.176 1.33-1.146 0-2.29-.443-3.176-1.33l-1.331-1.33 3.176-3.177 3.176 3.177-1.331 1.33zm-6.353-8.694l3.176 3.177-3.176 3.176-3.177-3.176 3.177-3.177zM6.823 6.417c.887-.887 2.031-1.33 3.177-1.33 1.145 0 2.29.443 3.176 1.33l1.331 1.33-3.176 3.176-3.176-3.176 1.33-1.33zM6.417 12c0 1.146.443 2.29 1.33 3.176l1.33-1.331-3.176-3.176L6.417 12zm11.166 0c0 1.146-.443 2.29-1.33 3.176l-1.33-1.331 3.177-3.176-1.33-1.33z"/>
  </svg>
);

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'LeetCode',
      icon: <LeetCodeIcon className="w-10 h-10 text-orange-400" />,
      link: 'https://leetcode.com/u/The-KrishVerma/',
      skills: ['1000+ Problems Solved'],
      summary: '1600+ Rated',
      color: 'bg-orange-500/20 text-orange-400 border-orange-400/30'
    },
    {
      name: 'Codeforces',
      icon: <CodeforcesIcon className="w-10 h-10 text-blue-400" />,
      link: 'https://codeforces.com/profile/The-KrishVerma',
      skills: ['Pupil Rank'],
      summary: '1300+ Rated (Pupil)',
      color: 'bg-blue-500/20 text-blue-400 border-blue-400/30'
    },
    {
      name: 'CodeChef',
      icon: <CodeChefIcon className="w-10 h-10 text-green-400" />,
      link: 'https://www.codechef.com/users/krish_verma636',
      skills: ['3 Star Rating'],
      summary: '1600+ Rated (3 Star)',
      color: 'bg-green-500/20 text-green-400 border-green-400/30'
    }
  ];

  return (
    <section id="coding-profiles" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 group card-shadow animate-fade-in flex flex-col items-center text-center"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6 flex flex-col items-center flex-grow">
                <div className="flex flex-col items-center mb-4">
                  <div className="text-2xl mb-2">
                    {profile.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-200">
                    {profile.name}
                  </h3>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  {profile.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={`${profile.color} hover:scale-105 transition-transform duration-200`}
                    >
                      {profile.name === 'CodeChef' && skill.includes('Star') && <Star className="w-4 h-4 mr-1" />}
                      {skill}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground text-base mt-4 text-center">{profile.summary}</p>

                <div className="mt-auto pt-4">
                    <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:shadow-lg transition-all duration-300">
                        <a href={profile.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                            View Profile <ExternalLink className="w-4 h-4" />
                        </a>
                    </Button>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Total Contests:</span>
              <span className="font-bold text-foreground">50+</span>
            </div>
            <div className="w-16 h-px bg-border sm:w-px sm:h-6"></div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Problems Solved:</span>
              <span className="font-bold text-foreground">2000+</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
