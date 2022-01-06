import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Roadmap from './components/Roadmap';
import FAQs from './components/FAQs';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Roadmap />
      <FAQs />
    </div>
  );
}

export default App;
