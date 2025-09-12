import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Hospital,
  Euro,
  Clock,
  Calendar,
  Home as HomeIcon,
  Users,
  Check,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Menu,
  X,
  UserRound,
  Scale,
  FileText,
  BookOpen,
  HeartHandshake,
  Plane,
  Building2,
  Network,
  Shield,
  Banknote,
  GraduationCapIcon,
  Languages
} from "lucide-react";
import nursingEducation from "@/assets/nursing-education.jpg";
import nursingCollaboration from "@/assets/nursing-collaboration.jpg";
import nursingLanguage from "@/assets/nursing-language.jpg";
import nursingDocumentation from "@/assets/nursing-documentation.jpg";
import nursingCareer from "@/assets/nursing-career.jpg";
import nursingArrival from "@/assets/nursing-arrival.jpg";
import masterProgramsGermany from "@/assets/master-programs-germany.png";
import nursingBenefitsGermany from "@/assets/nursing-benefits-germany.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  educationLevel: z.string().min(1, "Please select your education level"),
  interestedIn: z.array(z.string()).min(1, "Please select at least one area of interest"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      educationLevel: "",
      interestedIn: [],
      message: "",
    },
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: FormData) => {
      // Mock API call since we don't have a backend
      console.log("Form submitted:", data);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { message: "Thank you for your inquiry! We will contact you soon." };
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitInquiry.mutate(data);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-primary-foreground h-5 w-5" />
                </div>
                <span className="text-xl font-bold text-foreground">CVS × StudyWings</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#partnership" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-partnership">Partnership</a>
              <a href="#programs" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-programs">Programs</a>
              <a href="#opportunities" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-opportunities">Opportunities</a>
              <a href="#success-stories" className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-success">Success Stories</a>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-blue-700" data-testid="nav-contact-btn">
                <a href="#contact">Contact</a>
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" onClick={toggleMobileMenu} data-testid="mobile-menu-toggle">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border" data-testid="mobile-menu">
            <div className="px-4 py-6 space-y-4">
              <a href="#partnership" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-nav-partnership">Partnership</a>
              <a href="#programs" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-nav-programs">Programs</a>
              <a href="#opportunities" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-nav-opportunities">Opportunities</a>
              <a href="#success-stories" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="mobile-nav-success">Success Stories</a>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-blue-700" data-testid="mobile-nav-contact-btn">
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Floating Gradient Orbs */}
        <div className="floating-orb top-20 left-10"></div>
        <div className="floating-orb-2 bottom-40 right-20"></div>
        <div className="floating-orb top-60 right-10"></div>
        <div className="floating-orb-2 bottom-20 left-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-1 w-12 bg-white rounded"></div>
                <span className="text-lg font-medium opacity-90">Partnership Announcement</span>
              </div>
              <h1 className="hero-title" data-testid="hero-title">
                Transforming Nursing
                <span className="gradient-text-orange">Education</span>
                for Global Excellence
              </h1>
              <p className="text-xl leading-relaxed mb-8 opacity-90" data-testid="hero-description">
                CVS Educational Institution partners with StudyWings to create unprecedented pathways for nursing professionals seeking world-class opportunities in Germany's healthcare system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold orange-glow shimmer-effect" data-testid="hero-explore-btn">
                  <span>Explore Partnership</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary shimmer-effect" data-testid="hero-watch-btn">
                  Watch Success Stories
                </Button>
              </div>

              {/* Partnership Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white border-opacity-20">
                <div className="text-center" data-testid="stat-students">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Students Placed</div>
                </div>
                <div className="text-center" data-testid="stat-success">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-80">Success Rate</div>
                </div>
                <div className="text-center" data-testid="stat-hospitals">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-80">Partner Hospitals</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative animate-float">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Modern nursing education facilities"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  data-testid="hero-main-image"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent opacity-20 rounded-2xl"></div>
              </div>

              <div className="absolute -bottom-12 -left-12 w-48 h-36 animate-pulse-soft">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Professional collaboration handshake"
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                  data-testid="hero-collaboration-image"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 bg-opacity-20 rounded-full animate-pulse-soft orange-glow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 bg-opacity-30 rounded-full animate-float orange-glow"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-300 bg-opacity-25 rounded-full animate-pulse-soft"></div>
      </section>

      {/* Partnership Overview */}
      <section id="partnership" className="py-20 bg-background" data-testid="partnership-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title" data-testid="partnership-title">A Partnership Built for Excellence</h2>
              <p className="section-subtitle" data-testid="partnership-description">
                Combining CVS Educational Institution's nursing education expertise with StudyWings' international placement excellence to create unparalleled opportunities for aspiring healthcare professionals.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* CVS Educational Institution */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="professional-card h-full" data-testid="cvs-card">
                <CardHeader className="pb-4">
                  <div className="relative">
                    <div className="premium-badge absolute -top-2 -right-2 z-10">
                      ACCREDITED
                    </div>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="feature-icon">
                        <UserRound className="text-white h-10 w-10" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold mb-2 text-gray-800">CVS Educational Institution</CardTitle>
                        <p className="text-orange-600 font-semibold text-lg mb-1">Premier Nursing Education</p>
                        <p className="text-gray-600 text-sm">15+ Years of Excellence • 1000+ Successful Graduates</p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <img
                        src={nursingCollaboration}
                        alt="Professional nursing students in modern simulation lab during training"
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        data-testid="cvs-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-l-4 border-orange-500" data-testid="cvs-gnm">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="text-white h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">GNM Program</h4>
                          <p className="text-gray-600 mt-1">3-year General Nursing & Midwifery diploma with extensive clinical rotations</p>
                          <div className="flex items-center mt-2 text-sm text-orange-600">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>36 months • Clinical rotations included</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-l-4 border-orange-500" data-testid="cvs-anm">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="text-white h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">ANM Program</h4>
                          <p className="text-gray-600 mt-1">2-year Auxiliary Nurse Midwifery certification program</p>
                          <div className="flex items-center mt-2 text-sm text-orange-600">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>24 months • Practical training focus</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-l-4 border-orange-500" data-testid="cvs-excellence">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="text-white h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">Clinical Excellence</h4>
                          <p className="text-gray-600 mt-1">State-of-the-art simulation labs and premier hospital partnerships</p>
                          <div className="flex items-center mt-2 text-sm text-orange-600">
                            <Hospital className="h-4 w-4 mr-1" />
                            <span>Advanced simulation labs • Top hospital partnerships</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div data-testid="cvs-graduates">
                        <div className="text-3xl font-bold">1000+</div>
                        <div className="text-orange-100 text-sm">Successful Graduates</div>
                      </div>
                      <div data-testid="cvs-experience">
                        <div className="text-3xl font-bold">15+</div>
                        <div className="text-orange-100 text-sm">Years Excellence</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* StudyWings */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="professional-card h-full" data-testid="studywings-card">
                <CardHeader className="pb-4">
                  <div className="relative">
                    <div className="premium-badge absolute -top-2 -right-2 z-10">
                      CERTIFIED
                    </div>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="feature-icon">
                        <Globe className="text-white h-10 w-10" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold mb-2 text-gray-800">StudyWings</CardTitle>
                        <p className="text-blue-600 font-semibold text-lg mb-1">International Education Specialists</p>
                        <p className="text-gray-600 text-sm">ICEF Certified • 500+ Successful Placements in Germany</p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <img
                        src={nursingEducation}
                        alt="International nursing students learning German language and medical terminology"
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        data-testid="studywings-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-500" data-testid="studywings-language">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="text-white h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">German Language Training</h4>
                          <p className="text-gray-600 mt-1">Comprehensive A1-B2 level courses with certified instructors</p>
                          <div className="flex items-center mt-2 text-sm text-blue-600">
                            <Users className="h-4 w-4 mr-1" />
                            <span>95% pass rate • Online & offline classes</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-500" data-testid="studywings-visa">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="text-white h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">Visa & Documentation</h4>
                          <p className="text-gray-600 mt-1">Complete legal support for German work visa and credential recognition</p>
                          <div className="flex items-center mt-2 text-sm text-blue-600">
                            <Scale className="h-4 w-4 mr-1" />
                            <span>100% legal compliance • Expert guidance</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-500" data-testid="studywings-placement">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="text-white h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">Job Placement</h4>
                          <p className="text-gray-600 mt-1">Direct connections with 50+ German hospitals and healthcare facilities</p>
                          <div className="flex items-center mt-2 text-sm text-blue-600">
                            <Hospital className="h-4 w-4 mr-1" />
                            <span>50+ partner hospitals • €2,700-3,200 starting salary</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div data-testid="studywings-placements">
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-blue-100 text-sm">Germany Placements</div>
                      </div>
                      <div data-testid="studywings-success">
                        <div className="text-3xl font-bold">95%</div>
                        <div className="text-blue-100 text-sm">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Journey to Germany */}
      <section id="opportunities" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden" data-testid="opportunities-section">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-orb top-20 left-10 bg-gradient-to-br from-orange-400/30 to-red-400/30 orange-glow"></div>
          <div className="floating-orb-2 bottom-40 right-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30"></div>
          <div className="floating-orb top-60 right-10 bg-gradient-to-br from-green-400/30 to-teal-400/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              {/* Partnership Badge */}
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/15 to-primary/10 rounded-full mb-8 backdrop-blur-md border border-primary/30 premium-header animated-border">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-primary text-lg">CVS Education</div>
                      <div className="text-xs text-muted-foreground">Nursing Excellence</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-8 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-primary text-lg">StudyWings</div>
                      <div className="text-xs text-muted-foreground">Global Placement</div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="hero-title !text-5xl md:!text-6xl !mb-8 !leading-tight" data-testid="opportunities-title">
                Your Complete Journey to 
                <span className="block gradient-text-orange mt-2">German Healthcare Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-5xl mx-auto mb-12" data-testid="opportunities-description">
                Strategic partnership combining <strong className="text-primary font-semibold">CVS Education's premier nursing programs</strong> with <strong className="text-accent font-semibold">StudyWings' international placement expertise</strong>. Every step professionally managed with guaranteed success pathways.
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="professional-card p-6 text-center card-hover-glow">
                  <div className="text-4xl font-bold gradient-text mb-3 animate-pulse-soft">5</div>
                  <div className="text-sm text-muted-foreground font-medium">Strategic Steps</div>
                </div>
                <div className="professional-card p-6 text-center card-hover-glow">
                  <div className="text-4xl font-bold gradient-text mb-3 animate-pulse-soft">95%</div>
                  <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
                </div>
                <div className="professional-card p-6 text-center card-hover-glow">
                  <div className="text-4xl font-bold gradient-text mb-3 animate-pulse-soft">€3,200</div>
                  <div className="text-sm text-muted-foreground font-medium">Starting Salary</div>
                </div>
                <div className="professional-card p-6 text-center card-hover-glow">
                  <div className="text-4xl font-bold gradient-text mb-3 animate-pulse-soft">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Partner Hospitals</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comprehensive Journey Steps */}
          <div className="relative">
            {/* Enhanced Journey Path Line with Connection Nodes */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 hidden lg:block" style={{ height: 'calc(100% - 160px)', top: '80px' }}>
              <div className="w-full h-full bg-gradient-to-b from-orange-500 via-blue-500 via-purple-500 via-green-500 to-teal-500 opacity-50 rounded-full journey-path-glow animate-pulse-soft"></div>
              {/* Animated connection nodes */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full shadow-2xl animate-bounce orange-glow" style={{ animationDelay: '0s' }}>
                <div className="w-full h-full bg-white/20 rounded-full animate-ping"></div>
              </div>
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-full h-full bg-white/20 rounded-full animate-ping"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-full h-full bg-white/20 rounded-full animate-ping"></div>
              </div>
              <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-2xl animate-bounce" style={{ animationDelay: '1.5s' }}>
                <div className="w-full h-full bg-white/20 rounded-full animate-ping"></div>
              </div>
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full shadow-2xl animate-bounce" style={{ animationDelay: '2s' }}>
                <div className="w-full h-full bg-white/20 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="space-y-20">
              {/* Step 1: CVS Education & Free Career Counseling */}
              <motion.div
                className="grid lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="journey-card gradient-border p-10 rounded-3xl professional-card bg-gradient-to-br from-orange-50/80 via-red-50/60 to-orange-100/70 backdrop-blur-sm border-2 border-orange-200/50 shadow-2xl relative overflow-hidden" data-testid="step-education">
                  {/* Gradient Light Effects */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-red-400/20 to-transparent rounded-full blur-lg animate-float"></div>
                  <div className="absolute top-1/2 right-0 w-20 h-20 bg-gradient-to-l from-orange-300/25 to-transparent rounded-full blur-md animate-pulse"></div>
                  <div className="relative z-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="step-number-glow bg-gradient-to-br from-orange-500 to-red-500 animate-float w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-4xl font-bold text-white">1</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="premium-badge bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse px-4 py-2 rounded-full text-sm font-bold shadow-lg">🎓 CVS Education Provider</div>
                      </div>
                      <h3 className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4 leading-tight">CVS Education & Career Counseling</h3>
                      <p className="text-muted-foreground text-xl leading-relaxed mb-6 font-medium">Start your nursing journey with world-class education and personalized career guidance from India's premier nursing institution</p>
                    </div>
                  </div>

                   <div className="grid md:grid-cols-2 gap-4 mb-6">
                     <div className="service-card bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <HeartHandshake className="h-5 w-5 text-blue-600" />
                         <h4 className="font-bold text-blue-800">Free Career Counseling</h4>
                       </div>
                       <p className="text-blue-700 text-sm mb-2">We help students choose the best courses and universities for a successful and bright future based on their academic background and career goals</p>
                       <div className="text-xs text-blue-600">✓ Academic background analysis ✓ Career goals assessment</div>
                     </div>
                     <div className="service-card bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <FileText className="h-5 w-5 text-purple-600" />
                         <h4 className="font-bold text-purple-800">University Application Process</h4>
                       </div>
                       <p className="text-purple-700 text-sm mb-2">We assist with university applications, including writing motivation letters and guidance on required documents, ensuring guaranteed admissions</p>
                       <div className="text-xs text-purple-600">✓ Motivation letters ✓ Document guidance ✓ Guaranteed admissions</div>
                     </div>
                   </div>

                  <div className="status-indicator">
                    <Clock className="h-5 w-5 mr-2 text-orange-600" />
                    <span className="font-semibold text-orange-600">Duration: 2-3 years • 15+ years excellence</span>
                  </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="image-container">
                    <img
                      src={nursingEducation}
                      alt="Professional nursing education at CVS with modern simulation labs"
                      className="rounded-3xl shadow-2xl w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 via-transparent to-transparent rounded-3xl"></div>
                    <div className="absolute top-6 left-6 bg-orange-500/90 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                      Premier Nursing Education
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Language Training & Scholarships */}
              <motion.div
                className="grid lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="lg:order-2 journey-card gradient-border p-10 rounded-3xl professional-card bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-blue-100/70 backdrop-blur-sm border-2 border-blue-200/50 shadow-2xl relative overflow-hidden" data-testid="step-language">
                  {/* Gradient Light Effects */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-lg animate-float"></div>
                  <div className="absolute top-1/3 left-0 w-22 h-22 bg-gradient-to-r from-blue-300/25 to-transparent rounded-full blur-md animate-pulse"></div>
                  <div className="relative z-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="step-number-glow bg-gradient-to-br from-blue-500 to-purple-500 animate-float w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-4xl font-bold text-white">2</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="premium-badge bg-gradient-to-r from-blue-500 to-purple-500 text-white animate-pulse px-4 py-2 rounded-full text-sm font-bold shadow-lg">🌍 StudyWings Provider</div>
                      </div>
                      <h3 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent mb-4 leading-tight">Language Training & Funding Support</h3>
                      <p className="text-muted-foreground text-xl leading-relaxed mb-6 font-medium">Master German language and secure comprehensive funding through StudyWings' international education expertise</p>
                    </div>
                  </div>

                   <div className="space-y-4 mb-6">
                      <div className="service-card bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50">
                        <div className="flex items-center space-x-3 mb-3">
                          <Languages className="h-5 w-5 text-blue-600" />
                          <h4 className="font-bold text-blue-800">Language Preparation</h4>
                        </div>
                        <p className="text-blue-700 text-sm mb-3">As official partners of IELTS, we provide expert guidance and preparation for IELTS and German language courses to meet university and visa requirements</p>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div className="bg-blue-100 px-2 py-1 rounded text-xs font-semibold text-blue-800">🏫 Online Classes</div>
                          <div className="bg-cyan-100 px-2 py-1 rounded text-xs font-semibold text-cyan-800">🏢 Offline Classes</div>
                        </div>
                        <div className="text-xs text-blue-600">✓ German A1-B2 ✓ IELTS Academic ✓ TOEFL iBT</div>
                      </div>

                     <div className="service-card bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <Banknote className="h-5 w-5 text-green-600" />
                         <h4 className="font-bold text-green-800">Scholarships & Funding</h4>
                       </div>
                       <p className="text-green-700 text-sm mb-2">We guide students in securing scholarships from universities and assist in obtaining study loans from reputed Indian banks, with funding up to 40 lakhs</p>
                       <div className="text-xs text-green-600">✓ University scholarships ✓ Study loans ✓ Funding up to 40 lakhs</div>
                     </div>

                     <div className="service-card bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <Shield className="h-5 w-5 text-teal-600" />
                         <h4 className="font-bold text-teal-800">Blocked Account & Money Exchange Services</h4>
                       </div>
                       <p className="text-teal-700 text-sm mb-2">We provide support for opening a blocked account, arranging travel and health insurance, and facilitating money exchange services at competitive rates</p>
                       <div className="text-xs text-teal-600">✓ Blocked account opening ✓ Travel insurance ✓ Money exchange</div>
                     </div>
                   </div>

                  <div className="status-indicator">
                    <Globe className="h-5 w-5 mr-2 text-blue-600" />
                    <span className="font-semibold text-blue-600">95% pass rate • Expert certified instructors</span>
                  </div>
                  </div>
                </div>

                <div className="lg:order-1 relative group">
                  <div className="image-container">
                    <img
                      src={nursingLanguage}
                      alt="International nursing students learning German language with medical terminology"
                      className="rounded-3xl shadow-2xl w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-transparent rounded-3xl"></div>
                    <div className="absolute top-6 left-6 bg-blue-500/90 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                      Language & Funding Excellence
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Comprehensive Documentation & Visa Support */}
              <motion.div
                className="grid lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="journey-card gradient-border p-10 rounded-3xl professional-card bg-gradient-to-br from-purple-50/80 via-pink-50/60 to-purple-100/70 backdrop-blur-sm border-2 border-purple-200/50 shadow-2xl relative overflow-hidden" data-testid="step-documentation">
                  {/* Gradient Light Effects */}
                  <div className="absolute top-0 left-0 w-30 h-30 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-26 h-26 bg-gradient-to-tl from-pink-400/20 to-transparent rounded-full blur-lg animate-float"></div>
                  <div className="absolute top-2/3 right-0 w-18 h-18 bg-gradient-to-l from-purple-300/25 to-transparent rounded-full blur-md animate-pulse"></div>
                  <div className="relative z-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="step-number-glow bg-gradient-to-br from-purple-500 to-pink-500 animate-float w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-4xl font-bold text-white">3</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="premium-badge bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse px-4 py-2 rounded-full text-sm font-bold shadow-lg">📋 Documentation Excellence</div>
                      </div>
                      <h3 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4 leading-tight">Complete Documentation & Visa Excellence</h3>
                      <p className="text-muted-foreground text-xl leading-relaxed mb-6 font-medium">Comprehensive legal and documentation support for seamless migration</p>
                    </div>
                  </div>

                   <div className="grid md:grid-cols-2 gap-4 mb-6">
                     <div className="service-card bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <FileText className="h-5 w-5 text-purple-600" />
                         <h4 className="font-bold text-purple-800">Passport & Visa Assistance</h4>
                       </div>
                       <p className="text-purple-700 text-sm mb-2">Guidance for Passport Application • Complete APS Process Support</p>
                       <div className="text-xs text-purple-600">✓ Passport guidance ✓ APS process ✓ Complete support</div>
                     </div>
                     <div className="service-card bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <Scale className="h-5 w-5 text-indigo-600" />
                         <h4 className="font-bold text-indigo-800">Visa Documentation Support</h4>
                       </div>
                       <p className="text-indigo-700 text-sm mb-2">We manage online applications for both German and European Universities, handle the Consular Portal (CSP), ensuring smooth documentation through VFS Global</p>
                       <div className="text-xs text-indigo-600">✓ Online applications ✓ CSP handling ✓ VFS Global support</div>
                     </div>
                     <div className="service-card bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <BookOpen className="h-5 w-5 text-cyan-600" />
                         <h4 className="font-bold text-cyan-800">Visa Preparation</h4>
                       </div>
                       <p className="text-cyan-700 text-sm mb-2">German visa interview preparation • Visa SOP drafting • European CV & Cover Letter creation • Financial proof guidance</p>
                       <div className="text-xs text-cyan-600">✓ Interview prep ✓ SOP creation ✓ CV & Cover Letter ✓ Financial docs</div>
                     </div>
                     <div className="service-card bg-gradient-to-br from-teal-50 to-green-50 border border-teal-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <Shield className="h-5 w-5 text-teal-600" />
                         <h4 className="font-bold text-teal-800">Pre-Departure Session</h4>
                       </div>
                       <p className="text-teal-700 text-sm mb-2">Packing lists & travel essentials • Part-time jobs guidelines • Do's and Don'ts in Germany • Cultural adaptation</p>
                       <div className="text-xs text-teal-600">✓ Packing guidance ✓ Job guidelines ✓ Cultural tips ✓ Expectations</div>
                     </div>
                   </div>

                  <div className="status-indicator">
                    <Shield className="h-5 w-5 mr-2 text-purple-600" />
                    <span className="font-semibold text-purple-600">100% legal compliance • Expert documentation team</span>
                  </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="image-container">
                    <img
                      src={nursingDocumentation}
                      alt="Professional nurse with official German work visa documents and certificates"
                      className="rounded-3xl shadow-2xl w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-transparent rounded-3xl"></div>
                    <div className="absolute top-6 left-6 bg-purple-500/90 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                      Legal Excellence & Compliance
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Job Placement & Career Success */}
              <motion.div
                className="grid lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="lg:order-2 journey-card gradient-border p-10 rounded-3xl professional-card bg-gradient-to-br from-green-50/80 via-emerald-50/60 to-green-100/70 backdrop-blur-sm border-2 border-green-200/50 shadow-2xl relative overflow-hidden" data-testid="step-placement">
                  {/* Gradient Light Effects */}
                  <div className="absolute top-0 right-0 w-34 h-34 bg-gradient-to-bl from-green-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-lg animate-float"></div>
                  <div className="absolute top-1/4 left-0 w-20 h-20 bg-gradient-to-r from-green-300/25 to-transparent rounded-full blur-md animate-pulse"></div>
                  <div className="relative z-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="step-number-glow bg-gradient-to-br from-green-500 to-emerald-500 animate-float w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-4xl font-bold text-white">4</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="premium-badge bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse px-4 py-2 rounded-full text-sm font-bold shadow-lg">💼 Career Excellence</div>
                      </div>
                      <h3 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent mb-4 leading-tight">Job Placement & Career Excellence</h3>
                      <p className="text-muted-foreground text-xl leading-relaxed mb-6 font-medium">Secure your dream position with comprehensive placement support</p>
                    </div>
                  </div>

                   <div className="space-y-4 mb-6">
                     <div className="service-card bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <Building2 className="h-5 w-5 text-blue-600" />
                         <h4 className="font-bold text-blue-800">Accommodation & Part-time Jobs Assistance</h4>
                       </div>
                       <p className="text-blue-700 text-sm mb-2">We help students find accommodation in major cities like Berlin, Munich, Hamburg, Stuttgart, and Hamm, whether through university dorms, private apartments, or shared housing</p>
                       <div className="text-xs text-blue-600">✓ Major cities housing ✓ University dorms ✓ Part-time job reference assistance</div>
                     </div>

                      <div className="service-card bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50">
                        <div className="flex items-center space-x-3 mb-3">
                          <Network className="h-5 w-5 text-green-600" />
                          <h4 className="font-bold text-green-800">Networking & Community Support</h4>
                        </div>
                        <p className="text-green-700 text-sm mb-2">Connecting students with alumni and mentors in Germany • Guidance on student communities, events, and networking opportunities</p>
                        <div className="text-xs text-green-600">✓ Alumni connections ✓ Community events ✓ Networking opportunities</div>
                      </div>

                      <div className="service-card bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200/50">
                        <div className="flex items-center space-x-3 mb-3">
                          <Euro className="h-5 w-5 text-orange-600" />
                          <h4 className="font-bold text-orange-800">High Demand & Job Security</h4>
                        </div>
                        <p className="text-orange-700 text-sm mb-2">Germany faces a nursing shortage, ensuring stable jobs. Good salary & benefits - Earn €2,500-€3,000/month with paid leave, insurance, and pensions</p>
                        <div className="text-xs text-orange-600">✓ Stable employment ✓ €2,500-€3,000/month ✓ Full benefits</div>
                      </div>

                      <div className="service-card bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200/50">
                        <div className="flex items-center space-x-3 mb-3">
                          <Users className="h-5 w-5 text-teal-600" />
                          <h4 className="font-bold text-teal-800">PR & Family Visa Benefits</h4>
                        </div>
                        <p className="text-teal-700 text-sm mb-2">Eligible for Permanent Residency (PR) after 18 months; family reunification possible. Career Growth - Specializations, promotions, and international recognition</p>
                        <div className="text-xs text-teal-600">✓ PR after 18 months ✓ Family reunification ✓ Career growth</div>
                      </div>
                   </div>

                  <div className="status-indicator">
                    <Hospital className="h-5 w-5 mr-2 text-green-600" />
                    <span className="font-semibold text-green-600">50+ partner hospitals • Direct placement guarantee</span>
                  </div>
                  </div>
                </div>

                <div className="lg:order-1 relative group">
                  <div className="image-container">
                    <img
                      src={nursingCareer}
                      alt="Happy international nurse working in modern German hospital with patients"
                      className="rounded-3xl shadow-2xl w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/30 via-transparent to-transparent rounded-3xl"></div>
                    <div className="absolute top-6 left-6 bg-green-500/90 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                      Career Success in Germany
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 5: Post-Arrival Excellence & Settlement */}
              <motion.div
                className="grid lg:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="journey-card gradient-border p-10 rounded-3xl professional-card bg-gradient-to-br from-teal-50/80 via-cyan-50/60 to-teal-100/70 backdrop-blur-sm border-2 border-teal-200/50 shadow-2xl relative overflow-hidden" data-testid="step-settlement">
                  {/* Gradient Light Effects */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-cyan-400/20 to-transparent rounded-full blur-lg animate-float"></div>
                  <div className="absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-l from-teal-300/25 to-transparent rounded-full blur-md animate-pulse"></div>
                  <div className="relative z-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="step-number-glow bg-gradient-to-br from-teal-500 to-blue-500 animate-float w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-4xl font-bold text-white">5</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="premium-badge bg-gradient-to-r from-teal-500 to-blue-500 text-white animate-pulse px-4 py-2 rounded-full text-sm font-bold shadow-lg">🏡 Settlement Excellence</div>
                      </div>
                      <h3 className="text-5xl font-extrabold bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 bg-clip-text text-transparent mb-4 leading-tight">Post-Arrival Support & Settlement</h3>
                      <p className="text-muted-foreground text-xl leading-relaxed mb-6 font-medium">Complete settlement assistance for smooth transition to German life</p>
                    </div>
                  </div>

                   <div className="grid md:grid-cols-2 gap-4 mb-6">
                     <div className="service-card bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <Plane className="h-5 w-5 text-teal-600" />
                         <h4 className="font-bold text-teal-800">Airport Pickup Assistance</h4>
                       </div>
                       <p className="text-teal-700 text-sm mb-2">Airport pickup assistance (if required)</p>
                       <div className="text-xs text-teal-600">✓ Arrival support ✓ Initial guidance ✓ Safe transportation</div>
                     </div>
                     <div className="service-card bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <FileText className="h-5 w-5 text-blue-600" />
                         <h4 className="font-bold text-blue-800">City Registration & Residence Permit</h4>
                       </div>
                       <p className="text-blue-700 text-sm mb-2">City registration & residence permit process assistance</p>
                       <div className="text-xs text-blue-600">✓ City registration ✓ Residence permits ✓ Legal formalities</div>
                     </div>
                     <div className="service-card bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <Banknote className="h-5 w-5 text-purple-600" />
                         <h4 className="font-bold text-purple-800">Bank Account Opening Support</h4>
                       </div>
                       <p className="text-purple-700 text-sm mb-2">Bank account opening support • Health insurance activation • Semester travel ticket arrangements at best prices</p>
                       <div className="text-xs text-purple-600">✓ Bank accounts ✓ Health insurance ✓ Travel tickets</div>
                     </div>
                     <div className="service-card bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50">
                       <div className="flex items-center space-x-3 mb-3">
                         <Shield className="h-5 w-5 text-green-600" />
                         <h4 className="font-bold text-green-800">Settlement Assistance</h4>
                       </div>
                       <p className="text-green-700 text-sm mb-2">Comprehensive assistance in linking blocked accounts, opening new bank accounts, and obtaining city registration documents</p>
                       <div className="text-xs text-green-600">✓ Blocked account linking ✓ New bank accounts ✓ Registration docs</div>
                     </div>
                   </div>

                  <div className="status-indicator">
                    <HeartHandshake className="h-5 w-5 mr-2 text-teal-600" />
                    <span className="font-semibold text-teal-600">End-to-end settlement • Stress-free transition guarantee</span>
                  </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="image-container">
                    <img
                      src={nursingArrival}
                      alt="International nursing graduate arriving at German airport with professional settlement support"
                      className="rounded-3xl shadow-2xl w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-600/30 via-transparent to-transparent rounded-3xl"></div>
                    <div className="absolute top-6 left-6 bg-teal-500/90 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                      Complete Settlement Support
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Success Guarantee Section */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="success-guarantee-card p-12 rounded-3xl mx-auto max-w-4xl">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
                    <Check className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-4 gradient-text">Complete Success Guarantee</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  With our end-to-end support, we ensure a smooth and stress-free journey for students pursuing their education in Germany. From CVS education to successful settlement - we're with you every step.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-muted-foreground">Successfully Placed Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-muted-foreground">Visa Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                    <div className="text-muted-foreground">Partner German Hospitals</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why CVs Choose StudyWings */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title gradient-text-orange" data-testid="why-choose-title">Why CVs Choose StudyWings?</h2>
              <p className="section-subtitle" data-testid="why-choose-description">
                Top-ranked Master's programs and comprehensive support for international nursing careers
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Programs Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={masterProgramsGermany}
                  alt="Top Ranked Master's Programs in Germany including AI, Engineering, Business, Renewable Energy and Computer Science"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <GraduationCapIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Top-Ranked Programs</h3>
                </div>
                <p className="text-gray-600 mb-4">Access to Germany's premier Master's programs in cutting-edge fields like AI & Data Science, Engineering & Automotive Technology, and Business & Management</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">AI & Data Science</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Engineering</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Business & MBA</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Hospital className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Medical Excellence</h3>
                </div>
                <p className="text-gray-600 mb-4">English-taught medical programs including MBBS/MD, Dentistry, Pharmacy, Nursing & Allied Health, and Healthcare Management</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">MBBS/MD</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Nursing</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Healthcare Mgmt</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <HeartHandshake className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Direct Job Placements</h3>
                </div>
                <p className="text-gray-600">@StudyWings-Overseas, we offer direct job placements for nursing professionals with guaranteed career success and international recognition</p>
                <div className="mt-4 text-green-600 font-semibold">✓ Guaranteed Placements ✓ International Recognition ✓ Career Growth</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-secondary" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title" data-testid="contact-title">Ready to Transform Your Nursing Career?</h2>
              <p className="section-subtitle" data-testid="contact-description">
                Take the first step towards your German healthcare career. Schedule a free consultation with our experts today.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card rounded-2xl shadow-lg border border-border animated-border orange-glow" data-testid="contact-form-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Schedule Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your first name" {...field} data-testid="input-firstname" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your last name" {...field} data-testid="input-lastname" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="Enter your phone number" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="educationLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Education Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-education">
                                  <SelectValue placeholder="Select your education level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="12th-completed">12th Grade Completed</SelectItem>
                                <SelectItem value="gnm-current">Currently in GNM Program</SelectItem>
                                <SelectItem value="gnm-graduate">GNM Graduate</SelectItem>
                                <SelectItem value="anm-current">Currently in ANM Program</SelectItem>
                                <SelectItem value="anm-graduate">ANM Graduate</SelectItem>
                                <SelectItem value="other">Other Healthcare Qualification</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="interestedIn"
                        render={() => (
                          <FormItem>
                            <FormLabel>Interested in</FormLabel>
                            <div className="space-y-2">
                              {[
                                { id: "language", label: "German Language Training" },
                                { id: "placement", label: "University Placement in Germany" },
                                { id: "visa", label: "Visa Assistance" },
                                { id: "counseling", label: "Career Counseling" },
                              ].map((item) => (
                                <FormField
                                  key={item.id}
                                  control={form.control}
                                  name="interestedIn"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(item.id)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, item.id])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== item.id
                                                    )
                                                  )
                                            }}
                                            data-testid={`checkbox-${item.id}`}
                                          />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          {item.label}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Message</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={4}
                                placeholder="Tell us about your career goals and any specific questions..."
                                {...field}
                                value={field.value || ""}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 font-semibold shimmer-effect orange-glow"
                        disabled={submitInquiry.isPending}
                        data-testid="submit-btn"
                      >
                        {submitInquiry.isPending ? "Submitting..." : "Schedule Free Consultation"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* CVS Educational Institution Contact */}
              <Card className="bg-card rounded-2xl shadow-lg border border-border animated-border orange-glow card-hover-glow" data-testid="cvs-contact-card">
                <CardHeader>
                  <CardTitle className="text-xl">CVS Educational Institution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3" data-testid="cvs-address">
                      <MapPin className="text-primary mt-1 h-4 w-4" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="text-muted-foreground">CVS Campus, Medical District, [Your City], India</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3" data-testid="cvs-phone">
                      <Phone className="text-primary mt-1 h-4 w-4" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3" data-testid="cvs-email">
                      <Mail className="text-primary mt-1 h-4 w-4" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">admissions@cvseducation.edu</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* StudyWings Contact */}
              <Card className="bg-card rounded-2xl shadow-lg border border-border animated-border orange-glow card-hover-glow" data-testid="studywings-contact-card">
                <CardHeader>
                  <CardTitle className="text-xl">StudyWings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3" data-testid="studywings-address">
                      <MapPin className="text-primary mt-1 h-4 w-4" />
                      <div>
                        <p className="font-medium text-foreground">India Office</p>
                        <p className="text-muted-foreground">Plot No 172, Kothapalem Layout, Tiruchanur, Tirupati - 517503, Andhra Pradesh (AP), India</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3" data-testid="studywings-phones">
                      <Phone className="text-primary mt-1 h-4 w-4" />
                      <div>
                        <p className="font-medium text-foreground">Phone Numbers</p>
                        <p className="text-muted-foreground">Germany: +49 15778 550360</p>
                        <p className="text-muted-foreground">India: +91 90632 45377</p>
                        <p className="text-muted-foreground">India: +91 91604 08999</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3" data-testid="studywings-website">
                      <Globe className="text-primary mt-1 h-4 w-4" />
                      <div>
                        <p className="font-medium text-foreground">Website</p>
                        <a href="https://www.studywings-oee.com/" className="text-primary hover:underline">www.studywings-oee.com</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-card rounded-2xl shadow-lg border border-border" data-testid="office-hours-card">
                <CardHeader>
                  <CardTitle className="text-xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between" data-testid="hours-weekdays">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between" data-testid="hours-saturday">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between" data-testid="hours-sunday">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Partnership Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6" data-testid="footer-logo">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-primary-foreground h-6 w-6" />
                </div>
                <span className="text-2xl font-bold text-foreground">CVS × StudyWings</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md" data-testid="footer-description">
                Transforming nursing careers through world-class education and international opportunities. Your pathway to excellence in German healthcare starts here.
              </p>
              <div className="flex space-x-4" data-testid="footer-social">
                <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-blue-700 transition-colors" data-testid="social-facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-blue-700 transition-colors" data-testid="social-instagram">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-blue-700 transition-colors" data-testid="social-linkedin">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-blue-700 transition-colors" data-testid="social-youtube">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div data-testid="footer-quick-links">
              <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#partnership" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-partnership">Partnership Details</a></li>
                <li><a href="#programs" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-programs">Nursing Programs</a></li>
                <li><a href="#opportunities" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-opportunities">Germany Opportunities</a></li>
                <li><a href="#success-stories" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-success">Success Stories</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div data-testid="footer-services">
              <h3 className="text-lg font-semibold text-foreground mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-service-gnm">GNM Programs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-service-anm">ANM Programs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-service-language">German Language Training</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-service-visa">Visa Assistance</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-service-counseling">Career Counseling</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center" data-testid="footer-copyright">
            <p className="text-muted-foreground">
              © 2024 CVS Educational Institution × StudyWings Partnership. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}