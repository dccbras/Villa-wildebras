import BookingWidget from "./BookingWidget";

export default function Boeken() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Boek jouw verblijf bij Villa Wildebras
      </h1>
      <BookingWidget />
    </div>
  );
}
