import angular from 'angular'
import { combineReducers } from 'redux'
import ngRedux from 'ng-redux'
import * as reducers from './reducers'
import * as actions from './actions'
import MyProviderComponent from './react-component.jsx'
import { react2angular } from 'react2angular'



export default angular.module('app', [
  ngRedux
])
  .config(($ngReduxProvider) => {
    let reducer = combineReducers(reducers)
    $ngReduxProvider.createStoreWith(reducer)
  })
  .controller('MyController', class CounterController {
    constructor($ngRedux, $scope) {
      /* ngRedux will merge the requested state's slice and actions onto this, 
      you don't need to redefine them in your controller */
      
      let unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
      // $scope.$on('$destroy', unsubscribe);
  
  
      $scope.changeName = function() {
        $ngRedux.dispatch(actions.addName('new name'))
      }
    }
  
    // Which part of the Redux global state does our component want to receive?
    mapStateToThis(state) {
      return {
        name: state.names.name
      };
    }
  })
  .component('myProviderComponent', react2angular(MyProviderComponent, ['fooBar', 'baz'], ['$ngRedux']))