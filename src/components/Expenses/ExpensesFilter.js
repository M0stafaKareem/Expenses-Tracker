import "./ExpensesFilter.css";
function ExpensesFilter(props) {
  const selectedYearChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectedYearChangeHandler} value={props.selected}>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
}
export default ExpensesFilter;
