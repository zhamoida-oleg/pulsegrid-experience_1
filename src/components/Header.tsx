import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Product', '/product'], ['Solutions', '/solutions'], ['Integrations', '/integrations'], ['Pricing', '/pricing'], ['Resources', '/resources'], ['Security', '/security'], ['Customers', '/customers'], ['Careers', '/careers']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-orb" />PulseGrid</Link>
      <nav className="desktop-nav">
        {links.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
      </nav>
      <div className="header-actions">
        <Link className="ghost-link" to="/login">Login</Link>
        <Link className="pill-link" to="/signup">Sign Up</Link>
      </div>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      {open && <div className="mobile-nav">
        {links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
      </div>}
    </header>
  );
}
