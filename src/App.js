import { Outlet, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { Wrap } from "./styles/basic";
import NotFound from "./pages/NotFound";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import PastLog from "./pages/mylog/PastLog";

function App() {
  return (
    <Wrap maxw="393">
      <Routes>
        {/* 인트로 */}
        <Route path="/intro" element={<Intro></Intro>}></Route>
        {/* 메인 */}
        <Route path="/" element={<Main></Main>}></Route>
        {/* 컬쳐로그 기록 */}

        {/* 마이로그 */}
        <Route path="/mylog" element={<Outlet></Outlet>}>
          <Route path="past" index element={<PastLog></PastLog>} />
          <Route path="upcoming" element={<></>} />
        </Route>
        {/* 잘못된 경로 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Wrap>
  );
}

export default App;
