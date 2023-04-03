import React from 'react';
import { render, screen } from '@testing-library/react';
import SapaIncaCard from './sapa-inca-card';
import { SapaInca } from '@app/models';

describe('SapaIncaCardComponent', () => {
  const mockSapaInca: SapaInca = {
    name: 'Luandaja',
    description: 'was here',
    years: '2016-2022',
    portrait_url: 'mock_url.jpg',
  };

  beforeEach(() => {
    render(<SapaIncaCard inca={mockSapaInca} />);
  });

  it('should render the SapaInca card correctly', () => {
    expect(screen.getByRole('img').getAttribute('src')).toBe(
      mockSapaInca.portrait_url
    );

    expect(screen.getByText(mockSapaInca.name)).not.toBeNull();
    expect(screen.getByText(`(${mockSapaInca.years})`)).not.toBeNull();
    expect(screen.getByText(mockSapaInca.description)).not.toBeNull();
  });
});
