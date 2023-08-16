import axios from "axios";
import { MAIN_CATEGORY_GET } from "../../Api/endpoints";
import { setMainCategory } from "../Reducer/MainCategorySlice";

export const setMainCategoryAct = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(MAIN_CATEGORY_GET);
      dispatch(setMainCategory(data));
    } catch (error) {
      console.log(error);
    }
  };
};
