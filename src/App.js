import { Outlet, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Wrap } from "./styles/basic";
import NotFound from "./pages/NotFound";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import PastLog from "./pages/mylog/PastLog";
import UpcomingLog from "./pages/mylog/UpcomingLog";
import ViewLog from "./pages/culturelog/ViewLog";
import EditLog from "./pages/culturelog/EditLog";
import WriteLog from "./pages/culturelog/WriteLog";
import Login from "./pages/Login";
import About from "./pages/About";
import { useState } from "react";
function App() {
  const [iuser, setIuser] = useState(1);
  const [password, setPassword] = useState("1111");
  return (
    <Wrap maxw="393">
      <Routes>
        {/* 인트로 */}
        <Route path="/intro" element={<Intro></Intro>}></Route>
        {/* 메인 */}
        <Route path="/" element={<Main></Main>}></Route>
        {/* 로그인 */}
        <Route
          path="/login"
          element={<Login iuser={iuser} password={password}></Login>}
        ></Route>
        {/* 어바웃 */}
        <Route path="/about" element={<About></About>}></Route>
        {/* 컬쳐로그 기록 */}
        <Route path="/culturelog" element={<Outlet></Outlet>}>
          <Route index element={<Main></Main>} />
          <Route
            path="view/:imedia"
            element={<ViewLog iuser={iuser}></ViewLog>}
          />
          <Route
            path="write"
            element={<WriteLog iuser={iuser}></WriteLog>}
          />
          <Route
            path="edit"
            element={<EditLog iuser={iuser}></EditLog>}
          />
        </Route>
        {/* 마이로그 */}
        <Route path="/mylog" element={<Outlet></Outlet>}>
          <Route index element={<UpcomingLog></UpcomingLog>} />
          <Route path="past" element={<PastLog></PastLog>} />
          <Route path="upcoming" element={<UpcomingLog></UpcomingLog>} />
        </Route>
        {/* 잘못된 경로 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Wrap>
  );
}

export default App;
