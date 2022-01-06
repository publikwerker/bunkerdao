import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Roadmap from './components/Roadmap';
import FAQs from './components/FAQs';
import Join from './components/Join';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Roadmap />
      <FAQs />
      <Join />
    </div>
  );
}

export default App;
