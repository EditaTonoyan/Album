import Home from './components/pages/home/Home';
import Art from './components/pages/art/Art';
import Technology from './components/pages/technology/Technology';
import AboutUs from './components/aboutUs/AboutUs';
import './App.css';
import Menu1 from './components/Menu';
import { Route, Switch } from 'react-router-dom';
import Spirituality from './components/pages/spirituality/Spirituality';

const router = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/art",
    component: Art,
    exact: true
  },
  {
    path: "/technology",
    component: Technology,
    exact: true
  },
  {
    path: "/about",
    component: AboutUs,
    exact: true
  },
  {
    path: "/spirituality",
    component: Spirituality,
    exact: true
  },


]

function App() {
  const pages = router.map((page, index) => {
    return (
      <Route
        key={index}
        path={page.path}
        component={page.component}
        exact={page.exact}
      />
    )
  })
  return (
    <div className="container">
      <Menu1 />
      <Switch>
        {pages}
      </Switch>


    </div>
  );
}

export default App;
