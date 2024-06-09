import axios from "axios";

import { propertyDetailsAction } from "./propertyDetails-slice";

export const getPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch(propertyDetailsAction.getListRequest());
    const response = await axios(`/api/v1/rent/listing/${id}`);
    if (!response) {
      throw new Error("COULD NOT FETCH ANY PROPERTY DETAILS");
    }
    const { data } = response.data;
    dispatch(propertyDetailsAction.getPropertyDetails(data));
  } catch (error) {
    dispatch(propertyDetailsAction.getErrors(error.response.data.error));
  }
};
