import React, { useState, useEffect } from "react";
import { collection, query, getDocs } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import FeedbackCard from "../components/UI/FeedbackCard";
import FeedbackForm from "../components/UI/FeedbackForm";
import classes from "./Feedback.module.css";

const Feedback = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const q = query(collection(firestore, "feedBack"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setComments((prev) => {
        const newState = [...prev];
        newState.push(doc.data());
        return newState;
      });
    });
  };

  const postHandler = (data) => {
    const commentTemplate = (<FeedbackCard
        name={data.name}
        message={data.message}
        time={data.timeShot.time}
        date={data.timeShot.date}
      />)

    setPost((prev)=> [...prev, commentTemplate]);
  };

  return (
    <div className={classes.wrapper}>
      <h3>Your feedback is important for us</h3>
      {(post.length || comments.length) === 0 && (
        <p className={classes.p__no_comments}>
          No Comments. Be The First To Comment :)
        </p>
      )}
      {comments
        .sort((a, b) => a.timeStamp - b.timeStamp)
        .map((curr) => {
          return (
            <FeedbackCard
              name={curr.name}
              message={curr.message}
              time={curr.timeShot.time}
              date={curr.timeShot.date}
              key={curr.id}
            />
          );
        })}
      {post}
      <hr></hr>
      <FeedbackForm postHandler={postHandler} />
    </div>
  );
};

export default Feedback;
