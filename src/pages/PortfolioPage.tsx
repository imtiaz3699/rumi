import { useState } from 'react';
import { Button } from '../components/ui/button';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone,
  Users,
  BarChart3,
  Calendar,
  Filter
} from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'web', label: 'Web Apps', count: 8 },
    { id: 'mobile', label: 'Mobile Apps', count: 6 },
    { id: 'ecommerce', label: 'E-commerce', count: 4 },
    { id: 'design', label: 'UI/UX Design', count: 10 }
  ];

  const projects = [
    {
      id: 1,
      title: 'EcoCommerce Platform',
      category: 'ecommerce',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      image: '🛒',
      description: 'A sustainable e-commerce platform connecting eco-friendly brands with conscious consumers.',
      features: ['Payment Processing', 'Inventory Management', 'Seller Dashboard', 'Mobile App'],
      client: 'GreenTech Solutions',
      duration: '4 months',
      team: '6 members',
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 2,
      title: 'MedCare Mobile App',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Healthcare API'],
      image: '🏥',
      description: 'Telemedicine app connecting patients with healthcare providers for remote consultations.',
      features: ['Video Calls', 'Appointment Booking', 'Medical Records', 'Prescription Management'],
      client: 'Healthcare Innovation Inc.',
      duration: '6 months',
      team: '8 members',
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 3,
      title: 'FinTech Dashboard',
      category: 'web',
      tags: ['Vue.js', 'Python', 'PostgreSQL', 'Chart.js'],
      image: '📊',
      description: 'Advanced analytics dashboard for financial institutions to track investments and portfolios.',
      features: ['Real-time Analytics', 'Custom Reports', 'Risk Assessment', 'Portfolio Tracking'],
      client: 'Metropolitan Bank',
      duration: '8 months',
      team: '10 members',
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 4,
      title: 'EduLearn Platform',
      category: 'web',
      tags: ['Next.js', 'Prisma', 'Stripe', 'AWS'],
      image: '🎓',
      description: 'Online learning management system with interactive courses and progress tracking.',
      features: ['Course Management', 'Progress Tracking', 'Interactive Quizzes', 'Certificates'],
      client: 'Digital Education Corp',
      duration: '5 months',
      team: '7 members',
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 5,
      title: 'FoodieApp Mobile',
      category: 'mobile',
      tags: ['Flutter', 'Firebase', 'Google Maps API'],
      image: '🍕',
      description: 'Food delivery mobile app with real-time tracking and restaurant recommendations.',
      features: ['Real-time Tracking', 'Payment Gateway', 'Restaurant Search', 'Review System'],
      client: 'QuickBite Delivery',
      duration: '4 months',
      team: '5 members',
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      id: 6,
      title: 'CRM Dashboard Design',
      category: 'design',
      tags: ['Figma', 'User Research', 'Prototyping'],
      image: '🎨',
      description: 'Complete UI/UX design system for a customer relationship management platform.',
      features: ['Design System', 'User Journey Maps', 'Interactive Prototypes', 'Usability Testing'],
      client: 'SalesForce Pro',
      duration: '3 months',
      team: '4 members',
      liveUrl: '#',
      caseStudyUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the innovative digital solutions we've created for businesses across various industries.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-teal-600" />
                <span>200+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-teal-600" />
                <span>150+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-teal-600" />
                <span>98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Project Image/Icon */}
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 h-48 flex items-center justify-center">
                  <div className="text-6xl">{project.image}</div>
                </div>

                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-teal-600 font-medium">{project.client}</p>
                    </div>
                    <div className="flex space-x-2">
                      <a href={project.liveUrl} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        <ExternalLink className="w-5 h-5 text-gray-600" />
                      </a>
                      <a href={project.caseStudyUrl} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        <Github className="w-5 h-5 text-gray-600" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-full font-semibold">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button className="px-4 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full">
                      Case Study
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600">
              We work with cutting-edge technologies to build modern, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <Globe className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'].map((tech) => (
                    <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech) => (
                    <span key={tech} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Like What You See?
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Let's discuss your project and create something amazing together. We'd love to be part of your success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full">
              Start Your Project
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg font-semibold rounded-full">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;