import { API_ENDPOINT } from "../constants";

export async function getPuppies() {
  const response = await fetch(API_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export const postPuppy = async (data) => {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const putPuppy = async (data) => {
  const { id, isAdopted } = data;
  const response = await fetch(`${API_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      isAdopted: !isAdopted,
    }),
  });

  return response.json();
};

export const deletePuppy = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
