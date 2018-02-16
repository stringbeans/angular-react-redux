import * as React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider,
  connect
} from 'react-redux'
import * as actions from './actions'

class MyComponent extends React.Component {
  render() {
    return <div>
      <p>FooBar: {this.props.fooBar}</p>
      <p>Baz: {this.props.baz}</p>
      <button onClick={() => this.props.changeName()}>react change name</button>
    </div>
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps called in react component', state)
  return {
    fooBar: state.names.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeName: () => {
      dispatch(actions.addName('john'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)