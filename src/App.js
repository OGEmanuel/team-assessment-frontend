import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
// import NavBar from './components/Home/NavBar';
// import SideBar from './components/Home/SideBar';
import Dashboard from './pages/Dashboard';
import Assessments from './pages/Assessments';
import Notifications from './pages/Notifications';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signin />}/>
        <Route path="home" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
