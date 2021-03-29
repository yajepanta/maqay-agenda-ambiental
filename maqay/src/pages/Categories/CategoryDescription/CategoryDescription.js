import "./CategoryDescription.css";
import descriptionCategory from "../../../utils/data/textDescriptionByCategory";

const CategoryDescription = ({ category }) => {
  return descriptionCategory[category];
};

export default CategoryDescription;
