import { Link } from "react-router-dom";
import { PUPPY_MAPPER } from "../constants";

const PuppiesList = ({ puppies, currentFilter, onClickAdopt, onClickRemove }) =>
  puppies.filter(PUPPY_MAPPER[currentFilter]).map((p) => (
    <section key={p.id}>
      <Link to={`/puppy/${p.id}`}>
        <h2>{p.name}</h2>
        <p>{p.breed}</p>
        <p>{`Adopted: ${p.isAdopted}`}</p>
      </Link>

      <button onClick={() => onClickAdopt(p)}>
        {p.isAdopted ? "Cancel Adoption" : "Adopt"}
      </button>

      <button onClick={() => onClickRemove(p.id)}>Remove</button>
    </section>
  ));

export default PuppiesList;
