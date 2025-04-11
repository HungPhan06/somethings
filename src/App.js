import './App.css';
import { useRoutes } from "react-router-dom";
import UserRoute from "./routes/index";
import AnimatedDash from "./components/animations/AnimatedDash";

function App() {
  let routing = useRoutes(UserRoute.routes());
  return (
    <div className="app-container" >
      <div className="animated-background">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <AnimatedDash />
      </div>
      {routing}
    </div>
  );
}

export default App;
