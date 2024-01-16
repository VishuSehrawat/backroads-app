import { pageLinks } from "../data";
import React from "react";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul class={parentClass}>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} class={itemClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
