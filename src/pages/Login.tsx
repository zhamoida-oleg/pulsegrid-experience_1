import { Link } from 'react-router-dom';
export default function Login(){return <section className="auth"><div className="auth-card"><p className="eyebrow">The Gateway</p><h1>Access PulseGrid</h1><input placeholder="Email"/><input placeholder="Password" type="password"/><Link className="btn primary" to="/demo">Login to Demo</Link><Link to="/signup">Create account</Link></div></section>}
