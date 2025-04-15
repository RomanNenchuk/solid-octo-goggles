import { ClipLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div className="text-center mt-40 w-[100%]">
      {<ClipLoader color="#36d7b7" size={50} />}
    </div>
  );
}
