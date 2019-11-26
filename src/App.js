// Imports: Dependencies
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

//Import Router
import Router from './Router';

// Imports: Redux Persist Persister
import {store, persistor} from './store';
// React Native: App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}
