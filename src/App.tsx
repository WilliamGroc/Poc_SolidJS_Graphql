import { lazy, type Component } from 'solid-js';

import { A, Route, Routes } from '@solidjs/router';

const Home = lazy(() => import('./routes/Home'));
const Login = lazy(() => import('./routes/Login'));

const App: Component = () => {
  return (
    <>
      <nav>
        <A href="/">Home</A>
        <A href="/login">Login</A>
      </nav>
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Routes>
    </>
  );
};

export default App;
