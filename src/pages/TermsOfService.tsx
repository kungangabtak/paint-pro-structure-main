import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                By accessing and using TTM Painting's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Services Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                TTM Painting provides professional painting services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Interior and exterior residential painting</li>
                <li>Commercial painting services</li>
                <li>Deck and fence staining</li>
                <li>Power washing services</li>
                <li>Color consultation and design services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Service Agreements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Estimates and Contracts</h3>
                <p>
                  All estimates are provided free of charge and are valid for 30 days from the date of issue. A written contract will be provided for all projects over $500. The contract will detail the scope of work, materials, timeline, and payment terms.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-2">Payment Terms</h3>
                <p>
                  Payment terms will be specified in your individual contract. Generally, we require a deposit for materials and labor, with the balance due upon completion of the project. We accept cash, check, and major credit cards.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Timeline</h3>
                <p>
                  Project timelines are estimates and may be affected by weather conditions, material availability, and other factors beyond our control. We will communicate any delays promptly and work to minimize project duration.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Warranty and Guarantees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Workmanship Warranty</h3>
                <p>
                  TTM Painting provides a 1-3 year workmanship warranty on all painting projects, depending on the scope of work. This warranty covers defects in workmanship but does not cover normal wear and tear, damage from weather, or damage caused by the customer.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-2">Material Warranty</h3>
                <p>
                  Material warranties are provided by the manufacturer and vary by product. We will provide warranty information for all materials used in your project.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Customer Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide access to the work area during scheduled hours</li>
                <li>Remove or protect personal belongings from the work area</li>
                <li>Ensure adequate lighting and ventilation in work areas</li>
                <li>Notify us of any special requirements or concerns before work begins</li>
                <li>Make payment according to the agreed terms</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                TTM Painting is fully licensed, bonded, and insured. Our liability is limited to the cost of the project or the amount covered by our insurance, whichever is less. We are not responsible for damage to personal property that was not properly protected or removed from the work area.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Cancellation Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Projects may be cancelled with 48 hours notice. If materials have been purchased, the customer is responsible for the cost of materials. If work has begun, the customer is responsible for payment for work completed and materials used.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Any disputes will be resolved through good faith negotiation. If a resolution cannot be reached, disputes will be subject to binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                TTM Painting reserves the right to modify these terms at any time. Changes will be posted on our website and will apply to all new projects. Existing contracts will continue under their original terms.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Phone:</strong> (815) 441-2517</p>
                <p><strong>Email:</strong> tate@ttmpainting.com</p>
                <p><strong>Address:</strong> Sterling, IL & Surrounding Areas</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
