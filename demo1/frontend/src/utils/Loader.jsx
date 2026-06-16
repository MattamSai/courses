import { LoaderCircle } from "lucide-react";

export default function Loader() {
  return (
    <LoaderCircle
      size={40}
      className="text-blue-500"
      style={{
        animation: "spin 1s linear infinite",
      }}
    />
  );
}