import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navigation/MainNav';
import Movie from './components/pages/Movies/Movie';
import Search from './components/pages/Search/Search';
import Series from './components/pages/Series/Series';
import Trending from "./components/pages/Trending/Trending"

const App = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movie} />
            <Route path="/search" component={Search} />
            <Route path="/series" component={Series} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
