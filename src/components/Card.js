import CardDetails from "./CardDetails";
import classes from "./Card.module.css";
import { useState } from "react";
const Card = (props) => {
  const [showCardDetails, setShowCardDetails] = useState(false);

  function ShowCardHandler() {
    setShowCardDetails(true);
  }
  function HideCardHandler() {
    setShowCardDetails(false);
  }
  function clickManagement() {
    if (showCardDetails === false) {
      ShowCardHandler();
    } else {
      HideCardHandler();
    }
  }
  return (
    <div className={classes.Card}>
      {/* {showCardDetails && <CardDetails onClose={HideCardHandler} />} */}
      <button
        className={classes.button1}
        onClick={() => {
          clickManagement();
        }}
      >
        <li>
          {/* title */}
          <div className={classes.title}>{props.title}</div>
          {/* image */}
          <div>
            <img
              src={props.image}
              alt={props.alt}
              height="100px"
              width="100px"
            />
          </div>
          {/* number of Tracks */}
          <h2>Number of Tracks : {props.numberOfTracks}</h2>
          {/* description */}
          <h3>{props.miniDescription}</h3>
        </li>
      </button>

      <CardDetails
        trigger={showCardDetails}
        data={props}
        onClose={HideCardHandler}
      />
    </div>
  );
};
export default Card;
