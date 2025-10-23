import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket, Shield } from "lucide-react";

const Moreover = () => {
  return (
    <div className="min-h-screen py-20" id="moreover">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Moreover</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what sets us apart from the rest
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 active:-translate-y-0 cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Innovation Driven</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We constantly push boundaries and embrace new technologies to deliver
                    cutting-edge solutions. Our team stays ahead of industry trends, ensuring
                    your projects benefit from the latest innovations and best practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 active:-translate-y-0 cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Rapid Development</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our agile methodology enables us to deliver high-quality products quickly
                    without compromising on excellence. We prioritize efficiency and maintain
                    clear communication throughout the development process.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 active:-translate-y-0 cursor-pointer">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Security First</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-leading security practices to protect your data and
                    ensure compliance. Every project is built with security as a fundamental
                    principle, not an afterthought.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 active:-translate-y-0 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
            <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              To empower businesses through technology, delivering exceptional solutions that
              drive growth, enhance efficiency, and create lasting value for our clients and
              their customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moreover;
