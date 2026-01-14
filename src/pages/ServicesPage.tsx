import React from 'react';
import { Button } from '../components/ui/button';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  ShoppingCart, 
  Cloud,
  Search,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Shield
} from 'lucide-react';

const ServicesPage = () => {
  const mainServices = [
    {
      id: 'web-development',
      icon: <Globe className="w-12 h-12 text-teal-600" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies.',
      features: [
        'Responsive Design & Development',
        'Frontend Development (React, Vue.js, Angular)',
        'Backend Development (Node.js, Python, PHP)',
        'Full-Stack Applications',
        'API Development & Integration',
        'Database Design & Optimization'
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'MongoDB'],
      startingPrice: 'Starting from $2,999',
      deliveryTime: '2-6 weeks'
    },
    {
      id: 'mobile-development',
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native iOS Development (Swift)',
        'Native Android Development (Kotlin/Java)',
        'Cross-Platform Apps (React Native, Flutter)',
        'App Store Optimization',
        'Push Notifications & Analytics',
        'Backend Integration & APIs'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      startingPrice: 'Starting from $4,999',
      deliveryTime: '3-8 weeks'
    },
    {
      id: 'ui-ux-design',
      icon: <Palette className="w-12 h-12 text-purple-600" />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging digital experiences.',
      features: [
        'User Experience (UX) Research',
        'User Interface (UI) Design',
        'Wireframing & Prototyping',
        'Design Systems & Style Guides',
        'Usability Testing',
        'Mobile-First Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      startingPrice: 'Starting from $1,999',
      deliveryTime: '1-3 weeks'
    }
  ];

  const additionalServices = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management.',
      price: 'From $3,499'
    },
    {
      icon: <Cloud className="w-8 h-8 text-indigo-600" />,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure setup, deployment, and continuous integration.',
      price: 'From $1,499'
    },
    {
      icon: <Search className="w-8 h-8 text-orange-600" />,
      title: 'SEO & Digital Marketing',
      description: 'Search engine optimization and digital marketing strategies.',
      price: 'From $999/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: 'Analytics & Reporting',
      description: 'Custom dashboards and business intelligence solutions.',
      price: 'From $1,999'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      title: 'Expert Team',
      description: '50+ experienced developers and designers with 5+ years average experience.'
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-600" />,
      title: 'Fast Delivery',
      description: 'Agile development process ensuring timely delivery without compromising quality.'
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and quality assurance for all projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              From stunning websites to powerful mobile apps, we deliver digital solutions that drive business growth.
            </p>
            <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-teal-600">{service.startingPrice}</p>
                      <p className="text-sm text-gray-500">Delivery: {service.deliveryTime}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-full font-semibold">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions to support your entire digital journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <p className="text-teal-600 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RumiSolutions?
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to delivering exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your requirements and create a detailed project roadmap.' },
              { step: '02', title: 'Design', description: 'UI/UX design and system architecture planning for optimal user experience.' },
              { step: '03', title: 'Development', description: 'Agile development with regular updates and iterative improvements.' },
              { step: '04', title: 'Launch & Support', description: 'Deployment, testing, and ongoing support to ensure success.' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-teal-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Let's discuss your requirements and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full">
              Get Free Consultation
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg font-semibold rounded-full">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;