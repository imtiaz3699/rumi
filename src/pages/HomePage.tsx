import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Globe, 
  Users, 
  Award, 
  Clock, 
  Star,
  CheckCircle,
  Play,
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Quote,
  ExternalLink
} from 'lucide-react';
import Hero from '../components/Hero';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-teal-600" />,
      title: 'Web Development',
      description: 'Custom websites and web applications that drive business growth.',
      features: ['Responsive Design', 'Full-Stack Development', 'API Integration', 'SEO Optimized'],
      price: 'From $2,999'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['Native iOS & Android', 'React Native', 'Flutter', 'App Store Launch'],
      price: 'From $4,999'
    },
    {
      icon: <Code className="w-12 h-12 text-purple-600" />,
      title: 'Custom Software',
      description: 'Tailored software solutions for complex business requirements.',
      features: ['Enterprise Solutions', 'SaaS Platforms', 'API Development', 'Cloud Integration'],
      price: 'From $7,999'
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Delivered', icon: <Award className="w-6 h-6" /> },
    { number: '150+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Heart className="w-6 h-6" /> }
  ];

  const featuredProjects = [
    {
      title: 'EcoCommerce Platform',
      category: 'E-commerce',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Sustainable marketplace connecting eco-friendly brands.',
      metrics: '+150% Sales Growth'
    },
    {
      title: 'HealthCare Mobile App',
      category: 'Mobile App',
      image: '🏥',
      tech: ['React Native', 'Firebase'],
      description: 'Telemedicine platform for remote consultations.',
      metrics: '500K+ Downloads'
    },
    {
      title: 'FinTech Dashboard',
      category: 'Web App',
      image: '📊',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
      description: 'Investment portfolio management system.',
      metrics: '$10M+ Managed'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart',
      content: 'RumiSolutions transformed our vision into a beautiful, functional app that our users love. The team\'s expertise and communication were exceptional.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateNow',
      company: 'InnovateNow',
      content: 'Working with RumiSolutions was a game-changer for our business. They delivered a scalable web platform that handles our growing user base perfectly.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, GreenTech Solutions',
      company: 'GreenTech',
      content: 'The mobile app they built exceeded our expectations. Clean design, smooth performance, and great user experience. Highly recommended!',
      rating: 5,
      avatar: '👩‍🚀'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Swift', category: 'Mobile' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' }
  ];

  const clientLogos = [
    { name: 'TechStart', logo: 'TS' },
    { name: 'InnovateNow', logo: 'IN' },
    { name: 'GreenTech', logo: 'GT' },
    { name: 'FinanceApp', logo: 'FA' },
    { name: 'HealthCare+', logo: 'HC' },
    { name: 'EduLearn', logo: 'EL' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.',
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our design team creates intuitive user experiences and technical architecture that aligns with your vision.',
      icon: <Shield className="w-8 h-8 text-blue-600" />
    },
    {
      step: '03',
      title: 'Development',
      description: 'Using agile methodology, we build your solution with regular updates and iterative improvements.',
      icon: <Zap className="w-8 h-8 text-purple-600" />
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We ensure a smooth launch and provide ongoing support to help your digital solution thrive.',
      icon: <Heart className="w-8 h-8 text-green-600" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 font-medium mb-8">Trusted by innovative companies</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
              {clientLogos.map((client, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto hover:bg-gray-200 transition-colors">
                    <span className="font-bold text-gray-600 text-lg">{client.logo}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Build</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From stunning websites to powerful mobile apps, we create digital solutions that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-teal-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-600">{service.price}</span>
                  <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Delivering <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-teal-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses transform their ideas into successful digital products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-br from-teal-100 to-blue-100 h-48 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl">{project.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-teal-600 font-bold text-lg">{project.metrics}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-lg font-medium">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold">
                View Full Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from businesses we've helped grow
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 sm:p-12 text-center">
              <Quote className="w-12 h-12 text-teal-600 mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].position}</div>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Cutting-Edge</span> Technology Stack
            </h2>
            <p className="text-xl text-gray-300">
              We use the latest technologies to build fast, secure, and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center hover:bg-gray-700 transition-colors group">
                <div className="font-semibold text-white group-hover:text-teal-400 transition-colors">{tech.name}</div>
                <div className="text-xs text-gray-400 mt-1">{tech.category}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold">
              See Our Tech Stack
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <div className="mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-teal-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">RumiSolutions</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're not just developers - we're your strategic partners in digital transformation.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Expert team with 5+ years average experience',
                  'Agile development with regular updates',
                  'Post-launch support and maintenance included',
                  'Transparent pricing with no hidden costs',
                  'Guaranteed project delivery on time',
                  'Modern technologies and best practices'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <Link to="/about">
                  <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold">
                    Meet Our Team
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-full font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-6 rounded-2xl text-white">
                <TrendingUp className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold mb-2">99%</div>
                <div className="text-sm text-teal-100">On-Time Delivery</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl text-white">
                <Shield className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-sm text-purple-100">Support Available</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl text-white">
                <Zap className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold mb-2">3x</div>
                <div className="text-sm text-green-100">Faster Development</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white">
                <Award className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold mb-2">5★</div>
                <div className="text-sm text-orange-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Join 150+ successful companies that trust RumiSolutions to bring their digital vision to life. 
            Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your Project Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-full">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Process
            </Button>
          </div>
          <p className="text-teal-200 text-sm mt-6">
            Free consultation • No obligation • Response within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;