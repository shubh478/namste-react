/* <div class="parent">
  <div class="child">
    <h1>I'm an h1 tag</h1>
  </div>
</div> 
ReactElement(object) => HTML(Browser Understand)
*/
const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")]
  ),React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")]
  )]
);

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");

// console.log(heading) // this will return js object to you

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
