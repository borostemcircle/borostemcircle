import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PlaceholderPage } from "./components/PlaceholderPage";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/programs"
                element={
                  <PlaceholderPage
                    title="Programs"
                    description="Discover our comprehensive STEM education programs designed for all ages and skill levels."
                  />
                }
              />
              <Route
                path="/community"
                element={
                  <PlaceholderPage
                    title="Community"
                    description="Connect with fellow learners, educators, and innovators in our vibrant STEM community."
                  />
                }
              />
              <Route
                path="/resources"
                element={
                  <PlaceholderPage
                    title="Resources"
                    description="Access learning materials, tools, and resources to support your STEM journey."
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <PlaceholderPage
                    title="Contact"
                    description="Get in touch with our team. We'd love to hear from you!"
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <PlaceholderPage
                    title="Sign In"
                    description="Access your account to continue your learning journey."
                  />
                }
              />
              <Route
                path="/join"
                element={
                  <PlaceholderPage
                    title="Join Circle"
                    description="Become part of our learning community and start your STEM adventure."
                  />
                }
              />
              <Route
                path="/help"
                element={
                  <PlaceholderPage
                    title="Help Center"
                    description="Find answers to common questions and get support."
                  />
                }
              />
              <Route
                path="/privacy"
                element={
                  <PlaceholderPage
                    title="Privacy Policy"
                    description="Learn how we protect and handle your personal information."
                  />
                }
              />
              <Route
                path="/terms"
                element={
                  <PlaceholderPage
                    title="Terms of Service"
                    description="Review our terms and conditions for using Borostem Circle."
                  />
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
