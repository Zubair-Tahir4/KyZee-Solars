import {
  SolarSystemCategory,
  SectorCategory,
  AuthorizedBrand,
  RecentEventItem,
  ProductItem,
  ProjectItem,
  VideoReel,
  TestimonialItem,
} from '../types';

// Asset imports
import heroBgImage from '../assets/images/hero_solar_aerial_1789370690875.jpg';
import ceoImage from '../assets/images/ceo_talha_khanzada_1789370708647.jpg';
import bessContainerImg from '../assets/images/bess_container_sys_1789370731973.jpg';

export const COMPANY_INFO = {
  name: 'KyZee Solars (Pvt) Ltd',
  shortName: 'KyZee Solars',
  tagline: 'Your Smart Energy Partner',
  slogan: 'Powering the Future with Smart Solar & BESS Solutions',
  foundedYear: 2016,
  experienceYears: '9+ Years',
  installedCapacity: '18.5+ MW',
  projectsCompleted: '450+',
  bessDeployed: '6.2+ MWh',
  clientRetention: '99.4%',
  whatsappNumber: '+92 307 6559933',
  whatsappDirectUrl: 'https://wa.me/923076559933',
  whatsappChannelUrl: 'https://whatsapp.com/channel/0029VanVQcjCXC3KcLhS9O2p',
  phoneDisplay: '+92 307 6559933',
  email: 'info@kyzeesolars.com',
  headquarters: 'Auto Bahn Road / Main Commercial Zone, Hyderabad & Regional Operations Karachi, Sindh, Pakistan',
  socialLinks: {
    facebook: 'https://www.facebook.com/kyzeesolars/',
    instagram: 'https://www.instagram.com/kyzeesolars',
    youtube: 'https://youtube.com/@kyzeesolars?si=zgeubprfBCyzrh6h',
    whatsapp: 'https://wa.me/923076559933',
    whatsappChannel: 'https://whatsapp.com/channel/0029VanVQcjCXC3KcLhS9O2p',
  },
  leadership: {
    name: 'Muhammad Talha Tahir Khanzada',
    title: 'Chief Executive Officer & Co-Founder',
    company: 'KyZee Solars (Pvt) Ltd',
    quote:
      'True solar engineering starts with precision design and continues through decades of reliable generation. We built KyZee Solars on a bedrock of engineering excellence, certified Tier-1 hardware, and uncompromising after-sales support so our clients achieve genuine, long-term energy independence.',
    visionText:
      'Since 2016, Muhammad Talha Tahir Khanzada has steered KyZee Solars into one of Pakistan’s foremost EPC engineering entities for commercial rooftop solar, industrial energy transitions, and advanced Battery Energy Storage Systems (BESS). With an engineering-first philosophy, he leads a dedicated team of certified engineers delivering turnkey design, NEPRA Net Metering licensing, and performance monitoring nationwide.',
    image: ceoImage,
  },
};

export const IMAGES = {
  heroBg: heroBgImage,
  ceo: ceoImage,
  bessContainer: bessContainerImg,
  industrialSolar: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  residentialSolar: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
  commercialSolar: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80',
};

