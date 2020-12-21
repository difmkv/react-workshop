export const getData = async (API_ENDPOINT, signal) => {
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

export const postData = async (API_ENDPOINT, data) => {
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

export const putData = async (API_ENDPOINT, data) => {
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

export const deleteData = async (API_ENDPOINT, id) => {
  const response = await fetch(`${API_ENDPOINT}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
