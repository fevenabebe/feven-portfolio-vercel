// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Content comes from Feven's CV and from a review of her public GitHub
// repositories (November 2026). Where something is a prototype, a team
// project, or applicant-reported, the site says so. Nothing is invented.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Feven Abebe Bejiga",
  title: "AI/ML Engineer & Data Scientist",
  subtitle: "MSc AI · Qiyas Data Science & AI Engineering · Federated Learning",
  location: "Addis Ababa, Ethiopia",
  email: "fevenabebe777@gmail.com",
  phone: "+251 988 997 925",
  github: "https://github.com/fevenabebe",
  linkedin: "https://www.linkedin.com/in/feven-abebe-459b15211/",
  portfolio: "https://feven-portfolio-six.vercel.app/",
  availability: "Immediately",
  careerGoal: "Employment / Internship",
  summary:
    "AI/ML and data science professional with a BSc in Health Informatics and 3+ years of experience in digital health systems and data management, now pursuing an MSc in Artificial Intelligence at Addis Ababa University. Completed the Qiyas Data Science and AI Engineering training, building hands-on skills in machine learning, deep learning, NLP, and model deployment. Co-author of a federated learning paper accepted for presentation at PanAfriCon AI 2026. Currently a data science intern at the Ethiopian Statistics Service. Comfortable across the ML lifecycle, from model development (PyTorch, TensorFlow, Scikit-learn) through deployment (FastAPI, Docker, CI/CD), and looking to apply AI and data science skills to real-world problems.",
  heroLine:
    "I build AI systems for the conditions they'll actually run in: patchy connectivity, distributed data, limited compute.",
};

export const education = [
  {
    school: "Addis Ababa University – AAiT",
    degree: "Master of Science in Artificial Intelligence",
    dates: "Nov 2024 – Present",
    detail: "Thesis in progress",
  },
  {
    school: "University of Gondar",
    degree: "Bachelor of Science in Health Informatics",
    dates: "2022",
    detail: "CGPA 3.86 / 4.00",
  },
];

export const qiyasTraining = {
  program: "Data Science and AI Engineering",
  period: "May 2026 – September 2026 (Completed)",
  competencies: [
    "Python programming, SQL, and data manipulation",
    "Exploratory Data Analysis (EDA), data preprocessing, data visualization, and statistical analysis",
    "Machine learning, deep learning, and Natural Language Processing (NLP), including sentiment analysis",
    "Model development, evaluation, and deployment for practical AI/data science applications",
    "Time series analysis and forecasting, and web scraping",
  ],
};

