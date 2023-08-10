import { useContext } from "react";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import MyRoutes from "../Routes/MyRoutes";
import "./App.css";
import HeaderContext from "../Context/HeaderContext";

function App() {
  const { loginComponent } = useContext(HeaderContext);

  return (
    <div className=" pb-40 md:pb-0">
      <Header />
      {loginComponent && <Login />}
      <MyRoutes />
    </div>
  );
}

export default App;
