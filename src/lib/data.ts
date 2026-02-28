import { PlaceHolderImages } from './placeholder-images';
import { Code, PenTool, Smartphone, Box } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

export const socialLinks = {
    email: "siddharthsinighnathawat25@gmail.com",
    github: "https://github.com/siddharthsinghnathawat",
    linkedin: "https://www.linkedin.com/in/siddharth-singh-nathawat-b51214291/?originalSubdomain=in",
}

export const services = [
    {
      name: 'Web Development',
      icon: Code,
      description: 'Building responsive and dynamic websites with modern technologies.'
    },
    {
      name: 'App Development',
      icon: Smartphone,
      description: 'Creating mobile applications for both iOS and Android platforms.'
    },
    {
        name: 'Web3',
        icon: Box,
        description: 'Developing decentralized applications and smart contracts on the blockchain.'
    },
    {
      name: 'UI/UX Design',
      icon: PenTool,
      description: 'Designing user-friendly interfaces that are both beautiful and intuitive.'
    }
]

const getImageUrl = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
}
const getImageHint = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageHint || '';
}


export const projects = [
  {
    title: 'Development Bot',
    description: 'Built a voice-interactive mock interview platform using ChatGPT API. Evaluated user responses based on clarity and confidence using NLP.',
    tags: ['Docker', 'Node.js', 'ChatGPT API'],
    liveUrl: '#',
    githubUrl: socialLinks.github,
  },
  {
  title: 'Airbnb Clone – Rental Booking Platform',
  description: 'Designed and developed a backend system for a property rental platform similar to Airbnb. Implemented authentication & authorization for hosts and guests, built RESTful APIs for property listings and bookings, and designed a relational database schema for users, properties, bookings, and payments.',
  tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
  liveUrl: '#',
  githubUrl: socialLinks.github,
},
{
  title: 'FinTrack – Expense Tracker',
  description: 'Developed a secure full-stack expense tracking application with JWT-based authentication. Designed RESTful APIs for managing income, expenses, and transaction categories using MVC architecture. Tested APIs using Postman with proper validation and error handling.',
  tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
  liveUrl: '#',
  githubUrl: socialLinks.github,
},
{
  title: 'Personal AI Assistant',
  description: 'Built an AI-powered chat assistant with persistent memory. Integrated a local LLM (Mistral) via REST API using Ollama and implemented note-saving and retrieval logic using JavaScript.',
  tags: ['n8n', 'Ollama', 'Mistral LLM', 'JavaScript'],
  liveUrl: '#',
  githubUrl: socialLinks.github,
}
];

export const experiences = [
  {
    date: 'May 2025 - Jun 2025',
    title: 'Frontend Developer Intern',
    company: 'CodeAlpha - Jaipur, Rajasthan',
    description: 'Developed responsive web pages using HTML, CSS, JavaScript and React. Integrated REST APIs to display dynamic data on the frontend. Improved UI/UX using modern design practices and frameworks.',
  },
];

export const achievements = []
