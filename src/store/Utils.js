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
  const response = fetch(
    `${ENV_OBJ.API_REST_URL}/patient/getPatientsByCitizenshipCard`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        citizenshipCard: data,
      }),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
};
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
};
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
};
export const getDoctorsById = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/doctor/get-doctor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: data,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
};

export const getMedicines = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/medicine/get-medicine`, {
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
export const updateSurgery = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/surgery/update-surgery`, {
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
export const createSurgery = async (data) => {
  console.log(data);
  const response = fetch(`${ENV_OBJ.API_REST_URL}/surgery/create-surgery`, {
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
export const addMedicine = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/medicine/create-medicine`, {
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
export const updateMedicine = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/medicine/update-medicine`, {
    method: "PUT",
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