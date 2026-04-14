import React from 'react';
import { ChevronRight } from 'lucide-react';

export function ProductLaunch() {
  return (
    <div style={{ fontFamily: '-apple-system, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif' }} className="min-h-screen bg-white text-[#000000] selection:bg-[#2997FF] selection:text-white">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto px-4 h-12 flex items-center justify-between text-[12px] text-[#6e6e73]">
          <a href="#" className="font-semibold text-black hover:text-black/70 transition-colors">Omniva Design</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#websites" className="hover:text-black transition-colors">Websites</a>
            <a href="#marketing" className="hover:text-black transition-colors">Marketing</a>
            <a href="#design" className="hover:text-black transition-colors">Design</a>
          </div>
          <a href="#contact" className="bg-[#0066CC] hover:bg-[#0066CC]/90 text-white px-3 py-1 rounded-full font-medium transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 text-center border-b border-[#d2d2d7] bg-gradient-to-b from-[#f0f6ff] to-white">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[14px] uppercase tracking-[0.1em] text-[#2997FF] font-semibold mb-4">Omniva Design</p>
          <h1 className="text-[56px] md:text-[80px] font-bold leading-[1] tracking-[-0.05em] mb-6">
            Pro. In every way.
          </h1>
          <p className="text-[21px] text-[#6e6e73] leading-[1.5] max-w-[600px] mx-auto mb-10">
            A web design and digital marketing agency built for modern businesses. Santa Rosa, CA.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a href="#websites" className="bg-[#0066CC] hover:bg-[#0066CC]/90 text-white px-6 py-3 rounded-full font-medium text-[17px] transition-colors">
              View our services
            </a>
            <a href="#contact" className="group flex items-center text-[#2997FF] hover:underline text-[17px] font-medium">
              Get in touch <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Websites Section */}
      <section id="websites" className="py-32 px-4 text-center border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[14px] uppercase tracking-[0.1em] text-[#6e6e73] font-semibold mb-4">Website Designer</p>
          <h2 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
            A website that works as hard as you do.
          </h2>
          <p className="text-[21px] text-[#6e6e73] leading-[1.5] max-w-[600px] mx-auto mb-10">
            From complete redesigns to high-performance e-commerce platforms. Built for speed, optimized for search.
          </p>
          <a href="#" className="group flex justify-center items-center text-[#2997FF] hover:underline text-[21px] font-medium mb-16">
            Learn more about Websites <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-[17px] font-medium text-black">
            <div>Website Design</div>
            <div>Website Development</div>
            <div>Website Redesign</div>
            <div>E-commerce</div>
            <div>SEO</div>
          </div>
        </div>
      </section>

      {/* Internet Marketing Section */}
      <section id="marketing" className="py-32 px-4 text-center border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[14px] uppercase tracking-[0.1em] text-[#6e6e73] font-semibold mb-4">Internet Marketing</p>
          <h2 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
            Smarter marketing.<br />Real results.
          </h2>
          <p className="text-[21px] text-[#6e6e73] leading-[1.5] max-w-[600px] mx-auto mb-10">
            Leverage AI voice assistants, automate your email campaigns, and dominate local search.
          </p>
          <a href="#" className="group flex justify-center items-center text-[#2997FF] hover:underline text-[21px] font-medium mb-16">
            Learn more about Marketing <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[17px] font-medium text-black">
            <div>AI Voice Assistant</div>
            <div>AI Receptionist</div>
            <div>Email Marketing</div>
            <div>Local SEO (GMB)</div>
          </div>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section id="design" className="py-32 px-4 text-center border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[14px] uppercase tracking-[0.1em] text-[#6e6e73] font-semibold mb-4">Graphic Designer</p>
          <h2 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
            Your brand. Redefined.
          </h2>
          <p className="text-[21px] text-[#6e6e73] leading-[1.5] max-w-[600px] mx-auto mb-10">
            Stand out with a cohesive brand identity, from logo design to essential print materials.
          </p>
          <a href="#" className="group flex justify-center items-center text-[#2997FF] hover:underline text-[21px] font-medium mb-16">
            Learn more about Design <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[17px] font-medium text-black">
            <div>Logo Design</div>
            <div>Brand Identity</div>
            <div>Print Design</div>
            <div>Stationery</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-4 text-center">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
            Ready to start?
          </h2>
          <p className="text-[21px] text-[#6e6e73] leading-[1.5] max-w-[600px] mx-auto mb-10">
            Let's build something extraordinary together.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="bg-[#0066CC] hover:bg-[#0066CC]/90 text-white px-8 py-4 rounded-full font-medium text-[17px] transition-colors">
              Contact us today
            </a>
            <a href="#" className="border-2 border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white px-8 py-4 rounded-full font-medium text-[17px] transition-colors">
              Schedule a call
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
