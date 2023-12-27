import { Spinner } from "@/components/atoms/Spinner";

export const UserLogin = () => {
  return (
    <div className="flex gap-10 items-center justify-center h-screen">
      <div></div>
      <div className="flex flex-col gap-5">
        <Spinner width="w-20" height="h-20" color={"#000000"} />
      </div>
    </div>
  );
}