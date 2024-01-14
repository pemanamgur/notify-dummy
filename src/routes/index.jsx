import { Link } from "react-router-dom";
 
export default function IndexPage() {
  return (
    <div>
      {/* <h1>This is the index page</h1> */}
      <div >
        <ul className="flex justify-center gap-3 items-center">
          <li><Link to='/'>Index</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}