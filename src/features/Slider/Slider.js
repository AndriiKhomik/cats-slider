import { useGetCatsQuery } from "./sliderApiSlice";

const Slider = () => {
  const { data } = useGetCatsQuery("Cats", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  return <div>this is a Slider</div>;
};

export default Slider;
