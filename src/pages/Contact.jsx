import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="contact-page pt-lg pb-xl">
      <div className="container section-padding text-center">
        <h1>Contact Us</h1>
        <p className="subtitle mx-auto">Get in touch with our team to discuss your next project.</p>
      </div>

      <div className="container grid-2">
        <div className="contact-info bg-charcoal color-white p-xl rounded-lg">
          <h2 className="mb-lg color-bronze">Headquarters</h2>
          
          <div className="flex-center gap-sm justify-start mb-md">
            <MapPin className="color-bronze"/>
            <div>
              <p className="font-bold">ModuBuild Design Center</p>
              <p className="color-light-stone">100 Luxury Avenue, Suite 400<br/>Design District, NY 10001</p>
            </div>
          </div>
          
          <div className="flex-center gap-sm justify-start mb-md">
            <Phone className="color-bronze"/>
            <div>
              <p className="font-bold">Phone</p>
              <p className="color-light-stone">+1 (800) 123-4567</p>
            </div>
          </div>
          
          <div className="flex-center gap-sm justify-start">
            <Mail className="color-bronze"/>
            <div>
              <p className="font-bold">Email</p>
              <p className="color-light-stone">hello@modubuild.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container card p-lg">
          <h3 className="mb-md">Send a Message</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help you?"></textarea>
            </div>
            <button className="btn btn-primary btn-full flex-center gap-xs mt-md">
              <Send size={16}/> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
