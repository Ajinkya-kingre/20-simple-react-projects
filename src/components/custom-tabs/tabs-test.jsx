import Tabs from "../custom-tabs/index";
import "./styles.css";

function Tab3Content() {
  return <div>Content for the Tab 3</div>;
}

export default function TabsTest() {
  function handleChange(currTabIndex) {
    console.log(currTabIndex);
  }

  const arr = [
    {
      label: "Tab1",
      content: "Content for Tab 1",
    },
    {
      label: "Tab2",
      content: "Content for Tab 2",
    },
    {
      label: "Tab3",
      content: <Tab3Content />,
    },
  ];

  return <Tabs tabsContent={arr} onChange={handleChange} />;
}
