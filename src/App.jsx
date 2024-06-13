
import AppRouter from "./router";
import StoreContext from "./store";
const App = () => {
  return (
    <StoreContext.Provider value={{color:"red"}}>
      <AppRouter/>
    </StoreContext.Provider>
  )
};

export default App;
