import { Link } from 'react-router-dom';
import { Hammer, PaintBucket, Sofa, Cuboid, MonitorPlay, Ruler, ShieldCheck, ClipboardList } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <Hammer className="color-bronze" size={32}/>, title: 'Construction Management', desc: 'End-to-end management of luxury residential and commercial builds.' },
    { icon: <PaintBucket className="color-bronze" size={32}/>, title: 'Decoration & Finishing', desc: 'Masterful application of paints, textures, and bespoke wall treatments.' },
    { icon: <Sofa className="color-bronze" size={32}/>, title: 'Interior Design', desc: 'Curated styling, furniture selection, and spatial harmonization.' },
    { icon: <ShieldCheck className="color-bronze" size={32}/>, title: 'Renovation & Remodeling', desc: 'Transforming existing spaces into modern masterpieces.' },
    { icon: <MonitorPlay className="color-bronze" size={32}/>, title: '3D Visualization', desc: 'Hyper-realistic digital twins of your project before construction begins.' },
    { icon: <Cuboid className="color-bronze" size={32}/>, title: 'Modular Solutions', desc: 'Premium standalone structures built off-site for rapid deployment.' },
    { icon: <ClipboardList className="color-bronze" size={32}/>, title: 'Material Selection', desc: 'Global sourcing of the finest marble, wood, and metal finishes.' },
    { icon: <Ruler className="color-bronze" size={32}/>, title: 'Space Planning', desc: 'Optimizing flow, function, and light in every room.' },
  ];

  return (
    <div className="services-page pt-lg pb-xl">
      <div className="container section-padding text-center">
        <h1>Our Expertise</h1>
        <p className="subtitle mx-auto">Comprehensive solutions for the modern built environment.</p>
      </div>

      <div className="container grid-3 mb-xl">
        {services.map((svc, idx) => (
          <div key={idx} className="card text-center fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
            <div className="mb-md">{svc.icon}</div>
            <h3 className="mb-sm">{svc.title}</h3>
            <p className="color-concrete-gray">{svc.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-charcoal color-white section-padding text-center">
        <div className="container max-w-1000">
          <h2 className="mb-md">Not sure where to start?</h2>
          <p className="subtitle color-light-stone mx-auto mb-lg">Book a free consultation with our design team. We'll listen to your ideas and outline the perfect service package for your needs.</p>
          <Link to="/contact" className="btn btn-primary bg-bronze border-none">Schedule Consultation</Link>
        </div>
      </div>
    </div>
  );
}
