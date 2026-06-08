import Scene from './Scene';
import ButtonLink from './ButtonLink';
export default function PageHero({ eyebrow, title, text, scene = 'core' }: { eyebrow: string; title: string; text: string; scene?: 'core' | 'city' | 'network' | 'vault' | 'archive' }) {
  return <section className="hero compact">
    <div className="hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{text}</p><div className="hero-actions"><ButtonLink to="/demo">Open Demo</ButtonLink><ButtonLink to="/contact" variant="secondary">Book a Demo</ButtonLink></div></div>
    <Scene mode={scene} />
  </section>;
}
