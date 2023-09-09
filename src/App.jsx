import "./App.css";
import {
  HashRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
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

// 建立Post元件:父層
const Post = () => {
  return (
    <>
      這是Post父層
      {/* 包子層元件 */}
      <Outlet />
    </>
  );
};
// 建立PostID (是Post元件的子層)
const PostID = () => {
  let params = useParams();
  return <p>PostID: {params.postID}</p>;
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
          {/* 練習動態路由:帶入可變動的postID */}
          <NavLink to="/post/postID">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          {/* 回到首頁不用指定element?? */}
          <Route path="/register" element={<Register />}></Route>;
          <Route path="/login" element={<Login />}></Route>;
          <Route path="/todo" element={<Todo />}></Route>;
          {/* 父層包子層的路由設定 */}
          <Route path="/post" element={<Post />}>
            <Route path=":postID" element={<PostID />}></Route>
          </Route>
          ;
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
