import artisanWovenTote from '../assets/fonts/JuanaBin Asset/store/Artisan Woven Tote.avif';
import circularEconomyEbook from '../assets/fonts/JuanaBin Asset/store/Circular Economy Ebook.avif';
import compactOfficeSorter from '../assets/fonts/JuanaBin Asset/store/Compact Office Sorter.avif';
import compressedPlasticVase from '../assets/fonts/JuanaBin Asset/store/Compressed Plastic Vase.avif';
import juanaBinShirt from '../assets/fonts/JuanaBin Asset/store/JuanaBin Shirt.png';
import juniorGreenKit from '../assets/fonts/JuanaBin Asset/store/Junior Green Kit.avif';
import modularDeskOrganizer from '../assets/fonts/JuanaBin Asset/store/Modular Desk Organizer.avif';
import publicPlazaReceptacle from '../assets/fonts/JuanaBin Asset/store/Public Plaza Receptacle.avif';
import urbanSegregationHub from '../assets/fonts/JuanaBin Asset/store/Urban Segregation Hub.avif';
import wasteSortingPoster from '../assets/fonts/JuanaBin Asset/store/Waste Sorting Poster.avif';

export const products = [
  {
    id: 1,
    name: 'Junior Green Kit',
    category: 'Eco Education',
    price: 20,
    description: 'An interactive educational kit designed for young learners to understand waste segregation and circular economy principles through hands-on activities.',
    image: juniorGreenKit,
    sustainability_impact: 'Educates the next generation on sustainable practices',
    type: 'Educational Kit'
  },
  {
    id: 2,
    name: 'Circular Economy Ebook',
    category: 'Eco Education',
    price: 10,
    description: 'A comprehensive digital guide exploring circular economy models, sustainable living practices, and how to reduce waste in everyday life.',
    image: circularEconomyEbook,
    sustainability_impact: 'Spreads awareness about circular economy principles',
    type: 'Digital Content'
  },
  {
    id: 3,
    name: 'Waste Sorting Poster',
    category: 'Eco Education',
    price: 15,
    description: 'A beautifully designed educational poster showing proper waste segregation and classification methods. Perfect for schools and communities.',
    image: wasteSortingPoster,
    sustainability_impact: 'Promotes proper waste segregation in communities',
    type: 'Print Media'
  },
  {
    id: 4,
    name: 'Modular Desk Organizer',
    category: 'Recycled Goods',
    price: 60,
    description: 'A sleek desk organizer handcrafted from recycled materials by Filipino artisans. Modular design allows customization for any workspace.',
    image: modularDeskOrganizer,
    sustainability_impact: 'Reduces waste while supporting local artisans',
    type: 'Office Accessory'
  },
  {
    id: 5,
    name: 'Compressed Plastic Vase',
    category: 'Recycled Goods',
    price: 45,
    description: 'A stunning decorative vase created from compressed recycled plastic. Each piece is unique and showcases the artistry of our partner artisans.',
    image: compressedPlasticVase,
    sustainability_impact: 'Diverts plastic waste from landfills into beautiful art',
    type: 'Home Decor'
  },
  {
    id: 6,
    name: 'Artisan Woven Tote',
    category: 'Recycled Goods',
    price: 25,
    description: 'A durable and stylish tote bag woven from reclaimed textile fibers. Handmade by skilled Filipino artisans with traditional techniques.',
    image: artisanWovenTote,
    sustainability_impact: 'Supports artisans and reduces textile waste',
    type: 'Accessory'
  },
  {
    id: 7,
    name: 'Public Plaza Receptacle',
    category: 'Smart Bins',
    price: 999,
    description: 'An AI-powered waste receptacle designed for public spaces. Features intelligent waste sorting, data tracking, and community engagement features.',
    image: publicPlazaReceptacle,
    sustainability_impact: 'Enables community-wide waste tracking and segregation',
    type: 'Smart Waste System',
    capacity: 'Large (200L)',
    mounting: 'Outdoor',
    configuration: 'Multi-compartment'
  },
  {
    id: 8,
    name: 'Compact Office Sorter',
    category: 'Smart Bins',
    price: 450,
    description: 'A space-efficient AI-enabled waste sorting system perfect for office environments. Compact design with real-time segregation feedback.',
    image: compactOfficeSorter,
    sustainability_impact: 'Transforms workplace waste management practices',
    type: 'Smart Waste System',
    capacity: 'Medium (80L)',
    mounting: 'Indoor',
    configuration: 'Dual-compartment'
  },
  {
    id: 9,
    name: 'Urban Segregation Hub',
    category: 'Smart Bins',
    price: 899,
    description: 'An advanced AI waste management hub for urban areas. Multi-compartment design with analytics dashboard for tracking environmental impact.',
    image: urbanSegregationHub,
    sustainability_impact: 'Drives large-scale waste reduction and community participation',
    type: 'Smart Waste System',
    capacity: 'Large (180L)',
    mounting: 'Outdoor',
    configuration: 'Multi-compartment'
  }
];

export const categories = ['All Products', 'Smart Bins', 'Recycled Goods', 'Eco Education'];

export const filters = [
  { name: 'Product Type', id: 'type', options: ['Educational Kit', 'Digital Content', 'Print Media', 'Office Accessory', 'Home Decor', 'Accessory', 'Smart Waste System'] },
  { name: 'Price', id: 'price', range: true },
  { name: 'Capacity', id: 'capacity', options: ['Medium (80L)', 'Large (180L)', 'Large (200L)'] },
  { name: 'Mounting', id: 'mounting', options: ['Indoor', 'Outdoor'] },
  { name: 'Configuration', id: 'configuration', options: ['Dual-compartment', 'Multi-compartment'] },
];

export const sortOptions = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Name: A–Z', value: 'name_asc' },
  { label: 'Name: Z–A', value: 'name_desc' },
];
