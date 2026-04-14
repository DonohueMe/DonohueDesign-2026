import React from 'react';
import { ChevronRight } from 'lucide-react';

export function CardPage() {
  return (
    <div className="min-h-screen w-full bg-white text-[#000000]" style={{ fontFamily: '-apple-system, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      
      {/* Section 1: Hero (Black) */}
      <section className="bg-black text-[#f5f5f7] py-[140px] px-6 text-center border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[#2997FF] uppercase tracking-[0.1em] text-[14px] font-semibold mb-4">Omniva Design</p>
          <h1 className="text-[80px] md:text-[96px] font-bold leading-[1] tracking-[-0.05em] mb-6">
            Everything you<br />need in a website.
          </h1>
          <p className="text-[21px] text-[#6e6e73] max-w-[600px] mx-auto mb-10 leading-[1.5]">
            Santa Rosa's premier web design and digital marketing agency. We build digital experiences that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#0066CC] hover:bg-[#005bb5] text-white rounded-full px-8 py-4 font-semibold text-[17px] transition-colors">
              Start your project
            </button>
            <button className="bg-transparent border border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC]/10 rounded-full px-8 py-4 font-semibold text-[17px] transition-colors">
              View our work
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Website Designer (White) */}
      <section className="bg-white text-black py-[120px] px-6 border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[#2997FF] uppercase tracking-[0.1em] text-[14px] font-semibold mb-4 text-center md:text-left">Website Designer</p>
          <div className="grid md:grid-cols-2 gap-[60px] items-center">
            <div>
              <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
                Built for speed.<br />Designed to convert.
              </h2>
              <p className="text-[21px] text-[#6e6e73] leading-[1.5] mb-8">
                Your website is your best salesperson. We create stunning, responsive websites that look beautiful and work flawlessly on every device.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Website Design",
                "Website Development",
                "Website Redesign",
                "E-commerce",
                "SEO"
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-[#d2d2d7] last:border-0 group cursor-pointer">
                  <span className="text-[24px] font-medium">{service}</span>
                  <ChevronRight className="w-6 h-6 text-[#d2d2d7] group-hover:text-[#2997FF] transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Internet Marketing (Black) */}
      <section className="bg-black text-[#f5f5f7] py-[120px] px-6 border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto">
          <p className="text-[#2997FF] uppercase tracking-[0.1em] text-[14px] font-semibold mb-4 text-center md:text-left">Internet Marketing</p>
          <div className="grid md:grid-cols-2 gap-[60px] items-center">
            <div className="order-2 md:order-1 flex flex-col gap-4">
              {[
                "AI Voice Assistant",
                "AI Receptionist",
                "Email Marketing",
                "Local SEO (GMB)"
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-[#424245] last:border-0 group cursor-pointer">
                  <span className="text-[24px] font-medium">{service}</span>
                  <ChevronRight className="w-6 h-6 text-[#6e6e73] group-hover:text-[#2997FF] transition-colors" />
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
                Smarter marketing.<br />Real results.
              </h2>
              <p className="text-[21px] text-[#86868b] leading-[1.5] mb-8">
                Leverage cutting-edge AI and proven marketing strategies to automate your workflow, reach more customers, and dominate your local market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Graphic Designer (White) */}
      <section className="bg-white text-black py-[120px] px-6 border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto text-center">
          <p className="text-[#2997FF] uppercase tracking-[0.1em] text-[14px] font-semibold mb-4">Graphic Designer</p>
          <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6 max-w-[700px] mx-auto">
            A brand identity that stands out.
          </h2>
          <p className="text-[21px] text-[#6e6e73] leading-[1.5] mb-12 max-w-[600px] mx-auto">
            From your logo to your letterhead, we craft cohesive visual identities that tell your story and build trust with your audience.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Logo Design", desc: "Memorable marks" },
              { title: "Brand Identity", desc: "Complete systems" },
              { title: "Print Design", desc: "Tangible impact" },
              { title: "Stationery", desc: "Professional details" }
            ].map((service, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] rounded-full border border-[#d2d2d7] flex items-center justify-center mb-6">
                  <span className="text-[24px] font-medium">{i + 1}</span>
                </div>
                <h3 className="text-[24px] font-semibold mb-2">{service.title}</h3>
                <p className="text-[17px] text-[#6e6e73]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Location / Contact (Black) */}
      <section className="bg-black text-[#f5f5f7] py-[120px] px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <h2 className="text-[48px] md:text-[64px] font-bold leading-[1.1] tracking-tight mb-6">
            Based in Santa Rosa.<br />Working worldwide.
          </h2>
          <p className="text-[21px] text-[#86868b] leading-[1.5] mb-10 max-w-[600px] mx-auto">
            Ready to transform your digital presence? Let's talk about your next project.
          </p>
          <button className="bg-[#f5f5f7] text-black hover:bg-white rounded-full px-8 py-4 font-semibold text-[17px] transition-colors">
            Contact Us Today
          </button>
          
          <div className="mt-[80px] pt-8 border-t border-[#424245] flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#86868b]">
            <p>Copyright © {new Date().getFullYear()} Omniva Design. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#f5f5f7]">Privacy Policy</a>
              <span className="text-[#424245]">|</span>
              <a href="#" className="hover:text-[#f5f5f7]">Terms of Use</a>
              <span className="text-[#424245]">|</span>
              <a href="#" className="hover:text-[#f5f5f7]">Site Map</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}