import "@/index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider, PostsStoreProvider } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <AuthProvider>
      <PostsStoreProvider>
        <App />
      </PostsStoreProvider>
    </AuthProvider>
  </BrowserRouter>
);
