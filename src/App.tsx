import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./views/RootLayout";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
