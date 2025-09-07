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
  Scale
} from "lucide-react";
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

// Simple form schema without external dependencies
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
                        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                        alt="Nursing students studying together in modern classroom"
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
                        src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
                        alt="Students in Germany pursuing international education"
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

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-background" data-testid="programs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title" data-testid="programs-title">Our Nursing Programs</h2>
              <p className="section-subtitle" data-testid="programs-description">
                Comprehensive nursing education programs designed to prepare you for international healthcare careers.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="professional-card h-full" data-testid="gnm-program-card">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="feature-icon">
                      <GraduationCap className="text-white h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">General Nursing & Midwifery (GNM)</CardTitle>
                      <p className="text-muted-foreground">3-Year Diploma Program</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">Comprehensive nursing education with extensive clinical training and midwifery specialization.</p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Check className="text-primary h-4 w-4" />
                        <span>36 months comprehensive training</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="text-primary h-4 w-4" />
                        <span>Clinical rotations in leading hospitals</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="text-primary h-4 w-4" />
                        <span>Midwifery specialization included</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="text-primary h-4 w-4" />
                        <span>International certification pathway</span>
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">€2,700 - €3,200</div>
                        <div className="text-sm text-muted-foreground">Starting salary in Germany</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="professional-card h-full" data-testid="anm-program-card">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="feature-icon">
                      <Hospital className="text-white h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Auxiliary Nurse Midwifery (ANM)</CardTitle>
                      <p className="text-muted-foreground">2-Year Certificate Program</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">Focused practical training program for immediate healthcare workforce entry.</p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Check className="text-primary h-4 w-4" />
                        <span>24 months intensive training</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="text-primary h-4 w-4" />
                        <span>Hands-on practical focus</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="text-primary h-4 w-4" />
                        <span>Community health specialization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Check className="text-primary h-4 w-4" />
                        <span>Fast-track to employment</span>
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">€2,400 - €2,800</div>
                        <div className="text-sm text-muted-foreground">Starting salary in Germany</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-20 bg-secondary" data-testid="opportunities-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title" data-testid="opportunities-title">Germany Healthcare Opportunities</h2>
              <p className="section-subtitle" data-testid="opportunities-description">
                Discover exceptional career opportunities in Germany's world-renowned healthcare system.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full" data-testid="opportunity-salary">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Euro className="text-primary-foreground h-8 w-8" />
                  </div>
                  <CardTitle>Competitive Salaries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Starting salaries of €2,700-3,200 per month with excellent growth opportunities and comprehensive benefits.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Entry Level</span>
                      <span className="font-semibold">€2,700</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Experienced</span>
                      <span className="font-semibold">€3,200+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Specialized</span>
                      <span className="font-semibold">€4,000+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full" data-testid="opportunity-benefits">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <HomeIcon className="text-primary-foreground h-8 w-8" />
                  </div>
                  <CardTitle>Comprehensive Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Full healthcare coverage, paid vacation, pension plans, and professional development support.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Check className="text-primary h-4 w-4" />
                      <span>Health Insurance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-primary h-4 w-4" />
                      <span>30 Days Paid Leave</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-primary h-4 w-4" />
                      <span>Pension Benefits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-primary h-4 w-4" />
                      <span>Career Development</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full" data-testid="opportunity-growth">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary-foreground h-8 w-8" />
                  </div>
                  <CardTitle>Career Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Clear advancement pathways with opportunities for specialization and leadership roles.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Check className="text-primary h-4 w-4" />
                      <span>Specialization Options</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-primary h-4 w-4" />
                      <span>Leadership Training</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-primary h-4 w-4" />
                      <span>Continuing Education</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-primary h-4 w-4" />
                      <span>Research Opportunities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-background" data-testid="success-stories-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title" data-testid="success-stories-title">Success Stories</h2>
              <p className="section-subtitle" data-testid="success-stories-description">
                Hear from our graduates who are now thriving in Germany's healthcare system.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full" data-testid="success-story-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Priya Sharma - successful nurse in Germany"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">Priya Sharma</CardTitle>
                      <p className="text-muted-foreground">GNM Graduate 2022</p>
                      <p className="text-sm text-primary">Berlin University Hospital</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">
                    "The partnership between CVS and StudyWings transformed my career. I'm now working in one of Germany's top hospitals with excellent salary and benefits. The support throughout the journey was exceptional."
                  </p>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-primary font-semibold">Current Position: ICU Nurse</div>
                    <div className="text-sm text-muted-foreground">Salary: €3,100/month</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full" data-testid="success-story-2">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Raj Patel - successful nurse in Germany"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">Raj Patel</CardTitle>
                      <p className="text-muted-foreground">ANM Graduate 2023</p>
                      <p className="text-sm text-primary">Munich General Hospital</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">
                    "From a small town in India to working in Munich's prestigious hospital. The German language training and visa support made the impossible possible. Forever grateful to this partnership."
                  </p>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-primary font-semibold">Current Position: Emergency Nurse</div>
                    <div className="text-sm text-muted-foreground">Salary: €2,800/month</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full" data-testid="success-story-3">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1594824505341-ec2779e51b79?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                      alt="Anita Reddy - successful nurse in Germany"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">Anita Reddy</CardTitle>
                      <p className="text-muted-foreground">GNM Graduate 2021</p>
                      <p className="text-sm text-primary">Frankfurt Medical Center</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic mb-4">
                    "The comprehensive training at CVS combined with StudyWings' placement support helped me secure my dream job. Germany offers incredible growth opportunities for healthcare professionals."
                  </p>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-primary font-semibold">Current Position: Senior Nurse</div>
                    <div className="text-sm text-muted-foreground">Salary: €3,400/month</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-blue-700" data-testid="view-more-stories">
                View More Success Stories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
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