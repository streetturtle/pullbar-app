import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, ArrowLeft, Sparkles, Star, FileText, Layout, Keyboard, CheckCircle, GitCommit, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PullBarPro = () => {
  const [selectedFeature, setSelectedFeature] = useState("pr-details");

  const proFeatures = [
    {
      id: "pr-details",
      title: "Pull Request Details",
      description: "For each PR, view the title, repository, PR number, author's name, and optionally the author's avatar. Also available are the number of reviews, number of additions and deletions, and optionally, the status checks.",
      screenshot: "https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-1.png",
      icon: FileText
    },
    {
      id: "tabs",
      title: "Tabs",
      description: "You can enable up to three tabs with saved searches for assigned, created and review requested PRs. The blue dot on the tab indicates that there are unseen changes in some PRs of this type.",
      screenshot: "https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-2.png",
      icon: Layout
    },
    {
      id: "keyboard-support",
      title: "Keyboard Support",
      description: "You can assign a keyboard shortcut to toggle the app. Additionally, while the app is open, you can switch between tabs using ⌘cmd + 1 through ⌘cmd + 3, depending on the number of enabled tabs.",
      screenshot: "https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-3.png",
      icon: Keyboard
    },
    {
      id: "build-checks",
      title: "Build: Checks",
      description: "Status checks is a code quality feature of GitHub's pull requests, which is based on external processes, like CI pipeline. There are two types of status checks: check and commit status. PullBar supports both of them.",
      screenshot: "https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-4.png",
      icon: CheckCircle
    },
    {
      id: "build-commit-status",
      title: "Build: Commit Status",
      description: "Status checks is a code quality feature of GitHub's pull requests, which is based on external processes, like CI pipeline. There are two types of status checks: check and commit status. PullBar supports both of them.",
      screenshot: "https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-5.png",
      icon: GitCommit
    },
    {
      id: "reviews",
      title: "Reviews",
      description: "For each pull request you can find number of approvals, comments or change requests, with the reviewer's name and a direct link to the corresponding review.",
      screenshot: "https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-1.png",
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="p-4 sm:p-6">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center lg:text-left mb-12">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-purple-400"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-400">
                PullBar Pro
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              A premium evolution with a refined interface and advanced features tailored for high-volume reviewers and team leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2 text-lg">
                Premium Features
              </Badge>
              <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30 px-4 py-2 text-lg">
                Mac App Store
              </Badge>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-700 shadow-xl shadow-purple-500/20 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-purple-400 mb-6">
                    Power & Customization for Serious Reviewers
                  </h2>
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">Sleek, redesigned user interface</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">Support for multiple GitHub accounts</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">Smart filters and organized workflows</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">Advanced review insights and status checks</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">Keyboard shortcuts and quick actions</span>
                    </div>
                  </div>

                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-3"
                    onClick={() => window.open('https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200', '_blank')}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download on the Mac App Store
                  </Button>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-black rounded-lg p-6 w-full max-w-lg">
                    <img 
                      src="https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-2.png" 
                      alt="PullBar Pro macOS menu bar app screenshot"
                      className="w-full h-auto rounded shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Showcase */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-purple-400">
                Powerful Features for Professional Workflows
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Discover the advanced capabilities that make PullBar Pro the ultimate tool for serious GitHub users and development teams.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Screenshot Display */}
              <div className="w-full lg:w-1/2">
                <div className="lg:sticky lg:top-8">
                  <Card className="bg-gray-900 border-gray-700 shadow-2xl shadow-purple-500/10 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center bg-gray-800 p-4">
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src={proFeatures.find(f => f.id === selectedFeature)?.screenshot}
                            alt={`${proFeatures.find(f => f.id === selectedFeature)?.title} screenshot`}
                            className="max-w-full max-h-full object-contain transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                        className="border border-gray-700 rounded-lg px-3 sm:px-4 data-[state=open]:border-purple-500/50 transition-colors"
                      >
                        <AccordionTrigger className="hover:no-underline py-2 sm:py-3 [&>svg]:w-4 [&>svg]:h-4">
                          <div className="flex items-center space-x-2 sm:space-x-3 text-left w-full">
                            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-sm sm:text-base font-semibold text-white break-words">
                                {feature.title}
                              </h4>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-2 sm:pb-3">
                          <div className="ml-8 sm:ml-11 text-xs sm:text-sm text-gray-300 leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-400">Premium UI</h3>
                </div>
                <p className="text-gray-300">
                  Completely redesigned interface with modern aesthetics, improved readability, and enhanced user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-400">Team Features</h3>
                </div>
                <p className="text-gray-300">
                  Advanced collaboration tools, multi-account support, and workflows designed for development teams.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Download className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-400">App Store</h3>
                </div>
                <p className="text-gray-300">
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
                Upgrade to PullBar Pro and transform how you manage GitHub pull requests. Perfect for teams and power users.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg px-8 py-3"
                  onClick={() => window.open('https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200', '_blank')}
                >
                  <Download className="mr-2 w-5 h-5" />
                  Get PullBar Pro
                </Button>
                <Link to="/pullbar">
                  <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                    Try the Free Version First
                    <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
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

export default PullBarPro;