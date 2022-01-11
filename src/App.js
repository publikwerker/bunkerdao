import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Roadmap from './components/Roadmap';
import FAQs from './components/FAQs';
import Join from './components/Join';
import Web3ConnectProvider from './providers/Web3ConnectProvider';

function App() {
  return (
    <Web3ConnectProvider>
      <div className="App">
        <Header />
        <Main />
        <Roadmap />
        <FAQs />
        <Join />
      </div>
    </Web3ConnectProvider>
  );
}

export default App;
