import React from "react";

function StructureStyle1({
  surgeryName,
  surgerySummary,
  surgeryProcess,
  surgeryPluses,
  recommendation,
}) {
  return (
    <section className="surgeryContainer">
      <div className="surgeryName">
        <h1>{surgeryName}</h1>
      </div>
      <div className="surgerySummary">
        <h5>Summary</h5>
        <p>{surgerySummary}</p>
      </div>
      <div className="surgeryProcess">
        {surgeryProcess.map((images) => (
          <img
            src={`/surgery${images.src}`}
            alt={`${surgeryName}Process${images.id}`}
          />
        ))}
      </div>
      <div className="surgeryPluses">
        <h5>Advantages</h5>
        <ul>
          {surgeryPluses.map((sp, index) => (
            <li key={index} className="pluses_plus">
              {sp}
            </li>
          ))}
        </ul>
      </div>
      <div className="recommendation">
        <h5>Recommendation</h5>
        {recommendation.map((r, index) => (
          <li key={index} className="recommendation_recommend">
            {r}
          </li>
        ))}
      </div>
    </section>
  );
}

export default StructureStyle1;
