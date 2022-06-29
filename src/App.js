
import './App.css';
import Button from "@mui/material/Button";
import { ResponsiveAppBar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
      <ResponsiveAppBar> </ResponsiveAppBar>
    </div>
  );
}

export default App;
