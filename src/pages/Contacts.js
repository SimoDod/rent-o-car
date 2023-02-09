import classes from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={classes.wrapper}>
      <h1>Contact Us</h1>
      <p>You can reach us at the following:</p>

      <h3>Address:</h3>
      <p>1234 Main Street, Anytown USA 12345</p>

      <h3>Phone:</h3>
      <p>(123) 456-7890</p>

      <h3>Email:</h3>
      <p>contact@example.com</p>
    </div>
  );
};

export default Contacts;
