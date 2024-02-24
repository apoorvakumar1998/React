  import React from 'react';
  import ReactDOM from 'react-dom/client';

  const heading = React.createElement('div', {
      className: 'parent'
    },
    React.createElement('div', {
      className: 'child',
    }, [
      React.createElement('h1', {}, 'I am a h1'), React.createElement('h2', {}, 'I am a h2')
    ]));
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(heading);