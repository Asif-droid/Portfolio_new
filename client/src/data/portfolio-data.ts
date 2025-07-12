export const portfolioData = {
  personal: {
    name: "K. M. Asifur Rahman",
    title: "AI/ML Engineer & Researcher",
    email: "asifurbuet98@gmail.com",
    phone: "(+88) 01882637342",
    location: "Dhaka, Bangladesh",
    linkedin: "https://linkedin.com/in/k-m-asifur-rahman-7035531aa",
    github: "https://github.com/Asif-droid",
    bio: "Machine learning engineer with over a year of experience developing statistical models and implementing state-of-the-art large language models. Specialized in GenAI, Computer Vision, and NLP with publications in IEEE T-IFS.",
    summary: "Currently working as a Machine Learning Engineer at Spectrum Software and Consulting, where I develop and deploy cutting-edge AI solutions including GenAI systems, Document AI, and Computer Vision applications. My expertise spans across fine-tuning large language models with LoRA, building RAG-based systems, and developing scalable AI service architectures. I have successfully deployed fine-tuned LLMs locally for trade document intelligence within bank-grade, restricted environments. I'm also pursuing my MSc in Computer Science and Engineering at BUET, focusing on advanced AI research with publications in prestigious journals like IEEE T-IFS."
  },
  
  experience: [
    {
      id: 1,
      title: "Machine Learning Engineer",
      company: "Spectrum Software and Consulting Ltd.",
      location: "Karwan Bazar, Dhaka",
      period: "July 2024 - Present",
      current: true,
      description: "Developing and deploying cutting-edge AI solutions including GenAI systems, Document AI, and Computer Vision applications.",
      achievements: [
        {
          category: "GenAI",
          items: [
            "Expertise in running LLM Inference Engine with fine-tuned adapters",
            "Fine-tuning LLM with LoRA",
            "RAG based financial document validation system",
            "Dynamic Knowledge base handling in RAG system"
          ]
        },
        {
          category: "Document AI",
          items: [
            "ML based smart document parser for retrieving information from scanned documents"
          ]
        },
        {
          category: "Computer Vision",
          items: [
            "Human detection system in restricted area",
            "Facial recognition based attendance system",
            "DeepFake video generator for bypassing eKYC authentication",
            "DeepFake detection system for eKYC"
          ]
        },
        {
          category: "Audio Transcription",
          items: [
            "Report and summary generation from Bengali audio"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "ML Intern",
      company: "Era InfoTech Ltd.",
      location: "Purana Paltan, Dhaka",
      period: "May 2023 - June 2023",
      current: false,
      description: "Developed transaction classification systems using NLP and machine learning techniques.",
      achievements: [
        {
          category: "NLP Development",
          items: [
            "Developed a transaction classifier using Natural Language Processing (NLP) tools, clustering algorithm and Python libraries",
            "Elevated data analysis precision and improved model accuracy through effective collaboration with teams"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Security Research Intern",
      company: "CERT, BCC",
      location: "Agargaon, Dhaka",
      period: "Nov 2023 - Jan 2024",
      current: false,
      description: "Explored security information and event management (SIEM) systems with AI/ML integration.",
      achievements: [
        {
          category: "Security Research",
          items: [
            "Explored an open source SIEM (Wazuh) to deploy, customizing it for a few features from an AI/ML perspective"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Director of Logistics",
      company: "BUET Cyber Security Club",
      location: "Dhaka",
      period: "May 2023 - June 2024",
      current: false,
      description: "Led organizational activities and cybersecurity competitions.",
      achievements: [
        {
          category: "Leadership",
          items: [
            "Successfully organized and executed a Capture The Flag (CTF) competition, showcasing adept coordination, leadership, and problem-solving skills"
          ]
        }
      ]
    }
  ],

  skills: [
    {
      category: "ML & AI",
      icon: "brain",
      color: "blue",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "Hugging Face", level: 80 }
      ]
    },
    {
      category: "Data Science",
      icon: "chart-line",
      color: "green",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 80 }
      ]
    },
    {
      category: "Computer Vision",
      icon: "eye",
      color: "purple",
      skills: [
        { name: "OpenCV", level: 80 },
        { name: "InsightFace", level: 60 },
        { name: "DeepFace", level: 60 },
        { name: "Tesseract OCR", level: 80 }
      ]
    },
    {
      category: "LLM & NLP",
      icon: "message-circle",
      color: "cyan",
      skills: [
        { name: "OpenAI GPT", level: 80 },
        { name: "LangChain", level: 80 },
        { name: "LoRA Fine-tuning", level: 60 },
        { name: "RAG Systems", level: 80 }
      ]
    },
    {
      category: "Programming",
      icon: "code",
      color: "orange",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 60 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      category: "MLOps & Cloud",
      icon: "cloud",
      color: "indigo",
      skills: [
        { name: "Docker", level: 80 },
        { name: "MLflow", level: 60 },
        { name: "Azure", level: 40 },
        { name: "Firebase", level: 60 }
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Dynamic Document Parser",
      description: "Automated document processing system leveraging OCR technology and dynamic document templates.",
      icon: "file-text",
      color: "blue",
      technologies: ["Docker", "Tesseract", "MongoDB", "JavaScript"],
      features: [
        "Automated document processing with OCR",
        "Dynamic template matching",
        "Microservice architecture for scalability",
        "CI/CD pipeline integration",
        "MongoDB database integration",
        "RESTful API design"
      ],
      challenges: "Handling various document formats and layouts while maintaining high accuracy in data extraction.",
      outcome: "Successfully deployed system handling 1000+ documents daily with 95% accuracy rate.",
      category: "Document AI"
    },
    {
      id: 2,
      title: "Climate Report from Bengali Audio",
      description: "Generates PDF reports from Bengali audio describing climate calamities, supporting regional languages.",
      icon: "mic",
      color: "green",
      technologies: ["M4T-v2", "Gemini 2.0", "Pydantic", "Pandas"],
      features: [
        "Bengali speech recognition",
        "Automatic report generation",
        "PDF formatting and styling",
        "Multi-language support framework",
        "Structured data extraction",
        "Template-based report creation"
      ],
      challenges: "Handling Bengali language nuances and contextual understanding of climate-related terminology.",
      outcome: "Successful prototype with plans for regional language expansion and disaster response integration.",
      category: "NLP"
    },
    {
      id: 3,
      title: "ECG Anomaly Detection",
      description: "Transformer-based model to distinguish healthy heart signals from unhealthy ones using ECG data.",
      icon: "activity",
      color: "red",
      technologies: ["PyTorch", "Transformers", "RNN", "Matplotlib"],
      features: [
        "Transformer encoder architecture",
        "Real-time ECG signal processing",
        "Anomaly classification",
        "Data visualization dashboard",
        "High accuracy prediction",
        "Clinical decision support"
      ],
      challenges: "Achieving high sensitivity while minimizing false positives in medical diagnosis.",
      outcome: "Achieved 94% accuracy on ECG5000 dataset with potential for clinical deployment.",
      category: "Healthcare AI"
    },
    {
      id: 4,
      title: "Gender Inequality & Climate Change",
      description: "Analysis exploring the relationship between gender inequality and climate change for NASA Space Apps Challenge.",
      icon: "bar-chart",
      color: "purple",
      technologies: ["TensorFlow", "Sklearn", "Pandas", "Matplotlib"],
      features: [
        "Statistical analysis of gender inequality metrics",
        "Climate change impact assessment",
        "Data visualization and insights",
        "Correlation analysis",
        "Predictive modeling",
        "Interactive dashboard"
      ],
      challenges: "Correlating complex social and environmental datasets with meaningful statistical significance.",
      outcome: "Comprehensive analysis presented at NASA Space Apps Challenge 2024 with actionable insights.",
      category: "Data Science"
    },
    {
      id: 5,
      title: "Peek a Book",
      description: "Online book buying platform where users can find various bookshops and purchase books.",
      icon: "book",
      color: "amber",
      technologies: ["OracleDB", "PL/SQL", "REST API", "HTML/CSS"],
      features: [
        "Multi-vendor bookstore platform",
        "Advanced search and filtering",
        "User authentication system",
        "Order management",
        "Payment integration",
        "Inventory tracking"
      ],
      challenges: "Managing complex database relationships and ensuring transaction integrity across multiple vendors.",
      outcome: "Functional e-commerce platform with seamless user experience and robust backend architecture.",
      category: "Web Development"
    },
    {
      id: 6,
      title: "3D Solar System",
      description: "Interactive 3D model of the solar system built with JavaFX featuring realistic animations.",
      icon: "globe",
      color: "cyan",
      technologies: ["Java", "JavaFX", "3D Animation", "Threading"],
      features: [
        "Realistic 3D planetary models",
        "Orbital mechanics simulation",
        "Interactive camera controls",
        "Threading for smooth animation",
        "Educational information display",
        "Customizable viewing modes"
      ],
      challenges: "Implementing accurate orbital mechanics while maintaining smooth 60fps animations.",
      outcome: "Engaging educational tool demonstrating advanced 3D graphics programming skills.",
      category: "Graphics Programming"
    }
  ],

  research: [
    {
      id: 1,
      title: "5GPT: 5G Vulnerability Detection by Combining Zero-Shot Capabilities of GPT-4 with Domain Aware Strategies Through Prompt Engineering",
      status: "Published",
      venue: "IEEE T-IFS Journal",
      year: 2024,
      icon: "award",
      color: "yellow",
      description: "We utilized GPT-4's advanced language understanding to detect vulnerabilities directly from 5G specifications. Testing promising cases using Open5GS and UERANSIM. We first adopted a zero-shot approach, then a domain-aware strategy, where we explicitly teach GPT-4 about security properties and hazard indicators. We found 47 potential issues, 27 of them previously unreported. Confirmed 9 vulnerabilities, simulating 14 test cases.",
      tags: ["5G Security", "GPT-4", "Vulnerability Detection", "Prompt Engineering"],
      impact: "Found 47 potential issues, 27 previously unreported. Confirmed 9 vulnerabilities."
    },
    {
      id: 2,
      title: "5G RAG Based Conformance Testing",
      status: "Ongoing",
      venue: "In Progress",
      year: 2024,
      icon: "clock",
      color: "blue",
      description: "We proposed a fully automated end-to-end framework that utilizes a Retrieval-Augmented Generation (RAG) pipeline. Our approach grounds LLM outputs in verified, domain-specific data to minimize hallucinations, and overcomes cross-section dependency challenges by integrating a robust context retrieval mechanism. Using this approach, we have generated 800 conformance test-cases for essential 5G mobility management procedures in under 3 hours.",
      tags: ["RAG", "5G Testing", "Conformance Testing", "Automation"],
      impact: "Generated 800 conformance test-cases in under 3 hours with automated framework."
    },
    {
      id: 3,
      title: "Exploring Post-Mortem Neural Signal Processing: Uncovering Computational Potentials in Deceased Animal Brains",
      status: "Champion",
      venue: "NSysS 2021",
      year: 2021,
      icon: "trophy",
      color: "yellow",
      description: "We investigate the potential of a deceased animal brain to process signals. Specifically, we examine the brain's responses to external stimuli in the form of electrical signals and its ability to act as a memory unit. We also explore the transfer characteristics of the deceased goat brain and elucidate the corresponding function through representative circuits.",
      tags: ["Neuroscience", "Signal Processing", "Neural Networks", "Biocomputing"],
      impact: "Student Poster Champion at NSysS 2021 conference for innovative research approach."
    },
    {
      id: 4,
      title: "Assessing the Impact of Temperature Change on Discomfort Index: Temporal Trends and Seasonal Variations in Dhaka City",
      status: "Accepted",
      venue: "ICWFM 2025",
      year: 2025,
      icon: "leaf",
      color: "green",
      description: "This study analyzed the temporal trends and seasonal variations in maximum temperature, minimum temperature, average temperature, and discomfort index in Dhaka city from 1981 to 2020. The discomfort index calculated using Thom Discomfort Index equation and employs a combination of statistical techniques to assess the impact of temperature changes on the discomfort index.",
      tags: ["Climate Analysis", "Statistical Analysis", "Environmental Science", "Urban Studies"],
      impact: "40-year comprehensive climate analysis providing insights for urban planning and policy."
    }
  ],

  education: [
    {
      degree: "MSc in Computer Science and Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2024 - Present",
      status: "Current",
      details: "1st Semester • Focus: AI/ML Research"
    },
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      year: "2024",
      status: "Completed",
      details: "CGPA: 3.55/4.0"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Notre Dame College, Dhaka",
      year: "2018",
      status: "Completed",
      details: "GPA: 5.00/5.00"
    }
  ],

  awards: [
    {
      title: "Student Poster Champion",
      organization: "NSysS 2021 Conference",
      year: 2021,
      description: "Winner for neural signal processing research",
      icon: "trophy",
      color: "yellow"
    },
    {
      title: "WICC Finalist",
      organization: "Water Innovation Challenge Competition",
      year: 2022,
      description: "Recognized for innovative water management solutions",
      icon: "award",
      color: "blue"
    },
    {
      title: "Government Scholarships",
      organization: "Education Board",
      year: "2016, 2018",
      description: "Awarded for academic excellence in SSC and HSC examinations",
      icon: "medal",
      color: "green"
    },
    {
      title: "Cricket Tournament Runner-up",
      organization: "Inter Faculty Cricket Tournament",
      year: 2023,
      description: "Demonstrated leadership and teamwork skills",
      icon: "users",
      color: "purple"
    }
  ],

  certifications: [
    "Neural networks and Deep learning, Improving Deep Neural networks: Hyper parameter tuning - deeplearning.ai",
    "HTML, CSS, and Javascript for Web developers - Johns Hopkins University, Coursera",
    "Python for everybody (5 course specialization) - University of Michigan, Coursera"
  ],

  reference: {
    name: "Dr. Md. Shohrab Hossain",
    title: "Professor, Department of CSE, BUET",
    email: "mshohrabhossain@cse.buet.ac.bd",
    website: "https://mshohrabhossain.buet.ac.bd/"
  }
};
