import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, BarChart, Palette, Users, Filter, Keyboard, Zap, Shield, Star, FileText, Layout, CheckCircle, GitCommit, MessageSquare } from "lucide-react";
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

      {/* Header */}
      <div className="relative z-10 h-4"></div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8 relative inline-block">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl mx-auto flex items-center justify-center">
              <BarChart className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            PullBar Pro
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
            Premium GitHub pull request manager for macOS which delivers professional workflows and enhanced productivity. Period.
          </p>

          <p className="text-sm text-gray-400 mb-8 sm:mb-10">
            Beautiful design. Advanced features. Lightning fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold">
              <Download className="w-5 h-5 mr-2" />
              Get in App Store
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl">
              Download now
            </Button>
          </div>

          <p className="text-xs text-gray-500">
            Requires macOS Sonoma 14 or higher
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Why?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">BEAUTIFUL DESIGN</h3>
              <p className="text-gray-400">
                A completely redesigned interface that feels native to macOS. Clean, elegant, and distraction-free experience that enhances your workflow.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">LIGHTNING FAST</h3>
              <p className="text-gray-400">
                Optimized performance with smart caching and instant search. Navigate through hundreds of pull requests without any lag or delay.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Keyboard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">KEYBOARD-FIRST</h3>
              <p className="text-gray-400">
                Comprehensive keyboard shortcuts for every action. Navigate, review, and manage pull requests without touching your mouse.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-yellow-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">SECURE AND PRIVATE</h3>
              <p className="text-gray-400">
                Your data stays on your device. OAuth tokens are securely stored in macOS Keychain. No tracking, no analytics, just privacy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">TEAM FOCUSED</h3>
              <p className="text-gray-400">
                Multi-account support, advanced filtering, and team collaboration features. Perfect for organizations and power users.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">PREMIUM QUALITY</h3>
              <p className="text-gray-400">
                Built exclusively for the Mac App Store. Regular updates, App Store quality assurance, and seamless macOS integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              How?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Screenshots */}
            <div className="order-2 lg:order-1 lg:sticky lg:top-24">
              <div className="relative">
                <img 
                  src={proFeatures.find(f => f.id === selectedFeature)?.screenshot || proFeatures[0].screenshot}
                  alt={`${proFeatures.find(f => f.id === selectedFeature)?.title || proFeatures[0].title} screenshot`}
                  className="w-full rounded-2xl shadow-2xl border border-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Features Accordion */}
            <div className="order-1 lg:order-2">
              <Accordion type="single" value={selectedFeature} onValueChange={setSelectedFeature} className="w-full">
                {proFeatures.map((feature) => (
                  <AccordionItem key={feature.id} value={feature.id} className="border-white/10">
                    <AccordionTrigger className="text-left text-white hover:text-purple-300 [&[data-state=open]]:text-purple-400">
                      <div className="flex items-center gap-3">
                        <feature.icon className="w-5 h-5 text-purple-400" />
                        <span className="font-semibold">{feature.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pt-4">
                      {feature.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
            <Card className="relative bg-gradient-to-r from-purple-900/60 to-pink-900/60 border-purple-700/50 shadow-2xl shadow-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
                  Ready for the Pro Experience?
                </h2>
                <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Transform how you manage GitHub pull requests. Perfect for teams and power users who demand more from their workflow tools.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 font-semibold"
                    onClick={() => window.open('https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200', '_blank')}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Get PullBar Pro
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