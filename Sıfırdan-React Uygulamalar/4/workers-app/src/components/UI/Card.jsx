const Card = (props) => {
  return (
    <div className={`bg-white  rounded-xl ${props.addClass} `}>
      {props.children}
    </div>
  );
};

export default Card;
