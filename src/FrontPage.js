import React from "react";
import { SearchBar } from "./SearchBar";
import { CategoryScroller } from "./CategoriesScroller";


export const FrontPage = () => {
  return (
    <div className="avenir">
      <header></header>
      <SearchBar />
      <CategoryScroller
        categories={_.uniq(
          data
            .map(({ category }) => category)
            .filter((cat) => !cat.includes("|"))
        ).map((name) => ({ name }))}
      />
      <Footer />
    </div>
  );
};
