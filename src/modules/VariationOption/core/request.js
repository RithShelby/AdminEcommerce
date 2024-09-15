import axios from "axios";

const reqSearchVariationOptions = () => {
  return axios.get("variationOptions");
};
export { reqSearchVariationOptions };
