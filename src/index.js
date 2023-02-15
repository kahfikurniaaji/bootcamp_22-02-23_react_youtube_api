// Import module yang dibuthkan
// import React from "react";
import {title, navbar} from "./component/navbar"
import element from "./component/content/element"
import renderById from "./util/react-render";

// Merender html yang diperlukan
renderById([title, navbar], "nav")
renderById(element, "root")
