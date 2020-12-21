import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData, putData } from "../services";
import { API_ENDPOINT } from "../constants";

const Puppy = () => {
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [puppyData, setPuppyData] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getData(`${API_ENDPOINT}/${id}`, signal)
      .then((res) => setPuppyData(res))
      .catch((err) => console.log("API_ERROR => ", err));

    return () => controller.abort();
  }, [id]);

  const onSubmitChangeName = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = { ...puppyData, name };

    putData(API_ENDPOINT, data)
      .then((res) => {
        setPuppyData(res);
        setName("");
        setIsSubmitting(false);
      })
      .catch((err) => console.log("API_ERROR => ", err));
  };

  if (puppyData === null) return <p>Loading...</p>;
  if (isSubmitting) return <p>Submitting...</p>;

  return (
    <>
      <h3>
        This is {puppyData.name}'s page. Breed: {puppyData.breed}
      </h3>

      <form onSubmit={onSubmitChangeName}>
        <label>
          Change <em>{puppyData.name}</em>'s Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <br />

      <Link to="/">Go back to all puppies</Link>
    </>
  );
};

export default Puppy;
