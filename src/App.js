import './App.css';
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import ExportButton from './ExportButton'

function App() {
  return (
    <div className="App">
      <Header />
      <MemeGenerator />
      <ExportButton />
    </div>
  );
}

export default App;
