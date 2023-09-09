import "./App.css";
import {
  HashRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

// 建立Logout元件，並在Logout元件裡面使用useNavigate()
// onClick的時候用箭頭函式執行navigate(帶入路徑)
const Logout = () => {
  let navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate("/login")}>
      logout
    </button>
  );
};
const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      {/* 在Todo頁面增加Logout元件 */}
      <Logout></Logout>
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          {/* 回到首頁不用指定element?? */}
          <Route path="/register" element={<Register />}></Route>;
          <Route path="/login" element={<Login />}></Route>;
          <Route path="/todo" element={<Todo />}></Route>;
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
