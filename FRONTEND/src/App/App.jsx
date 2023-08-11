import { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import MyRoutes from "../Routes/MyRoutes";
import "./App.css";
import HeaderContext from "../Context/HeaderContext";
import { useDispatch } from "react-redux";
import { getUserAct } from "../Store/Actions/authActions";
import LoadingPage from "../Components/UI/LoadingPage";

function App() {
  const { loginComponent } = useContext(HeaderContext);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAct(setLoader));
  }, []);

  return !loader ? (
    <div className=" pb-40 md:pb-0">
      <Header />
      {loginComponent && <Login />}
      <MyRoutes />
    </div>
  ) : (
    <LoadingPage />
  );
}

export default App;
