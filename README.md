# angular-react-redux

## sharing state between angular 1.6x and react

this is a proof of concept to show that it is possible to share a redux store between both angular and react. this way, you can have redux and angular communicate with each other within the same ecosystem. 

by using ngRedux we can initialize a redux store within the parent angular app, and then use that store in child react components embedded within the angular app.

### my approach: 

1) import redux into the angular app using `ng-redux`
2) create a generic `reactProvider` component in angular. this component will simply wrap `<Provider></Provider>` around a react component of our choosing.
3) use the `reactProvider` angular component wherever we want to render a react component that has access to the store:

```
<react-provider component='this.myReactComponent' component-props='this.myReactComponentProps`></react-provider>
```

### under the hood:

we can inject `$ngRedux` into the `reactProvider` angular component. this allows us then to create a proper `<Provider store={store}></Provider>` tag.

i go a step further and allow you to pass in the react component you want to use with the `reactProvider`, so then it renders something like this:

```
<Provider store={this.props.$ngRedux}>
  <this.props.component ...this.props.componentProps>
  </this.props.component>
</Provider>
```

### benefits

now that we can share a redux store between both our angular components and react components, we can mix and match the technologies we want to use and have our redux store manage the shared state between the components. this allows the angular components to communicate with the react component, and vice versa! WINNING!
