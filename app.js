// var GroceryListItems = ['Cucumber', 'Milk', 'Chocolate']

// var GroceryList = (props) => {

//   var onListItemClick = (event) => {
//     console.log("how");
//   }

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.groceryListItems[0]}</li>
//       <li>{props.groceryListItems[1]}</li>
//       <li>{props.groceryListItems[2]}</li>
//     </ul>
//   );
// };

// var App = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryList groceryListItems={GroceryListItems}/> // Here we are creating an instance of the `groceryList` component
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));



class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.GroceryListItems = ['Cucumber', 'Milk', 'Chocolate'];
  }

  render() {
    return (
      <div>
        <h2>Grocery List</h2>
        <GroceryList GroceryListItems={this.GroceryListItems}/>
      </div>
    )
  };

}


class GroceryList extends React.Component {

  render() {
    return (
      <li>{this.props.grocery}</li>
    );
  }
}

var GroceryListLoad = (props) => (
  <ul>
    {props.grocery.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
)

ReactDOM.render(<Layout />, document.getElementById("app"));

