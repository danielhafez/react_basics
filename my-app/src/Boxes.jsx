import React from 'react';

class Box1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='Box1'>{this.props.children}</div>;
  }
}

export default Box1;
