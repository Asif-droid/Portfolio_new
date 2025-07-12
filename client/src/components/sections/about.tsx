import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

const About = () => {
  const { personal } = portfolioData;

  const keyAchievements = [
    "Published research in IEEE T-IFS on 5G vulnerability detection using GPT-4",
    "Deployed fine-tuned LLMs in bank-grade restricted environments",
    "Student Poster Champion at NSysS 2021 conference",
    "Government scholarships for academic excellence"
  ];

  const handleDownloadCV = (type: 'professional' | 'research') => {
    const url = `/api/cv/${type}`;
    window.open(url, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate about leveraging cutting-edge AI technologies to solve real-world problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Professional Journey</h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              {personal.summary.split('. ').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}{index < personal.summary.split('. ').length - 1 ? '.' : ''}
                </p>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Key Achievements</h4>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  {keyAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 dark:bg-blue-900/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">Download Resume</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleDownloadCV('professional')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Professional CV
                  </Button>
                  <Button
                    onClick={() => handleDownloadCV('research')}
                    variant="outline"
                    className="border-slate-600 text-slate-700 dark:text-slate-300"
                  >
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Research CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
