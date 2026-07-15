import { 
  MessageCircle, 
  Linkedin, 
  Mail, 
  Phone, 
  Briefcase,
  Github,
  
} from 'lucide-react';

export const profileData = {
  name: "Malith Damsara",
  avatar: "/images/damsara.jpg",
 
};

export const mainLinks = [

  {
    id: 6,
    name: 'Portfolio',
    icon: Briefcase,
    iconColor: 'text-indigo-400',
    url: 'https://my-portfolio-one-topaz-12.vercel.app',
    gradient: 'from-indigo-600 to-indigo-800',
    bgColor: 'bg-indigo-600 hover:bg-indigo-700',
    description: 'View my portfolio',
    category: 'Professional'
  },
  
  {
    id: 2,
    name: 'LinkedIn',
    icon: Linkedin,
    iconColor: 'text-blue-400',
    url: 'https://www.linkedin.com/in/malith-damsara-98686a336/',
    gradient: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-600 hover:bg-blue-700',
    description: 'Connect on LinkedIn',
    category: 'Professional'
  },

  {
    id: 3,
    name: 'GitHub',
    icon: Github,
    iconColor: 'text-white',
    url: 'https://github.com/malith2002damsara',
    gradient: 'from-gray-700 to-gray-900',
    bgColor: 'bg-gray-700 hover:bg-gray-800',
    description: 'View my code on GitHub',
    category: 'Professional'
  },
  {
    id: 1,
    name: 'WhatsApp',
    icon: MessageCircle,
    iconColor: 'text-green-400',
    url: 'https://wa.me/+94776270882',
    gradient: 'from-green-600 to-green-800',
    bgColor: 'bg-green-600 hover:bg-green-700',
    description: 'Chat with me on WhatsApp',
    category: 'Social'
  },
  
  {
    id: 4,
    name: 'Email',
    icon: Mail,
    iconColor: 'text-red-400',
    url: 'mailto:malithdamsara87@gmail.com',
    gradient: 'from-red-600 to-red-800',
    bgColor: 'bg-red-600 hover:bg-red-700',
    description: 'Send me an email',
    category: 'Contact'
  },
  {
    id: 5,
    name: 'Call',
    icon: Phone,
    iconColor: 'text-purple-400',
    url: 'tel:+94781277601',
    gradient: 'from-purple-600 to-purple-800',
    bgColor: 'bg-purple-600 hover:bg-purple-700',
    description: 'Give me a call',
    category: 'Contact'
  },
  
];



