import PageHero from '../components/PageHero';
import Card from '../components/Card';
import { plans } from '../data/site';
export default function Pricing(){return <><PageHero eyebrow="Chapter 08 — The Horizon" title="Choose the mission scale." text="Simple plans for a fictional SaaS product, with real clickable actions." scene="archive"/><section className="section grid-3">{plans.map(p=><Card key={p.name} className="price"><h3>{p.name}</h3><div className="price-tag">{p.price}</div><p>{p.desc}</p><ul>{p.features.map(f=><li key={f}>{f}</li>)}</ul><a className="btn primary" href={p.name==='Enterprise'?'/contact':'/signup'}>{p.cta}</a></Card>)}</section></>}
