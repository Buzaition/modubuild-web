import { CheckCircle2, Building, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page pt-lg">
      <div className="container section-padding text-center max-w-1000">
        <h1>About ModuBuild</h1>
        <p className="subtitle mx-auto">Pioneering the intersection of luxury construction, innovative modular design, and hyper-realistic 3D visualization.</p>
      </div>

      <div className="bg-ivory section-padding">
        <div className="container grid-2 align-center">
          <div>
            <img src="/images/villa-exterior.webp" alt="ModuBuild HQ" className="img-rounded shadow-lg" />
          </div>
          <div className="pl-lg">
            <h2>Our Story</h2>
            <p className="mb-md">Founded on the principle that building your dream space shouldn't be a game of guesswork, ModuBuild integrates cutting-edge technology with master craftsmanship. We recognized a gap in the market for a truly transparent, visual-first construction process.</p>
            <p className="mb-md">Today, we are the premier choice for discerning clients who demand perfection before the first stone is laid. Our in-house team of architects, 3D artists, and construction managers work in perfect unison.</p>
            <div className="grid-2 mt-md">
              <div>
                <div className="text-xl font-serif color-bronze">15+</div>
                <div className="text-sm font-bold text-uppercase">Years Experience</div>
              </div>
              <div>
                <div className="text-xl font-serif color-bronze">200+</div>
                <div className="text-sm font-bold text-uppercase">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-padding text-center">
        <h2 className="mb-lg">Our Core Values</h2>
        <div className="grid-3">
          <div className="card">
            <Trophy className="icon-large mx-auto mb-sm" />
            <h3>Excellence</h3>
            <p>We do not compromise. From the foundation to the final brushstroke, every detail is executed to the highest standard.</p>
          </div>
          <div className="card">
            <Building className="icon-large mx-auto mb-sm" />
            <h3>Innovation</h3>
            <p>We leverage modular techniques and 3D rendering to build faster, smarter, and more beautifully.</p>
          </div>
          <div className="card">
            <Users className="icon-large mx-auto mb-sm" />
            <h3>Transparency</h3>
            <p>Through our client dashboard, you have full visibility into budgets, timelines, and daily progress.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
