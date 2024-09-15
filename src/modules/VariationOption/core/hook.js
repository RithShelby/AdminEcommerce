import { useDispatch } from "react-redux";
import { reqSearchVariationOptions } from "./request";
import { setLoading, setVariationOption } from "./varitionOptionSlice";
import { useNavigate } from "react-router-dom";

const useVariOption = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getVariationOption = () => {
    dispatch(setLoading(true));
    reqSearchVariationOptions()
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(setVariationOption(res.data.data));
        // console.log(res.data.data);
      })
      .catch((err) => alert(err));
  };
  return { getVariationOption };
};

export { useVariOption };
