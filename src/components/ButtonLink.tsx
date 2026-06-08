import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
export default function ButtonLink({ to, children, variant = 'primary' }: { to: string; children: ReactNode; variant?: 'primary' | 'secondary' }) {
  return <Link className={`btn ${variant}`} to={to}>{children}</Link>;
}
