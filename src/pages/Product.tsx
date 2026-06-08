import PageHero from '../components/PageHero';
import Card from '../components/Card';
import { features } from '../data/site';
export default function Product() { return <><PageHero eyebrow="Chapter 02 — The Core" title="A living command center for modern operations." text="Explore floating dashboards, AI routing, incident coordination and team spaces as product zones." /> <section className="section zone-stack">{features.map((f, i)=><Card key={f.title} className="zone-card"><div className="zone-index">0{i+1}</div><div><h3>{f.title}</h3><p>{f.text}</p><strong>{f.stat}</strong></div><a href="/demo">Open zone</a></Card>)}</section></>; }
