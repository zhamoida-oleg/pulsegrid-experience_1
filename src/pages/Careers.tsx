import PageHero from '../components/PageHero';
import Card from '../components/Card';
export default function Careers(){return <><PageHero eyebrow="Careers" title="Build the operating layer for modern teams." text="A fictional hiring page with roles that fit the PulseGrid product story."/><section className="section grid-3">{['Product Designer','Frontend Engineer','Growth Marketer'].map(r=><Card key={r}><h3>{r}</h3><p>Remote-first role. Build cinematic, useful and technically sharp product experiences.</p><a href="/contact">Apply</a></Card>)}</section></>}
