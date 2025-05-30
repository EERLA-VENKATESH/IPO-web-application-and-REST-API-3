import { Link } from 'react-router-dom';

function IPOCard({ ipo }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src={ipo.logoUrl} alt={ipo.name} className="h-16 mx-auto mb-4" />
      <h2 className="text-xl font-bold text-center">{ipo.name}</h2>
      <p className="text-center text-gray-600">Price Band: {ipo.priceBand}</p>
      <p className="text-center text-gray-500">{ipo.status}</p>
      <Link to={`/ipo/${ipo.id}`} className="block mt-4 text-blue-600 text-center hover:underline">
        View Details
      </Link>
    </div>
  );
}

export default IPOCard;
