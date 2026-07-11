import { useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Calculator } from 'lucide-react';
import './Quote.css';

export default function Quote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    propertySize: '',
    service: '',
    style: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const calculateEstimate = () => {
    let base = 0;
    if (formData.propertySize === 'under-100') base = 50000;
    if (formData.propertySize === '100-250') base = 120000;
    if (formData.propertySize === 'over-250') base = 250000;

    let multiplier = 1;
    if (formData.service === 'construction') multiplier = 1.5;
    if (formData.service === 'renovation') multiplier = 1.2;
    if (formData.style === 'luxury') multiplier += 0.3;

    if (base === 0) return 'Pending Details';
    return `$${(base * multiplier).toLocaleString()}`;
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="section-padding container text-center fade-in max-w-1000">
        <CheckCircle2 className="icon-large mx-auto mb-md color-bronze" style={{width: 80, height: 80}} />
        <h1 className="mb-sm">Quote Request Received</h1>
        <p className="subtitle mx-auto mb-lg">Thank you for choosing ModuBuild. Our team will review your project details and contact you within 24 hours with a comprehensive proposal.</p>
        <button onClick={() => { setIsSubmitted(false); setStep(1); }} className="btn btn-primary">Start New Request</button>
      </div>
    );
  }

  return (
    <div className="quote-page bg-ivory min-h-screen pb-xl pt-lg">
      <div className="container max-w-1000">
        <div className="text-center mb-lg">
          <h1>Request a Quote</h1>
          <p className="subtitle mx-auto">Provide us with the details of your vision, and we'll craft a bespoke proposal tailored to your needs.</p>
        </div>

        <div className="quote-layout">
          <div className="quote-form-container card">
            <div className="stepper mb-lg">
              {[1, 2, 3, 4].map(num => (
                <div key={num} className={`step ${step >= num ? 'active' : ''}`}>
                  <div className="step-circle">{step > num ? <CheckCircle2 size={16}/> : num}</div>
                  <div className="step-label">
                    {num === 1 && 'Project'}
                    {num === 2 && 'Details'}
                    {num === 3 && 'Style'}
                    {num === 4 && 'Contact'}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="form-step fade-in">
                  <h3 className="mb-md">What are you building?</h3>
                  <div className="form-group">
                    <label>Project Type</label>
                    <select 
                      required 
                      value={formData.projectType} 
                      onChange={e => setFormData({...formData, projectType: e.target.value})}
                    >
                      <option value="">Select a type...</option>
                      <option value="residential">Residential Villa / House</option>
                      <option value="apartment">Apartment / Loft</option>
                      <option value="commercial">Commercial / Office</option>
                      <option value="modular">Modular Studio</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Required Service</label>
                    <select 
                      required 
                      value={formData.service} 
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service...</option>
                      <option value="construction">Full Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="interior">Interior Design & Finishing</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="form-step fade-in">
                  <h3 className="mb-md">Property Details</h3>
                  <div className="form-group">
                    <label>Approximate Size (sqm)</label>
                    <select 
                      required 
                      value={formData.propertySize} 
                      onChange={e => setFormData({...formData, propertySize: e.target.value})}
                    >
                      <option value="">Select size range...</option>
                      <option value="under-100">Under 100 sqm</option>
                      <option value="100-250">100 - 250 sqm</option>
                      <option value="over-250">Over 250 sqm</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Upload Floor Plan (Optional)</label>
                    <input type="file" className="file-input" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step fade-in">
                  <h3 className="mb-md">Style & Budget</h3>
                  <div className="form-group">
                    <label>Preferred Style</label>
                    <select 
                      required 
                      value={formData.style} 
                      onChange={e => setFormData({...formData, style: e.target.value})}
                    >
                      <option value="">Select style...</option>
                      <option value="modern">Modern Minimalist</option>
                      <option value="luxury">Classic Luxury</option>
                      <option value="industrial">Industrial Chic</option>
                      <option value="contemporary">Contemporary</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Estimated Budget</label>
                    <select 
                      required 
                      value={formData.budget} 
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="">Select budget range...</option>
                      <option value="standard">$50,000 - $100,000</option>
                      <option value="premium">$100,000 - $250,000</option>
                      <option value="luxury">$250,000+</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="form-step fade-in">
                  <h3 className="mb-md">Contact Information</h3>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Additional Details</label>
                    <textarea 
                      rows="3" 
                      value={formData.details} 
                      onChange={e => setFormData({...formData, details: e.target.value})}
                    ></textarea>
                  </div>
                </div>
              )}

              <div className="form-actions mt-md border-top pt-md">
                {step > 1 ? (
                  <button type="button" onClick={handleBack} className="btn btn-outline flex-center gap-xs">
                    <ChevronLeft size={16}/> Back
                  </button>
                ) : <div></div>}
                
                {step < 4 ? (
                  <button 
                    type="button" 
                    onClick={handleNext} 
                    className="btn btn-primary flex-center gap-xs"
                    disabled={(step === 1 && (!formData.projectType || !formData.service)) ||
                              (step === 2 && !formData.propertySize) ||
                              (step === 3 && (!formData.style || !formData.budget))}
                  >
                    Next <ChevronRight size={16}/>
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">Submit Request</button>
                )}
              </div>
            </form>
          </div>

          <div className="quote-sidebar">
            <div className="card bg-charcoal color-white sticky-sidebar">
              <div className="flex-center mb-md color-bronze">
                <Calculator size={32} />
              </div>
              <h3 className="text-center mb-sm">Live Estimate</h3>
              <p className="text-center text-sm color-light-stone mb-lg">Based on your selections, your estimated base cost is:</p>
              
              <div className="estimate-value font-serif text-center mb-lg">
                {calculateEstimate()}
              </div>
              
              <div className="estimate-note text-xs color-light-stone text-center">
                * This is a rough automated estimate. Final costs will vary based on materials, timeline, and specific site conditions.
              </div>
            </div>
          </div>
        </div>
      </div>

      {toastVisible && (
        <div className="toast fade-in">
          <CheckCircle2 size={20} className="color-bronze" />
          <span>Success! Your request has been submitted.</span>
        </div>
      )}
    </div>
  );
}
