import PageHero from '../components/PageHero';
import { integrations } from '../data/site';
export default function Integrations(){return <><PageHero eyebrow="Chapter 03 — The Network" title="A galaxy of connected systems." text="Integrations orbit the product core and turn scattered tools into one operational map." scene="network"/><section className="section integration-orbit">{integrations.map((x,i)=><a href="/demo" key={x} style={{animationDelay:`${i*.08}s`}}>{x}</a>)}</section></>}
