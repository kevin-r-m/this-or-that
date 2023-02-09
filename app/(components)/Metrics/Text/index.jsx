import { createElement } from "react";

function Text({ content, tag }) {
  return createElement(tag, {}, content);
}

export default Text;
