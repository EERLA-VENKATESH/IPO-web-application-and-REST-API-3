import { useEffect, useState } from 'react';
import IPOCard from '../components/IPOCard';
import { fetchIPOs } from '../services/api';

function IPOList() {
  const [ipos, setIPOs] = useState([]);

  useEffect(() => {
    fetchIPOs().then((data) => setIPOs(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ipos.map((ipo) => (
        <IPOCard key={ipo.id} ipo={ipo} />
      ))}
    </div>
  );
}

export default IPOList;
