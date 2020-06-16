import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import TryIt from './components/TryIt/TryIt';
import Reminders from './components/Reminders/Reminders';
import Notification from './components/Notification/Notification';
import Sync from './components/Sync/Sync';
import Connected from './components/Connected/Connected';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <TryIt />
      <Reminders />
      <Notification />
      <Sync />
      <Connected />
      <Testimonials />
    </div>
  );
}

export default App;
