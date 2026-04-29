const CardComponent = (props) =>{
    const {data} = props;
    const {id, name, age, gender} = data;
    return (
    <div className="cardWrapper">
      <div className="cardParameter">{name}</div>
      <div className="cardParameter">{age}</div>
      <div className="cardParameter">{gender}</div>
    </div>
  );
};

export default CardComponent;