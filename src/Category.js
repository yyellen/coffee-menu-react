const Category = (props) => {
  const { title } = props;
  const { entitle } = props;

  return (
    <div className="category-component">
      <div>
        <h1>{ title }</h1>
        <h1>{ entitle }</h1>
      </div>
      <div className="row">
      <div>
        <h2>中杯</h2>
        <h2>REGULAR</h2>
      </div>
      <div>
        <h2>大杯</h2>
        <h2>UPSIZE</h2>
      </div>
      </div>
    </div>
  )
};

export default Category;