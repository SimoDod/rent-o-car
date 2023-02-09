import classes from './FeedbackCard.module.css'

const FeedbackCard = (props) => {
    return ( 
    <article className={classes.container}>
        <h4>
           {props.name}
           <span className={classes.span__date}>{props.time}, {props.date}</span>
        </h4>
        <hr></hr>
        <p>{props.message}</p>
    </article> );
}
 
export default FeedbackCard;