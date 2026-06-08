export default function Scene({ mode = 'core' }: { mode?: 'core' | 'city' | 'network' | 'vault' | 'archive' }) {
  return <div className={`scene scene-${mode}`} aria-hidden="true">
    <div className="sphere sphere-a" />
    <div className="sphere sphere-b" />
    <div className="grid-floor" />
    <div className="floating-panel panel-a"><span />LIVE PULSE</div>
    <div className="floating-panel panel-b"><span />AI ROUTE</div>
    <div className="floating-panel panel-c"><span />SYNC 98%</div>
  </div>;
}
