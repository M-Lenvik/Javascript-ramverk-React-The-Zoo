import { useContext } from "react";
import "./TheZooo.scss";
import { Link } from "react-router-dom";
import { AnimalContext } from "../../context/AnimalContext";

const clearStorage = () => {
    localStorage.removeItem("animals");
    alert("LocalStorage tömd!");
  };


export const TheZoo = () => {
    const { animals } = useContext(AnimalContext);

  if (animals.length === 0) return <p>Laddar djur…</p>;

    return (
        <>
            <button onClick={clearStorage} style={{ marginLeft: "20px" }}>
                Töm localStorage
            </button>

            <h1>The Zoo</h1>
            {animals.map(a => (
                <div key={a.id} className="theZooPageAnimal">
                    <Link to={`/zoo/${a.id}`} className="link">
                        <h2>
                            {a.name}
                        </h2>
                        <img src={a.imageUrl} alt={a.name} width="150" />
                    </Link>
                </div>
            ))}
        </>
    );
};