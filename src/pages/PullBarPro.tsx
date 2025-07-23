import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, ArrowLeft, ArrowRight, Sparkles, Star, FileText, Layout, Keyboard, CheckCircle, GitCommit, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PullBarPro = () => {
  const [selectedFeature, setSelectedFeature] = useState("pr-details");

  const proFeatures = [
    {
      id: "pr-details",
      title: "Pull Request Details",
      description: "View comprehensive PR information at a glance: author avatars, descriptive titles, repository and PR numbers, branch details, timestamps, and code change statistics (+/- lines). Each PR shows the author's profile picture, making it easy to identify contributors, along with precise branch information and time since last update.",
      screenshot: "/lovable-uploads/eef44819-4ec1-4c5a-b3ce-78c782761e20.png",
      icon: FileText
    },
    {
      id: "tabs",
      title: "Tabs",
      description: "Customize up to multiple tabs with personalized names and custom GitHub search queries. Enable or disable tabs as needed, set specific search criteria like 'reviewed-by:@me' or 'author:@me', and organize your workflow with predefined query tips. Each tab can filter PRs by specific repositories, authors, review status, or any GitHub search parameter.",
      screenshot: "/lovable-uploads/ff05b8ef-0d7d-4a66-a6c9-44f0b1748f21.png",
      icon: Layout
    },
    {
      id: "keyboard-support",
      title: "Keyboard Support",
      description: "You can assign a keyboard shortcut to toggle the app. Additionally, while the app is open, you can switch between tabs using ⌘cmd + 1 through ⌘cmd + 3, depending on the number of enabled tabs.",
      screenshot: "/lovable-uploads/820b73a4-adb6-43d6-95e5-96692a74c8fd.png",
      icon: Keyboard
    },
    {
      id: "build-checks",
      title: "Build: Checks",
      description: "Status checks is a code quality feature of GitHub's pull requests, which is based on external processes, like CI pipeline. There are two types of status checks: check and commit status. PullBar supports both of them.",
      screenshot: "/lovable-uploads/2365da03-df5c-43e7-87fc-1e0701e26b8d.png",
      icon: CheckCircle
    },
    {
      id: "build-commit-status",
      title: "Build: Commit Status",
      description: "Status checks is a code quality feature of GitHub's pull requests, which is based on external processes, like CI pipeline. There are two types of status checks: check and commit status. PullBar supports both of them.",
      screenshot: "/lovable-uploads/6520ffde-43d9-4b52-ae42-22d9903d4ead.png",
      icon: GitCommit
    },
    {
      id: "reviews",
      title: "Reviews",
      description: "For each pull request you can find number of approvals, comments or change requests, with the reviewer's name and a direct link to the corresponding review.",
      screenshot: "/lovable-uploads/ec6ac55a-420a-4139-9426-280185864a57.png",
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-4 sm:p-6 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="group inline-flex items-center text-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-105">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/25 to-blue-900/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center lg:text-left mb-12 animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
                <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-ping opacity-20"></div>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                PullBar Pro
              </h1>
            </div>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto lg:mx-0 font-light">
              A <span className="text-purple-400 font-semibold">premium evolution</span> with a refined interface and advanced features tailored for <span className="text-pink-400 font-semibold">high-volume reviewers</span> and team leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30 px-6 py-3 text-lg font-medium backdrop-blur-sm">
                <Download className="w-4 h-4 mr-2" />
                Free App
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 px-6 py-3 text-lg font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Features
              </Badge>
              <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30 px-6 py-3 text-lg font-medium backdrop-blur-sm">
                <Download className="w-4 h-4 mr-2" />
                Mac App Store
              </Badge>
            </div>
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 mb-10 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-green-400 font-semibold">Free to download</span> with one tab included. 
                Unlock <span className="text-purple-400 font-semibold">up to 5 customizable tabs</span> with a one-time 
                <span className="text-pink-400 font-semibold"> in-app purchase</span> for the full pro experience.
              </p>
            </div>
          </div>

          <Card className="bg-gray-900/80 border-gray-700/50 shadow-2xl shadow-purple-500/30 mb-16 backdrop-blur-xl hover:shadow-purple-500/40 transition-all duration-500 hover:scale-[1.01]">
            <CardContent className="p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                      Power & Customization for Serious Reviewers
                    </h2>
                    <div className="grid grid-cols-1 gap-6 mb-10">
                      <div className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="text-lg lg:text-xl font-medium">Sleek, redesigned user interface</span>
                      </div>
                      <div className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="text-lg lg:text-xl font-medium">Support for multiple GitHub accounts</span>
                      </div>
                      <div className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="text-lg lg:text-xl font-medium">Smart filters and organized workflows</span>
                      </div>
                      <div className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="text-lg lg:text-xl font-medium">Advanced review insights and status checks</span>
                      </div>
                      <div className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="text-lg lg:text-xl font-medium">Keyboard shortcuts and quick actions</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-xl px-10 py-4 font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200', '_blank')}
                  >
                    <Download className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                    Download on the Mac App Store
                  </Button>
                </div>
                
                <div className="flex justify-center lg:justify-end">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 w-full max-w-lg">
                      <img 
                        src="https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-2.png" 
                        alt="PullBar Pro macOS menu bar app screenshot"
                        className="w-full h-auto rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Showcase */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Powerful Features for Professional Workflows
              </h3>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover the advanced capabilities that make PullBar Pro the ultimate tool for serious GitHub users and development teams.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Screenshot Display */}
              <div className="w-full lg:w-1/2">
                <div className="lg:sticky lg:top-8">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    <Card className="relative bg-gray-900/80 border-gray-700/50 shadow-2xl shadow-purple-500/20 overflow-hidden backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="w-full h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6">
                          <div className="w-full h-full flex items-center justify-center">
                            <img 
                              src={proFeatures.find(f => f.id === selectedFeature)?.screenshot}
                              alt={`${proFeatures.find(f => f.id === selectedFeature)?.title} screenshot`}
                              className="max-w-full max-h-full object-contain transition-all duration-500 hover:scale-105 rounded-lg shadow-xl"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Features Accordion */}
              <div className="w-full lg:w-1/2">
                <Accordion 
                  type="single" 
                  collapsible 
                  value={selectedFeature}
                  onValueChange={(value) => value && setSelectedFeature(value)}
                  className="space-y-3"
                >
                  {proFeatures.map((feature) => {
                    const IconComponent = feature.icon;
                    return (
                        <AccordionItem 
                        key={feature.id} 
                        value={feature.id}
                        className="border border-gray-700/50 rounded-xl px-4 sm:px-6 py-2 data-[state=open]:border-purple-500/60 data-[state=open]:bg-gray-800/30 transition-all duration-300 hover:border-purple-500/40 backdrop-blur-sm"
                      >
                        <AccordionTrigger className="hover:no-underline py-3 sm:py-4 [&>svg]:w-5 [&>svg]:h-5 group">
                          <div className="flex items-center space-x-3 sm:space-x-4 text-left w-full">
                            <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-base sm:text-lg font-semibold text-white break-words group-hover:text-purple-300 transition-colors duration-300">
                                {feature.title}
                              </h4>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-3 sm:pb-4">
                          <div className="ml-10 sm:ml-14 text-sm sm:text-base text-gray-300 leading-relaxed">
                            {feature.description}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>

          {/* Premium Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="group bg-gray-900/60 border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                    <Sparkles className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">Premium UI</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Completely redesigned interface with modern aesthetics, improved readability, and enhanced user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gray-900/60 border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                    <Star className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">Team Features</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Advanced collaboration tools, multi-account support, and workflows designed for development teams.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gray-900/60 border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                    <Download className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">App Store</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Available exclusively on the Mac App Store with automatic updates and seamless installation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
            <Card className="relative bg-gradient-to-r from-purple-900/60 to-pink-900/60 border-purple-700/50 shadow-2xl shadow-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
                  Ready for the Pro Experience?
                </h2>
                <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
                  Transform how you manage GitHub pull requests. Perfect for teams and power users who demand more from their workflow tools.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button 
                    className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-xl px-12 py-4 font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200', '_blank')}
                  >
                    <Download className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                    Get PullBar Pro
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200 text-xl px-12 py-4 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200', '_blank')}
                  >
                    View on App Store
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PullBarPro;