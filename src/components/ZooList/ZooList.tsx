import { Link } from "react-router-dom";
import { handleBrokenImage } from "../../helpers/image";
import type { Animal } from "../../models/Animal";
import {
  getFeedingStatusText,
  getOverviewFeedingStatus,
} from "../../helpers/feeding";
import "./ZooList.scss";

type ZooListProps = {
  animals: Animal[];
};

export const ZooList = ({ animals }: ZooListProps) => {
  if (animals.length === 0) return <p>Laddar djur…</p>;

  return (
    <main className="page-content">
      <header className="zoo-content">
        <h1>Djuren</h1>
        <p>
          Här får du en överblick över alla våra djur. Du kan se om de är mätta,
          hungriga eller i desperat behov av mat. <br />
          Hjälp till att mata dem genom att klicka på de hungriga eller
          desperata djuren. Varje gång du matar ett djur blir det mätt och
          belåtet.
        </p>
      </header>
      <section className="zoo-flex">
        {animals.map((animal) => {
          const status = getOverviewFeedingStatus(animal.lastFed);
          return (
            <article key={animal.id} className={`theZooPageAnimal ${status}`}>
              <Link to={`/zoo/${animal.id}`} className="link">
                <h2>{animal.name}</h2>
                <img
                  src={animal.imageUrl}
                  alt={animal.name}
                  onError={handleBrokenImage}
                />
              </Link>
              <p>{animal.shortDescription}</p>
              <p>
                {getFeedingStatusText(status, animal.name)}
                <br />
                Senast {animal.name} fick mat var{" "}
                {new Date(animal.lastFed).toLocaleString()}
              </p>
            </article>
          );
        })}
      </section>
    </main>
  );
};
