import React, { Component } from "react";

class ProductEditor extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    category: "",
  };

  onAddNewProductClick = () => {
    const { addNew } = this.props,
      { name, description, price, category } = this.state;
    addNew(name, description, price, category);
  };
  render() {
    return (
      <section className="edit">
        <div className="field">
          <label htmlFor="">Name :</label>
          <input
            type="text"
            onChange={(evt) => this.setState({ name: evt.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="">Description :</label>
          <input
            type="text"
            onChange={(evt) => this.setState({ description: evt.target.value })}
          />
        </div>
        <div className="field">
          <label htmlFor="">Price :</label>
          <input
            type="number"
            onChange={(evt) =>
              this.setState({ price: parseInt(evt.target.value) })
            }
          />
        </div>
        <div className="field">
          <label htmlFor="">Category</label>
          <select
            onChange={(evt) => this.setState({ category: evt.target.value })}
          >
            <option value=""></option>
            {this.props.categories.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <input
            type="button"
            value="Add Product"
            onClick={this.onAddNewProductClick}
          />
        </div>
      </section>
    );
  }
}

export default ProductEditor;
