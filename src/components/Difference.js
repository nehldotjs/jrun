import React from "react";
import "./style/difference.css";

function Difference() {
  const differenceData = [
    {
      id: 1,
      core: "proffesionalism",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus repellat veniam ipsam +.",
    },
    {
      id: 2,
      core: "Vetted cleaner",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus repellat veniam ipsam +.",
    },
    {
      id: 3,
      core: "professionalism",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus repellat veniam ipsam +.",
    },
    {
      id: 4,
      core: "Vetted cleaner",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus repellat veniam ipsam +.",
    },
    {
      id: 5,
      core: "Vetted cleaner",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus repellat veniam ipsam +.",
    },
    {
      id: 6,
      core: "Vetted cleaner",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus repellat veniam ipsam +.",
    },
  ];

  return (
    <div className="difference" id="difference">
      <div className="differenceContainer">
        <div className="differenceHeader">
          <h3>What Makes Us Different</h3>
        </div>

        <div className="d-contextContainer">
          {differenceData.map((item) => {
            const { id, core, text } = item;
            return (
              <div className="d-cardWrapper" key={id}>
                <div className="d-context">
                  <div className="advantage">{core}</div>
                  <div className="d-pTag">{text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Difference;
