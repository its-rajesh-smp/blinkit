import SideBar from "../Components/SideBar";
import MyRoutes from "../Routes/MyRoutes";
import "./App.css";

function App() {
  return (
    <div className=" flex">
      <SideBar />
      <div className=" w-[80%]">
        <MyRoutes />
      </div>
    </div>
  );
}

export default App;
