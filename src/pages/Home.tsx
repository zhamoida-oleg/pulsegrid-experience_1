import ButtonLink from '../components/ButtonLink';
import Scene from '../components/Scene';
import Card from '../components/Card';
import { chapters, features } from '../data/site';

export default function Home() {
  return <>
    <section className="boot">Initializing PulseGrid · Connecting systems · Access granted</section>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Chapter 01 — The Signal</p>
        <h1>Every system has a pulse. Enter the grid.</h1>
        <p>PulseGrid is a fictional operational intelligence platform presented as a cinematic SaaS journey. Move through zones, open systems and explore a living product interface.</p>
        <div className="hero-actions"><ButtonLink to="/product">Enter Platform</ButtonLink><ButtonLink to="/demo" variant="secondary">Open Demo</ButtonLink></div>
      </div>
      <Scene mode="core" />
    </section>
    <section className="section"><p className="eyebrow">Journey map</p><h2>Not a landing page. A route through a digital operating world.</h2><div className="chapter-rail">{chapters.map((c, i) => <a key={c.path} href={c.path}><span>0{i+1}</span>{c.label}</a>)}</div></section>
    <section className="section grid-3">{features.slice(0,3).map(f => <Card key={f.title}><p className="eyebrow">{f.stat}</p><h3>{f.title}</h3><p>{f.text}</p></Card>)}</section>
    <section className="final-cta"><h2>The future of operations isn't managed. It's orchestrated.</h2><ButtonLink to="/pricing">Continue Journey</ButtonLink></section>
  </>;
}
