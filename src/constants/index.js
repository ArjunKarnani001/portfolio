import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import seaborn from "../assets/seaborn.png";
import jupyter from "../assets/jupyter.png";
import pandas from "../assets/pandas.png";
import python from "../assets/python.png";
import matliplot from "../assets/matliplot.png";
import powerbi from "../assets/powerbi.png";
import numpy from "../assets/numpy.png";
import aws from "../assets/aws.png";
import cplusplus from "../assets/cplusplus.png";
import postgres from "../assets/postgres.webp";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";
import github2 from "../assets/github2.png";
import github3 from "../assets/github3.png";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
    // onlyMobile: true,
  },
  {
    id: "1",
    title: "About Me",
    url: "#aboutme",
  },
  {
    id: "2",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "5",
    title: "",
    url: "#",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const codingLanguages = [python, cplusplus, mysql, pandas, aws, powerbi];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const experience1Text1 =
  "Developed high-accuracy linear regression and boosted tree models to forecast healthcare costs, achieving 90% accuracy. Using Python and data analysis tools, I identified key cost drivers and collaborated with healthcare professionals to ensure the models effectively supported resource optimization.";

export const experience1Text2 =
  "Recieved a travel scholarship for the SACNAS NDiSTEM conference, where I connected with diverse STEM professionals and shared insights from my research on predictive healthcare cost modeling.";

export const experience1 = [
  {
    id: "0",
    title: "Work Experience",
    text: experience1Text1,
  },
  { id: "1", title: "Languages & Frameworks" },
  {
    id: "2",
    title: "SACNAS Conference",
    text: experience1Text2,
  },
];

export const experience2Text1 =
  "As a Software Engineering Fellow at Headstarter, I developed a sentiment analysis model that achieved 85% accuracy in classifying social media feedback. My work included implementing natural language processing techniques such as tokenization, lemmatization, and stop-word removal to enhance data quality. I also applied feature extraction methods like TF-IDF and word embeddings to improve the model’s accuracy, turning raw social media data into actionable insights for tracking customer sentiment.	Developed a machine learning platform to identify high-risk investments by analyzing real-time financial news data.";

export const experience2 = [
  {
    id: "0",
    title: "Work Experience",
    text: experience2Text1,
  },
  { id: "1", title: "Languages & Frameworks" },
  {
    id: "2",
    title: "Jupyter Notebook",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Pandas",
    icon: pandas,
    width: 46,
    height: 56,
  },
  {
    id: "1",
    title: "Python",
    icon: python,
    width: 54,
    height: 56,
  },
  {
    id: "2",
    title: "Matliplot",
    icon: matliplot,
    width: 46,
    height: 38,
  },
  {
    id: "3",
    title: "Seaborn",
    icon: seaborn,
    width: 144,
    height: 145,
  },
  {
    id: "4",
    title: "Jupyter",
    icon: jupyter,
    width: 80,
    height: 80,
  },
  {
    id: "5",
    title: "PowerBI",
    icon: powerbi,
    width: 44,
    height: 44,
  },
  {
    id: "6",
    title: "Numpy",
    icon: numpy,
    width: 46,
    height: 54,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 48,
    height: 42,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const projects = [
  {
    id: "0",
    title: "Library Database Web App",
    text: "A website that helps libraries manage books, users, and borrowing records easily.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: github,
    imageUrl: benefitImage2,
    light: true,
    imageLink: "https://github.com/jeremyudo/library_webapp",
  },
  {
    id: "1",
    title: "Diabetes Type II Research",
    text: "A study using data and machine learning to predict future healthcare costs for Type II diabetes patients, helping improve financial planning and patient care.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: github2,
    imageUrl: benefitImage2,
    light: true,
    imageLink: "https://github.com/ArjunKarnani001/ml_research",
  },
  {
    id: "2",
    title: "ASL Interpretter Web App",
    text: "A web tool that translates American Sign Language into text for better communication.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: github3,
    imageUrl: benefitImage2,
    imageLink: "https://github.com/ArjunKarnani001/RowdyHacks_App",
  },
  {
    id: "3",
    title: "CoogQuest Mobile App",
    text: "A mobile app that engages students with campus activities through fun challenges and rewards.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: github,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Portfolio",
    text: "A personal website showcasing my work, projects, and experiences in an interactive way.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: github2,
    imageUrl: benefitImage2,
    imageLink: "https://github.com/ArjunKarnani001/portfolio",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
