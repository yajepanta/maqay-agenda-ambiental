import "./CategoryDescription.css";
import descriptionCategory from "../../../utils/data/textDescriptionByCategory";

const CategoryDescription = ({ category }) => {
  console.log(category);
  return descriptionCategory[category];
};

export default CategoryDescription;
