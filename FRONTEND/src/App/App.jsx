import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import MyRoutes from "../Routes/MyRoutes";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserAct } from "../Store/Actions/authActions";
import LoadingPage from "../Components/UI/LoadingPage";
import { setMainCategoryAct } from "../Store/Actions/mainCategoryAction";
import AlertContainer from "../Components/UI/AlertContainer";

function App() {
  const { loginComponent } = useSelector((state) => state.headerSlice);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAct(setLoader));
    dispatch(setMainCategoryAct());
  }, []);

  return !loader ? (
    <>
      <AlertContainer />
      <div className=" pb-40 md:pb-0">
        <Header />
        {loginComponent && <Login />}
        <MyRoutes />
      </div>
    </>
  ) : (
    <LoadingPage className="h-screen w-screen" />
  );
}

export default App;
