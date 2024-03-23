import { useState } from "react";

export default function CustomTabs({ tabsContent, onChange }) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);


  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem) => (
          <div key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">

      </div>
    </div>
  );
}
