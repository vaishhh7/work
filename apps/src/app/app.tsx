import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@org/libs";
import { Day1JS } from "../pages/day-1-js/day1js";
import { Day2React } from "../pages/day-2-react/day2react";


export function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/day-1-js" element={<Day1JS />} />
            <Route path="/day-2-react" element={<Day2React />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
