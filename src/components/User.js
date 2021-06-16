import "./Components.css";

function User({ match, state }) {
  const newArr = state.array.filter(
    (user) => user.name.first == match.params.name
  );
  return (
    <div className="user">
      <>
        <img
          alt="medium"
          style={{ width: "60%" }}
          src={`${newArr[0].picture.large}`}
        />

        <h2>
          Name: {newArr[0].name.first}, Last: {newArr[0].name.last}
        </h2>
        <h2>
          Location: {newArr[0].location.street.number}{" "}
          {newArr[0].location.street.name}
        </h2>
        <h2>Age: {newArr[0].dob.age}</h2>
        <h2>Email: {newArr[0].email}</h2>
        <h2>Phone: {newArr[0].phone}</h2>
      </>
    </div>
  );
}

export default User;
