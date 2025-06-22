import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Github, Download, Sparkles, Users, Settings, Bell, Filter, Eye, Zap, Shield, Clock, Star, FileText, Layout, Keyboard, CheckCircle, GitCommit, MessageSquare } from "lucide-react";
import { useState } from "react";

const Index = () => {
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
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-fade-in leading-tight">
              Your GitHub Pull Requests
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2">Always One Click Away</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
              A macOS menu bar app that keeps you updated on your GitHub pull requests. Choose between our free, open-source version or the feature-rich Pro edition for power users and teams.
            </p>
          </div>

          {/* App Screenshots Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            {/* PullBar Screenshot */}
            <div className="flex flex-col">
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-700 shadow-xl shadow-cyan-500/20 transition-transform hover:scale-[1.02] duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <span className="text-cyan-400 font-semibold">PullBar</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Free</Badge>
                </div>
                <div className="rounded-lg overflow-hidden bg-black/50 p-2 mb-4">
                  <img 
                    src="https://user-images.githubusercontent.com/9363150/179432557-f3db115e-fe9d-4f91-ac7c-0d85ce3f9e43.png" 
                    alt="PullBar macOS menu bar app screenshot"
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="space-y-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-3">Free & Open Source</Badge>
                  <p className="text-gray-300 mb-4 text-sm">The lightweight, minimalist solution for developers who want quick access to their GitHub PRs.</p>
                  <Button 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-full"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    <span>Download Free</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* PullBar Pro Screenshot */}
            <div className="flex flex-col">
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-700 shadow-xl shadow-purple-500/20 transition-transform hover:scale-[1.02] duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                    <span className="text-purple-400 font-semibold">PullBar Pro</span>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Premium</Badge>
                </div>
                <div className="rounded-lg overflow-hidden bg-black/50 p-2 mb-4">
                  <img 
                    src="https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-2.png" 
                    alt="PullBar Pro macOS menu bar app screenshot"
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="space-y-3">
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-3">Premium Features</Badge>
                  <p className="text-gray-300 mb-4 text-sm">Enhanced design and powerful features for teams and high-volume reviewers.</p>
                  <Button 
                    variant="outline" 
                    className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white w-full"
                  >
                    <Sparkles className="mr-2 w-4 h-4" />
                    <span>Get Pro Version</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Divider */}
      <div className="border-t border-gray-800 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-green-500/20 h-px"></div>

      {/* PullBar Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center lg:text-left mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-cyan-400">
              PullBar
              <span className="block text-xl sm:text-2xl lg:text-3xl text-gray-300 mt-2">The Lightweight PR Companion</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              A minimalist macOS menu bar app for developers who want quick, native access to GitHub pull requests. 
              Open source and free to use. Designed for simplicity and performance.
            </p>
          </div>

          <Card className="bg-gray-900 border-gray-700 shadow-xl shadow-cyan-500/20">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Instantly view open pull requests</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>One-click access to GitHub</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Lightweight and resource-friendly</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Native macOS look and feel</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base sm:col-span-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>GitHub token-based authentication</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-full sm:w-auto">
                      <Github className="mr-2 w-4 h-4" />
                      View on GitHub
                    </Button>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-sm">
                      Free & Open Source
                    </Badge>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-black rounded-lg p-4 w-full max-w-md">
                    <img 
                      src="https://user-images.githubusercontent.com/9363150/179432557-f3db115e-fe9d-4f91-ac7c-0d85ce3f9e43.png" 
                      alt="PullBar macOS menu bar app screenshot"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terminal Divider */}
      <div className="border-t border-gray-800 bg-gradient-to-r from-purple-500/20 via-green-500/20 to-cyan-500/20 h-px"></div>

      {/* PullBar Pro Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center lg:text-left mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-purple-400">
              PullBar Pro
              <span className="block text-xl sm:text-2xl lg:text-3xl text-gray-300 mt-2">Power & Customization for Serious Reviewers</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              A premium evolution of PullBar with a refined interface and advanced features tailored for high-volume reviewers and team leads. 
              Enhanced design, more control, and deeper GitHub integration.
            </p>
          </div>

          <Card className="bg-gray-900 border-gray-700 shadow-xl shadow-purple-500/20">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Sleek, redesigned UI</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Multiple GitHub accounts</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Smart filters and labels</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Saved views for workflows</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Review reminders & quick actions</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Priority updates & support</span>
                    </div>
                  </div>

                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white w-full sm:w-auto"
                    onClick={() => window.open('https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200', '_blank')}
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download on the Mac App Store
                  </Button>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-black rounded-lg p-4 w-full max-w-md">
                    <img 
                      src="https://menubar-apps.github.io/assets/img/screenshots/pull-bar-pro/pull-bar-pro-2.png" 
                      alt="PullBar Pro macOS menu bar app screenshot"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PullBar Pro Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-950/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-purple-400">
              Powerful Features for Professional Workflows
            </h3>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Discover the advanced capabilities that make PullBar Pro the ultimate tool for serious GitHub users and development teams.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-start">
            {/* Screenshot Display - Mobile First, Desktop Side */}
            <div className="w-full order-1 lg:order-none lg:w-1/2">
              <div className="lg:sticky lg:top-8">
                <Card className="bg-gray-900 border-gray-700 shadow-2xl shadow-purple-500/10 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] flex items-center justify-center bg-gray-800 p-2 sm:p-4">
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
            <div className="w-full order-2 lg:order-none lg:w-1/2">
              <Accordion 
                type="single" 
                collapsible 
                value={selectedFeature}
                onValueChange={(value) => value && setSelectedFeature(value)}
                className="space-y-3 sm:space-y-4"
              >
                {proFeatures.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <AccordionItem 
                      key={feature.id} 
                      value={feature.id}
                      className="border border-gray-700 rounded-lg px-4 sm:px-6 data-[state=open]:border-purple-500/50 transition-colors"
                    >
                      <AccordionTrigger className="hover:no-underline py-4 sm:py-6 [&>svg]:w-5 [&>svg]:h-5">
                        <div className="flex items-center space-x-3 sm:space-x-4 text-left w-full">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-1 break-words">
                              {feature.title}
                            </h4>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 sm:pb-6">
                        <div className="ml-12 sm:ml-16 text-sm sm:text-base text-gray-300 leading-relaxed">
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
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 items-center text-center">
            <div>
              <p className="text-gray-400 text-sm sm:text-base">
                Built for developers. Backed by GitHub. Made for macOS.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">GitHub repo</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">Pro pricing</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base">Documentation</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
