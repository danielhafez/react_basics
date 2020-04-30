import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Type your message...',
    };
  }
  handleChange(event) {
    this.state.value = event.target.value;
  }
  submitMessage(event) {
    console.log(this.state.value);
  }
  render() {
    return (
      <div className='form-container'>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
          integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
          crossorigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.5.0/css/all.css'
          integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU'
          crossorigin='anonymous'
        ></link>
        <div className='col-md-2'></div>
        <div className='col-8'>
          <div className='input-group'>
            <textarea
              name=''
              className='form-control type_msg search search-input'
              placeholder='Type your message...'
              onChange={(event) => this.handleChange(event)}
            ></textarea>
            <div className='input-group-append'>
              <span className='input-group-text send_btn send-mine'>
                <i className='fas fa-location-arrow' onClick={(event) => this.submitMessage(event)}></i>
              </span>
            </div>
          </div>
        </div>
        <div className='col-md-2'></div>
      </div>
    );
  }
}

export default Form;
