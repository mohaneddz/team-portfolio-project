import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      label: "Team Members",
      value: "6",
      description: "Expert professionals",
    },
    {
      icon: Award,
      label: "Projects Completed",
      value: "20+",
      description: "Successful deliveries",
    },
    {
      icon: Target,
      label: "Client Satisfaction",
      value: "98%",
      description: "Happy clients",
    },
    {
      icon: TrendingUp,
      label: "Growth Rate",
      value: "150%",
      description: "Year over year",
    },
  ];

  return (
    <div className="min-h-screen py-20" id="statistics">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Statistics</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 active:-translate-y-0 cursor-pointer">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 active:-translate-y-0 cursor-pointer">
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Project Success Rate</span>
                  <span className="font-bold text-primary">95%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "95%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Client Retention</span>
                  <span className="font-bold text-primary">92%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "92%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>On-Time Delivery</span>
                  <span className="font-bold text-primary">98%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "98%" }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 active:-translate-y-0 cursor-pointer">
            <CardHeader>
              <CardTitle>Growth Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Revenue Growth</p>
                  <p className="text-2xl font-bold text-primary">+150%</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Team Expansion</p>
                  <p className="text-2xl font-bold text-primary">+80%</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Market Reach</p>
                  <p className="text-2xl font-bold text-primary">+200%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
