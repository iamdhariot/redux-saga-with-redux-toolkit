import { call } from "@redux-saga/core/effects";
import axios from "axios"; // for api call
// api url
import { BaseURL } from "./Url";

export function* Api({
  endpoint,
  method,
  token = null,
  body = {},
  contentType = "application/json",
}) {
  try {
    const response = yield call(makeRequest, {
      endpoint,
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": contentType,
        Authorization: token, // token
      },
      body: body,
    });

    console.log("====================================");
    console.log(response);
    console.log("====================================");

    const parsedResponse = yield call(parseResponse, response);
    //status OK i.e will be returned

    return parsedResponse;
  } catch (error) {
    if (error.response === undefined) {
      //Axios api connection timeout
      throw { message: "The connection has timed out" };
    }
    let response = error.response;

    if (response.status === 401) {
      // perform logout
    }

    if (
      response.status === 400 ||
      response.status === 404 ||
      response.status === 500

      //include status code you want to handle here
    ) {
      throw response.data;
    }
  }
}

//axios api call
const makeRequest = async ({ endpoint, method, headers, body = {} }) => {
  return axios({
    method,
    baseURL: BaseURL + endpoint,
    data: body === "{}" ? undefined : body,
    headers,
    timeout: 1000 * 10, //wait for 10 seconds
  });
};

//for parsing response
const parseResponse = async (response) => {
  let parsedResponse;

  try {
    parsedResponse = response.data;
  } catch (error) {}
  return parsedResponse;
};
