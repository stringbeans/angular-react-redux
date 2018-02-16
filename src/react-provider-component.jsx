import * as React from 'react'
import { Provider } from 'react-redux'

export default class ProviderComponent extends React.Component {
  render() {
    return <Provider store={this.props.$ngRedux}>
      { React.createElement(this.props.component, this.props.componentProps) }
    </Provider>
  }
}