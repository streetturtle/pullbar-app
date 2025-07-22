import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Download, Sparkles, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-fade-in leading-tight">
              Your GitHub Pull Requests
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mt-2">Always One Click Away</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect macOS menu bar app for your GitHub workflow. From lightweight and free to feature-rich and powerful.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PullBar Card */}
            <Card className="bg-gray-900 border-gray-700 shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
                    <h2 className="text-2xl font-bold text-cyan-400">PullBar</h2>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">
                    Free & Open Source
                  </Badge>
                  
                  <div className="bg-black rounded-lg p-4 mb-6">
                    <img 
                      src="https://user-images.githubusercontent.com/9363150/179432557-f3db115e-fe9d-4f91-ac7c-0d85ce3f9e43.png" 
                      alt="PullBar screenshot"
                      className="w-full h-auto rounded"
                    />
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    The lightweight, minimalist solution for developers who want quick access to their GitHub PRs. Simple, fast, and completely free.
                  </p>

                  <div className="space-y-3 mb-8 text-sm text-gray-300">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Instant PR access from menu bar</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Native macOS design</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>Open source & lightweight</span>
                    </div>
                  </div>

                  <Link to="/pullbar">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-full mb-4">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>

                  <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white w-full">
                    <Github className="mr-2 w-4 h-4" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* PullBar Pro Card */}
            <Card className="bg-gray-900 border-gray-700 shadow-xl shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-4 h-4 rounded-full bg-purple-400"></div>
                    <h2 className="text-2xl font-bold text-purple-400">PullBar Pro</h2>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-6">
                    Premium Features
                  </Badge>
                  
                  <div className="bg-black rounded-lg p-4 mb-6">
                    <img 
                      src="https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-2.png" 
                      alt="PullBar Pro screenshot"
                      className="w-full h-auto rounded"
                    />
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Enhanced design and powerful features for teams and high-volume reviewers. Advanced workflows and deeper GitHub integration.
                  </p>

                  <div className="space-y-3 mb-8 text-sm text-gray-300">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Redesigned premium interface</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Multiple accounts & smart filters</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Advanced review tools</span>
                    </div>
                  </div>

                  <Link to="/pullbar-pro">
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white w-full mb-4">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>

                  <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white w-full">
                    <Download className="mr-2 w-4 h-4" />
                    Mac App Store
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-300">
              Which PullBar is Right for You?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4">Choose PullBar if you:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    Want a simple, lightweight solution
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    Prefer open source software
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    Need basic PR monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-cyan-400" />
                    Work on personal projects
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-purple-400 mb-4">Choose PullBar Pro if you:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-purple-400" />
                    Handle high volumes of PRs
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-purple-400" />
                    Work with multiple GitHub accounts
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-purple-400" />
                    Need advanced filtering & organization
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-purple-400" />
                    Want premium support & features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;