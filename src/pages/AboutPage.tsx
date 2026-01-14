import { Button } from '../components/ui/button';
import { 
  Users, 
  Award, 
  Clock, 
  Heart,
  Code2,
  Target,
  Lightbulb,
  Shield,
  TrendingUp,
  Coffee
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-teal-600" />, number: '50+', label: 'Team Members' },
    { icon: <Award className="w-8 h-8 text-teal-600" />, number: '200+', label: 'Projects Completed' },
    { icon: <Clock className="w-8 h-8 text-teal-600" />, number: '5+', label: 'Years Experience' },
    { icon: <Heart className="w-8 h-8 text-teal-600" />, number: '98%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-teal-600" />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every line of code is crafted with precision and tested thoroughly.'
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends and implement cutting-edge solutions for our clients.'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: 'Reliability',
      description: 'Our clients trust us to deliver on time, every time. We build lasting relationships through consistency.'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      title: 'Growth Focus',
      description: 'We partner with our clients to build solutions that scale and grow with their business needs.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
      bio: '10+ years in software development and business strategy. Led teams at Google and Microsoft.',
      skills: ['Leadership', 'Strategy', 'Product Management']
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '👨‍💻',
      bio: 'Full-stack architect with expertise in scalable systems. Former lead engineer at Netflix.',
      skills: ['System Architecture', 'DevOps', 'Team Leadership']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '👩‍🎨',
      bio: 'Award-winning UX/UI designer with 8+ years creating user-centered digital experiences.',
      skills: ['UI/UX Design', 'User Research', 'Design Systems']
    },
    {
      name: 'David Kim',
      role: 'Lead Mobile Developer',
      image: '👨‍🔧',
      bio: 'iOS and Android specialist with 50+ published apps. Expert in React Native and Flutter.',
      skills: ['iOS Development', 'Android', 'React Native']
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started as a small team of 3 developers with a vision to create exceptional digital solutions.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Delivered our first enterprise-level project, establishing our reputation for quality work.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew to 15 team members and expanded services to include mobile app development.'
    },
    {
      year: '2022',
      title: '100 Projects Milestone',
      description: 'Successfully completed our 100th project and received industry recognition awards.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded internationally with clients across North America, Europe, and Asia.'
    },
    {
      year: '2024',
      title: 'Innovation Lab',
      description: 'Launched RumiSolutions Innovation Lab focusing on AI and emerging technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">RumiSolutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              We're a passionate team of developers, designers, and strategists dedicated to transforming 
              businesses through innovative digital solutions.
            </p>
            <div className="flex items-center justify-center space-x-2 text-teal-600">
              <Coffee className="w-5 h-5" />
              <span className="text-lg font-medium">Fueled by coffee, driven by innovation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, RumiSolutions began with a simple mission: to bridge the gap between 
                  complex business challenges and elegant technological solutions. What started as a small 
                  team of passionate developers has grown into a full-service digital agency.
                </p>
                <p>
                  We believe that great software isn't just about clean code—it's about understanding 
                  our clients' vision and translating it into digital experiences that drive real business results.
                </p>
                <p>
                  Today, we're proud to work with startups disrupting industries and established enterprises 
                  modernizing their operations. Every project is an opportunity to push boundaries and 
                  create something extraordinary.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 p-8 rounded-2xl">
              <div className="text-center">
                <Code2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance user experiences, and create lasting value in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented individuals united by a shared passion for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our company's growth and evolution
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.year}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-teal-100 mb-8 leading-relaxed">
            Join the growing number of businesses that trust RumiSolutions to bring their digital vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full">
              Start Your Project
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg font-semibold rounded-full">
              Meet the Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;