import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Eye, MessageCircle, Code, Cloud } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

const Skills = () => {
  const { skills } = portfolioData;

  const iconMap = {
    brain: Brain,
    "chart-line": TrendingUp,
    eye: Eye,
    "message-circle": MessageCircle,
    code: Code,
    cloud: Cloud
  };

  const colorMap = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    cyan: "text-cyan-600",
    orange: "text-orange-600",
    indigo: "text-indigo-600"
  };

  const bgColorMap = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    cyan: "bg-cyan-600",
    orange: "bg-orange-600",
    indigo: "bg-indigo-600"
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => {
            const IconComponent = iconMap[skillGroup.icon as keyof typeof iconMap];
            const iconColor = colorMap[skillGroup.color as keyof typeof colorMap];
            const bgColor = bgColorMap[skillGroup.color as keyof typeof bgColorMap];
            
            return (
              <Card key={index} className="bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-6 w-6 ${iconColor} mr-3`} />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <div className="flex items-center">
                          <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full mr-2">
                            <div 
                              className={`h-full ${bgColor} rounded-full transition-all duration-300`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 w-8">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
