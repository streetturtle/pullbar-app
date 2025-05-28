import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Download, Sparkles, Users, Settings, Bell, Filter, Eye } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-fade-in">
              Your GitHub Pull Requests.
              <br />
              <span className="text-4xl md:text-6xl">Always One Click Away.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              PullBar and PullBar Pro bring your workflow to the macOS menu bar — the way you want it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2" />
                Download PullBar – Free & Open Source
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="mr-2" />
                Explore PullBar Pro
              </Button>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 shadow-2xl shadow-cyan-500/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-semibold">PullBar</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Free</Badge>
                </div>
                <div className="rounded-md overflow-hidden">
                  <img 
                    src="https://user-images.githubusercontent.com/9363150/179432557-f3db115e-fe9d-4f91-ac7c-0d85ce3f9e43.png" 
                    alt="PullBar macOS menu bar app screenshot"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 shadow-2xl shadow-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-400 font-semibold">PullBar Pro</span>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Pro</Badge>
                </div>
                <div className="rounded-md overflow-hidden">
                  <img 
                    src="https://user-images.githubusercontent.com/9363150/179432557-f3db115e-fe9d-4f91-ac7c-0d85ce3f9e43.png" 
                    alt="PullBar Pro macOS menu bar app screenshot"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Divider */}
      <div className="border-t border-gray-800 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-green-500/20 h-px"></div>

      {/* PullBar Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
                PullBar
                <span className="block text-2xl md:text-3xl text-gray-300 mt-2">The Lightweight PR Companion</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A minimalist macOS menu bar app for developers who want quick, native access to GitHub pull requests. 
                Open source and free to use. Designed for simplicity and performance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Instantly view open pull requests</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>One-click access to GitHub</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Lightweight and resource-friendly</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Native macOS look and feel</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span>GitHub token-based authentication</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                  <Github className="mr-2" />
                  View on GitHub
                </Button>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
                  Free & Open Source
                </Badge>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <Card className="bg-gray-900 border-gray-700 shadow-2xl shadow-cyan-500/10">
                <CardContent className="p-8">
                  <div className="bg-black rounded-lg p-6 font-mono">
                    <div className="text-cyan-400 mb-4">~/pullbar</div>
                    <div className="space-y-3">
                      <div className="text-green-400">✓ Minimal resource usage</div>
                      <div className="text-green-400">✓ Fast GitHub API integration</div>
                      <div className="text-green-400">✓ Clean, native interface</div>
                      <div className="text-green-400">✓ Open source transparency</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Divider */}
      <div className="border-t border-gray-800 bg-gradient-to-r from-purple-500/20 via-green-500/20 to-cyan-500/20 h-px"></div>

      {/* PullBar Pro Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
                PullBar Pro
                <span className="block text-2xl md:text-3xl text-gray-300 mt-2">Power & Customization for Serious Reviewers</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A premium evolution of PullBar with a refined interface and advanced features tailored for high-volume reviewers and team leads. 
                Enhanced design, more control, and deeper GitHub integration.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Sleek, redesigned UI</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Multiple GitHub accounts</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Smart filters and labels</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Saved views for workflows</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Review reminders & quick actions</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Priority updates & support</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                <Users className="mr-2" />
                Try Pro – Built for power users
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <Card className="bg-gray-900 border-gray-700 shadow-2xl shadow-purple-500/10">
                <CardContent className="p-8">
                  <div className="bg-black rounded-lg p-6 font-mono">
                    <div className="text-purple-400 mb-4">~/pullbar-pro</div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-green-400">⚡ Advanced filtering</span>
                        <Settings className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-400">🔔 Smart notifications</span>
                        <Bell className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-400">👥 Multi-account support</span>
                        <Users className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-400">⭐ Premium support</span>
                        <Sparkles className="w-4 h-4 text-purple-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400 text-center md:text-left">
                Built for developers. Backed by GitHub. Made for macOS.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">GitHub repo</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Pro pricing</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Documentation</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
