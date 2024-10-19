// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NewsContainer from './components/NewsContainer';

function App() {
  return (
    <div className='bg-gray-100 min-w-screen'>

      <NavBar />
      <NewsContainer pageSize="15"/>

    </div>
  );
}

export default App;
