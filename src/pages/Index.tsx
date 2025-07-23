import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-purple-400"></div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-purple-400">PullBar Pro</h1>
            </div>
            <p className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              A premium macOS menu bar app with a refined interface and advanced features tailored for high-volume reviewers and team leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-6 py-3 text-lg">
                <Star className="w-4 h-4 mr-2" />
                Premium Features
              </Badge>
              <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30 px-6 py-3 text-lg">
                Mac App Store
              </Badge>
            </div>
          </div>

          {/* Main Feature Card */}
          <Card className="bg-gray-900 border-purple-500/30 shadow-2xl shadow-purple-500/20 mb-16">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-purple-400 mb-8">
                    Power & Customization for Serious Reviewers
                  </h2>
                  <div className="grid grid-cols-1 gap-6 mb-10">
                    <div className="flex items-center text-gray-300">
                      <div className="w-4 h-4 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-xl">Sleek, redesigned user interface</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-4 h-4 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-xl">Support for multiple GitHub accounts</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-4 h-4 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-xl">Smart filters and organized workflows</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-4 h-4 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-xl">Advanced review insights and status checks</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-4 h-4 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-xl">Keyboard shortcuts and quick actions</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-xl px-10 py-4"
                      onClick={() => window.open('https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200', '_blank')}
                    >
                      <Download className="mr-3 w-6 h-6" />
                      Download on Mac App Store
                    </Button>
                    <Link to="/pullbar-pro">
                      <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-xl px-10 py-4">
                        Learn More
                        <ArrowRight className="ml-3 w-6 h-6" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-black rounded-lg p-8 w-full max-w-lg">
                    <img 
                      src="https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-2.png" 
                      alt="PullBar Pro macOS menu bar app screenshot"
                      className="w-full h-auto rounded shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-400">Premium UI</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Completely redesigned interface with modern aesthetics, improved readability, and enhanced user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-400">Team Features</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Advanced collaboration tools, multi-account support, and workflows designed for development teams.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Download className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-400">App Store</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Available exclusively on the Mac App Store with automatic updates and seamless installation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-700 shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-purple-400 mb-4">Ready for the Pro Experience?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform how you manage GitHub pull requests. Perfect for teams and power users who demand more from their workflow tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-3"
                  onClick={() => window.open('https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200', '_blank')}
                >
                  <Download className="mr-2 w-5 h-5" />
                  Get PullBar Pro
                </Button>
                <Link to="/pullbar-pro">
                  <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                    View Features
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;