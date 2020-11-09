import { GlobalStyles } from './App.styles';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <img
        alt='GitHub package.json version (branch)'
        src='https://img.shields.io/github/package-json/v/tomeczekstecc/martynatv/main'
      ></img>
    </>
  );
}

export default App;
