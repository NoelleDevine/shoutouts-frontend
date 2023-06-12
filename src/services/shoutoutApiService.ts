import Shoutout from "../models/Shoutout";
import axios from "axios";

const baseUrl = process.env.REACT_APP_FUNCTIONS_BASE_URL || "";

export const getAllShoutouts = async (): Promise<Shoutout[]> => {
  //todo
  return (await axios.get(`${baseUrl}/shoutouts`)).data;
};

export const getPersonShoutouts = async (name: string): Promise<Shoutout[]> => {
  //todo
  return (await axios.get(`${baseUrl}/shoutouts/${name}`)).data;
};

export const addShoutout = async (newShout: Shoutout): Promise<Shoutout> => {
  return (await axios.post(`${baseUrl}/shoutouts`, newShout)).data;
};
