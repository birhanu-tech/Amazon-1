import React from "react";
import { categoryInfos } from "./Catagoryfullinfo"; // Fixed typo in import statement
import CategoryCard from "./CatagoryCard"; // Fixed typo in import statement
import  classes from "./catagory.module.css"

function Category() {
  return (
    <section className={classes.Category_container}>
      {categoryInfos.map((info, index) => (
        <CategoryCard key={index} data={info} /> // Added key prop for list items
      ))}
    </section>
  );
}

export default Category;
