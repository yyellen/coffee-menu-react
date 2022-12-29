const Category = (props) => {
  const { title } = props;
  const { entitle } = props;

  return (
    <div className="category-component">
      <div>
        <h1>{ title }</h1>
        <h1>{ entitle }</h1>
      </div>
      <div className="text-center">
        <h3 >中杯</h3>
        <h3>REGULAR</h3>
      </div>
      <div className="text-center">
        <h3>大杯</h3>
        <h3>UPSIZE</h3>
      </div>
    </div>
  )
};

export default Category;