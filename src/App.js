import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './utils/datasource'
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
// import Firebase ,{FirebaseContext} from './services/Firebase'
import 'react-notifications-component/dist/theme.css'
import ReactNotification from 'react-notifications-component'
import firebase from 'firebase/app'
import {
  ReactReduxFirebaseProvider
} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

const browserHistory = createBrowserHistory();
const engine = new Styletron();
const rrfConfig = {
  userProfile: 'users',
   useFirestoreForProfile: true,// Firestore for Profile instead of Realtime DB
   enableClaims: true // Get custom claims along with the profile
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const App = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
      <Provider store={store}>
      {/* <FirebaseContext.Provider value={new Firebase()}> */}
      <ReactReduxFirebaseProvider {...rrfProps}>
      <Router history={browserHistory}>
      <ReactNotification />
        <Routes />
      </Router>
      </ReactReduxFirebaseProvider>
      {/* </FirebaseContext.Provider> */}
    </Provider>
      </BaseProvider>
    </StyletronProvider>
    
  );
}

export default App;
