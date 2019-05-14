import App from './App';
import * as React from 'react';
import { Provider as MobxProvider} from 'mobx-react';
import store from './store';

const AppContainer = () => (
    <MobxProvider {...store}>
        <App />
    </MobxProvider>
);

export default AppContainer;