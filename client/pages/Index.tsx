import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Lightbulb, Target, BookOpen, Beaker, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-accent py-16 px-4 text-white">
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              Building Tomorrow's Innovators
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Borostem
              <span className="block text-accent">Circle</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Empowering communities through innovative STEM education and collaborative learning circles that inspire the next generation of problem-solvers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Join Our Circle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Creating inclusive learning communities where curiosity thrives, innovation flourishes, and every learner discovers their potential in science, technology, engineering, and mathematics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Community-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Building supportive learning circles where students, educators, and industry professionals collaborate to solve real-world challenges together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Fostering creative thinking and hands-on experimentation through cutting-edge technology and project-based learning experiences.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Impact Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Measuring success through meaningful outcomes: student engagement, skill development, and positive community transformation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover learning pathways designed to ignite curiosity, build skills, and create lasting impact in STEM fields.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Learning Circles</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Small group collaborative sessions where students explore STEM concepts through peer-to-peer learning and mentorship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Innovation Labs</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hands-on workshops and maker spaces equipped with cutting-edge technology for prototyping and experimentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Community Projects</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Real-world problem-solving initiatives that connect classroom learning to local community needs and challenges.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="text-lg px-8 py-4">
                Explore All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-48 bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">500+</h4>
                    <p className="text-white/90">Students Engaged</p>
                  </div>
                  <Cpu className="h-8 w-8 text-white/70" />
                </div>
                <div className="h-32 bg-gradient-to-br from-accent to-green-500 rounded-2xl p-6 text-white flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">25</h4>
                    <p className="text-white/90 text-sm">Active Circles</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">15</h4>
                    <p className="text-white/90 text-sm">Partner Schools</p>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">50+</h4>
                    <p className="text-white/90">Community Projects</p>
                  </div>
                  <Beaker className="h-8 w-8 text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary via-blue-600 to-accent text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">Ready to Join the Circle?</h2>
          <p className="text-xl leading-relaxed text-white/90">
            Whether you're a student eager to explore, an educator looking to innovate, or a community member wanting to contribute, there's a place for you in our STEM circle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
