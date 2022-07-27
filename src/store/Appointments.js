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
  const response = fetch(
    `${ENV_OBJ.API_REST_URL}/appointment/getAppointmentByUser`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
};
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
};
export const getAppointmentByDoctor = async (data) => {
  console.log(data);
  const response = fetch(
    `${ENV_OBJ.API_REST_URL}/appointment/getDoctorAppointments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
}
export const getAppointmentData = async (patientId) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/appointmentData/getAppointmentData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      patientId: patientId,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
};
export const getAppointmentByuser = async (data) => {
  const response = fetch(
    `${ENV_OBJ.API_REST_URL}/appointment/getAppointmentByuser`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
};
export const cancelAppointment = async (id) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/appointment/cancelAppointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
};
export const createAppointmentReport = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/appointmentData/create-appointmentData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      patientId: data.patientId,
      doctorId: data.doctorId,
      recomendations: data.recomendations,
      medicine: data.medicines,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return response;
}
export const putAppointmentReady = async (data) => {
  const response = fetch(`${ENV_OBJ.API_REST_URL}/appointment/putAppointmentReady`, {
    method: "PUT",
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
}