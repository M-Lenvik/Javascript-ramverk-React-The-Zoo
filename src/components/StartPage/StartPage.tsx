import "./StartPage.scss";
export const StartPage = () => {
  return (
    <>
      <div className="page-content">
        <div className="homeBackground"></div>
        <div className="hero">
          <h1>Välkommen till The Zoo</h1>
          <p>Hos The Zoo är varje djur unikt.</p>
          <p>
            Här får du en unik chans att komma närmare våra fantastiska invånare. Upptäck detaljer om deras art, födelseår och personlighet. 
            <p>
            Bäst av allt, du kan aktivt engagera dig genom att se när de senast fick mat och, när det är dags, mata dem! <br/>
            Varje djur har sin egen rytm, så håll koll på deras matstatus för att se om de är mätta, hungriga eller rentav desperata.
            </p>
            <p>
            Ta en rundtur, bli en del av djurskötarlaget och se till att våra vänner trivs och är belåtna!
            </p>
          </p>
        </div>
      </div>
    </>
  );
};
