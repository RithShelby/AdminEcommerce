import { useDispatch } from "react-redux";
import { reqUploadSingle } from "./request";
import { setUploadSingle } from "./fileSlice";

const useFileUpload = () => {
  const dispatch = useDispatch();
  const uploadSingleFile = (file) => {
    return reqUploadSingle(file)
      .then((res) => {
        dispatch(setUploadSingle(res.data.data.uri));
        alert("Successfully uploaded");
        return res.data.data;
      })
      .catch((err) => alert(err));
  };
  return { uploadSingleFile };
};
export { useFileUpload };
