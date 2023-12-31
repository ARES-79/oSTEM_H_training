import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './pages/home/home';
import PostPage from './pages/postPage/postPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PostPage/>
    </div>
  );
}

export default App;
