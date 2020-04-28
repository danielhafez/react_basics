import React from 'react';

class AlertAlive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'I am alive',
    };
  }

  componentDidMount() {
    alert(this.state.message);
  }

  render() {
    return <div className='alive'>{this.props.message}</div>;
  }
}

export default AlertAlive;
