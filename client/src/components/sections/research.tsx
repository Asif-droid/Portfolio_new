import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Trophy, Leaf } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

const Research = () => {
  const { research } = portfolioData;

  const iconMap = {
    award: Award,
    clock: Clock,
    trophy: Trophy,
    leaf: Leaf
  };

  const statusColorMap = {
    "Published": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    "Ongoing": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    "Champion": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    "Accepted": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
  };

  const colorMap = {
    yellow: "text-yellow-600",
    blue: "text-blue-600",
    green: "text-green-600"
  };

  const tagColorMap = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
    cyan: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
    green: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
  };

  const getTagColor = (index: number) => {
    const colors = ['blue', 'cyan', 'purple', 'green'];
    return tagColorMap[colors[index % colors.length] as keyof typeof tagColorMap];
  };

  return (
    <section id="research" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Publications</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">My contributions to academic research and publications</p>
        </div>
        
        <div className="space-y-8">
          {research.map((paper) => {
            const IconComponent = iconMap[paper.icon as keyof typeof iconMap];
            const iconColor = colorMap[paper.color as keyof typeof colorMap];
            const statusColor = statusColorMap[paper.status as keyof typeof statusColorMap];
            
            return (
              <Card 
                key={paper.id} 
                className="bg-slate-50 dark:bg-slate-800 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <IconComponent className={`h-5 w-5 ${iconColor} mr-3`} />
                      <Badge variant="secondary" className={`text-sm font-medium ${statusColor}`}>
                        {paper.status}
                      </Badge>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {paper.venue} • {paper.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    {paper.title}
                  </h3>
                  
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {paper.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className={`text-xs ${getTagColor(index)}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Impact</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {paper.impact}
                    </p>
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

export default Research;
