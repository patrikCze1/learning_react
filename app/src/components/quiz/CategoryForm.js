import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../actions/quizActions";
import Loading from '../Loading';

export default function CategoryForm({ categories, loading }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <select id="categorySelect" onChange={(e) => handleChange(e)}>
        <option value=''>Select category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
