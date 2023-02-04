import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="text-white flex flex-col py-32 w-9/12 m-auto">
      <h1 className="w-5/6 mt-24 mb-2 mx-auto text-center text-6xl font-alice tracking-wide">
        Save the planet from the loss of biodiversity.
      </h1>
      <p className="w-9/12 mx-auto mt-4 text-lg text-center my-10 text-slate-200 tracking-wide">
      Florafauna is a travel guide or finder for nature preserve or santauries which are  we filter based on location , critical factor(means current situation on population or scarcity) and for users fun purpose we can add filter based on animal so they can select there fav.
      after selecting preserve you can do three things sponsor(donate) , Join Us and share (customize email)
      </p>
      <div className="flex w-5/6 m-auto justify-center font-serif">
        <Link className="font-serif" to={"/Profile"}>
          <button className="bg-slate-50 text-lg  font-poppins m-5 tracking-wide rounded-md border-2  border-slate-200 border-solid p-2 px-6 text-stone-800 rounded-br-none hover:font-medium transition-all  hover:bg-transparent hover:scale-105 hover:text-slate-50">
            Join Us.
          </button>
        </Link>
        <button className="text-lg font-poppins m-5 tracking-wide hover:font-medium rounded-md border-2 border-slate-200 border-solid p-2 px-10 rounded-br-none hover:scale-105 transition-all hover:text-green-900 hover:bg-slate-50">
          <a href="https://devpost.com/software/vogueeco-enkp1w">Learn More.</a>
        </button>
      </div>
    </div>
  );
}

export default Main;
