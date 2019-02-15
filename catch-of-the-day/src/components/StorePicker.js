import React, { Fragment } from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => { //event object is full of info of what happened
    //1. Stop the form from submitting -- (bec this refreshes the page):
    event.preventDefault();
    //2. Get the text from that input
    const storeName = this.myInput.current.value;
    //3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`)
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input 
          type="text"
          ref={this.myInput} //will surface the input on the component so we can grab it
          required placeholder="Store Name" 
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

export default StorePicker;


// import React, { Fragment } from 'react';
// import { getFunName } from "../helpers";

// class StorePicker extends React.Component {
//   myInput = React.createRef();

//   goToStore = event => { //event object is full of info of what happened
//     //1. Stop the form from submitting -- (bec this refreshes the page):
//     event.preventDefault();
//     //2. Get the text from that input
//     const storeName = this.myInput.current.value;
//     //3. Change the page to /store/whatever-they-entered
//     this.props.history.push(`/store/${storeName}`)
//   };
//   render() {
//     return (
//       <form className="store-selector" onSubmit={this.goToStore}>
//         <h2>Please Enter A Store</h2>
//         <input 
//           type="text"
//           ref={this.myInput} //will surface the input on the component so we can grab it
//           required placeholder="Store Name" 
//           defaultValue={getFunName()}
//         />
//         <button type="submit">Visit Store -> </button>
//       </form>
//     )
//   }
// }

// export default StorePicker;