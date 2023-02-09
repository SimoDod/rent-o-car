import classes from "./CarCard.module.css";

const CarCard = (props) => {
  return (
    <article className={classes.container}>
      <div className={classes.div__img}>
        <img src={props.photo} alt=""></img>
      </div>
      <div className={classes.main__vehicle_info}>
        <h4>{props.vehicleModel}</h4>
        <ul>
          <li>
            <p>
              <span className={classes.span__info}>Car Type: </span>
              {props.vehicleType}
            </p>
          </li>
          <li>
            <p>
              <span className={classes.span__info}>Year: </span>
              {props.year}
            </p>
          </li>
          <li>
            <p>
              <span className={classes.span__info}>Cost Per Day: </span>
              {props.pricePday} $
            </p>
          </li>
          <li>
            <p>
              <span className={classes.span__info}>Country: </span>
              {props.country}
            </p>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <p className={classes.p__info}>
              <span className={classes.span__info}>Contacts: </span>
              <span className={classes.span_scroll_down}>
                (scroll down for more info)
              </span>
            </p>
          </li>
          <li>
            <p>{props.fName}</p>
          </li>
          <li>
            <p>{props.sAdress}</p>
          </li>
          <li>
            <p>{props.city}</p>
          </li>
          <li>
            <p>{props.pNumber}</p>
          </li>
          <li>
            <p>{props.email}</p>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CarCard;
