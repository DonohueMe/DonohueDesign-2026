import React from "react";
import { ArrowRight } from "lucide-react";

export function DarkPremium() {
  return (
    <div 
      className="min-h-screen bg-black text-white selection:bg-[#2997FF] selection:text-white overflow-y-auto" 
      style={{ 
        fontFamily: '-apple-system, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif' 
      }}
    >
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.1)]">
        <div className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between text-[12px] tracking-wide font-medium">
          <a href="#" className="text-white hover:text-white/80 transition-colors">Omniva Design</a>
          <div className="flex gap-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-white/80 hover:text-white transition-colors">Work</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[140px] pb-[100px] px-6 flex flex-col items-center text-center bg-black">
        <div className="max-w-[980px] w-full">
          <h1 className="text-[80px] md:text-[96px] font-bold leading-[1] tracking-[-0.05em] mb-6">
            Pro design.<br />
            Pro results.
          </h1>
          <p className="text-[21px] md:text-[24px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.5] mb-10">
            Santa Rosa's premier web design and digital marketing agency. We build digital experiences that perform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-[#0066CC] hover:bg-[#0077ED] text-white px-6 py-3 rounded-full text-[17px] font-medium transition-colors">
              Start your project
            </button>
            <button className="text-[#2997FF] hover:underline text-[17px] font-medium transition-all flex items-center gap-1 group">
              View our work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-[rgba(255,255,255,0.1)]"></div>

      {/* Services Section (Dark) */}
      <section id="services" className="py-[120px] px-6 bg-black">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#2997FF] text-[14px] font-bold uppercase tracking-[0.1em] mb-4 block">Our Expertise</span>
            <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
              Powerful services.<br />
              Precision execution.
            </h2>
            <p className="text-[21px] text-[#6e6e73] leading-[1.5] max-w-[700px] mx-auto">
              Every detail considered. Every metric optimized. A complete digital ecosystem designed for dominance.
            </p>
          </div>

          <div className="flex flex-col border-t border-[rgba(255,255,255,0.1)]">
            
            {/* Category 1 */}
            <div className="py-12 border-b border-[rgba(255,255,255,0.1)] hover:bg-[#1a1a1a] transition-colors duration-300 px-6 -mx-6 md:px-12 md:-mx-12 rounded-[3px]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <h3 className="text-[32px] font-bold tracking-tight mb-4">Website<br/>Designer</h3>
                  <a href="#" className="text-[#2997FF] hover:underline text-[17px] font-medium flex items-center gap-1">
                    Explore web <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">Website Design</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">Website Development</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">Website Redesign</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">E-commerce</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">SEO</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 2 */}
            <div className="py-12 border-b border-[rgba(255,255,255,0.1)] hover:bg-[#1a1a1a] transition-colors duration-300 px-6 -mx-6 md:px-12 md:-mx-12 rounded-[3px]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <h3 className="text-[32px] font-bold tracking-tight mb-4">Internet<br/>Marketing</h3>
                  <a href="#" className="text-[#2997FF] hover:underline text-[17px] font-medium flex items-center gap-1">
                    Explore marketing <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">AI Voice Assistant</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">AI Receptionist</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">Email Marketing</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">Local SEO (GMB)</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 3 */}
            <div className="py-12 border-b border-[rgba(255,255,255,0.1)] hover:bg-[#1a1a1a] transition-colors duration-300 px-6 -mx-6 md:px-12 md:-mx-12 rounded-[3px]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <h3 className="text-[32px] font-bold tracking-tight mb-4">Graphic<br/>Designer</h3>
                  <a href="#" className="text-[#2997FF] hover:underline text-[17px] font-medium flex items-center gap-1">
                    Explore branding <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">Logo Design</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">Brand Identity</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">Print Design</h4>
                  </div>
                  <div className="group cursor-pointer pb-4 border-b border-[rgba(255,255,255,0.05)]">
                    <h4 className="text-[21px] font-semibold mb-1 group-hover:text-[#2997FF] transition-colors">Stationery</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contrast Section (Pure White) */}
      <section className="py-[140px] px-6 bg-[#FFFFFF] text-[#000000] border-t border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
            A totally new level of performance.
          </h2>
          <p className="text-[21px] text-[#6e6e73] leading-[1.5] max-w-[700px] mx-auto mb-10">
            By combining striking visual design with advanced SEO architectures, we deliver websites that don't just look incredible—they dominate search results and drive tangible revenue growth for Santa Rosa businesses.
          </p>
          <button className="border-2 border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white px-6 py-3 rounded-full text-[17px] font-medium transition-colors">
            Learn about our process
          </button>
        </div>
      </section>

      {/* Another Dark Section - CTA */}
      <section className="py-[120px] px-6 bg-black border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-[980px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex-1">
            <h2 className="text-[48px] font-bold leading-[1.1] tracking-tight mb-4">
              Ready for what's next?
            </h2>
            <p className="text-[21px] text-[#6e6e73] leading-[1.5]">
              Let's build something extraordinary together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-[#0066CC] hover:bg-[#0077ED] text-white px-6 py-3 rounded-full text-[17px] font-medium transition-colors">
              Contact Sales
            </button>
            <a href="mailto:hello@omnivadesign.com" className="text-[#2997FF] hover:underline text-[17px] font-medium">
              hello@omnivadesign.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-16 pb-12 px-6 border-t border-[rgba(255,255,255,0.1)] text-[#6e6e73] text-[12px] leading-[1.33337]">
        <div className="max-w-[980px] mx-auto">
          <div className="mb-6 pb-4 border-b border-[rgba(255,255,255,0.1)] flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-xs">
              <p className="mb-2">1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device.</p>
              <p className="mb-2">To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS.</p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <h4 className="text-white font-semibold mb-2 text-[12px]">Services</h4>
                <ul className="flex flex-col gap-2">
                  <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2 text-[12px]">Company</h4>
                <ul className="flex flex-col gap-2">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>Copyright © {new Date().getFullYear()} Omniva Design Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#2997FF] hover:underline transition-all">Privacy Policy</a>
              <span className="hidden md:inline border-l border-[#6e6e73] h-3 my-auto"></span>
              <a href="#" className="hover:text-[#2997FF] hover:underline transition-all">Terms of Use</a>
              <span className="hidden md:inline border-l border-[#6e6e73] h-3 my-auto"></span>
              <a href="#" className="hover:text-[#2997FF] hover:underline transition-all">Site Map</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
