import { Route, BrowserRouter, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import NavBar from "./components/NavBar";
import NewPost from "./components/NewPost";
import PostDetails from "./components/PostDetails";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <DashBoard />
                </Route>

                <Route path="/newPost">
                    <NewPost />
                </Route>

                <Route path="/postDetails/:id">
                    <PostDetails />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
