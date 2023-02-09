import React, { Fragment, useState } from "react";
import handleSubmit from "../../handles/handleSubmit";
import ErrorModal from "./ErrorModal";
import classes from "./FeedbackForm.module.css";

const FeedbackForm = (props) => {
  const [showModal, setshowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState({
    backgroundColor: "#18BD5B",
  });

  const closeErrorModal = () => setshowModal(false);

  const modalHandler = (title, message) => {
    setModalMessage(message);
    setModalTitle(title);
    setshowModal(true);
  };

  const buttonStateHandler = () => {
    setIsDisabled(true);
    setButtonColor({ backgroundColor: "darkgray" });

    setTimeout(() => {
      setIsDisabled(false);
      setButtonColor({ backgroundColor: "#18BD5B" });
    }, 5000);
  };

  const commentHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    
    if(!data.message || !data.name) {
      modalHandler("Empty Fields", "Fields can't be empty");
      return;
    }

    if(data.message.length < 3 || data.name.length < 3) {
      modalHandler("Error", "Message and Name length must be atleast 3 symbols.");
      return;
    };

    data.id = Math.random().toString().substring(2);
    const time = new Date().toISOString().split("T");
    data.timeShot = { date: time[0], time: time[1].slice(0, 5) };
    data.timeStamp = new Date().getTime();

    try {
      props.postHandler(data);
      handleSubmit(data, "feedBack");
      buttonStateHandler();
      e.target.reset();
    } catch (error) {
      window.alert(error)
    }
  };

  return (
    <Fragment>
      {showModal && (
        <ErrorModal
          title={modalTitle}
          message={modalMessage}
          clickHandler={closeErrorModal}
        />
      )}
      <form onSubmit={commentHandler} className={classes.feedback__form}>
      <input name="name" placeholder="Name"></input>
      <input
        name="message"
        className={classes.feedback__form_message}
        placeholder="Message"
      ></input>
      <button
        style={buttonColor}
        disabled={isDisabled}
      >
        Send
      </button>
    </form>
    </Fragment>
    
  );
};

export default FeedbackForm;
