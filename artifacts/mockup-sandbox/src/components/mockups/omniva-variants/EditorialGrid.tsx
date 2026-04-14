import React from "react";
import { ChevronRight } from "lucide-react";

export function EditorialGrid() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#2997FF] selection:text-white" style={{ fontFamily: '-apple-system, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      
      {/* Navigation */}
      <nav className="w-full h-12 flex items-center justify-between px-4 max-w-[980px] mx-auto text-xs text-[#1d1d1f]">
        <div className="font-semibold text-lg tracking-tight">Omniva</div>
        <div className="hidden md:flex items-center gap-8 text-[#1d1d1f] opacity-80">
          <a href="#" className="hover:text-black hover:opacity-100 transition-opacity">Website Designer</a>
          <a href="#" className="hover:text-black hover:opacity-100 transition-opacity">Internet Marketing</a>
          <a href="#" className="hover:text-black hover:opacity-100 transition-opacity">Graphic Designer</a>
        </div>
        <div>
          <button className="bg-[#0066CC] text-white px-4 py-1 rounded-full text-xs font-medium hover:bg-[#0077ED] transition-colors">
            Contact
          </button>
        </div>
      </nav>

      <main className="w-full">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32 max-w-[980px] mx-auto flex flex-col items-start border-b border-[#d2d2d7]">
          <h1 className="text-[64px] md:text-[80px] leading-[1.05] font-bold tracking-[-0.05em] text-black max-w-3xl mb-8">
            Digital design that actually works.
          </h1>
          <p className="text-[21px] leading-[1.5] text-[#6e6e73] max-w-2xl mb-12">
            Omniva Design is a web design and digital marketing agency in Santa Rosa, CA. We build sophisticated digital experiences that elevate your brand and drive results.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0066CC] text-white px-8 py-3 rounded-full text-[17px] font-semibold hover:bg-[#0077ED] transition-colors">
              Start your project
            </button>
            <button className="border border-[#0066CC] text-[#0066CC] px-8 py-3 rounded-full text-[17px] font-semibold hover:bg-gray-50 transition-colors">
              View our work
            </button>
          </div>
        </section>

        {/* Section 1: Website Designer (Left text, Right list) */}
        <section className="px-6 py-24 md:py-[120px] max-w-[980px] mx-auto border-b border-[#d2d2d7]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            <div className="md:col-span-5 md:pr-8">
              <span className="text-[14px] uppercase tracking-[0.1em] text-[#6e6e73] font-semibold block mb-4">Website Designer</span>
              <h2 className="text-[48px] md:text-[56px] leading-[1.05] font-bold tracking-[-0.03em] text-black mb-6">
                Built for performance.
              </h2>
              <p className="text-[21px] leading-[1.5] text-[#6e6e73]">
                We create stunning, high-performance websites that look perfect on any device. Every pixel is considered, every interaction is purposeful.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col border-t border-[#d2d2d7] md:border-t-0 md:mt-16">
              {[
                "Website Design",
                "Website Development",
                "Website Redesign",
                "E-commerce",
                "SEO"
              ].map((service, i) => (
                <a key={i} href="#" className="group flex items-center justify-between py-6 border-b border-[#d2d2d7] hover:bg-gray-50/50 transition-colors px-2 -mx-2">
                  <span className="text-[24px] font-medium text-black group-hover:text-[#2997FF] transition-colors">{service}</span>
                  <ChevronRight className="w-6 h-6 text-[#d2d2d7] group-hover:text-[#2997FF] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Internet Marketing (Right text, Left list) */}
        <section className="px-6 py-24 md:py-[120px] max-w-[980px] mx-auto border-b border-[#d2d2d7]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            <div className="md:col-span-5 md:col-start-8 md:pl-8 order-1 md:order-2">
              <span className="text-[14px] uppercase tracking-[0.1em] text-[#2997FF] font-semibold block mb-4">Internet Marketing</span>
              <h2 className="text-[48px] md:text-[56px] leading-[1.05] font-bold tracking-[-0.03em] text-black mb-6">
                Reach the right people.
              </h2>
              <p className="text-[21px] leading-[1.5] text-[#6e6e73]">
                Amplify your message with precision targeting. From local search visibility to intelligent voice assistants, we connect you with your audience.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-1 flex flex-col border-t border-[#d2d2d7] md:border-t-0 md:mt-16 order-2 md:order-1">
              {[
                "AI Voice Assistant",
                "AI Receptionist",
                "Email Marketing",
                "Local SEO (GMB)"
              ].map((service, i) => (
                <a key={i} href="#" className="group flex items-center justify-between py-6 border-b border-[#d2d2d7] hover:bg-gray-50/50 transition-colors px-2 -mx-2">
                  <span className="text-[24px] font-medium text-black group-hover:text-[#2997FF] transition-colors">{service}</span>
                  <ChevronRight className="w-6 h-6 text-[#d2d2d7] group-hover:text-[#2997FF] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Graphic Designer (Left text, Right list) */}
        <section className="px-6 py-24 md:py-[120px] max-w-[980px] mx-auto border-b border-[#d2d2d7]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            <div className="md:col-span-5 md:pr-8">
              <span className="text-[14px] uppercase tracking-[0.1em] text-[#6e6e73] font-semibold block mb-4">Graphic Designer</span>
              <h2 className="text-[48px] md:text-[56px] leading-[1.05] font-bold tracking-[-0.03em] text-black mb-6">
                Identity that endures.
              </h2>
              <p className="text-[21px] leading-[1.5] text-[#6e6e73]">
                Your brand is more than a logo. We craft comprehensive visual identities that communicate your values and resonate with your audience.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col border-t border-[#d2d2d7] md:border-t-0 md:mt-16">
              {[
                "Logo Design",
                "Brand Identity",
                "Print Design",
                "Stationery"
              ].map((service, i) => (
                <a key={i} href="#" className="group flex items-center justify-between py-6 border-b border-[#d2d2d7] hover:bg-gray-50/50 transition-colors px-2 -mx-2">
                  <span className="text-[24px] font-medium text-black group-hover:text-[#2997FF] transition-colors">{service}</span>
                  <ChevronRight className="w-6 h-6 text-[#d2d2d7] group-hover:text-[#2997FF] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 max-w-[980px] mx-auto text-[12px] text-[#6e6e73]">
          <div className="border-b border-[#d2d2d7] pb-8 mb-8">
            <p className="mb-4">
              To learn more about our services or to start a project, please contact our team.
            </p>
            <p>
              Omniva Design is a web design and digital marketing agency located in Santa Rosa, California. We specialize in creating high-quality, conversion-focused websites and digital marketing campaigns for businesses of all sizes.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              Copyright © {new Date().getFullYear()} Omniva Design. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#1d1d1f] transition-colors">Privacy Policy</a>
              <div className="w-[1px] h-3 bg-[#d2d2d7] my-auto"></div>
              <a href="#" className="hover:text-[#1d1d1f] transition-colors">Terms of Use</a>
              <div className="w-[1px] h-3 bg-[#d2d2d7] my-auto"></div>
              <a href="#" className="hover:text-[#1d1d1f] transition-colors">Legal</a>
              <div className="w-[1px] h-3 bg-[#d2d2d7] my-auto"></div>
              <a href="#" className="hover:text-[#1d1d1f] transition-colors">Site Map</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
