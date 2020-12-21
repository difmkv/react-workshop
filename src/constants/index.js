export const API_ENDPOINT = "http://localhost:3004/puppies";

export const PUPPY_MAPPER = {
  All: () => true,
  Adopted: (p) => p.isAdopted,
  "Not Adopted": (p) => !p.isAdopted,
};
