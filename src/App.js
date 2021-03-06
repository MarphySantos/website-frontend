import "./App.css";
import { Switch, Route } from "react-router-dom";
import { FrontPage } from "./FrontPage";
import { Category } from "./Category";
import { Book } from "./Book";
import MOCK_DATA from "./MOCK_DATA.json";
import AboutUs from "./components/AboutUs";
function App() {
  const routes = [
    { path: "/category/:name", as: Category },
    {
      path: "/book/:id",
      as: (props) => {
        const id = props.location.state.id;
        return Book(MOCK_DATA[id - 1]);
      },
    },
    { path: "/", as: FrontPage },
    { path: "/about-us", as: AboutUs },
  ];

  return (
    <Switch>
      {routes.map(({ path, as }) => {
        return (
          <Route key={path} path={path} exact>
            {as}
          </Route>
        );
      })}
    </Switch>
  );
}

export default App;
