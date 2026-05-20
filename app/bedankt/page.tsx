export default function BedanktPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Achtergrondafbeelding */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/IMG_1784.JPEG')" }}
        aria-hidden="true"
      />

      {/* Optioneel: donkere overlay voor leesbaarheid */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-xl text-center bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Bedankt!</h1>

        <p className="text-gray-700 mb-6">
          Je aanvraag is succesvol verzonden. We nemen zo snel mogelijk contact met je op.
        </p>

        <a href="/" className="text-[#B84C65] font-medium hover:underline">
          Terug naar home
        </a>
      </div>
    </main>
  );
}
