
import { Provider } from "react-redux"
import Body from "./Components/Body Component/Body";
import appStore from "./Components/utils/Store/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
