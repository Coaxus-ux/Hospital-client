import { ENV_OBJ } from "../lib/env";

export const getAppointment = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/appointment/getAppointment`, {
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
export const getAppointmentByUser = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/appointment/getAppointmentByUser`, {
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
export const createAppointment = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/appointment/create`, {
    method: "POST",
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