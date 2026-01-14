import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 relative overflow-hidden rounded-2xl">
          {/* Background decorative shapes */}
          <div className="absolute inset-0">
            {/* Left curved shape */}
            <div className="absolute left-0 top-1/4 w-96 h-96">
              <div className="w-full h-full bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-30 blur-3xl"></div>
            </div>
            
            {/* Right curved shapes */}
            <div className="absolute right-0 top-1/3 w-80 h-80">
              <div className="w-full h-full bg-gradient-to-bl from-purple-200 to-blue-200 rounded-full opacity-40 blur-2xl"></div>
            </div>
            
            <div className="absolute right-1/4 bottom-1/4 w-64 h-64">
              <div className="w-full h-full bg-gradient-to-tl from-teal-200 to-cyan-200 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </div>

          <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent block sm:inline">
              RumiSolutions AI:
            </span>{' '}
            <span className="text-gray-900 block sm:inline mt-2 sm:mt-0">
              Transform your business with intelligent solutions.
            </span>
          </h1>

          {/* Subtitle */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Empower your business with RumiSolutions,
              <br className="hidden sm:block" />
              the most intuitive AI platform to
              <br className="hidden sm:block" />
              <span className="font-semibold text-gray-900">
                analyze, innovate, and accelerate growth.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 px-4 sm:px-0">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full min-w-[280px] h-12 sm:h-auto shadow-lg hover:shadow-xl transition-all duration-300">
              Try RumiSolutions Free
            </Button>
            
            {/* Product Hunt Badge */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-gray-200 shadow-sm max-w-xs sm:max-w-none mx-auto sm:mx-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">P</span>
                </div>
                <div>
                  <div className="text-xs text-orange-500 font-medium">FEATURED ON</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">Product Hunt</div>
                </div>
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-600">#4738</div>
            </div>
          </div>

          {/* No credit card text */}
          <p className="text-gray-500 text-sm mb-12 sm:mb-16">
            No credit card required
          </p>

          {/* Bottom tagline */}
          <div className="mt-12 sm:mt-16 lg:mt-24">
            <p className="text-base sm:text-lg font-semibold text-gray-800 max-w-3xl mx-auto px-4 sm:px-0">
              Trusted by innovative companies worldwide to drive digital transformation.
            </p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;