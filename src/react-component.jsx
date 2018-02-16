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

const MyComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)


export default class MyProviderComponent extends React.Component {
  render() {
    return <Provider store={this.props.$ngRedux}>
      <MyComponentContainer fooBar={this.props.fooBar} baz={this.props.baz}>
      </MyComponentContainer>
    </Provider>
  }
}