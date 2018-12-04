
import React from 'react';
export default class Dd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(e) {
    //   const target = event.target;
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      const name = e.target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
            <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }