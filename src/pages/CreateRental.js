import React, { Fragment, useState } from "react";
import classes from "./CreateRental.module.css";
import handleSubmit from "../handles/handleSubmit";
import ErrorModal from "../components/UI/ErrorModal";

const CreateRental = () => {
  const [showModal, setshowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState({
    backgroundColor: "#18BD5B",
  });

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

  const closeErrorModal = () => setshowModal(false);

  const formHandler = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.id = Math.random().toString().substring(2);
    
    if (
      !data.city ||
      !data.photo ||
      !data.country ||
      !data.email ||
      !data.fName ||
      !data.pNumber ||
      !data.vehicleModel ||
      !data.pricePday ||
      !data.sAdress ||
      !data.vehicleType
    ) {
      modalHandler("Emty Fields", "Please complete all fields.");
      return;
    }

    if (data.vehicleModel.length > 20) {
      modalHandler(
        "Error",
        "Maximum length of Vehicle Brand and Model is 20 symbols."
      );
      return;
    }

    if (isNaN(Number(data.pricePday))) {
      modalHandler(
        "Error",
        "Rental Price per Day field must contain only numbers."
      );
      return;
    }
    try {
      handleSubmit(data, "rentOCarData");
      buttonStateHandler();
      e.target.reset();
      modalHandler("Success!", "Your rental is added!");
    } catch (error) {
      window.alert(error);
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
      <div className={classes.div__container}>
        <h2>Vehicle Rental Form</h2>
        <hr />
        <form onSubmit={formHandler} className={classes.form__main}>
          <div className={classes.div__grid}>
            <div>
              <label htmlFor="fName">Full Name</label>
              <input name="fName"></input>
            </div>
            <div>
              <label htmlFor="pNumber">Phone Number</label>
              <input name="pNumber"></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input name="email"></input>
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input name="country"></input>
            </div>
            <div>
              <label htmlFor="sAdress">Street Adress</label>
              <input name="sAdress"></input>
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input name="city"></input>
            </div>
          </div>
          <p className={classes.p__vehicle_type}>
            What is the vehicle type that you would like to rent?
          </p>
          <div className={classes.div__veihcle_type}>
            <div>
              <input type="radio" name="vehicleType" value="Sedan"></input>
              <label>Sedan</label>
            </div>
            <div>
              <input type="radio" name="vehicleType" value="Sports Car"></input>
              <label>Sports Car</label>
            </div>
            <div>
              <input type="radio" name="vehicleType" value="Coupe"></input>
              <label>Coupe</label>
            </div>
            <div>
              <input type="radio" name="vehicleType" value="Hatchback"></input>
              <label>Hatchback</label>
            </div>
            <div>
              <input type="radio" name="vehicleType" value="Minivan"></input>
              <label>Minivan</label>
            </div>
            <div>
              <input type="radio" name="vehicleType" value="Truck"></input>
              <label>Truck</label>
            </div>
            <div>
              <input type="radio" name="vehicleType" value="Bus"></input>
              <label>Bus</label>
            </div>
            <div>
              <input type="radio" name="vehicleType" value="Other"></input>
              <label>Other</label>
            </div>
          </div>
          <div className={classes.div__price}>
            <label htmlFor="pricePday">Rental Price per Day</label>
            <input name="pricePday"></input>
          </div>
          <div className={classes.div__photo}>
            <label htmlFor="photo">
              Photo<span className={classes.span__url}>(url)</span>
            </label>
            <input name="photo"></input>
          </div>
          <div className={classes.div__brandNModel}>
            <label htmlFor="vehicleModel">Vehicle Brand And Model</label>
            <input name="vehicleModel"></input>
          </div>
          <div className={classes.div__year}>
            <label htmlFor="year">Year</label>
            <input name="year"></input>
          </div>
          <hr></hr>
          <div className={classes.div__button}>
            <button
              style={buttonColor}
              disabled={isDisabled}
              className={classes.form__button}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateRental;
