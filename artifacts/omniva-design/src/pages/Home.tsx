import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Star, MapPin, Phone, Mail, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Make sure to configure vite to resolve @assets properly, or assume the alias works
// The prompt says: The logo SVG is at: attached_assets/logo.svg — import it with: import logoPath from "@assets/logo.svg"
import logoPath from "@assets/logo.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav
        data-testid="nav-bar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-border shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src={logoPath} alt="Omniva Design Logo" className="h-8 w-auto" />
              <span className={`font-semibold text-xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-foreground md:text-white'}`}>Omniva Design</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollTo("website-designer")} 
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-muted-foreground' : 'text-white/80 hover:text-white'}`}
              >
                Website Designer
              </button>
              <button 
                onClick={() => scrollTo("internet-marketing")} 
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-muted-foreground' : 'text-white/80 hover:text-white'}`}
              >
                Internet Marketing
              </button>
              <button 
                onClick={() => scrollTo("graphic-designer")} 
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-muted-foreground' : 'text-white/80 hover:text-white'}`}
              >
                Graphic Designer
              </button>
              <button 
                onClick={() => scrollTo("locations")} 
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-muted-foreground' : 'text-white/80 hover:text-white'}`}
              >
                Locations
              </button>
              <Button onClick={() => scrollTo("locations")} className="rounded-full shadow-lg shadow-primary/20">
                Get Started
              </Button>
            </div>

            {/* Mobile Nav Toggle */}
            <button 
              className="md:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className={isScrolled ? 'text-foreground' : 'text-white'} /> : <Menu className={isScrolled ? 'text-foreground' : 'text-white'} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg p-4 flex flex-col space-y-4">
            <button onClick={() => scrollTo("website-designer")} className="text-left text-foreground hover:text-primary font-medium py-2">Website Designer</button>
            <button onClick={() => scrollTo("internet-marketing")} className="text-left text-foreground hover:text-primary font-medium py-2">Internet Marketing Service</button>
            <button onClick={() => scrollTo("graphic-designer")} className="text-left text-foreground hover:text-primary font-medium py-2">Graphic Designer</button>
            <button onClick={() => scrollTo("locations")} className="text-left text-foreground hover:text-primary font-medium py-2">Locations</button>
            <Button onClick={() => scrollTo("locations")} className="w-full">Get Started</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        data-testid="hero-section"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Digital Agency Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 text-white text-sm font-medium">
              <MapPin className="w-4 h-4" />
              <span>Santa Rosa, CA</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
              Design that <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-accent">drives growth.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Omniva Design is a boutique digital agency elevating small businesses in Northern California through crafted websites, internet marketing, and iconic branding.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="text-base h-14 px-8 rounded-full shadow-xl shadow-primary/30 w-full sm:w-auto"
                onClick={() => scrollTo("locations")}
              >
                Get a Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base h-14 px-8 rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                onClick={() => scrollTo("website-designer")}
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 bg-background relative" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground font-light">
              Comprehensive digital solutions tailored for your business needs. We blend aesthetic design with measurable marketing performance.
            </p>
          </motion.div>

          <div className="space-y-24">
            
            {/* Website Designer */}
            <div id="website-designer" data-testid="section-website-designer" className="scroll-mt-32">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <motion.div variants={fadeInUp}>
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Website Designer</h3>
                  <p className="text-lg text-muted-foreground mb-8 font-light">
                    We craft stunning, responsive, and high-performing websites that turn visitors into loyal customers. Every pixel is purposeful.
                  </p>
                  <ul className="space-y-4">
                    {["Website Design", "Website Development", "Website Redesign", "E-commerce Website Design", "UI/UX Design", "SEO-Optimized Website Design", "Website Maintenance"].map((item, i) => (
                      <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3 text-foreground font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeInUp} className="relative">
                  <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-blue-50/10 dark:from-blue-900/20 dark:to-transparent flex items-center justify-center p-8">
                       <div className="w-full h-full bg-white dark:bg-card rounded-xl shadow-2xl overflow-hidden border border-border/50 flex flex-col">
                          <div className="h-10 border-b border-border/50 bg-muted/50 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 p-6 flex flex-col gap-4">
                            <div className="w-1/3 h-6 bg-muted rounded-md"></div>
                            <div className="w-full h-32 bg-muted/50 rounded-lg"></div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="h-20 bg-muted/30 rounded-lg"></div>
                              <div className="h-20 bg-muted/30 rounded-lg"></div>
                              <div className="h-20 bg-muted/30 rounded-lg"></div>
                            </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Internet Marketing Service */}
            <div id="internet-marketing" data-testid="section-internet-marketing" className="scroll-mt-32">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <motion.div variants={fadeInUp} className="order-2 md:order-1 relative">
                  <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative">
                     <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/50 to-blue-50/10 dark:from-blue-900/20 dark:to-transparent flex items-center justify-center p-8">
                       <div className="w-full max-w-sm bg-white dark:bg-card rounded-2xl shadow-2xl p-6 border border-border/50">
                         <div className="flex justify-between items-end mb-6">
                           <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="m18 20 4-4"/><path d="m6 20-4-4"/><path d="M2 8h20"/></svg>
                           </div>
                           <div className="text-right">
                             <div className="text-sm text-muted-foreground">Traffic</div>
                             <div className="text-2xl font-bold text-foreground">+142%</div>
                           </div>
                         </div>
                         <div className="space-y-3">
                           {[60, 85, 45, 90, 75].map((w, i) => (
                             <div key={i} className="flex items-center gap-3">
                               <div className="w-8 text-xs text-muted-foreground">Day {i+1}</div>
                               <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                                 <div className="h-full bg-primary rounded-full" style={{ width: `${w}%` }}></div>
                               </div>
                             </div>
                           ))}
                         </div>
                       </div>
                     </div>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="order-1 md:order-2">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Internet Marketing</h3>
                  <p className="text-lg text-muted-foreground mb-8 font-light">
                    Amplify your reach and engage your audience with cutting-edge AI and marketing automation tools designed for local dominance.
                  </p>
                  <ul className="space-y-4">
                    {["AI Voice Assistant", "AI Receptionist", "AI Chat Assistant", "Email Marketing Automation", "Local SEO Services (GMB)"].map((item, i) => (
                      <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3 text-foreground font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            {/* Graphic Designer */}
            <div id="graphic-designer" data-testid="section-graphic-designer" className="scroll-mt-32">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <motion.div variants={fadeInUp}>
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Graphic Designer</h3>
                  <p className="text-lg text-muted-foreground mb-8 font-light">
                    Establish a memorable visual identity. We design brand assets that communicate professionalism, trust, and distinct character.
                  </p>
                  <ul className="space-y-4">
                    {["Email Design", "Brand Identity Design", "Logo Design", "Stationery and Business Card Design", "Brochure & Flyer Design", "Infographic Design", "Presentation Design"].map((item, i) => (
                      <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3 text-foreground font-medium">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeInUp} className="relative">
                  <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-muted relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-blue-50/10 dark:from-blue-900/20 dark:to-transparent flex items-center justify-center p-8">
                       <div className="grid grid-cols-2 gap-4 w-full h-full max-w-sm max-h-80">
                         <div className="bg-white dark:bg-card rounded-xl shadow-lg flex items-center justify-center border border-border/50">
                           <div className="w-16 h-16 rounded-full bg-primary/20"></div>
                         </div>
                         <div className="bg-primary text-primary-foreground rounded-xl shadow-lg flex items-center justify-center p-4">
                           <div className="text-4xl font-serif font-bold">Aa</div>
                         </div>
                         <div className="col-span-2 bg-white dark:bg-card rounded-xl shadow-lg p-4 border border-border/50 flex flex-col gap-2">
                           <div className="w-1/2 h-4 bg-muted rounded"></div>
                           <div className="w-3/4 h-4 bg-muted rounded"></div>
                           <div className="w-full h-4 bg-muted rounded"></div>
                         </div>
                       </div>
                     </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" data-testid="section-reviews" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted by Local Businesses</h2>
            <p className="text-lg text-muted-foreground font-light">
              See what our clients in Santa Rosa and beyond have to say.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Jenkins",
                business: "Sonoma Valley Roasters",
                text: "Omniva Design completely transformed our online presence. Our e-commerce sales doubled in the first three months after launching the new site."
              },
              {
                name: "David Chen",
                business: "Chen & Associates Law",
                text: "Professional, responsive, and incredibly talented. They delivered a website and brand identity that perfectly captures the essence of our firm."
              },
              {
                name: "Elena Rodriguez",
                business: "Bloom Floral Studio",
                text: "The AI reception tools they implemented saved us countless hours. We never miss a customer inquiry anymore. Best investment for our business."
              }
            ].map((review, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow bg-background">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-8 leading-relaxed">"{review.text}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.business}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" data-testid="section-locations" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground mb-8 font-light">
                We're proudly based in the heart of wine country. Stop by to discuss how we can help your business grow.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground">Santa Rosa, CA 95401</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                    <p className="text-muted-foreground">(707) 555-0100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">info@omnivadesign.com</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                Get Directions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/50 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.05836661688!2d-122.75534!3d38.44047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085a56f7a2b5c1d%3A0x8e7a3a29ffd5588e!2sSanta%20Rosa%2C%20CA!5e0!3m2!1sen!2sus!4v1" 
                className="w-full h-full border-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location for Omniva Design in Santa Rosa, CA"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer data-testid="footer" className="bg-card border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src={logoPath} alt="Omniva Design Logo" className="h-8 w-auto brightness-0 dark:invert opacity-80" />
                <span className="font-semibold text-xl tracking-tight text-foreground">Omniva Design</span>
              </div>
              <p className="text-muted-foreground max-w-sm font-light">
                A boutique digital agency driving growth for local businesses through intelligent design and marketing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollTo("website-designer")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Website Design</button></li>
                <li><button onClick={() => scrollTo("internet-marketing")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Internet Marketing</button></li>
                <li><button onClick={() => scrollTo("graphic-designer")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Graphic Design</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-muted-foreground text-sm">Santa Rosa, CA 95401</li>
                <li className="text-muted-foreground text-sm">(707) 555-0100</li>
                <li className="text-muted-foreground text-sm">info@omnivadesign.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Omniva Design. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
