import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div>
        <h2>Sorry</h2>
        <p>The Page was not Found.!</p>
        <Link to="/">Back to the Homepage...</Link>
      </div>  
    );
}
 
export default NotFound;