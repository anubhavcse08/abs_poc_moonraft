import { useState } from "react";
import "./Tabs.css";

const tabs = ["This Quarter", "Next Quarter", "YTD", "1 Year"];

const Tabs = (props) => {
  const [checked, setChecked] = useState(tabs[0]);
  const getChecked = (e) => {
    props.getCurrentQuater(e.target.innerText);
    setChecked(e.target.innerText);
  };
  return (
    <div className="tabs">
      <ul className="flex items-stretch text-xs font-medium">
        {tabs.map((tab, i) => (
          <li key={i} className={"cursor-pointer tab " + (checked === tab ? "is-active" : "")} onClick={getChecked} >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
