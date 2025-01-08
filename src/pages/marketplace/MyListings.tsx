import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ListingCard } from "@/components/marketplace/ListingCard";

const MyListingsPage = () => {
  const myListings = []; // This would be populated with user's listings

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-[#1A1F2C] via-[#7E69AB] to-[#9b87f5]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-montserrat font-bold text-white mb-8">My Listings</h1>
          
          {myListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {myListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
              <p className="text-white text-xl">You haven't created any listings yet.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyListingsPage;