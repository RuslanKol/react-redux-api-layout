import { combineReducers } from "redux";
import { laundryList } from "./laundryList.reducer";
import { user } from "./user.reducer";
import { areas } from "./area.reducer";
import { credits } from "./credits.reducer";

export default combineReducers({
  laundryList,
  user,
  areas,
  credits,
});
