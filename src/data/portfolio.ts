export const profile = {
  name: "Audrea Arjaemi T. Tabadero",
  title: "Computer Vision / ML Engineer",
  location: "Manila, Philippines",
  links: {
    email: "rjaemi@gmail.com",
    linkedin: "https://linkedin.com/in/audrea-tabadero",
    github: "https://github.com/oodrea",
    resume: "/resume_latest.pdf",
  },
  about: `I’m a Computer Science student graduating in February 2026, and over time I’ve developed a strong interest in computer vision and efficient deep learning. 
          I’ve explored a lot of different areas in school, but I keep coming back to vision projects, especially object detection. 
          One of my first research projects before university was already in computer vision, and somehow my undergraduate thesis ended up in the same place, which feels like coming full circle. 
          I enjoy looking at how models behave, improving their designs, and turning ideas into code that actually works.`,
};

  
export const projects = [
  {
    name: "CamoFarmer: Camouflaged Crop Detection",
    description:
      "A lightweight computer vision system for detecting camouflaged crops in natural farm environments using SSD, YOLOv8, and RT-DETR. The project applies backbone replacement, pruning, and knowledge distillation to achieve high accuracy with low computational cost for deployment on drones and edge devices.",
    highlights: [
      "Lightweight object detection",
      "Knowledge distillation",
      "Backbone replacement",
      "Pruning",
    ],
    tech: ["PyTorch", "SSD", "YOLOv8", "RT-DETR", "TomatOD", "CCROP", "CamoCrops"],
    link: "https://github.com/MacJavellana/-CIVI-CamoFarmer", // optional: GitHub, paper, or demo
  },

  {
    name: "Celestial Object Classification",
    description:
      "A machine learning project that classifies stars and celestial bodies using physical attributes from the Stars Dataset. The project compares multiple classifiers and evaluates performance to determine the most effective model.",
    highlights: [
      "Exploratory data analysis",
      "Feature engineering",
      "Model evaluation",
      "Classification",
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "Logistic Regression", "EDA"],
    link: "https://colab.research.google.com/drive/1BkMC5uYGNLwHJacuywY1SpFgFo07I2x8?authuser=4",
  },

  {
    name: "Automated Fruit Maturity Classification",
    description:
      "A deep learning system that classifies the maturity stage of Cavendish bananas from images using convolutional neural networks trained and evaluated in Python.",
    highlights: [
      "CNN-based image classification",
      "Model training & evaluation",
      "Computer vision",
    ],
    tech: ["Python", "TensorFlow", "Keras", "Jupyter Notebook", "CNNs"],
    link: "https://github.com/oodrea/banana1",
  },
];

  
  export const experiences = [
  {
    title: "Data Operator Intern",
    company: "Undisclosed Hedge Fund",
    period: "Jun 2024 – Oct 2024",
    location: "Remote",
    bullets: [
      "Collected raw data from multiple online and internal sources and maintained internal data inventories.",
      "Cleaned and validated datasets to ensure consistency, accuracy, and usability for analysis.",
      "Extracted relevant data points based on guidance from senior analysts.",
      "Annotated datasets and organized them into structured formats for downstream modeling and analysis.",
    ],
    tags: ["Data Collection", "Data Cleaning", "Annotation", "Structured Data"],
    link: "",
  },
  {
    title: "Geospatial Data Annotator",
    company: "DLSU Center for Complexity and Emerging Technologies (COMET)",
    period: "Jul 2024 – Aug 2024",
    location: "Philippines",
    bullets: [
      "Labeled satellite imagery in CVAT to identify informal settlements in Makati and Taguig.",
      "Redefined settlement boundaries to improve spatial accuracy for urban analysis.",
      "Created square grid overlays on city polygons to support geospatial analysis and planning.",
    ],
    tags: ["CVAT", "Satellite Imagery", "Geospatial Data", "Computer Vision"],
    link: "",
  },
];
