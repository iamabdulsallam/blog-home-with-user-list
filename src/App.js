import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import HomePage from "./screens/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./screens/NoMatch/NoMatch";
import MyArticles from "./screens/MyArticles";
import Users from "./screens/Users/Users";

function App() {
  return (
    <>
      <Box className="app-container">
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/my-articles" element={<MyArticles />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
