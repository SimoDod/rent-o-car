import CarCard from "../components/UI/CarCard";
import classes from "./CarList.module.css";
import { collection, query, getDocs } from "@firebase/firestore";
import React, { useState, useEffect, Fragment } from "react";
import { firestore } from "../firebase_setup/firebase";

const CarList = () => {
  const [rentals, setRentals] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, "rentOCarData"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setRentals((prev) => {
        const newState = [...prev];
        newState.push(doc.data());
        return newState;
      });
    });
  };
  
  return (
    <Fragment>
      {rentals.length === 0 && (
        <p className={classes.p__no_available}>
          No Available Vehicles At The Moment
        </p>
      )}
      {rentals.length > 0 && (
        <div className={classes.wrapper}>
          {rentals.map((current) => {
            return (
              <CarCard
                key={current.id}
                city={current.city}
                photo={current.photo}
                country={current.country}
                email={current.email}
                fName={current.fName}
                pNumber={current.pNumber}
                vehicleModel={current.vehicleModel}
                pricePday={current.pricePday}
                sAdress={current.sAdress}
                vehicleType={current.vehicleType}
                year={current.year}
              />
            );
          })}
        </div>
      )}
    </Fragment>
  );
};

export default CarList;
