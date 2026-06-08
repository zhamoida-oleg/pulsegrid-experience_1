import PageHero from '../components/PageHero';
import Card from '../components/Card';
import { caseStudies } from '../data/site';
export default function Customers(){return <><PageHero eyebrow="Chapter 07 — The People" title="Customer stories from the human network." text="Holographic case studies show measurable operational improvements." scene="city"/><section className="section grid-3">{caseStudies.map(c=><Card key={c.company}><p className="eyebrow">{c.company}</p><h3>{c.result}</h3><p>{c.detail}</p><a href="/case-studies">Read case</a></Card>)}</section></>}
