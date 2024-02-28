import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeaturedFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  // showLightAndDarkMode: false,
  // showTicTacToe: true,
  // showRandomImageGenerator: true,
  // showAccordian: false,
  // showtreeView: true,

  const { loading, enabledFlags } = useContext(FeaturedFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomImageGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showtreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  function checkEnabledFlags(getCurrKey) {
    return enabledFlags[getCurrKey];
  }

  if (loading) return <h1>Loading!! Please Wait</h1>;

  return (
    <div>
      <h1>Featured Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
