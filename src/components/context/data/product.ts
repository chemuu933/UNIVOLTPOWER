export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'panels' | 'inverters' | 'batteries' | 'mounting';
  image: string;
  specifications: { [key: string]: string };
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'panel-1',
    name: 'SolarMax Pro 450W',
    description: 'High-efficiency monocrystalline solar panel with 21.5% efficiency rating. Perfect for residential and commercial installations.',
    price: 285,
    category: 'panels',
    image: 'https://images.unsplash.com/photo-1635424709961-f3a150459ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxMjM5NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specifications: {
      'Power Output': '450W',
      'Efficiency': '21.5%',
      'Technology': 'Monocrystalline',
      'Warranty': '25 years',
      'Dimensions': '2094 × 1038 × 40 mm',
    },
    inStock: true,
  },
  {
    id: 'panel-2',
    name: 'EcoPanel 380W',
    description: 'Cost-effective polycrystalline solar panel ideal for large-scale installations.',
    price: 195,
    category: 'panels',
    image: 'https://images.unsplash.com/photo-1635424709961-f3a150459ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxMjM5NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specifications: {
      'Power Output': '380W',
      'Efficiency': '19.2%',
      'Technology': 'Polycrystalline',
      'Warranty': '25 years',
      'Dimensions': '1956 × 992 × 40 mm',
    },
    inStock: true,
  },
  {
    id: 'panel-3',
    name: 'UltraCell 500W',
    description: 'Premium bifacial solar panel with industry-leading efficiency for maximum power generation.',
    price: 425,
    category: 'panels',
    image: 'https://images.unsplash.com/photo-1635424709961-f3a150459ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxMjM5NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specifications: {
      'Power Output': '500W',
      'Efficiency': '22.8%',
      'Technology': 'Bifacial Monocrystalline',
      'Warranty': '30 years',
      'Dimensions': '2172 × 1303 × 35 mm',
    },
    inStock: true,
  },
  {
    id: 'inverter-1',
    name: 'PowerGrid 5kW String Inverter',
    description: 'Reliable string inverter with 97.5% efficiency and built-in monitoring capabilities.',
    price: 1250,
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1761990924773-adb3aeba5496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGludmVydGVyJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MTMzMTA3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    specifications: {
      'Power Rating': '5kW',
      'Efficiency': '97.5%',
      'Type': 'String Inverter',
      'Warranty': '10 years',
      'MPPT Trackers': '2',
    },
    inStock: true,
  },
  {
    id: 'inverter-2',
    name: 'HybridMax 10kW Inverter',
    description: 'Advanced hybrid inverter with battery integration and smart grid connectivity.',
    price: 2850,
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1761990924773-adb3aeba5496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGludmVydGVyJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MTMzMTA3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    specifications: {
      'Power Rating': '10kW',
      'Efficiency': '98.2%',
      'Type': 'Hybrid Inverter',
      'Warranty': '12 years',
      'MPPT Trackers': '3',
    },
    inStock: true,
  },
  {
    id: 'battery-1',
    name: 'StoragePro 10kWh Lithium Battery',
    description: 'High-capacity lithium-ion battery system for residential energy storage.',
    price: 5500,
    category: 'batteries',
    image: 'https://images.unsplash.com/photo-1766507679659-30076abc8c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGJhdHRlcnklMjBzdG9yYWdlfGVufDF8fHx8MTc3MTMzMTA3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    specifications: {
      'Capacity': '10kWh',
      'Chemistry': 'Lithium Iron Phosphate',
      'Cycles': '6000+',
      'Warranty': '10 years',
      'Discharge Rate': '5kW',
    },
    inStock: true,
  },
  {
    id: 'battery-2',
    name: 'PowerCell 15kWh Battery',
    description: 'Commercial-grade energy storage solution with modular expansion capability.',
    price: 8200,
    category: 'batteries',
    image: 'https://images.unsplash.com/photo-1766507679659-30076abc8c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGJhdHRlcnklMjBzdG9yYWdlfGVufDF8fHx8MTc3MTMzMTA3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    specifications: {
      'Capacity': '15kWh',
      'Chemistry': 'Lithium Iron Phosphate',
      'Cycles': '8000+',
      'Warranty': '12 years',
      'Discharge Rate': '7.5kW',
    },
    inStock: true,
  },
  {
    id: 'mount-1',
    name: 'RoofMount Pro Kit',
    description: 'Complete aluminum mounting system for tile and shingle roofs. Includes rails, clamps, and hardware.',
    price: 450,
    category: 'mounting',
    image: 'https://images.unsplash.com/photo-1635424709961-f3a150459ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxMjM5NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    specifications: {
      'Material': 'Anodized Aluminum',
      'Panels Supported': 'Up to 12',
      'Wind Rating': '150 mph',
      'Warranty': '15 years',
      'Tilt': 'Adjustable 15-45°',
    },
    inStock: true,
  },
  {
    id: 'mount-2',
    name: 'GroundMount Commercial System',
    description: 'Heavy-duty ground mounting structure for utility-scale installations.',
    price: 1850,
    category: 'mounting',
    image: 'https://images.unsplash.com/photo-1670519808965-16b9b2f724af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBmaWVsZHxlbnwxfHx8fDE3NzEzMDkyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    specifications: {
      'Material': 'Galvanized Steel',
      'Panels Supported': 'Up to 30',
      'Wind Rating': '180 mph',
      'Warranty': '20 years',
      'Tilt': 'Fixed or Tracking',
    },
    inStock: true,
  },
];

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 'service-1',
    name: 'Residential Solar Installation',
    description: 'Complete turnkey solar installation for your home, from design to commissioning.',
    price: 8500,
    features: [
      'Site assessment and feasibility study',
      'Custom system design',
      'Permit acquisition and processing',
      'Professional installation by certified technicians',
      'Grid connection and commissioning',
      'System monitoring setup',
      '2-year maintenance included',
    ],
    image: 'https://images.unsplash.com/photo-1583345237708-add35a664d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHNvbGFyJTIwaG91c2V8ZW58MXx8fHwxNzcxMzMxMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'service-2',
    name: 'Commercial Solar EPC',
    description: 'End-to-end engineering, procurement, and construction services for commercial projects.',
    price: 45000,
    features: [
      'Detailed energy audit',
      'ROI analysis and financial modeling',
      'Engineering and design',
      'Equipment procurement',
      'Construction management',
      'Testing and commissioning',
      'Performance monitoring',
      '5-year O&M contract',
    ],
    image: 'https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc29sYXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzEzMzEwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'service-3',
    name: 'Solar Maintenance & Support',
    description: 'Comprehensive maintenance package to keep your solar system running at peak efficiency.',
    price: 1200,
    features: [
      'Quarterly system inspections',
      'Panel cleaning and maintenance',
      'Performance monitoring',
      'Inverter health checks',
      'Electrical testing',
      'Firmware updates',
      '24/7 emergency support',
      'Annual efficiency report',
    ],
    image: 'https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGVuZ2luZWVyfGVufDF8fHx8MTc3MTMzMTA3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'service-4',
    name: 'Solar Consulting & Design',
    description: 'Expert consulting services to help plan and optimize your solar energy project.',
    price: 2500,
    features: [
      'Site feasibility analysis',
      'Energy consumption study',
      'System sizing recommendations',
      '3D design and visualization',
      'Financial modeling',
      'Incentive and rebate guidance',
      'Vendor selection assistance',
    ],
    image: 'https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGVuZ2luZWVyfGVufDF8fHx8MTc3MTMzMTA3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];
