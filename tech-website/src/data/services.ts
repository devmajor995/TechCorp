export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  priceRange: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    category: 'Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    features: [
      'Custom Website Design',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Development',
      'Content Management Systems',
      'SEO Optimization'
    ],
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: 'blue',
    priceRange: '$2,000 - $50,000+'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'Security',
    description: 'Protect your digital assets with enterprise-grade security solutions and monitoring.',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Incident Response',
      'Security Training',
      'Vulnerability Assessment',
      'Compliance Consulting'
    ],
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: 'red',
    priceRange: '$1,500 - $25,000+'
  },
  {
    id: 'it-repairs-support',
    name: 'IT Repairs & Support',
    category: 'Support',
    description: 'Fast, reliable technical support and repair services for all your IT equipment.',
    features: [
      'Hardware Repairs',
      'Software Troubleshooting',
      'Network Setup',
      '24/7 Help Desk',
      'Data Recovery',
      'System Maintenance'
    ],
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    color: 'green',
    priceRange: '$50 - $500/hour'
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    category: 'Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    color: 'purple',
    priceRange: '$5,000 - $100,000+'
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud Solutions',
    category: 'Infrastructure',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: [
      'AWS/Azure/Google Cloud',
      'Cloud Migration',
      'Serverless Architecture',
      'DevOps Implementation',
      'Cost Optimization',
      'Disaster Recovery'
    ],
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    color: 'orange',
    priceRange: '$1,000 - $20,000+'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    category: 'Analytics',
    description: 'Transform your data into actionable insights with advanced analytics solutions.',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics',
      'Dashboard Creation',
      'Data Warehousing',
      'Machine Learning'
    ],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: 'cyan',
    priceRange: '$3,000 - $75,000+'
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    category: 'Consulting',
    description: 'Strategic technology consulting to align IT with your business objectives.',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'Architecture Planning',
      'Technology Assessment',
      'Vendor Selection',
      'Project Management'
    ],
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    color: 'indigo',
    priceRange: '$150 - $500/hour'
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    category: 'Design',
    description: 'User-centered design solutions that create exceptional digital experiences.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'User Testing',
      'Design Systems',
      'Accessibility Design'
    ],
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z',
    color: 'pink',
    priceRange: '$2,000 - $30,000+'
  },
  {
    id: 'system-management',
    name: 'Web/System Admin',
    category: 'Infrastructure',
    description: 'Comprehensive management and monitoring of web servers, application servers, and IT systems for maximum uptime and security.',
    features: [
      'Server Setup & Configuration',
      'Performance Monitoring',
      'Patch Management',
      'Backup & Disaster Recovery',
      'Security Hardening',
      '24/7 System Monitoring'
    ],
    icon: 'M4 6h16M4 10h16M4 14h16M4 18h16',
    color: 'blue',
    priceRange: '$500 - $10,000/month'
  }
];

export const serviceCategories = Array.from(new Set(services.map(service => service.category))); 