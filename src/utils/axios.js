import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;

export const client = async (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    return axios(url);
  } else {
    return axios(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  }
};

export const clientWithToken = async (endpoint, data = {}, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage["token"] || "";

  if (method === "GET") {
    return axios(url, {
      headers: {
        authorization: token,
      },
    });
  } else {
    return axios(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  }
};
