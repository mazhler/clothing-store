// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';

function App() {
  const clothingItems = [
    { id: 1, name: 'Camiseta', price: 20 },
    { id: 2, name: 'Pantalones', price: 30 },
    { id: 3, name: 'Chaqueta', price: 50 },
    { id: 4, name: 'Zapatos', price: 40 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Listado de Prendas de Vestir</h1>
        <ul>
          {clothingItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
