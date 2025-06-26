import Navbar from "../components/navbar";
import SearchBar from "../components/searchBar";

function HomePage() {
  return (
    <div>
      <div className="flex gap-4">
        <h1>Pinch</h1>
        <Navbar />
      </div>

      <SearchBar />
    </div>
  );
}

export default HomePage;
