import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transparent: false,
      hidden: false,
    }
  }

  componentDidMount() {
    if (this.props.disappear) {
      this.setState({transparent: true})
      setTimeout(() => this.setState({hidden: true}), 200)
    }
  }

  render = () => (
    <div className={
      "logo-loader " +
      (this.state.transparent && "logo-loader--transparent") +
      " " +
      (this.state.hidden && "logo-loader--hidden")
    }>
      <div className="the-logo" />
    </div>
  )
}