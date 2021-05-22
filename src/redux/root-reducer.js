import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./user/user-reducer";
import memberReducer from "./members/members-reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["members"],
};

const rootReducer = combineReducers({
  user: userReducer,
  members: memberReducer,
});

export default persistReducer(persistConfig, rootReducer);
