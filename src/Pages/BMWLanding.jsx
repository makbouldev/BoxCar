import React from 'react';
import './BMWLanding.css';

const highlightGallery = [
  {
    title: 'Iconic Kidney Grille',
    description: 'Laser-cut mesh with adaptive shutters reduces drag while showcasing the BMW signature look.',
    tag: 'Design'
  },
  {
    title: 'Curated Driving Modes',
    description: 'Switch from Comfort to Sport Plus with adaptive damping that anticipates every corner.',
    tag: 'Dynamics'
  },
  {
    title: 'Cinematic Display',
    description: '14.9” curved display with BMW OS 8 delivers immersive navigation and live vehicle health.',
    tag: 'Technology'
  }
];

const specs = [
  { label: '0-60 mph', value: '3.7s', detail: 'TwinPower Turbo inline-6 with 48V mild hybrid boost.' },
  { label: 'Range', value: '380 mi', detail: 'Optimized efficiency with adaptive brake energy recuperation.' },
  { label: 'Output', value: '523 hp', detail: 'Precision-tuned torque curve for instant responsiveness.' },
  { label: 'Interior', value: 'Merino', detail: 'Hand-stitched leather with floating ambient light blade.' }
];

const timeline = [
  { year: '2024', headline: 'BMW iDrive 8 Launch', copy: 'Gesture control, AR guidance, and cloud profiles built for the new 5 Series.' },
  { year: '2025', headline: 'Iconic Glow Package', copy: 'Illuminated kidney grille with adaptive laser light signature animations.' },
  { year: '2026', headline: 'Autobahn Suite', copy: 'Level 3 ready hardware paired with predictive, map-aware adaptive cruise.' }
];

export default function BMWLanding() {
  return (
    <div className="bmw-page">
      <div className="gradient-orb orb-one" />
      <div className="gradient-orb orb-two" />
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">BMW PRODUCT EXPERIENCE</p>
          <h1>BMW i5 M60 xDrive</h1>
          <p className="lede">
            Crafted for electric exhilaration. An athletic fastback silhouette, adaptive M suspension, and an interior that responds to your touch, gesture, and voice.
          </p>
          <div className="hero-actions">
            <button className="primary">Build Your BMW</button>
            <button className="ghost">Schedule Live Tour</button>
          </div>
          <div className="metrics">
            <div><span className="metric-value">3.7s</span><span className="metric-label">0-60 mph</span></div>
            <div><span className="metric-value">523 hp</span><span className="metric-label">M TwinPower</span></div>
            <div><span className="metric-value">280 mi</span><span className="metric-label">Real-world range</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="light-ribbon" />
          <img
            className="car-shot"
            src="https://images.unsplash.com/photo-1610465299996-c2823e3e1b8d?auto=format&fit=crop&w=1200&q=80"
            alt="BMW i5 in studio lighting"
            loading="lazy"
          />
          <div className="badge">M PERFORMANCE</div>
        </div>
      </header>

      <section className="highlights">
        <div className="section-header">
          <p className="eyebrow">Crafted Motion</p>
          <h2>Design that breathes with the driver</h2>
          <p>Micro-animations respond to your scroll — mimicking the way BMW light signatures pulse when you approach the vehicle.</p>
        </div>
        <div className="highlight-grid">
          {highlightGallery.map((item) => (
            <article key={item.title} className="highlight-card">
              <span className="pill">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="progress">
                <span className="progress-bar" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="motion-band">
        <div className="band-copy">
          <p className="eyebrow">Immersive Interior</p>
          <h2>BMW Interaction Bar</h2>
          <p>Crystal-cut light blade runs across the dash with living gradients, reacting to climate cues, drive modes, and your voice.</p>
          <div className="cta-row">
            <button className="primary">See Ambient Profiles</button>
            <button className="ghost">Download Brochure</button>
          </div>
        </div>
        <div className="band-visual">
          <div className="ambient-glow" />
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
            alt="BMW interior ambient lighting"
            loading="lazy"
          />
        </div>
      </section>

      <section className="specs">
        <div className="section-header">
          <p className="eyebrow">Performance DNA</p>
          <h2>Numbers that feel alive</h2>
          <p>Every metric is wrapped in motion, reflecting the precision engineering behind each BMW M component.</p>
        </div>
        <div className="spec-grid">
          {specs.map((item) => (
            <div key={item.label} className="spec-card">
              <div className="spec-value">{item.value}</div>
              <div className="spec-label">{item.label}</div>
              <p className="spec-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline">
        <div className="section-header">
          <p className="eyebrow">BMW Futurelight</p>
          <h2>Motion-led innovation</h2>
          <p>The experience evolves every year. Track how BMW infuses animation, light, and intelligence into every new release.</p>
        </div>
        <div className="timeline-rail">
          {timeline.map((item) => (
            <div key={item.year} className="timeline-stop">
              <div className="year">{item.year}</div>
              <div className="headline">{item.headline}</div>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-card">
          <p className="eyebrow">BMW Concierge</p>
          <h2>Bring this BMW to your driveway</h2>
          <p>Schedule a remote walkaround, request a custom drive playlist, or pre-load your favorite routes to the curved display.</p>
          <div className="cta-actions">
            <button className="primary">Reserve Build Slot</button>
            <button className="ghost">Chat with BMW</button>
          </div>
        </div>
      </section>
    </div>
  );
}
