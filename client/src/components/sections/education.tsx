import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Users } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

const Education = () => {
  const { education, awards } = portfolioData;

  const iconMap = {
    trophy: Trophy,
    award: Award,
    medal: Medal,
    users: Users
  };

  const colorMap = {
    yellow: "text-yellow-600",
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600"
  };

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Awards</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Academic achievements and recognitions</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-slate-100">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-white dark:bg-slate-900 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {edu.degree}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {edu.institution}
                        </p>
                      </div>
                      <Badge 
                        variant={edu.status === "Current" ? "default" : "secondary"}
                        className={edu.status === "Current" ? "bg-blue-600 text-white" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-slate-700 dark:text-slate-300">
                        {edu.details}
                      </p>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {edu.year}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Awards */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-slate-100">Awards & Achievements</h3>
            <div className="space-y-4">
              {awards.map((award, index) => {
                const IconComponent = iconMap[award.icon as keyof typeof iconMap];
                const iconColor = colorMap[award.color as keyof typeof colorMap];
                
                return (
                  <Card key={index} className="bg-white dark:bg-slate-900 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <IconComponent className={`h-5 w-5 ${iconColor} mr-3`} />
                        <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                          {award.title}
                        </h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        {award.organization} • {award.year}
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        {award.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
