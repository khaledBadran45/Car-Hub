import CustomeFilter from "@/components/CustomeFilter";
import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import { fetchCars } from "@/utils";



export default async function Home() {

  const allCars = await fetchCars();
  console.log(allCars)

  return (
  <main className="overflow-hidden bg-gray-100">
      <Hero />
     
     <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomeFilter title="fuel" />
            <CustomeFilter title="year" />
          </div>
        </div>
      </div>
    </main>

  );

}
