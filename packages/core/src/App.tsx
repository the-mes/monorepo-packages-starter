import * as React from 'react';

import Global from './styles/Global';
import { TaskBar } from './components/TaskBar';

const App = () => {
  return (
    <>
      <Global />

      <TaskBar />
    </>
  );
};

export default App;
