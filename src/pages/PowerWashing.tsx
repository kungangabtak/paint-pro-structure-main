import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Droplets, 
  Sparkles, 
  CheckCircle,
  Zap,
  Shield,
  Car,
  TreePine
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "House Washing",
    description: "Complete exterior home cleaning including siding, trim, and windows",
    features: ["Vinyl siding", "Brick & stone", "Wood surfaces", "Window cleaning"]
  },
  {
    icon: Car,
    title: "Driveway & Sidewalk",
    description: "Remove stains, dirt, and buildup from concrete surfaces",
    features: ["Oil stain removal", "Gum removal", "Rust cleaning", "Sealing preparation"]
  },
  {
    icon: TreePine,
    title: "Deck & Patio",
    description: "Prepare outdoor spaces for staining or simply deep clean",
    features: ["Wood deck cleaning", "Concrete patios", "Stone surfaces", "Pre-stain prep"]
  },
  {
    icon: Shield,
    title: "Commercial Cleaning",
    description: "Professional power washing for businesses and commercial properties",
    features: ["Storefront cleaning", "Parking lots", "Building exteriors", "Regular maintenance"]
  }
];

const benefits = [
  {
    icon: Sparkles,
    title: "Deep Cleaning Power",
    description: "Remove years of dirt, grime, mold, and mildew with professional equipment."
  },
  {
    icon: Zap,
    title: "Time Efficient",
    description: "Fast, effective cleaning that saves you hours of manual scrubbing."
  },
  {
    icon: Shield,
    title: "Surface Protection",
    description: "Proper pressure settings protect your surfaces while ensuring thorough cleaning."
  },
  {
    icon: Droplets,
    title: "Eco-Friendly Options",
    description: "Environmentally safe cleaning solutions that are tough on dirt, gentle on plants."
  }
];

export default function PowerWashing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Professional Power Washing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Cleaning for
              <span className="text-accent"> Every Surface</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Transform your property with professional power washing services. From house exteriors 
              to driveways, we restore surfaces to like-new condition with safe, effective cleaning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/get-estimate">Get Free Cleaning Estimate</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild className="text-white hover:bg-white/10">
                <a href="tel:8154412517">Call (815) 441-2517</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Power Washing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning solutions for residential and commercial properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-accent mr-3" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Power Washing */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Power Washing?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional power washing delivers results that regular cleaning can't match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before Power Washing vs After */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect Prep for Painting</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Power washing is an essential first step before any painting project. Clean surfaces ensure better paint adhesion and longer-lasting results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Why Clean Before Painting?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Better Paint Adhesion:</span> Clean surfaces allow paint to bond properly
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Longer Lasting Results:</span> Remove contaminants that cause early paint failure
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Professional Finish:</span> Smooth, clean surfaces create a flawless paint job
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Warranty Protection:</span> Proper prep work protects your paint warranty
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-accent/5 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-center">Combined Service Savings</h4>
              <p className="text-muted-foreground text-center mb-6">
                Bundle power washing with your painting project for the best results and value.
              </p>
              <div className="text-center">
                <Button variant="accent" asChild>
                  <Link to="/get-estimate">Get Combined Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Deep Clean?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Transform your property with professional power washing services that prepare surfaces for painting or simply restore their original beauty.
          </p>
          <div className="flex flex-col gap-6 items-center">
            <div>
              <div id="3f2be4ce-f6a2-414c-95b4-8211aaed3546"></div>
              <link 
                rel="stylesheet" 
                href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" 
                media="screen" 
              />
              <script 
                src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" 
                data-clienthub-id="3f2be4ce-f6a2-414c-95b4-8211aaed3546" 
                data-form-url="https://clienthub.getjobber.com/client_hubs/3f2be4ce-f6a2-414c-95b4-8211aaed3546/public/work_request/embedded_work_request_form"
              ></script>
            </div>
            <Button size="lg" variant="ghost" asChild className="text-white hover:bg-white/10">
              <Link to="/get-estimate">Get Your Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}