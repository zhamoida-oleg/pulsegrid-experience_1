import PageHero from '../components/PageHero';
import Card from '../components/Card';
const items = ['Operations Teams','Sales Teams','Customer Success','Enterprise Leaders','Finance Ops','Product Teams'];
export default function Solutions(){return <><PageHero eyebrow="Chapter 04 — The City" title="Each tower is a team. Each team gets its own cockpit." text="A digital city of use cases for teams that need clarity across systems." scene="city"/><section className="section grid-3">{items.map(x=><Card key={x}><h3>{x}</h3><p>Live workflows, contextual dashboards and guided handoffs tailored for {x.toLowerCase()}.</p><a href="/demo">Visit tower</a></Card>)}</section></>}
