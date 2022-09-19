import StoreList from "./components/StoreList/StoreList";
import storesData, { generateStoreWithId } from "./data/stores";
import { useState } from 'react';

function App() {
  const [stores, setStores] = useState(storesData);

  const loadStores = () => {
    const nextId = stores[stores.length - 1].id + 1;
    setStores([...stores, generateStoreWithId(nextId)]);
  };
  
  return (
    <StoreList stores={stores} sale={true} loadData={loadStores} />
  );
}

export default App;