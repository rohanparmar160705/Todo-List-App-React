// Importing PropTypes to validate the props passed to the component
import PropTypes from "prop-types";

// TodoItems component definition
export default function TodoItems({ items }) {
  // Logging the 'items' prop to the console for debugging
  console.log(items);

  // Rendering the 'items' prop inside an h3 tag with class 'Items'
  return <h3 className="Items">{items}</h3>;
}

// PropTypes to validate that 'items' is a required string
TodoItems.propTypes = {
  items: PropTypes.string.isRequired, // 'items' should be a string and is required
};
