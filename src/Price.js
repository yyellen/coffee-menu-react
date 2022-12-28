const Price = (props) => {
  const { regular } = props;
  const { upsize } = props;

  return (
    <div className="price-component">
      <span>{ regular }</span>
      <span>{ upsize }</span>
    </div>
  )
}

export default Price;