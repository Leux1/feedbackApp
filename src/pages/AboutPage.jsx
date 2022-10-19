import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
//Link => realize the transition between pages instantly

function AboutPage() {
  return (
    <Card className="about">
      <h1>About This Project</h1>
      <p>This is a react app to leave a feedback for a product or service</p>

      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
