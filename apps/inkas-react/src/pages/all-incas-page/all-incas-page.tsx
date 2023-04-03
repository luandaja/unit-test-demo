import { useEffect, useState } from 'react';

import { SapaInca } from '@app/models';
import SapaIncaCard from '../../components/sapa-inca-card/sapa-inca-card';
import { SapaIncaService } from '../../services/sapa-inca.service';

/* eslint-disable-next-line */
export interface AllIncasPageProps {}

export function AllIncasPage(props: AllIncasPageProps) {
  const [incas, setIncas] = useState<SapaInca[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SapaIncaService.getAll()
      .then((data) => {
        setIncas(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <span>Loading...</span>}
      {!loading && error && <span>There was an error on loading list</span>}
      {!loading &&
        !error &&
        incas.map((inca, i) => <SapaIncaCard key={i} inca={inca} />)}
    </div>
  );
}

export default AllIncasPage;
