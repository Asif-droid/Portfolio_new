import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: typeof portfolioData.projects[0] | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const bgColorMap = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
    green: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
    red: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
    amber: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
    cyan: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300"
  };

  const badgeColor = bgColorMap[project.color as keyof typeof bgColorMap];

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-sm">
              {project.category}
            </Badge>
          </div>
          
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {project.description}
          </p>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className={`text-sm ${badgeColor}`}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Challenges
            </h4>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              {project.challenges}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">
              Outcome
            </h4>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              {project.outcome}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
