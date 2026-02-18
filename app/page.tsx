import TravelCard from "@/components/TravelCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-200">
      
      {/* Contenedor de cards */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          gap-10
          items-center
          justify-center
        "
      >
        <TravelCard
          city="New York"
          type="Economy"
          price="$120"
          code="JFK"
          image="https://images.unsplash.com/photo-1534447677768-be436bb09401"
        />

        <TravelCard
          city="San Francisco"
          type="Premium economy"
          price="$240"
          code="SFO"
          image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
        />
      </div>
    </div>
  );
}
