// Import module yang dibuthkan
import ReactDOM from "react-dom";

// Function untuk merender dom berdasarkan id
const renderById = (element, id) => {
  ReactDOM.render(element, document.getElementById(id));
};

// Export function yang akan dibutuhkan oleh file lain
export default renderById;
