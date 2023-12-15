import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {ListData, List} from '../../src/screens/List';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedData: ListData[] = [
  {
    createdAt: '2023-01-01',
    name: 'John Doe',
    avatar: 'john-doe-avatar-url',
    id: '1',
  },
];

describe('Testing List Component', () => {
  it('Testing that renders loading state and then displays list data', async () => {
    mockedAxios.get.mockResolvedValueOnce({data: mockedData});
    const {getByText, queryByText} = render(<List />);

    expect(getByText('Loading...')).toBeDefined();

    await waitFor(() => expect(queryByText('Loading...')).toBeNull());

    mockedData.forEach(item => {
      expect(getByText(item.name)).toBeDefined();
    });

    expect(queryByText('Empty List...')).toBeNull();
  });

  it('Testing renders empty list component when there is no data', async () => {
    mockedAxios.get.mockResolvedValueOnce({data: []});
    const {getByText} = render(<List />);

    await waitFor(() => expect(getByText('Empty List...')).toBeDefined());

    expect(getByText('Empty List...')).toBeDefined();
  });
});
