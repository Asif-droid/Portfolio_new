import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Mic, Activity, BarChart, Book, Globe, ArrowRight } from "lucide-react";
import { ProjectModal } from "@/components/ui/project-modal";
import { portfolioData } from "@/data/portfolio-data";

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const iconMap = {
    "file-text": FileText,
    mic: Mic,
    activity: Activity,
    "bar-chart": BarChart,
    book: Book,
    globe: Globe
  };

  const colorMap = {
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600",
    purple: "text-purple-600",
    amber: "text-amber-600",
    cyan: "text-cyan-600"
  };

  const bgColorMap = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
    green: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
    red: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
    amber: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
    cyan: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300"
  };

  const hoverColorMap = {
    blue: "hover:text-blue-800 dark:hover:text-blue-300",
    green: "hover:text-green-800 dark:hover:text-green-300",
    red: "hover:text-red-800 dark:hover:text-red-300",
    purple: "hover:text-purple-800 dark:hover:text-purple-300",
    amber: "hover:text-amber-800 dark:hover:text-amber-300",
    cyan: "hover:text-cyan-800 dark:hover:text-cyan-300"
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Some of my notable work and contributions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            const iconColor = colorMap[project.color as keyof typeof colorMap];
            const badgeColor = bgColorMap[project.color as keyof typeof bgColorMap];
            const hoverColor = hoverColorMap[project.color as keyof typeof hoverColorMap];
            
            return (
              <Card 
                key={project.id} 
                className="bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-6 w-6 ${iconColor} mr-3`} />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Badge key={index} variant="secondary" className={`text-xs ${badgeColor}`}>
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`${iconColor} ${hoverColor} font-medium p-0`}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
