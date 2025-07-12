import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio-data";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">My professional journey and key contributions</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={job.id} className="relative flex items-center">
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-800 ${
                  job.current ? 'bg-blue-600' : 'bg-slate-400'
                }`}></div>
                
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:pl-8 md:ml-auto'
                }`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{job.title}</h3>
                        {job.current && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-2">{job.company}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">{job.period}</p>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">{job.description}</p>
                      
                      <div className="space-y-3">
                        {job.achievements.map((achievement, achIndex) => (
                          <div key={achIndex}>
                            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                              {achievement.category}
                            </h4>
                            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                              {achievement.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <span className="text-blue-600 mr-2">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
