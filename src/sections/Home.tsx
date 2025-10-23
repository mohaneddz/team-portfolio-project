import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen" id="home">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent transform rotate-12 scale-150" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Building Excellence Together
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We&rsquo;re a passionate team dedicated to creating innovative solutions
              and delivering exceptional results. Join us on our journey to excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#team">
                <Button size="lg" className="text-lg px-8 hover:shadow-lg hover:-translate-y-1 active:scale-95 active:-translate-y-0 transition-all duration-300 cursor-pointer">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="text-lg px-8 hover:shadow-lg hover:-translate-y-1 active:scale-95 active:-translate-y-0 transition-all duration-300 cursor-pointer">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center">Why Choose us</h1>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Expert Team",
                description: "Highly skilled professionals with years of experience",
              },
              {
                title: "Quality Results",
                description: "Delivering excellence in every project we undertake",
              },
              {
                title: "Innovation First",
                description: "Always staying ahead with cutting-edge solutions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 active:-translate-y-0 cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
