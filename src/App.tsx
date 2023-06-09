import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Recipe from './pages/Recipe';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Search from './pages/Search';
import Bookmarks from './pages/Bookmarks';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/recipe/:id">
          <Recipe />
        </Route>

        <Route exact path="/category/:name">
          <Category />
        </Route>

        <Route exact path="/search">
          <Search />
        </Route>

        <Route exact path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route exact path="/">
          <Redirect to="/categories" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
