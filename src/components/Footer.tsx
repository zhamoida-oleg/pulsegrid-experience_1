import { Link } from 'react-router-dom';
export default function Footer() {
  return <footer className="footer">
    <div><strong>PulseGrid</strong><p>Operational intelligence for teams that move complex systems.</p></div>
    <div className="footer-grid">
      <Link to="/product">Product</Link><Link to="/solutions">Solutions</Link><Link to="/integrations">Integrations</Link><Link to="/pricing">Pricing</Link>
      <Link to="/resources">Resources</Link><Link to="/security">Security</Link><Link to="/contact">Contact</Link><Link to="/demo">Demo</Link>
    </div>
  </footer>;
}
