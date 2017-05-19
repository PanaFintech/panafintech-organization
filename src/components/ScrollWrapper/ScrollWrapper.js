import React from 'react'
import PropTypes from 'react'

export default class ScrollWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.propTypes= {
      onWindowScroll: PropTypes.func
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {

    // Call the passed-in prop
    if (this.props.onWindowScroll)
      this.props.onWindowScroll(event);
      
  }

  componentDidMount() {
    if (this.props.onWindowScroll)
      window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    if (this.props.onWindowScroll)
      window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      this.props.children
    )
  }

}
