import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-exterior-painting.jpg";
import { 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  Star,
  Home as HomeIcon,
  Building,
  Brush,
  Fence,
  Droplets
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with quality paints and finishes.",
    href: "/exterior-painting"
  },
  {
    icon: HomeIcon,
    title: "Interior Painting",
    description: "Transform your living spaces with professional interior painting services.",
    href: "/interior-painting"
  },
  {
    icon: Fence,
    title: "Deck & Fence Staining",
    description: "Preserve and enhance your outdoor wood surfaces with quality stains.",
    href: "/deck-fence-staining"
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Prepare surfaces and restore cleanliness with professional pressure washing.",
    href: "/pressure-washing"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Free Estimate",
    description: "We provide detailed, transparent estimates with no hidden costs."
  },
  {
    number: "02",
    title: "Professional Prep",
    description: "Thorough surface preparation ensures a lasting, beautiful finish."
  },
  {
    number: "03",
    title: "Quality Paint Job",
    description: "Expert application using premium Sherwin-Williams and Benjamin Moore paints."
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description: "We ensure your complete satisfaction before considering the job complete."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Sterling, IL",
    text: "TTM Painting transformed our home inside and out. Professional, clean, and the results exceeded our expectations!",
    rating: 5
  },
  {
    name: "Mike Chen",
    location: "Rock Falls, IL",
    text: "Great communication, fair pricing, and excellent workmanship. Our kitchen cabinets look brand new!",
    rating: 5
  },
  {
    name: "Lisa Martinez",
    location: "Dixon, IL",
    text: "Very impressed with their attention to detail and how clean they kept our home during the project.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative gradient-hero text-primary-foreground py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(16, 42, 67, 0.9), rgba(16, 42, 67, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Licensed • Bonded • Insured in Illinois
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Painting Services in 
              <span className="text-accent"> Sterling, IL</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Transform your home with quality craftsmanship, premium materials, 
              and a 1-3 year workmanship warranty you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" asChild>
                <Link to="/get-estimate">Get Your Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="gradient-trust py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Shield className="h-8 w-8 text-success mr-3" />
              <div>
                <div className="font-semibold">Licensed & Insured</div>
                <div className="text-sm text-muted-foreground">Full coverage for your peace of mind</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Award className="h-8 w-8 text-success mr-3" />
              <div>
                <div className="font-semibold">1-3 Year Warranty</div>
                <div className="text-sm text-muted-foreground">Guaranteed workmanship quality</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Users className="h-8 w-8 text-success mr-3" />
              <div>
                <div className="font-semibold">30+ Homes Painted</div>
                <div className="text-sm text-muted-foreground">Throughout Sterling & surrounding areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Painting Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From exterior transformations to interior perfection, we deliver exceptional results for every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" asChild>
                    <Link to={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
            <p className="text-xl text-muted-foreground">
              See the amazing transformations we've completed for homeowners throughout Sterling and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-background rounded-lg shadow-medium overflow-hidden">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-square">
                  <img 
                    src="/src/assets/blue-house-before.jpg" 
                    alt="House exterior before painting transformation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-muted text-muted-foreground px-2 py-1 rounded text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/src/assets/blue-house-after.jpg" 
                    alt="Beautiful blue house exterior after painting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-success text-success-foreground px-2 py-1 rounded text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Complete Exterior Transformation</h3>
                <p className="text-muted-foreground">Full exterior painting with premium Sherwin-Williams paint, transforming this home with a beautiful blue color scheme.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-background rounded-lg shadow-medium overflow-hidden">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-square">
                  <img 
                    src="/src/assets/beige-house-before.jpg" 
                    alt="House exterior before professional painting service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-muted text-muted-foreground px-2 py-1 rounded text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/src/assets/beige-house-after.jpg" 
                    alt="Modern beige house exterior after professional painting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-success text-success-foreground px-2 py-1 rounded text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Ranch Style Update</h3>
                <p className="text-muted-foreground">Fresh exterior paint job bringing this ranch home into the modern era with clean lines and contemporary colors.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-background rounded-lg shadow-medium overflow-hidden lg:col-span-2 lg:max-w-2xl lg:mx-auto">
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-square">
                  <img 
                    src="/src/assets/green-garage-before.jpg" 
                    alt="Weathered garage before painting restoration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-muted text-muted-foreground px-2 py-1 rounded text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-square">
                  <img 
                    src="/src/assets/green-garage-after.jpg" 
                    alt="Freshly painted green garage exterior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-success text-success-foreground px-2 py-1 rounded text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Garage Restoration Project</h3>
                <p className="text-muted-foreground">Complete restoration of weathered garage with professional surface prep and high-quality exterior paint for long-lasting protection.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="default" asChild>
              <Link to="/get-estimate">Start Your Transformation Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground">
              Every project follows our systematic approach to ensure exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from satisfied customers across Sterling and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jobber Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
              <p className="text-xl text-muted-foreground">
                Get your free, detailed estimate today. No pressure, just honest pricing and expert advice.
              </p>
            </div>
            
            {/* Jobber Form Embed */}
            <div className="bg-background rounded-lg shadow-medium p-8">
              <div id="3f2be4ce-f6a2-414c-95b4-8211aaed3546"></div>
              <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
              <div dangerouslySetInnerHTML={{
                __html: `<script src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" clienthub_id="3f2be4ce-f6a2-414c-95b4-8211aaed3546" form_url="https://clienthub.getjobber.com/client_hubs/3f2be4ce-f6a2-414c-95b4-8211aaed3546/public/work_request/embedded_work_request_form"></script>`
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the TTM Painting Difference
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join 30+ satisfied customers in Sterling, Rock Falls, Dixon, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="accent" asChild>
              <Link to="/get-estimate">Start Your Project Today</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild className="text-white hover:bg-white/10">
              <Link to="/get-estimate">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}