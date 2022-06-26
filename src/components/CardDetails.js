import classes from "./CardDetails.module.css";
const CardDetails = (props) => {
  return props.trigger ? (
    <button
      className={classes.Card}
      onClick={() => {
        props.onClose();
      }}
      // style={{ display: props.display }}
    >
      <li>
        {/* title */}
        <div className={classes.title}>{props.data.title}</div>
        {/* image */}
        <div>
          <img
            src={props.data.image}
            alt={props.data.alt}
            height="200px"
            width="200px"
          />
        </div>
        {/* number of Tracks */}
        <h2>Number of Tracks : {props.data.numberOfTracks}</h2>
        {/* description */}
        <h3>{props.data.description}</h3>
      </li>
    </button>
  ) : (
    ""
  );
};
export default CardDetails;
