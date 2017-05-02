import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TopNavComponent from './../components/TopNavComponent.jsx'

class TopNavContainer extends Component {
  constructor(props) {
    super(props);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    routerData: ownProps.routerData
  }
}


export default connect(mapStateToProps)(TopNavComponent);