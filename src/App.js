import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import ContactMe from './components/pages/Home/ContactMe/ContactMe';
import Projects from './components/pages/Home/Projects/Projects';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Blogs from './components/pages/Blogs/Blogs';
import ProjectDetails from './components/pages/Home/Projects/ProjectDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route exact path="/home"><Home></Home></Route>
          <Route exact path="/contact"><ContactMe></ContactMe></Route>
          <Route exact path="/blogs"><Blogs></Blogs></Route>
          <Route exact path="/projects"><Projects></Projects></Route>
          <Route exact path="/projects/:id"><ProjectDetails></ProjectDetails></Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
