import axios from 'axios';
import { SapaInca } from '@app/models';

export const SapaIncaService = {
  getAll(): Promise<SapaInca[]> {
    return axios.get('assets/sapa-incas.json');
  },
};
