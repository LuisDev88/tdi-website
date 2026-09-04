export type PageId = 
  | 'home'
  | 'about-us'
  | 'services'
  | 'products'
  | 'careers'
  | 'contact-us'
  | 'privacy-policy'
  | 'terms-conditions';

export interface PageMeta {
  id: PageId;
  title: string; // The exact WordPress page title
  path: string;
  inMainMenu: boolean;
  navLabel?: string;
  description: string;
}

export const PAGES: Record<PageId, PageMeta> = {
  'home': {
    id: 'home',
    title: 'Home',
    path: '/',
    inMainMenu: true,
    navLabel: 'Home',
    description: 'Building Mobile Solutions That Transform Businesses - Tech-Dhab International'
  },
  'about-us': {
    id: 'about-us',
    title: 'About Us',
    path: '/about-us',
    inMainMenu: true,
    navLabel: 'About Us',
    description: 'Technology That Solves Real Problems - Discover our mission, story, and values.'
  },
  'services': {
    id: 'services',
    title: 'Services',
    path: '/services',
    inMainMenu: true,
    navLabel: 'Services',
    description: 'Mobile App Development, Custom Software, UI/UX Design, Business Automation, Software Maintenance, and Technology Consulting.'
  },
  'products': {
    id: 'products',
    title: 'Products',
    path: '/products',
    inMainMenu: true,
    navLabel: 'Products',
    description: 'Products - Tech-Dhab International software products and digital solutions.'
  },
  'careers': {
    id: 'careers',
    title: 'Careers',
    path: '/careers',
    inMainMenu: true,
    navLabel: 'Careers',
    description: 'Join our passionate team at Tech-Dhab International. View open positions and apply.'
  },
  'contact-us': {
    id: 'contact-us',
    title: 'Contact Us',
    path: '/contact-us',
    inMainMenu: true,
    navLabel: 'Contact Us',
    description: 'Let’s Build Something Great Together. Get in touch with Tech-Dhab International.'
  },
  'privacy-policy': {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    path: '/privacy-policy',
    inMainMenu: false,
    navLabel: 'Privacy Policy',
    description: 'Privacy Policy - Tech-Dhab International privacy commitments and data handling.'
  },
  'terms-conditions': {
    id: 'terms-conditions',
    title: 'Terms & Conditions',
    path: '/terms-conditions',
    inMainMenu: false,
    navLabel: 'Terms & Conditions',
    description: 'Terms and Conditions for software services and digital products.'
  }
};

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
  message: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  requirements: string[];
  responsibilities: string[];
}
