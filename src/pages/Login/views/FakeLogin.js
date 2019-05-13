import React, {Component} from 'react'
import {connect} from 'react-redux'

class FakeLogin extends Component {

  render() {
    return (
      <div>
        FakeLogin
        <div className="group-list"></div>
      </div>
    )
  }
}

export default connect(null, null)(FakeLogin)