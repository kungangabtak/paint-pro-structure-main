import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Upload, Image } from "lucide-react";

interface JobberFormProps {
  className?: string;
}

const JobberForm = ({ className = "" }: JobberFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
    estimateDetails: '',
    preferredDate: '',
    alternativeDate: '',
    preferredTimes: [] as string[],
    images: [] as File[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferredTimes: checked 
        ? [...prev.preferredTimes, value]
        : prev.preferredTimes.filter(time => time !== value)
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Open Jobber form in a new window/tab
    const jobberUrl = 'https://clienthub.getjobber.com/client_hubs/3f2be4ce-f6a2-414c-95b4-8211aaed3546/public/work_request/embedded_work_request_form';
    
    // Pre-fill the form if possible (this may not work depending on Jobber's implementation)
    const params = new URLSearchParams();
    if (formData.firstName) params.append('firstName', formData.firstName);
    if (formData.lastName) params.append('lastName', formData.lastName);
    if (formData.companyName) params.append('companyName', formData.companyName);
    if (formData.email) params.append('email', formData.email);
    if (formData.phone) params.append('phone', formData.phone);
    if (formData.street1) params.append('street1', formData.street1);
    if (formData.city) params.append('city', formData.city);
    if (formData.state) params.append('state', formData.state);
    if (formData.zipCode) params.append('zipCode', formData.zipCode);
    if (formData.estimateDetails) params.append('estimateDetails', formData.estimateDetails);
    if (formData.preferredDate) params.append('preferredDate', formData.preferredDate);
    if (formData.alternativeDate) params.append('alternativeDate', formData.alternativeDate);
    if (formData.preferredTimes.length > 0) params.append('preferredTimes', formData.preferredTimes.join(','));
    
    const finalUrl = params.toString() ? `${jobberUrl}?${params.toString()}` : jobberUrl;
    
    window.open(finalUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
  };

  return (
    <div className={className}>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Get Your Free Estimate</CardTitle>
          <CardDescription className="text-center">
            Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Details Section */}
            <div className="space-y-6">
              <h5 className="text-lg font-semibold text-gray-900">Contact details</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="companyName">Company name (if applicable)</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company name (if applicable)"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
                <p className="text-sm text-gray-600">
                  By providing your email, you consent to receiving marketing emails and promotions. You can unsubscribe at any time.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                />
                <p className="text-sm text-gray-600">
                  By providing your phone number, you agree to receive text messages (SMS) from TTM Painting. You can unsubscribe at anytime by replying STOP. Message and data rates may apply. Message frequency varies.
                </p>
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-6">
              <h5 className="text-lg font-semibold text-gray-900">Address</h5>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="street1">Street 1 *</Label>
                  <Input
                    id="street1"
                    name="street1"
                    type="text"
                    required
                    value={formData.street1}
                    onChange={handleInputChange}
                    placeholder="Street 1"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="street2">Street 2</Label>
                  <Input
                    id="street2"
                    name="street2"
                    type="text"
                    value={formData.street2}
                    onChange={handleInputChange}
                    placeholder="Street 2"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      name="state"
                      type="text"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP code *</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="ZIP code"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Estimate Details Section */}
            <div className="space-y-6">
              <h5 className="text-lg font-semibold text-gray-900">Estimate Details</h5>
              
              <div className="space-y-2">
                <Label htmlFor="estimateDetails">Please provide what you would like estimated for painting and/or other services *</Label>
                <Textarea
                  id="estimateDetails"
                  name="estimateDetails"
                  required
                  value={formData.estimateDetails}
                  onChange={handleInputChange}
                  placeholder="Please provide what you would like estimated for painting and/or other services"
                  rows={4}
                />
              </div>
            </div>

            {/* Your Availability Section */}
            <div className="space-y-6">
              <h5 className="text-lg font-semibold text-gray-900">Your Availability</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Which day would be best for an assessment of the work? *</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alternativeDate">What is another day that works for you? (optional)</Label>
                  <Input
                    id="alternativeDate"
                    name="alternativeDate"
                    type="date"
                    value={formData.alternativeDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label>What are your preferred arrival times? (optional)</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Any time', 'Morning', 'Afternoon', 'Evening'].map((time) => (
                    <div key={time} className="flex items-center space-x-2">
                      <Checkbox
                        id={time}
                        checked={formData.preferredTimes.includes(time)}
                        onCheckedChange={(checked) => handleCheckboxChange(time, checked as boolean)}
                      />
                      <Label htmlFor={time} className="text-sm font-normal">{time}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="space-y-6">
              <h5 className="text-lg font-semibold text-gray-900">Upload images</h5>
              <p className="text-sm text-gray-600">Share images of the work to be done (optional)</p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="imageUpload"
                  multiple
                  accept="image/png,image/jpeg,image/heic,application/pdf"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="imageUpload" className="cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-sm text-gray-600 mb-2">Select or drag files here to upload</p>
                  <Button type="button" variant="outline" size="sm">
                    Upload File
                  </Button>
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Do not upload files with payment information. Ensure you have all required rights, consent and permissions to share.
                </p>
              </div>
              
              {formData.images.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Uploaded files:</p>
                  <div className="space-y-1">
                    {formData.images.map((file, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Image className="h-4 w-4" />
                        <span>{file.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" size="lg">
              Submit
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobberForm;
