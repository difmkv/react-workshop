import { API_ENDPOINT } from "../constants";

export const getData = async (signal) => {
  const response = await fetch(API_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    signal,
  });
  return response.json();
};

export const getPup = async (id, signal) => {
  const response = await fetch(`${API_ENDPOINT}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    signal,
  });
  return response.json();
};

export const postData = async (data) => {
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

export const putData = async (data) => {
  const { id } = data;

  const response = await fetch(`${API_ENDPOINT}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const deleteData = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
