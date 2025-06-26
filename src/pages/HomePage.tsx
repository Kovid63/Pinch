import Navbar from "../components/navbar";
import SearchBar from "../components/searchBar";

function HomePage() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-2xl py-7 px-5 ">
        <h1 className="font-extrabold">Pinch</h1>
        <Navbar />
        <p>User</p> {/* placeholer for now */}
      </div>

      <div className="flex justify-center mt-18 ">
        <SearchBar />
      </div>
    </div>
  );
}

export default HomePage;
