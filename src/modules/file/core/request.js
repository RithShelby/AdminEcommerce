import axios from "axios";
import { headerFormData } from "../../helper/generalHelp";

const reqUploadSingle = (file) => {
  return axios.post("files/single", { file }, headerFormData);
};
export { reqUploadSingle };