// 3 System Cards: On-Grid, Hybrid, Off-Grid
export const SOLAR_SYSTEMS: SolarSystemCategory[] = [
  {
    id: 'on-grid',
    name: 'On-Grid Solar Systems',
    badge: 'High ROI & Net Metering',
    tagline: 'Direct Grid-Tied Clean Generation',
    description:
      'Synchronizes seamlessly with the utility grid. Exports excess daytime generation to the grid via bidirectional Net Metering, earning green energy credits to slash utility bills by up to 85-90%.',
    bestFor: 'Commercial buildings, offices, schools, and grid-connected homes seeking rapid financial payback.',
    efficiency: '98.8% Inverter Yield',
    roiPeriod: '2.5 - 3.5 Years',
    gridDependency: 'Grid Synchronized',
    iconName: 'Zap',
    diagramType: 'on-grid',
    features: [
      'Bidirectional NEPRA Net Metering ready',
      'Zero battery maintenance overhead',
      'Maximum daylight utilization',
      'Real-time cloud generation telemetry',
    ],
    keySpecs: [
      { label: 'PV Yield', value: 'Up to 98.8%' },
      { label: 'Payback', value: '2.8 - 3.5 Yrs' },
      { label: 'Net Metering', value: '3-Phase Bi-Dir' },
      { label: 'Warranty', value: '12-25 Years' },
    ],
  },
  {
    id: 'hybrid',
    name: 'Hybrid Solar Systems',
    badge: 'Solar + Smart Storage',
    tagline: 'Continuous 24/7 Power Security',
    description:
      'The ultimate balance of cost-savings and blackout immunity. Generates power, exports surplus credits via Net Metering, and charges high-voltage lithium batteries for seamless evening and outage power.',
    bestFor: 'Modern residences, luxury estates, medical centers, and businesses needing zero downtime.',
    efficiency: '97.5% Round-Trip',
    roiPeriod: '3.5 - 4.5 Years',
    gridDependency: 'Autonomous / Hybrid',
    iconName: 'BatteryCharging',
    diagramType: 'hybrid',
    features: [
      'Millisecond UPS-grade blackout transfer',
      'High-voltage LiFePO4 battery integration',
      'Peak-tariff shaving and nighttime support',
      'Simultaneous Net Metering export',
    ],
    keySpecs: [
      { label: 'Transfer Time', value: '< 10 ms (UPS)' },
      { label: 'Battery Tech', value: 'High-C LiFePO4' },
      { label: 'Cycle Life', value: '6,000+ Cycles' },
      { label: 'Net Metering', value: 'Fully Supported' },
    ],
  },
  {
    id: 'off-grid',
    name: 'Off-Grid & BESS Mega Systems',
    badge: '100% Energy Autonomy',
    tagline: 'Complete Independent Micro-Grids',
    description:
      'Designed for remote industrial facilities, agricultural tube-wells, resorts, and islanded operations where the national grid is either unreliable or completely unavailable.',
    bestFor: 'Remote industrial sites, farms, agricultural estates, and critical off-grid infrastructure.',
    efficiency: '96.8% Autonomous',
    roiPeriod: 'Replaces Heavy Diesel OPEX',
    gridDependency: '100% Standalone',
    iconName: 'ShieldAlert',
    diagramType: 'off-grid',
    features: [
      'Containerized utility-scale storage',
      'Multi-source sync: Solar + BESS + Generator',
      'Complete immunity from grid outages',
      'Industrial power quality & surge handling',
    ],
    keySpecs: [
      { label: 'Storage Scale', value: '50kWh - 2MWh+' },
      { label: 'Enclosure', value: 'IP55 / IP65 BESS' },
      { label: 'Generator Sync', value: 'Auto-Start Relay' },
      { label: 'Autonomy', value: '100% Off-Grid' },
    ],
  },
];

