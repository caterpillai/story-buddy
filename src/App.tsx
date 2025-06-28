import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateStory from "./pages/CreateStory";
import ReadStory from "./pages/ReadStory";

const baseName = import.meta.env.MODE === "production" ? "/story-buddy" : "/";

const App = () => (
  <BrowserRouter basename={baseName}>
    <nav>
      <Link to="/">Home</Link> | <Link to="/create">Create</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/create" element={<CreateStory />} />
      <Route path="/story/:id" element={<ReadStory />} />
    </Routes>
  </BrowserRouter>
);

export default App;
