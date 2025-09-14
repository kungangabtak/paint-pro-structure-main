import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Phone, Mail, MapPin } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No hidden costs or surprise charges. You'll know exactly what you're paying for."
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all estimate requests within 24 hours, often much sooner."
  },
  {
    icon: Shield,
    title: "No Obligation",
    description: "Our free estimates come with zero pressure. Take your time to decide."
  }
];

export default function GetEstimate() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Painting Estimate
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Professional, detailed estimates for all your painting needs. 
              Licensed, bonded, and insured for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl">Request Your Free Estimate</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
                </p>
              </CardHeader>
              <CardContent>
                {/* Jobber Form Embed */}
                <div id="3f2be4ce-f6a2-414c-95b4-8211aaed3546"></div>
                <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
                <div dangerouslySetInnerHTML={{
                  __html: `<script src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" clienthub_id="3f2be4ce-f6a2-414c-95b4-8211aaed3546" form_url="https://clienthub.getjobber.com/client_hubs/3f2be4ce-f6a2-414c-95b4-8211aaed3546/public/work_request/embedded_work_request_form"></script>`
                }} />
              </CardContent>
            </Card>

            {/* Privacy Note */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>
                Your information is secure and will only be used to provide your estimate. 
                We never share your personal information with third parties.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Why Choose TTM Painting?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <benefit.icon className="h-6 w-6 text-success mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Contact Us Directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <div className="font-medium">Call for Immediate Service</div>
                    <a href="tel:8154412517" className="text-accent hover:underline">
                      (815) 441-2517
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <a href="mailto:tate@ttmpainting.com" className="text-accent hover:underline">
                      tate@ttmpainting.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-3" />
                  <div>
                    <div className="font-medium">Service Area</div>
                    <div className="text-sm text-muted-foreground">
                      Rock Island to Chicago suburbs, Galena to Champaign & all areas in between
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <p className="text-sm text-muted-foreground">
                    <strong>Emergency Services:</strong> Available for urgent commercial projects and weather-related repairs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}