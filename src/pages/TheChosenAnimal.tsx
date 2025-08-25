import { useParams } from "react-router-dom";

export const TheChosenAnimal = () => {
    const { id } = useParams();
    return <>
        <p>Detta är sidan för ett valt djur med id {id}</p>
    </>
};

