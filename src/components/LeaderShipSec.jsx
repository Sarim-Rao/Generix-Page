import React from "react";
import user1 from "../assets/user-1.jpg";
import user2 from "../assets/user-2.jpg";
import user3 from "../assets/user-3.jpg";
import user4 from "../assets/user-4.jpg";

const LeaderShipSec = () => {
  // List 1
  let List1 = [
    {
      image: user1,
      heading:"Gary Hoffman",
      desination: "Co-founder",
    },
    {
      image: user2,
      heading: "Maurice Sanders",
      desination: "Co-founder / CTO",
    },
    {
      image: user3,
      heading: "Trawis Jaclson",
      desination: "Product Owner",
    },
    {
      image: user4,
      heading: "Darrell Cross",
      desination: "Co-founder / Ceo",
    },
  ];

  //  List 2

  let List2 = [
    {
      image: user3,
      heading: "Gary Hoffman",
      desination: "Co-founder / Ceo",
    },
    {
      image: user2,
      heading: "Maurice Sanders",
      desination: "Co-founder / CTO",
    },
    {
      image: user4,
      heading: "Trawis Jaclson",
      desination: "Product Owner",
    },
    {
      image: user1,
      heading: "Darrell Cross",
      desination: "Co-founder / Ceo",
    },
  ];

  return (
    <>
      <div className="leder-Ship">
        <h6>LEADERSHIP</h6>

        <h3>Meet The Team!</h3>

        <div className="container">
          <div className="image-box">
            {List1.map((value) => (
              <div className="user">
                <img src={value.image} alt="" />
                <h5>{value.heading}</h5>
                <small>{value.desination}</small>
              </div>
            ))}

            {/* ...............  */}
          </div>
          <div className="image-box">
            {List2.map((value) => (
              <div className="user">
                <img src={value.image} alt="" />
                <h5>{value.heading}</h5>
                <small>{value.desination}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderShipSec;
