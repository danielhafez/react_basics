import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  setChecked(event) {
    this.setState({ checked: event });
  }

  render() {
    return (
      <div className='alive'>
        <input
          type='Checkbox'
          onClick={(event) => {
            this.setChecked(event.target.checked);
          }}
        ></input>
        <label>Check it</label>
        {this.state.checked && this.props.children}
      </div>
    );
  }
}

export default Checkbox;
