import Theme from "vitepress/theme";
import { coloricon } from "../compoment/navbar/coloricon";
import "./style/var.css";

export default {
  ...Theme,
  enhanceApp({ app }) {
    //脚本
    coloricon();
    let url = "";
    setInterval(() => {
      if (url != window.location.href) {
        console.log("执行定时任务");
        coloricon();
        url = window.location.href;
      }
    }, 500);
  },
};
