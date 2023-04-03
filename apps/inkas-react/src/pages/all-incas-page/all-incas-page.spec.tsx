import { render, screen, waitFor } from '@testing-library/react';
import AllIncasPage from './all-incas-page';
import { SapaInca } from '@app/models';
import { MockFactory } from '@app/test';
import React from 'react';
import { vi } from 'vitest';
import { SapaIncaService } from '../../services/sapa-inca.service';

vi.mock('../../services/sapa-inca.service', () => ({
  SapaIncaService: {
    getAll: vi.fn(() => Promise.resolve()),
  },
}));

describe('AllIncasPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllIncasPage />);
    expect(baseElement).toBeTruthy();
  });
  const LIST_LENGTH = 5;
  const mockSapaInca: SapaInca = {
    name: 'Luandaja',
    description: 'was here',
    years: '2016-2022',
    portrait_url: 'mock_url.jpg',
  };
  const mockList = MockFactory.generateMany<SapaInca>({
    length: LIST_LENGTH,
    demoObject: mockSapaInca,
  });
  const mockService = SapaIncaService as jest.Mocked<typeof SapaIncaService>;

  beforeEach(() => {
    mockService.getAll.mockReset();
  });

  it('should render component', async () => {
    // Arrange
    mockService.getAll.mockReturnValueOnce(Promise.resolve(mockList));

    // Act
    render(<AllIncasPage />);

    // Assert
    expect(mockService.getAll).toHaveBeenCalledTimes(1);
    expect(screen.getAllByTestId('sapa-inca-card').length).toBe(5);
  });

  // it('should render error message on service error', async () => {
  //   // Arrange
  //   mockService.getAll.mockReturnValueOnce(Promise.reject());

  //   // Act
  //   render(<AllIncasPage />);

  //   // Assert
  //   expect(
  //     screen.getByText('There was an error on loading list')
  //   ).not.toBeUndefined();
  // });

  // it('should render loading message on slow response', async () => {
  //   // Arrange
  //   mockService.getAll.mockReturnValueOnce(of(mockList).pipe(delay(Infinity)));

  //   // Act
  //   render(<AllIncasPage />);

  //   // Assert
  //   expect(screen.getByText('Loading...')).toBeInTheDocument();
  // });
});
