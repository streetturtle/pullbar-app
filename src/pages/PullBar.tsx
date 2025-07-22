import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Download, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const PullBar = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="p-4 sm:p-6">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-green-900/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center lg:text-left mb-12">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-cyan-400"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-400">
                PullBar
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              The lightweight, open-source macOS menu bar app for developers who want quick, native access to GitHub pull requests.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-lg">
                Free & Open Source
              </Badge>
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 px-4 py-2 text-lg">
                macOS Native
              </Badge>
            </div>
          </div>

          <Card className="bg-gray-900 border-gray-700 shadow-xl shadow-cyan-500/20 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                    Simple. Fast. Effective.
                  </h2>
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">Instantly view open pull requests from your menu bar</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">One-click access to GitHub PR pages</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">Lightweight and resource-friendly</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">Native macOS look and feel</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg">Secure GitHub token-based authentication</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                      onClick={() => window.open('https://github.com/menubar-apps/pullbar', '_blank')}
                    >
                      <Download className="mr-2 w-5 h-5" />
                      Download Free
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                      onClick={() => window.open('https://github.com/menubar-apps/pullbar', '_blank')}
                    >
                      <Github className="mr-2 w-5 h-5" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-black rounded-lg p-6 w-full max-w-lg">
                    <img 
                      src="https://user-images.githubusercontent.com/9363150/179432557-f3db115e-fe9d-4f91-ac7c-0d85ce3f9e43.png" 
                      alt="PullBar macOS menu bar app screenshot"
                      className="w-full h-auto rounded shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🚀 Lightning Fast</h3>
                <p className="text-gray-300">
                  Minimal resource usage and instant startup. No bloat, just the essentials you need to stay on top of your PRs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🔒 Secure</h3>
                <p className="text-gray-300">
                  Uses GitHub's official API with personal access tokens. Your credentials stay secure and private.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🎨 Native Design</h3>
                <p className="text-gray-300">
                  Designed to feel at home on macOS with native UI elements and system integration.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Open Source Section */}
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700 shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Open Source & Community Driven</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                PullBar is completely open source and free forever. Contribute to the project, suggest features, or fork it to make it your own.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                  onClick={() => window.open('https://github.com/menubar-apps/pullbar', '_blank')}
                >
                  <Github className="mr-2 w-5 h-5" />
                  Star on GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-500 text-gray-300 hover:bg-gray-700"
                  onClick={() => window.open('https://github.com/menubar-apps/pullbar/issues', '_blank')}
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Report Issues
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-300 mb-6">
              Ready to streamline your GitHub workflow?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Download PullBar today and keep your pull requests just one click away.
            </p>
            <Link to="/pullbar-pro">
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                Need more features? Check out PullBar Pro
                <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PullBar;