import { QueryProvider } from "./provider/QueryProvider.tsx";
import { App } from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ReactDOM from "react-dom/client";
import "./index.module.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryProvider>
      <App />
    </QueryProvider>
  </Provider>
);
