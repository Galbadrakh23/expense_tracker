import Login from "./login";

const Onboard = () => {
  return (
    <div className="w-[1440px] h-full flex flex-row">
      <div className="basis-1/2 mt-60">
        <Login />
      </div>
      <div className="w-[708px] h-full basis-1/2 bg-[#0166FF] absolute left-[732px]"></div>
    </div>
  );
};
export default Onboard;
