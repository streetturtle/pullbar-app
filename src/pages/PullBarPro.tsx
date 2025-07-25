import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
      description: "View comprehensive PR information at a glance: author, title, repo, PR number, branch, code change statistics (+/- lines). Each PR shows the author's profile picture, making it easy to identify contributors.",
      screenshot: "/uploads/eef44819-4ec1-4c5a-b3ce-78c782761e20.png",
      icon: FileText
    },
    {
      id: "tabs",
      title: "Tabs",
      description: (
        <>
          Customize up to 5 tabs with personalized names and custom GitHub search queries. Enable or disable tabs as needed, set specific search criteria based on{' '}
          <a
            href="https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests"
            className="text-blue-400 underline hover:text-blue-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub search syntax
          </a>
          .
        </>
      ),
      screenshot: "/uploads/ff05b8ef-0d7d-4a66-a6c9-44f0b1748f21.png",
      icon: Layout
    },
    {
      id: "keyboard-support",
      title: "Keyboard Support",
      description: "You can assign a keyboard shortcut to toggle the app. Additionally, while the app is open, you can switch between tabs using ⌘cmd + 1 through ⌘cmd + 5, depending on the number of enabled tabs.",
      screenshot: "/uploads/820b73a4-adb6-43d6-95e5-96692a74c8fd.png",
      icon: Keyboard
    },
    {
      id: "build-checks",
      title: "Build: Checks",
      description: "Status checks is a code quality feature of GitHub's pull requests, which is based on external processes, like CI pipeline. There are two types of status checks: check and commit status. PullBar supports both of them.",
      screenshot: "/uploads/2365da03-df5c-43e7-87fc-1e0701e26b8d.png",
      icon: CheckCircle
    },
    {
      id: "build-commit-status",
      title: "Build: Commit Status",
      description: "Status checks is a code quality feature of GitHub's pull requests, which is based on external processes, like CI pipeline. There are two types of status checks: check and commit status. PullBar supports both of them.",
      screenshot: "/uploads/6520ffde-43d9-4b52-ae42-22d9903d4ead.png",
      icon: GitCommit
    },
    {
      id: "reviews",
      title: "Reviews",
      description: "For each pull request you can find number of approvals, comments or change requests, with the reviewer's name and a direct link to the corresponding review.",
      screenshot: "/uploads/ec6ac55a-420a-4139-9426-280185864a57.png",
      icon: MessageSquare
    },
    {
      id: "pricing",
      title: "Pricing & Tabs",
      description: "PullBar Pro offers a free tier with 1 customizable tab to get you started. Unlock the full potential with a single in-app purchase that enables up to 5 tabs with advanced customization options, perfect for managing multiple repositories or different workflow stages.",
      screenshot: "/uploads/pricing.png", // placeholder, user will provide screenshot later
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-x-hidden relative">
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

            <img 
              src="/uploads/eca8ef3b-a8f7-47a9-9eab-13a334a70c09.png"
              alt="PullBar Pro App Icon"
              className="w-28 h-28 sm:w-32 sm:h-32 mx-auto"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            PullBar Pro
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
            A beautiful macOS menubar app for managing GitHub pull requests.
          </p>

          <p className="text-sm text-gray-400 mb-8 sm:mb-10">
            Highly customizable. Lightning fast. Always in your menubar.
          </p>

          <div className="flex justify-center items-center mb-8">
            <a 
              href="https://apps.apple.com/us/app/pullbarpro/id6462591649?mt=12&itsct=apps_box_badge&itscg=30200"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src="/uploads/download-on-mac-app-store.svg"
                alt="Download on the Mac App Store"
                className="h-14 sm:h-16"
              />
            </a>
          </div>

          <p className="text-xs text-gray-500">
            Requires macOS Ventura 13 or higher
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">ONE-CLICK ACCESS</h3>
              <p className="text-gray-400">
                Your PRs just one click away in your menubar
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Filter className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">CUSTOMIZABLE</h3>
              <p className="text-gray-400">
                Customize what PRs you want to see by using GitHub search syntax
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Keyboard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">KEYBOARD SUPPORT</h3>
              <p className="text-gray-400">
                Setup a shortcut to show the app, and switch between PR types by a shortcut
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Section */}
      <section id="features" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Features
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

{/* Pricing Section */}
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Pricing
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Free Tier */}
          <div className="flex-1 bg-gray-900/80 rounded-xl p-6 shadow-lg border border-gray-800 text-center">
            <h3 className="text-2xl font-semibold mb-2 text-purple-300">Free</h3>
            <div className="text-4xl font-bold mb-4 text-white">$0</div>
            <ul className="mb-6 space-y-2 text-gray-300 text-base">
              <li>🛵 1 customizable tab</li>
            </ul>
            <img src="/uploads/1tab.png" alt="1 tab" className="w-full rounded-2xl shadow-2xl border border-white/10" />
            <div className="text-xs text-gray-500 mt-4">Perfect for getting started</div>
          </div>
          {/* Pro Tier */}
          <div className="flex-1 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-black rounded-xl p-6 shadow-2xl border border-purple-700 text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">One-Time Purchase</div>
            <h3 className="text-2xl font-semibold mb-2 text-yellow-300">Pro</h3>
            <div className="text-4xl font-bold mb-4 text-white">$2</div>
            <ul className="mb-6 space-y-2 text-gray-100 text-base">
              <li>🏎️ Up to 5 customizable tabs</li>
              </ul>
              <img src="/uploads/5tabs.png" alt="5 tabs" className="w-full rounded-2xl shadow-2xl border border-white/10" />
              <div className="text-xs text-gray-300 mt-4">Unlock advanced workflow for a one-time payment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/uploads/eca8ef3b-a8f7-47a9-9eab-13a334a70c09.png"
                  alt="PullBar Pro"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xl font-bold text-white">PullBar Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Beautiful GitHub pull request management for macOS.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors" onClick={e => {e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });}}>Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors" onClick={e => {e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });}}>Pricing</a></li>
                <li><a href="https://apps.apple.com/us/app/pullbarpro/id6462591649" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-3">More Apps</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://menubar-apps.github.io/#gojibar" className="text-gray-400 hover:text-white transition-colors"><img src="/uploads/gojibar.png" alt="GojiBar" className="w-6 h-6 rounded-lg inline mr-2" />GojiBar</a></li>
                <li><a href="https://menubar-apps.github.io/#mergebar" className="text-gray-400 hover:text-white transition-colors"><img src="/uploads/mergebar.png" alt="MergeBar" className="w-6 h-6 rounded-lg inline mr-2" />MergeBar</a></li>
                <li><a href="https://menubar-apps.github.io/#swiftystats" className="text-gray-400 hover:text-white transition-colors"><img src="/uploads/swiftystats.png" alt="SwiftyStats" className="w-6 h-6 rounded-lg inline mr-2" />SwiftyStats</a></li>

              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PullBar Pro. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2 sm:mt-0">
              Made with ❤️ for developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PullBarPro;