import React, {Component} from 'react'
import {connect} from 'react-redux'

@connect(state => ({name: 'tom'}))
class FakeLogin extends Component {
  constructor(props) {
    super(props)

    console.log(this.props)

    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="title">FakeLogin</div>
      </div>
    )
  }
}

export default FakeLogin