import ClickableCard from "../ClickableCard";

export default function RouteRisks() {
  const onClickAccidents = () => {

  };

  return (
    <div className='flex flex-col w-full'>
      <div className="flex-1 text-center w-full my-2">
        <h2 className="font-sans text-3xl tracking-tight leading-10 font-extrabold sm:text-2xl text-white sm:leading-none md:text-3xl">
          <span className="text-orange-400">Safety Score</span>
        </h2>
      </div>

      <hr />

      <ClickableCard onClickHandler={onClickAccidents} title="Accidents History" body="100"/>
    </div>
  );
}