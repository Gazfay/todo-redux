import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'
import TodosWrappContainer from './containers/TodosWrappContainer.jsx';
import AboutComponent from './components/AboutComponent.jsx';
import App from './components/App.jsx'
import configureStore from './store/configureStore'
import "./styles/styles.css";

console.log(AboutComponent, 'Console log');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const renderApp = App => {
  render(
  <Provider store={store}>
    <AppContainer>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={TodosWrappContainer}/>
            <Route path="/about" component={AboutComponent}/>
          </Route>
        </Router>
    </AppContainer>
  </Provider>,
    document.getElementById('root')
  );
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    console.log('Reload!');
    renderApp(App);
  });
}