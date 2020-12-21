import { PUPPY_MAPPER } from "../constants";

const PuppiesList = ({ puppies, currentFilter, adoptPup, removePup }) => (
  <section>
    {puppies.filter(PUPPY_MAPPER[currentFilter]).map((p) => (
      <div key={p.id}>
        <h2>{p.name}</h2>
        <p>{p.breed}</p>
        <p>{`Adopted: ${p.isAdopted}`}</p>
        <button onClick={() => adoptPup(p)}>
          {p.isAdopted ? "Cancel Adoption" : "Adopt"}
        </button>
        <button onClick={() => removePup(p.id)}>Remove</button>
      </div>
    ))}
  </section>
);

export default PuppiesList;