// 3 Sector Cards: Commercial, Residential, Industrial
export const SECTORS: SectorCategory[] = [
  {
    id: 'commercial',
    title: 'Commercial Solar',
    subtitle: 'Plazas, Corporate Offices, Educational & Healthcare Institutions',
    description:
      'Cut massive daytime commercial tariffs. Our commercial rooftop installations transform idle roof space into high-yield revenue generators with rapid depreciation and NEPRA green credits.',
    targetScale: '30 kW to 250 kW',
    iconName: 'Building2',
    image: IMAGES.commercialSolar,
    keyBenefits: [
      'Drastic reduction of peak daytime tariff slabs',
      'Turnkey Net Metering approval handling',
      'Minimal structural roof load engineering',
      'Enhanced corporate ESG sustainability rating',
    ],
  },
  {
    id: 'residential',
    title: 'Residential Solar',
    subtitle: 'Luxury Villas, Urban Residences & Farmhouses',
    description:
      'Protect your family from rising electricity unit costs and sudden load shedding. Sleek aesthetic panel placement paired with whisper-quiet lithium storage guarantees uninterrupted cooling and luxury comfort.',
    targetScale: '10 kW to 35 kW',
    iconName: 'Home',
    image: IMAGES.residentialSolar,
    keyBenefits: [
      'Zero electricity bills through optimized Net Metering',
      'Whisper-quiet, zero-fume inverter and battery operation',
      'Whole-home AC & heavy appliance backup',
      'Smartphone app with live generation telemetry',
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial & BESS',
    subtitle: 'Textile Mills, Factories, Cold Storage & Heavy Manufacturing',
    description:
      'MW-scale solar solutions engineered for high load-factor continuous production. Combines high-voltage Battery Energy Storage Systems (BESS) to eliminate costly diesel generator runtime during outages.',
    targetScale: '200 kW to 5+ MW',
    iconName: 'Factory',
    image: IMAGES.heroBg,
    keyBenefits: [
      'Multi-megawatt rooftop & ground-mount engineering',
      'High-voltage BESS for seamless motor surge absorption',
      'Replaces expensive diesel generator fuel consumption',
      'SCADA telemetry & high-voltage substation integration',
    ],
  },
];

// Authorized Dealer Brands: Tier 1 (Phoenix, Inverex, Aston Energy) + Tier 2 (CHINT, MINT, NitroX)
export const AUTHORIZED_BRANDS: AuthorizedBrand[] = [
  // TIER 1
  {
    name: 'Phoenix Battery',
    tier: 1,
    tagline: 'Advanced Energy Storage Solutions',
    category: 'Lithium LiFePO4 & Deep-Cycle Storage',
    warranty: 'Official Manufacturer Certified Warranty',
    description:
      'Official direct partner for high-capacity Phoenix lithium batteries featuring intelligent Battery Management Systems (BMS) and extreme thermal resilience.',
    badgeText: 'Tier-1 Authorized Partner',
    verifiedDealer: true,
    accentColor: '#F58220',
  },
  {
    name: 'Inverex Solar Energy',
    tier: 1,
    tagline: 'Pioneering Renewable Inverters & BESS',
    category: 'Commercial Inverters & Industrial BESS',
    warranty: 'Authorized Direct Factory Warranty',
    description:
      'Official authorized distributor for Inverex on-grid, hybrid inverters, and high-voltage commercial BESS containerized energy storage units.',
    badgeText: 'Tier-1 Authorized Partner',
    verifiedDealer: true,
    accentColor: '#00F0FF',
  },
  {
    name: 'Aston Energy',
    tier: 1,
    tagline: 'High-Efficiency Power Engineering',
    category: 'Advanced Inverter & PV Technologies',
    warranty: 'Certified Tier-1 Integration Warranty',
    description:
      'Authorized engineering partner for Aston Energy high-yield hybrid conversion units and commercial solar hardware.',
    badgeText: 'Tier-1 Authorized Partner',
    verifiedDealer: true,
    accentColor: '#10B981',
  },

  // TIER 2 / PARTNER COMPANIES
  {
    name: 'CHINT Global',
    tier: 2,
    tagline: 'Smart Energy & Industrial Switchgear',
    category: 'Solar Inverters & High-Voltage Protection Gear',
    warranty: 'Global Industrial Quality Standard',
    description:
      'Integrated partner for CHINT smart solar inverters, DC breakers, surge protection devices, and industrial electrical switchgear.',
    badgeText: 'Partner Company',
    verifiedDealer: true,
    accentColor: '#3B82F6',
  },
  {
    name: 'MINT Solar',
    tier: 2,
    tagline: 'Precision Renewable Technologies',
    category: 'Bifacial Solar Modules & Mounting Infrastructure',
    warranty: 'Performance & Power Output Warranty',
    description:
      'Partner brand supplying high-efficiency N-Type TOPCon and Bifacial photovoltaic modules engineered for maximum solar harvest.',
    badgeText: 'Partner Company',
    verifiedDealer: true,
    accentColor: '#EAB308',
  },
  {
    name: 'NitroX Power',
    tier: 2,
    tagline: '3-Phase Smart Hybrid Power Conversion',
    category: '13kW / 16kW / 20kW Hybrid Inverters',
    warranty: '5-Year Manufacturer Warranty',
    description:
      'Accredited distributor and technical integrator for high-power 3-Phase NitroX hybrid inverters with parallel-stacking architecture.',
    badgeText: 'Partner Company',
    verifiedDealer: true,
    accentColor: '#EC4899',
  },
];

// Recent Events Section: Clean 3-Picture Layout showcasing recent company events/installations
export const RECENT_EVENTS: RecentEventItem[] = [
  {
    id: 'event-1',
    title: '300 kW Commercial BESS Energization Ceremony',
    date: 'Hyderabad Industrial Estate',
    location: 'Hyderabad, Sindh',
    category: 'Milestone Installation',
    description:
      'KyZee Solars leadership and engineering team successfully energized the 300 kW / 600 kWh High-Voltage BESS installation, ensuring zero diesel generator downtime for commercial cold storage operations.',
    image: bessContainerImg,
  },
  {
    id: 'event-2',
    title: 'Executive Solar Summit & Annual Partner Forum',
    date: 'Annual Stakeholder Gathering',
    location: 'Karachi, Sindh',
    category: 'Corporate Forum',
    description:
      'CEO Muhammad Talha Tahir Khanzada addressed key industrial leaders and solar manufacturing delegates, highlighting KyZee Solars’ expansion into MW-scale BESS and industrial automation.',
    image: ceoImage,
  },
  {
    id: 'event-3',
    title: '256 kW Textile Rooftop Solar Array Commissioning',
    date: 'Industrial Textile Zone',
    location: 'Karachi, Sindh',
    category: 'Industrial Installation',
    description:
      'Commissioned a 256 kW high-efficiency bifacial solar array integrated with 3-phase hybrid inverters, providing reliable daytime factory load support and high-yield Net Metering credits.',
    image: heroBgImage,
  },
];

// 4 Interactive Project Categories for Projects Page:
// 1. Industrial Projects
// 2. Residential Projects
// 3. Projects Pictures & Reels
// 4. Client Reviews

export const PROJECTS: ProjectItem[] = [
  // Industrial Projects
  {
    id: 'proj-1',
    title: '300KW High-Voltage BESS Installation',
    category: 'industrial',
    clientType: 'Industrial',
    capacity: '300 kW PV',
    bessCapacity: '600 kWh BESS',
    location: 'Hyderabad Industrial Estate, Sindh',
    year: '2024',
    description:
      'Massive industrial storage installation designed for continuous cold-chain operations. Replaces heavy diesel generator consumption during peak load-shedding with instantaneous lithium backup.',
    panelsUsed: '560W Tier-1 N-Type Monocrystalline',
    inverterUsed: 'High-Voltage Hybrid BESS Power Conversion Unit',
    storageUsed: 'Inverex Commercial Containerized LiFePO4',
    image: bessContainerImg,
    annualSavingsPKR: 'PKR 18.5 Million',
    co2OffsetTons: '345 Tons/Yr',
  },
  {
    id: 'proj-2',
    title: '256KW Industrial Rooftop Solar Setup',
    category: 'industrial',
    clientType: 'Industrial',
    capacity: '256 kW PV',
    location: 'Korangi Industrial Area, Karachi',
    year: '2023',
    description:
      'Comprehensive rooftop solar installation for a premier export textile facility. Features bidirectional high-yield Net Metering that exports excess weekend power back to K-Electric.',
    panelsUsed: '550W Tier-1 Bifacial Solar Panels',
    inverterUsed: 'Dual 100kW On-Grid Industrial Inverters',
    image: heroBgImage,
    annualSavingsPKR: 'PKR 14.8 Million',
    co2OffsetTons: '290 Tons/Yr',
  },
  {
    id: 'proj-3',
    title: '200KW Manufacturing Complex Microgrid',
    category: 'industrial',
    clientType: 'Industrial',
    capacity: '200 kW PV',
    bessCapacity: '250 kWh Storage',
    location: 'Nooriabad Industrial Zone, Sindh',
    year: '2023',
    description:
      'Engineered for an industrial manufacturing facility facing frequent grid dips and brownouts. The hybrid conversion architecture stabilizes line voltage and provides uninterrupted factory runs.',
    panelsUsed: 'Tier-1 Monocrystalline Bifacial Array',
    inverterUsed: 'NitroX Multi-Inverter Stacking Array',
    storageUsed: 'High-Cycle Phoenix LiFePO4 Banks',
    image: IMAGES.commercialSolar,
    annualSavingsPKR: 'PKR 11.2 Million',
    co2OffsetTons: '230 Tons/Yr',
  },
  {
    id: 'proj-4',
    title: '150KW Commercial Agro Processing Plant',
    category: 'industrial',
    clientType: 'Industrial',
    capacity: '150 kW PV',
    location: 'Sukkur Industrial Corridor, Sindh',
    year: '2022',
    description:
      'Custom ground-mounted and shed solar installation for agro processing, drastically lowering daytime utility bills and providing zero-fume clean generation.',
    panelsUsed: '545W Monocrystalline PERC Modules',
    inverterUsed: 'Inverex On-Grid Industrial Series',
    image: IMAGES.heroBg,
    annualSavingsPKR: 'PKR 8.6 Million',
    co2OffsetTons: '172 Tons/Yr',
  },

  // Residential Projects
  {
    id: 'proj-5',
    title: '35KW Executive Luxury Villa Hybrid Solar',
    category: 'residential',
    clientType: 'Residential',
    capacity: '35 kW PV',
    bessCapacity: '48 kWh Storage',
    location: 'Defence Officers Housing (DHA), Karachi',
    year: '2024',
    description:
      'Aesthetic concealed rooftop mounting powering a sprawling luxury residence. Powers whole-home dual 4-ton central AC systems, elevators, and pool filtration with zero power cuts.',
    panelsUsed: '580W All-Black Monocrystalline Panels',
    inverterUsed: 'NitroX 3-Phase Smart Hybrid 20kW + 15kW',
    storageUsed: 'Triple Phoenix 16kWh LiFePO4 Rack',
    image: IMAGES.residentialSolar,
    annualSavingsPKR: 'PKR 2.8 Million',
    co2OffsetTons: '42 Tons/Yr',
  },
  {
    id: 'proj-6',
    title: '25KW Private Estate Solar & BESS',
    category: 'residential',
    clientType: 'Residential',
    capacity: '25 kW PV',
    bessCapacity: '32 kWh Storage',
    location: 'Qasimabad / Cantonment, Hyderabad',
    year: '2023',
    description:
      'Residential Net Metering system providing 100% bill offset and nighttime battery backup. Features automated smartphone telemetry and real-time load analytics.',
    panelsUsed: '550W Tier-1 Bifacial Glass-on-Glass',
    inverterUsed: 'NitroX 16kW 3-Phase Hybrid Inverter',
    storageUsed: 'Dual Phoenix 16kWh Storage Units',
    image: IMAGES.residentialSolar,
    annualSavingsPKR: 'PKR 1.95 Million',
    co2OffsetTons: '31 Tons/Yr',
  },
  {
    id: 'proj-7',
    title: '15KW Modern Urban Residence',
    category: 'residential',
    clientType: 'Residential',
    capacity: '15 kW PV',
    bessCapacity: '16 kWh Storage',
    location: 'Gulshan-e-Iqbal, Karachi',
    year: '2023',
    description:
      'High-yield residential installation engineered for compact urban roofs. Completely offsets heavy summer air conditioning electricity bills with surplus export to the grid.',
    panelsUsed: '550W Mono PERC Modules',
    inverterUsed: 'Inverex 15kW Hybrid Inverter',
    storageUsed: 'Phoenix 16kWh Lithium Battery',
    image: IMAGES.residentialSolar,
    annualSavingsPKR: 'PKR 1.25 Million',
    co2OffsetTons: '19 Tons/Yr',
  },
];

// Video Reels (Projects Pictures & Reels)
export const VIDEO_REELS: VideoReel[] = [
  {
    id: 'reel-1',
    title: 'Drone Walkthrough: 300KW BESS Hyderabad',
    duration: '0:45',
    views: '18.4K',
    tag: 'Industrial BESS',
    category: 'Milestone Walkthrough',
    thumbnail: bessContainerImg,
    description: 'Aerial drone footage of the completed 300KW High-Voltage containerized BESS installation in Hyderabad Industrial Estate.',
  },
  {
    id: 'reel-2',
    title: '256KW Textile Factory Solar Commissioning',
    duration: '0:58',
    views: '24.2K',
    tag: 'Commercial Rooftop',
    category: 'Live Commissioning',
    thumbnail: heroBgImage,
    description: 'Watch the final electrical synchronization and bidirectional Net Metering commissioning on a Karachi textile rooftop.',
  },
  {
    id: 'reel-3',
    title: 'NitroX 3-Phase 20kW Hybrid Stress Test',
    duration: '0:35',
    views: '12.8K',
    tag: 'Lab Testing',
    category: 'Technical Review',
    thumbnail: IMAGES.commercialSolar,
    description: 'Real-time bench test demonstrating 0ms UPS transfer time during sudden national grid failure under full AC load.',
  },
  {
    id: 'reel-4',
    title: 'Executive Villa 35KW Solar & Phoenix Battery Setup',
    duration: '0:50',
    views: '15.6K',
    tag: 'Residential Luxury',
    category: 'Home Walkthrough',
    thumbnail: IMAGES.residentialSolar,
    description: 'Inside look at a luxury Karachi villa powered 24/7 with zero electricity bills and silent lithium storage.',
  },
];

// Client Testimonials (Client Reviews)
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Haji Farooq Memon',
    designation: 'Managing Director',
    companyOrCity: 'Indus Agro & Cold Storage, Hyderabad',
    systemType: '300KW Solar + 600kWh High-Voltage BESS',
    rating: 5,
    review:
      'In our cold storage operations, even a 30-minute blackout can spoil millions worth of goods. KyZee Solars engineered a customized High-Voltage BESS container that took over our entire facility automatically. Their team completed installation ahead of schedule and our diesel fuel expenses dropped to near zero.',
    date: 'Installed 2024',
    verified: true,
  },
  {
    id: 't-2',
    clientName: 'Syed Tariq Hashmi',
    designation: 'Director Operations',
    companyOrCity: 'Karachi Textile & Dyeing Mills, Korangi',
    systemType: '256KW Industrial Net Metering Rooftop',
    rating: 5,
    review:
      'The engineering pedigree of Muhammad Talha Tahir Khanzada and the KyZee technical team is unmatched. They handled the entire NEPRA Net Metering licensing in record time and their quarterly performance audits have kept our generation consistently above baseline.',
    date: 'Installed 2023',
    verified: true,
  },
  {
    id: 't-3',
    clientName: 'Engr. Bilal Ahmed Khanzada',
    designation: 'Homeowner & Estate Owner',
    companyOrCity: 'DHA Phase 8, Karachi',
    systemType: '35KW Hybrid Solar + Phoenix Lithium 48kWh',
    rating: 5,
    review:
      'We run multiple inverter air conditioners and heavy domestic pumps around the clock. Since KyZee Solars commissioned our 35kW hybrid setup, our summer electricity bills dropped from PKR 280,000 down to credit refunds. Truly seamless engineering and total peace of mind.',
    date: 'Installed 2024',
    verified: true,
  },
  {
    id: 't-4',
    clientName: 'Dr. Mansoor Alam',
    designation: 'Medical Center Director',
    companyOrCity: 'Qasimabad, Hyderabad',
    systemType: '25KW Hybrid Solar + 32kWh Storage',
    rating: 5,
    review:
      'Our medical diagnostics and lab instruments require zero fluctuation. KyZee Solars installed a flawless hybrid setup that transfers instantly during outages. Their after-sales responsiveness is the best in Sindh.',
    date: 'Installed 2023',
    verified: true,
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    brand: 'NitroX',
    name: 'NitroX 50KW Commercial Inverter',
    category: 'Inverters',
    tagline: 'High-Yield 3-Phase Grid-Tied Technology',
    specs: [
      { label: 'Rated Output', value: '50 kW 3-Phase' },
      { label: 'Max DC Voltage', value: '1100 V' },
      { label: 'Efficiency', value: '98.8% Peak' },
    ],
    badge: 'Tier-1 EPC Choice',
    image: 'https://images.unsplash.com/photo-1558441719-8b489c634a1b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Quad MPPT String Design', 'Smart Export Limiter', 'Full IP66 Enclosure'],
  },
  {
    id: 'prod-2',
    brand: 'Phoenix',
    name: 'Phoenix HV Lithium Rack 100kWh',
    category: 'Batteries',
    tagline: 'High-Voltage Scalable BESS Architecture',
    specs: [
      { label: 'Storage', value: '100 kWh Scalable' },
      { label: 'Chemistry', value: 'LiFePO4 Safe Tech' },
      { label: 'Warranty', value: '10-Year / 6000 Cycles' },
    ],
    badge: 'Industrial Grade',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
    highlights: ['Active Balancing BMS', 'Containerized Modularity', 'Rapid Field Swap'],
  },
  {
    id: 'prod-3',
    brand: 'Inverex',
    name: 'Inverex Nitrox 12KW Hybrid Inverter',
    category: 'Inverters',
    tagline: 'All-in-One Intelligent Solar + Battery Hub',
    specs: [
      { label: 'Rated AC Output', value: '12 kW 3-Phase' },
      { label: 'Switch Time', value: '< 10 ms UPS' },
      { label: 'Compliance', value: 'NEPRA Net Metering' },
    ],
    badge: 'Executive Villa Standard',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    highlights: ['Touch Screen Interface', 'Dual Battery Ports', 'Wi-Fi & Cloud Telemetry'],
  },
];


