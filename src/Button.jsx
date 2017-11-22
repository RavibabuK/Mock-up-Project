import React, {Component} from 'react';
import 'semantic-ui-css/semantic.css'
import {Icon} from 'semantic-ui-react'

class Button extends Component {
  render() {
    return (
        <div>     
        <button className="ui primary button">
          Save
        </button>
        <button className="ui button">
          Discard
        </button>
        <Button size='small' color='green'>
  <Icon name='download' />
  Download
</Button>
     </div>
    )
  }
}

export default Button;
