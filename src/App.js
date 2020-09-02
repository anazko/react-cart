import React from 'react';
import { store } from "./redux";
import { Provider } from "react-redux";
import Catalog from "./pages/catalog"

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Catalog products={store.products}></Catalog>
      </div>
    </Provider>
  );
}

export default App;
