import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function App() {
  const posts = [
    {
      id: 1,
      title: "My first Post",
      date: "4-7-2020",
      content: "This is my first post!",
    },
    {
      id: 2,
      title: "Checking In",
      date: "4-8-2020",
      content: "Yesterday was a good day, looking forward to another!",
    },
    {
      id: 3,
      title: "Vacation Time",
      date: "4-9-2020",
      content: "Finally time to head to Denver for our trip",
    },
  ];

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/posts">
            <Posts posts={posts} />
          </Route>
          <Route path="/friends">
            <Friends names={["Tom", "Sally", "Samantha"]} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function Friends(props) {
  const { names } = props;
  console.log(names);
  return (
    <div>
      <ul>
        {names.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

function Posts() {
  return <h2>Posts</h2>;
}
