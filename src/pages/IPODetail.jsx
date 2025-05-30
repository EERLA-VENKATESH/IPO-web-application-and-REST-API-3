import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchIPODetail } from '../services/api';
import CompanyLogo from '../components/CompanyLogo';

function IPODetail() {
  const { id } = useParams();
  const [ipo, setIPO] = useState(null);

  useEffect(() => {
    fetchIPODetail(id).then((data) => setIPO(data));
  }, [id]);

  if (!ipo) return <p>Loading IPO details...</p>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <CompanyLogo logoUrl={ipo.logoUrl} altText={ipo.name} />
      <h2 className="text-3xl font-bold my-4">{ipo.name}</h2>
      <p>Price Band: {ipo.priceBand}</p>
      <p>Issue Size: {ipo.issueSize}</p>
      <p>Open Date: {ipo.openDate}</p>
      <p>Close Date: {ipo.closeDate}</p>
      <p>Listing Date: {ipo.listingDate}</p>
      <p>Status: {ipo.status}</p>
      <p>IPO Price: {ipo.ipoPrice}</p>
      <p>Listing Price: {ipo.listingPrice}</p>
      <p>Current Market Price: {ipo.cmp}</p>
      <p>Current Return: {ipo.return}</p>
      <a href={ipo.rhpLink} className="text-blue-600 block mt-4 hover:underline">Download RHP</a>
      <a href={ipo.drhpLink} className="text-blue-600 block hover:underline">Download DRHP</a>
    </div>
  );
}

export default IPODetail;
