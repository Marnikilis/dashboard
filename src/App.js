import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./components/DashboardPage/DashboardPage";

function App() {
  return (
    <div className={'App'}>
      <div className={'mainContainer'}>
        <Navbar/>
        <DashboardPage/>

      </div>

    </div>
  );
}

export default App;
