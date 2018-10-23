import React, { Component } from 'react'
// import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css'
import { fetchRestaurant } from './actions/restaurant'
import RestaurantDisplay from './components/RestaurantDisplay'

// Class-based approach

class App extends Component {
  // Kind of like onInit
  componentDidMount () {
    this.props.fetchRestaurant()
  }

  render () {
    return (
      <div className='App'>
        <RestaurantDisplay
          restaurant={this.props.restaurant}
          fetchRestaurant={this.props.fetchRestaurant}
        />
      </div>
    )
  }
}

// Kate's Preferred Less Verbose Functional Component Approach™

// Can't have state in these components, however, which means all state must go
// in Redux. This may or may not be the right call based on performance based
// on what I'm reading, but I feel like starting this way and only
// converting when necessary may be right?

// These components don't have lifecycle methods like componentDidMount. They
// act purely on props passed in. Now certainly those props can come from
// Redux.

// const App = props => (
//   <div className='App'>
//     <div>{props.restaurant}</div>
//     <button onClick={props.fetchRestaurant}>Get Random Restaurant</button>
//   </div>
// )

// Turns Redux state into React component props

const mapStateToProps = ({ restaurant }) => ({
  restaurant
})

// Turns Redux actions into React component props

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRestaurant }, dispatch)
}

// connect is the magic that lets a React component know about Redux.

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
