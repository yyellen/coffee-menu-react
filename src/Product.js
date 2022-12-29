// import Name from './Name';
// import Iced from './Iced'
// import Price from './Price';

const Product = (props) => {
  const { name } = props;
  const { enname } = props;
  const { iced } = props;
  const { regular } = props;
  const { upsize } = props;


  return (
    <div className="product-component">
      <div>
        <h2>{ name }</h2>
        <h3>{ enname }</h3>
      </div>
      <div>
        <p>{ iced }</p>
      </div>
      <div>
        <b className="text-center">{ regular }</b>
      </div>
      <div>
        <b className="text-center">{ upsize }</b>
      </div>
      {/* <Name />
      <Iced />
      <Price /> */}
    </div>
    
  );
};

export default Product;