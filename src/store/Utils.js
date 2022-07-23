import { ENV_OBJ } from "../lib/env";

export const getDoctors = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/doctor/getDoctors`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
};
export const getPatientsByCitizenshipCard = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/patient/getPatientsByCitizenshipCard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      citizenshipCard: data,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
}
export const getSurgeries = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/surgery/get-surgeries`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
}
export const getDepartments = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/user/departments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
}