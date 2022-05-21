import{Outlet} from 'react-router-dom';
import Search from './components/Search';
import Category from './components/Category'
// import './components/Style.css'
function App() {
  return (
    <div>
    <Search/>
    <Category/>
    {/* <Slider/> */}
    <Outlet/>

    </div>
  );
}

export default App;