export const experience = [
  {
    role: "Big Data / Data Science Intern",
    org: "Ethiopian Statistics Service (ESS)",
    location: "Addis Ababa, Ethiopia",
    dates: "Oct 2026 – Present",
    points: [
      "Data reconciliation using DuckDB and statistical data extraction, with provenance-first workflows and source traceability.",
      "Structured data validation to support reliable, evidence-based statistical work.",
    ],
  },
  {
    role: "Digital Health Developer",
    org: "CDHi – University of Gondar",
    location: "Gondar, Ethiopia",
    dates: "Jul 2023 – Jan 2026",
    points: [
      "Customized EMR and DHIS2 systems to align with hospital workflows and organizational requirements, working closely with clinical and administrative staff to translate their needs into system configurations.",
      "Implemented the WHO Digital Adaptation Toolkit (DAK) within the University of Gondar Referral Hospital's EMR environment, helping bring the hospital's electronic records in line with national digital health standards.",
      "Managed and maintained MySQL databases underlying the hospital's digital health systems, including data integrity checks and routine database administration.",
      "Generated reports from EMR and DHIS2 data to support hospital decision-making and reporting requirements, alongside core development work.",
      "Developed DHIS2 Tracker tools to support Health and Demographic Survey activities, enabling structured collection and management of survey data.",
      "Built aggregate data-collection tools for ISHO and supported the analysis of the resulting health information.",
      "Customized an open-source project management system to fit CDHi's day-to-day operational requirements.",
    ],
  },
  {
    role: "Fellow",
    org: "Center for Digital Health and Implementation (CDHi)",
    location: "",
    dates: "Nov 2022 – Jun 2023",
    points: [
      "Supported digital health and health information systems activities.",
      "Built practical experience in digital health technologies and health information management.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tech: string[];
  problem: string;
  approach: string[];
  contribution: string[];
  featured: boolean;
  status?: string;
  repo?: string;
  demo?: string;
};

const GH = "https://github.com/fevenabebe/";

export const projects: Project[] = [
  {
    slug: "federated-learning-metaheuristics",
    name: "Federated Learning with Metaheuristic Client Selection",
    tagline:
      "A federated learning framework that uses metaheuristic search to choose which clients train each round on non-IID data.",
    tech: ["Python", "PyTorch", "Federated Learning", "FedProx", "Genetic Algorithm", "PSO", "Simulated Annealing"],
    status: "Accepted for presentation · PanAfriCon AI 2026",
    problem:
      "In federated learning, client data is non-IID and every communication round is costly, so which clients get selected to train matters as much as the model itself.",
    approach: [
      "Built a federated learning framework for non-IID client data using PyTorch and FedProx.",
      "Investigated intelligent client-selection strategies using Genetic Algorithm (GA), Particle Swarm Optimization (PSO), and Simulated Annealing (SA), compared with random and heuristic baselines.",
      "Designed experiments involving multiple clients, local training, global aggregation, and iterative communication rounds.",
      "Ran all experiments in a resource-constrained, CPU-based PyTorch environment.",
    ],
    contribution: [
      "Designed and ran the experiments across GA, PSO, and SA client-selection strategies.",
      "Evaluated model performance using training loss and classification accuracy across federated rounds.",
      "Co-authored the paper with Zehara Yassin and Beakal Gizachew (Addis Ababa University). Accepted for presentation; not yet published in proceedings.",
    ],
    featured: true,
  },
  {
    slug: "agrimind-crop-disease-assistant",
    name: "AgriMind: Crop-Disease Information Assistant",
    tagline:
      "An early-stage initiative for agricultural extension workers. The first working prototype pairs maize and wheat disease image classification with retrieval-grounded advice.",
    tech: ["Python", "EfficientNet (Keras)", "FAISS", "RAG", "Gemini API", "Streamlit"],
    status: "Prototype · not field-tested",
    problem:
      "Extension workers and farmers need fast, reliable crop-disease guidance in the field, often without reliable connectivity and across more than one language.",
    approach: [
      "Image classifiers for wheat (healthy, septoria, stripe rust) and maize (healthy, maize lethal necrosis, maize streak virus).",
      "FAISS retrieval over a curated agricultural knowledge base, with answer generation constrained by safety rules in the prompt.",
      "Streamlit interface so a user can upload a leaf image and ask follow-up questions in natural language.",
      "The target design is offline-first and multilingual with human escalation for uncertain cases. The current prototype is not yet that: it needs internet access, uses English-oriented embeddings, and has no published accuracy figures or field validation.",
    ],
    contribution: [
      "Built the prototype end to end: classification module, retrieval pipeline, generation layer and interface.",
      "Defined the offline/edge AI architecture and the multilingual RAG design the prototype is heading toward.",
    ],
    featured: true,
    repo: GH + "AgriMind_AI_RAG_Chatbot",
  },
  {
    slug: "ros2-lane-following-robot",
    name: "ROS2 Autonomous Lane-Following Robot",
    tagline:
      "A simulated robot that perceives lane markings with classical computer vision and steers itself with PID control.",
    tech: ["ROS2 Humble", "Gazebo", "Python", "OpenCV", "PID Control"],
    status: "Simulation",
    problem:
      "Autonomous lane following requires turning a noisy camera feed into a reliable, real-time steering signal.",
    approach: [
      "Developed a lane-following robot simulation using ROS2 Humble and Gazebo.",
      "Implemented computer-vision-based lane detection using image processing and HSV color segmentation.",
      "Built a ROS2 node to calculate lane error and publish control information.",
      "Implemented PID-based steering control for autonomous lane following. This is classical vision and control, not a learned model.",
    ],
    contribution: ["Integrated the perception and control components into a single robotics pipeline."],
    featured: true,
    repo: GH + "Robotics---AutoNavigate",
  },
  {
    slug: "house-price-prediction",
    name: "House Price Prediction System",
    tagline:
      "An ML system for real-estate price prediction, served through a REST API with CI/CD and a Streamlit front end.",
    tech: ["Python", "Scikit-learn", "CatBoost", "SHAP", "FastAPI", "Streamlit", "Docker", "GitHub Actions"],
    status: "Team project",
    problem:
      "Turning a structured real-estate dataset into a model that is usable, not just accurate in a notebook: served, tested, explained, and deployable.",
    approach: [
      "Data preprocessing, feature engineering, model comparison (CatBoost, XGBoost, LightGBM) and evaluation, with SHAP explanations.",
      "A FastAPI REST API to serve predictions and a Streamlit interface for interacting with the system.",
      "Docker containerization and automated testing through GitHub Actions CI.",
      "In the repository's final evaluation report, the tuned CatBoost model reached R² 0.937 (RMSE about 18.6k).",
    ],
    contribution: [
      "A team project; 73 of the repository's 74 commits come from my account.",
      "Worked across preprocessing, feature engineering, training and evaluation, SHAP, the API, Docker and CI.",
    ],
    featured: true,
    repo: GH + "house_price_prediction",
  },
  {
    slug: "multi-source-health-data-pipeline",
    name: "Multi-Source Health Data Pipeline",
    tagline:
      "A synthetic-data health analytics pipeline: pandas ETL into PostgreSQL, SQL views and a Streamlit dashboard, with Docker Compose, CI and tests.",
    tech: ["Python", "pandas", "PostgreSQL", "SQL", "Streamlit", "Docker Compose", "pytest"],
    status: "Synthetic data",
    problem: "",
    approach: [],
    contribution: [],
    featured: false,
    repo: GH + "multi-source-health-data-pipeline",
  },
  {
    slug: "pneumonia-detection-prototypes",
    name: "Pneumonia Detection Prototypes",
    tagline:
      "Two educational chest X-ray classifiers, a classical SVM baseline and a MobileNetV2 model, each behind a Streamlit app. Not clinically validated.",
    tech: ["Python", "Scikit-learn", "TensorFlow / Keras", "Streamlit"],
    status: "Educational prototype",
    problem: "",
    approach: [],
    contribution: [],
    featured: false,
    repo: GH + "Penmonia-Detection-SGD",
  },
  {
    slug: "fraud-detection-ml",
    name: "Fraud Detection",
    tagline:
      "Classification on highly imbalanced fraud datasets: Logistic Regression vs Random Forest, SMOTE, F1 and AUC-PR, with SHAP explanations.",
    tech: ["Python", "Scikit-learn", "SMOTE", "SHAP"],
    status: "Training challenge",
    problem: "",
    approach: [],
    contribution: [],
    featured: false,
    repo: GH + "Fraud-Detection",
  },
  {
    slug: "addis-ride-forecast",
    name: "Addis Ride Demand Forecast",
    tagline:
      "Hackathon team project: a LightGBM (Poisson) hourly ride-demand forecast for 12 zones with a FastAPI service.",
    tech: ["Python", "LightGBM", "Time Series", "FastAPI"],
    status: "Team project",
    problem: "",
    approach: [],
    contribution: [],
    featured: false,
    repo: GH + "addis_ride_forecast",
  },
  {
    slug: "dhis2-metadata-intelligence",
    name: "DHIS2 Metadata Intelligence",
    tagline:
      "A read-only decision-support prototype that flags likely duplicate DHIS2 metadata and maps its dependencies before anything is changed.",
    tech: ["Python", "FastAPI", "React", "TF-IDF", "Graph analysis"],
    status: "Prototype",
    problem: "",
    approach: [],
    contribution: [],
    featured: false,
    repo: GH + "dhis2-metadata-intelligence",
  },
  {
    slug: "coffeetrace",
    name: "CoffeeTrace AI",
    tagline:
      "A prototype that combines forest-loss data with retrieval-augmented Q&A over EU Deforestation Regulation text for coffee traceability.",
    tech: ["Python", "Gemini API", "LangChain", "ChromaDB", "Streamlit"],
    status: "Prototype",
    problem: "",
    approach: [],
    contribution: [],
    featured: false,
    repo: GH + "coffeTrace",
  },
];

export const skills = {
  Programming: ["Python", "C++", "Java", "JavaScript", "SQL"],
  "Machine Learning": [
    "Supervised Learning",
    "Unsupervised Learning",
    "Classification",
    "Regression",
    "Clustering",
    "Feature Engineering",
    "Model Evaluation",
    "Hyperparameter Optimization",
  ],
  "Deep Learning": ["Neural Networks", "CNNs", "Transformers", "PyTorch", "TensorFlow"],
  "AI & NLP": [
    "Natural Language Processing",
    "Large Language Models (LLMs)",
    "Retrieval-Augmented Generation (RAG)",
    "Hugging Face Transformers",
  ],
  "Computer Vision": ["Image Processing", "Image Classification", "Object Detection", "OpenCV"],
  "Data Science": ["Pandas", "NumPy", "SciPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
  "AI Systems & Development": [
    "FastAPI",
    "Streamlit",
    "REST APIs",
    "Model Inference",
    "PostgreSQL",
    "MySQL",
    "Vector Databases",
  ],
  "Software & Tools": ["Git", "GitHub", "Docker", "GitHub Actions", "Linux/WSL"],
  Robotics: ["ROS2", "Sensor Integration", "Autonomous Navigation", "Gazebo"],
  Other: ["Probabilistic Graphical Models", "Federated Learning", "Optimization Techniques"],
};

export const certifications = [
  { name: "Data Science and AI Engineering", org: "Qiyas, Addis Ababa University · 2026" },
  {
    name: "SAFEE KAIM",
    org: "Kifiya AI Mastery Training Program, 10 Academy Women-Only Cohort · Certificate of Completion, August 2026",
    file: "/kaim-safee-kaim.pdf",
  },
  {
    name: "GCI World April 2026 — Data Science",
    org: "Matsuo-Iwasawa Laboratory, University of Tokyo · certificate issued 31 August 2026",
    file: "/gci-world-2026.pdf",
  },
];

export const publications = [
  {
    title:
      "Lightweight Metaheuristic Optimization for Client Selection in Resource-Constrained Federated Learning Systems",
    authors: "Feven Abebe Bejiga, Zehara Yassin, Beakal Gizachew (Addis Ababa University)",
    venue: "Accepted for presentation · PanAfriCon AI 2026",
    description:
      "Compares Genetic Algorithm, Particle Swarm Optimization, and Simulated Annealing against random client selection on FEMNIST, CIFAR-10, and CIFAR-100 using FedProx (5 seeds, 100 rounds). Not yet published in proceedings.",
  },
];

export const languages = [
  { name: "Amharic", level: "Native" },
  { name: "English", level: "Fluent" },
];

// The strongest technical throughline: federated learning across distributed
// clients, digital-health data across facilities, and edge AI for agriculture
// are all, at core, the same problem: getting AI to work across a network of
// constrained, disconnected nodes. That idea drives the visual language of
// this site (see NetworkCanvas).
export const researchArea = {
  title: "Federated Learning under Client Constraints",
  area: "Distributed Machine Learning",
  description:
    "Research into how federated learning systems should select which clients participate in each training round when client data is non-IID and communication rounds are expensive. The work compares metaheuristic search strategies (Genetic Algorithm, Particle Swarm Optimization, and Simulated Annealing) for client selection, built on PyTorch and FedProx and evaluated on training loss and classification accuracy across rounds. It is co-authored with Zehara Yassin and Beakal Gizachew and has been accepted for presentation at PanAfriCon AI 2026. Separately, my MSc thesis (in progress) studies selective neuro-symbolic prediction with proof-based acceptance under concept and rule shift: when a system should predict, and when it should abstain.",
  methodology:
    "Federated averaging with FedProx regularization across multiple simulated clients with non-IID data partitions, with client-selection policies driven by GA, PSO, and SA and compared against standard baselines.",
  status: "Co-authored research, CPU-based experimental environment",
};

// Applied AI evidence: a documented two-year record. Counts come from the
// repository review behind the evidence portfolio PDF.
export const evidence = {
  window: "November 2024 – November 2026",
  lead:
    "A dated, checkable record of study, projects, research and training. Every item is labelled by what it is (coursework, independent project, team project, research, training) and how it was verified. It is not a claim of two years of continuous AI employment.",
  stats: [
    { value: "33", label: "public repositories reviewed" },
    { value: "20", label: "counted as AI evidence" },
    { value: "2", label: "reported items (paper, thesis)" },
    { value: "24", label: "months documented" },
  ],
  pdf: "/Feven_Abebe_Applied_AI_Evidence_Portfolio.pdf",
  timeline: "/evidence/AI_Development_Timeline.jpg",
  charts: [
    { src: "/evidence/AI_Skills_By_Year.jpg", title: "Technical domains by year", alt: "Bar chart of documented AI evidence artefacts by technical domain and year" },
    { src: "/evidence/AI_Project_Distribution.jpg", title: "Project distribution", alt: "Donut chart of AI projects by primary technical domain" },
    { src: "/evidence/Technical_Skills_Evidence_Matrix.jpg", title: "Skills evidence matrix", alt: "Heatmap showing which projects evidence which technical skills" },
  ],
  notes: [
    "Template, empty, duplicate and non-AI repositories are excluded.",
    "Team projects are labelled as such; prototypes are not described as deployed.",
    "Healthcare models are educational prototypes with no clinical validation.",
  ],
};
