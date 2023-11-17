import { lazy, type Component } from 'solid-js';

import { Route, Router } from '@solidjs/router';

const Home = lazy(() => import('./routes/Home'));

const App: Component = () => {
  return (
    <Router>
      <Route path='/' component={Home} />
    </Router>
  );
};

export default App;
