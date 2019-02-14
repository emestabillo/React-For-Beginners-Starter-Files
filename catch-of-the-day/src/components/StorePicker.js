import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    // 1.  stop the form from submitting
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;

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