import axios from 'axios';
import { SapaIncaService } from './sapa-inca.service';
import { SapaInca } from '@app/models';
import { vi } from 'vitest';
vi.mock('axios');

describe('SapaIncaService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch a list of incas', async () => {
    const mockResponse: SapaInca[] = [
      {
        name: 'Pachacutec',
        description: 'was here',
        years: '1438-1471',
        portrait_url: 'mock_url.jpg',
      },
      {
        name: 'Topa Inca Yupanqui',
        description: 'was here',
        years: '1471-1493',
        portrait_url: 'mock_url.jpg',
      },
    ];
    axios.get.mockResolvedValue(mockResponse);

    const result = await SapaIncaService.getAll();

    expect(result).toEqual(mockResponse);
    expect(axios.get).toHaveBeenCalledWith('assets/sapa-incas.json');
  });

  it('should handle errors when fetching a list of incas', async () => {
    const mockError = new Error('Oops, something went wrong');
    axios.get.mockRejectedValue(mockError);

    await expect(SapaIncaService.getAll()).rejects.toEqual(mockError);
    expect(axios.get).toHaveBeenCalledWith('assets/sapa-incas.json');
  });
});
