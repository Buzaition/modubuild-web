import { Link } from 'react-router-dom';
import HeroScroll from '../components/sections/HeroScroll';
import BeforeAfterSlider from '../components/sections/BeforeAfterSlider';
import { ArrowRight, CheckCircle2, Building, Paintbrush, Cuboid, Ruler } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <HeroScroll />

      {/* Intro Section */}
      <section className="section-padding container text-center">
        <h1 className="mb-sm" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '600', color: 'var(--color-deep-charcoal)' }}>
          Architectural Precision.<br/>Refined Luxury.
        </h1>
        <p className="subtitle mx-auto" style={{ maxWidth: '800px', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'var(--color-concrete-gray)' }}>
          We seamlessly integrate premium construction, bespoke interior design, and immersive 3D previews to deliver your perfect space without the guesswork.
        </p>
      </section>

      {/* The ModuBuild Difference */}
      <section className="section-padding container bg-ivory">
        <div className="text-center mb-xl">
          <h2>The ModuBuild Difference</h2>
          <p className="subtitle">Redefining the standard of luxury construction and finishing.</p>
        </div>
        <div className="grid-3">
          <div className="card text-center fade-in">
            <CheckCircle2 className="icon-large mx-auto mb-sm" />
            <h3>Uncompromising Quality</h3>
            <p>We source only the finest materials from around the globe to ensure your project stands the test of time.</p>
          </div>
          <div className="card text-center fade-in delay-1">
            <Cuboid className="icon-large mx-auto mb-sm" />
            <h3>Immersive Previews</h3>
            <p>Our state-of-the-art 3D studio lets you walk through your finished space before a single hammer is swung.</p>
          </div>
          <div className="card text-center fade-in delay-2">
            <Building className="icon-large mx-auto mb-sm" />
            <h3>Seamless Execution</h3>
            <p>From initial design to final finishing, our integrated team manages every detail flawlessly.</p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding container">
        <div className="grid-2 align-center">
          <div>
            <h2>Core Services</h2>
            <p className="mb-md">Comprehensive solutions tailored to your unique vision and requirements. We handle the complexity so you can enjoy the results.</p>
            <ul className="service-list mb-md">
              <li><CheckCircle2 size={20} className="color-bronze" /> Premium Construction Management</li>
              <li><CheckCircle2 size={20} className="color-bronze" /> Bespoke Interior Design</li>
              <li><CheckCircle2 size={20} className="color-bronze" /> High-End Renovation & Remodeling</li>
              <li><CheckCircle2 size={20} className="color-bronze" /> Modular Building Solutions</li>
            </ul>
            <Link to="/services" className="btn btn-outline">Explore All Services</Link>
          </div>
          <div className="image-grid">
            <img src="/images/villa-exterior.webp" alt="Villa Exterior" className="img-rounded shadow-lg" />
          </div>
        </div>
      </section>

      {/* 3D Visualization & Slider */}
      <section className="section-padding bg-charcoal color-white">
        <div className="container text-center mb-lg">
          <h2>3D Visualization vs Reality</h2>
          <p className="subtitle color-light-stone">Slide to see how our hyper-realistic 3D previews match the final constructed space with unparalleled precision.</p>
        </div>
        <div className="container max-w-1000">
          <BeforeAfterSlider 
            beforeImage="/images/before-room.webp" 
            afterImage="/images/after-room.webp" 
          />
          <div className="text-center mt-md">
            <Link to="/3d-studio" className="btn btn-primary bg-bronze border-none">Enter 3D Studio</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding container">
        <div className="flex-between mb-lg">
          <h2>Featured Projects</h2>
          <Link to="/projects" className="btn btn-outline flex-center gap-xs">View Portfolio <ArrowRight size={16}/></Link>
        </div>
        <div className="grid-2">
          <div className="project-card">
            <div className="project-img-wrapper">
              <img src="/images/living-room-interior.webp" alt="Cairo Loft" />
            </div>
            <div className="project-info">
              <h3>Cairo Loft Apartment</h3>
              <p>Complete interior renovation & bespoke furniture</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-img-wrapper">
              <img src="/images/kitchen.webp" alt="Minimal Kitchen" />
            </div>
            <div className="project-info">
              <h3>Minimal Kitchen Remodel</h3>
              <p>Modern luxury with smart integrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modular & Modern */}
      <section className="section-padding bg-warm-beige">
        <div className="container grid-2 align-center reverse-mobile">
          <div className="image-wrapper">
            <img src="/images/modular-studio.webp" alt="Modular Studio" className="img-rounded shadow-lg" />
          </div>
          <div className="pl-lg">
            <h2>Modular & Modern</h2>
            <p className="mb-md">Experience the future of construction with our premium modular solutions. Faster build times, sustainable materials, and uncompromising luxury.</p>
            <Link to="/projects" className="btn btn-primary">Discover Modular Options</Link>
          </div>
        </div>
      </section>

      {/* Material Excellence */}
      <section className="section-padding container text-center">
        <h2 className="mb-md">Material Excellence</h2>
        <p className="subtitle mx-auto mb-lg">Curated finishes for the discerning eye. From rare marbles to sustainable natural woods.</p>
        <div className="material-preview-grid mb-lg">
          <img src="/materials/marble.webp" alt="Marble" className="material-swatch" />
          <img src="/materials/natural-wood.webp" alt="Wood" className="material-swatch" />
          <img src="/materials/bronze-metal.webp" alt="Bronze" className="material-swatch" />
          <img src="/materials/concrete-gray-stone.webp" alt="Concrete" className="material-swatch" />
        </div>
        <Link to="/materials" className="btn btn-outline">Browse Material Library</Link>
      </section>

      {/* Dashboard Previews */}
      <section className="section-padding bg-charcoal color-white">
        <div className="container grid-2 align-center">
          <div>
            <h2>Total Transparency</h2>
            <p className="subtitle color-light-stone mb-md">Monitor your project's progress, view milestones, and approve materials all from your personalized client dashboard.</p>
            <ul className="service-list mb-md">
              <li><CheckCircle2 size={20} className="color-bronze" /> Live Budget Tracking</li>
              <li><CheckCircle2 size={20} className="color-bronze" /> Milestone Approvals</li>
              <li><CheckCircle2 size={20} className="color-bronze" /> 3D Design Iterations</li>
            </ul>
            <Link to="/client-dashboard" className="btn btn-outline border-white color-white">View Client Dashboard</Link>
          </div>
          <div className="dashboard-mockup">
            <div className="glass-panel-dark p-md rounded-lg shadow-2xl">
              <div className="flex-between mb-md border-bottom pb-sm">
                <h4>Project Status: Cairo Loft</h4>
                <span className="badge bg-bronze">On Track</span>
              </div>
              <div className="progress-bar mb-sm">
                <div className="progress-fill" style={{width: '65%'}}></div>
              </div>
              <p className="text-sm color-light-stone mb-md">Phase 3: Flooring & Wall Finishes (65% Complete)</p>
              <div className="grid-2 gap-sm">
                <div className="bg-charcoal p-sm rounded text-center">
                  <div className="text-xs color-light-stone">Budget Used</div>
                  <div className="font-serif text-lg">$145,000</div>
                </div>
                <div className="bg-charcoal p-sm rounded text-center">
                  <div className="text-xs color-light-stone">Next Milestone</div>
                  <div className="font-serif text-lg">Oct 12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote CTA */}
      <section className="section-padding container text-center">
        <div className="cta-box bg-ivory p-xl rounded-lg shadow-sm">
          <h2 className="mb-sm">Ready to Build Your Vision?</h2>
          <p className="subtitle mx-auto mb-lg">Get a detailed estimate and start the journey to your perfect space today.</p>
          <Link to="/quote" className="btn btn-primary btn-large">Start Your Quote Request</Link>
        </div>
      </section>
    </div>
  );
}
