import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <div style={{ width: "200px", padding: "20px", background: "#eee" }}>
      <h3>Learning</h3>

      <ul>
        <li><Link to="/day-1-js">Day 1 JS</Link></li>
        <li><Link to="/day-2-react">Day 2 React</Link></li>
        <li><Link to="/day-3-hooks">Day 3 Hooks</Link></li>
        <li><Link to="/day-4-ts">Day 4 TypeScript</Link></li>
        <li><Link to="/day-5-redux">Day 5 Redux</Link></li>
        <li><Link to="/day-6-react-query">Day 6 React Query</Link></li>
        <li><Link to="/day-7-ui">Day 7 UI</Link></li>
      </ul>
    </div>
  );
}
