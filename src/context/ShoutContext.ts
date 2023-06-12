import Shoutout from "../models/Shoutout";
import { createContext } from "react";

export interface ShoutContextModel {
  allShouts: Shoutout[]; // null when not logged in
}

const defaultValue: ShoutContextModel = {
  allShouts: [],
};

const ShoutContext = createContext(defaultValue);
export default ShoutContext;
