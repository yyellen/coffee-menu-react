const Product = (props) => {
  const { name } = props;
  const { enname } = props;

  return (
    <div className="name-component">
      <h2>{ name }</h2>
      <h3>{ enname } </h3>
    </div>
  );
};

export default Product;