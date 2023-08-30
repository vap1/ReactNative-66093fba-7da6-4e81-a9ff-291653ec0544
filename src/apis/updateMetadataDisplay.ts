
import { UpdateMetadataDisplayRequest, Metadata } from '../types/Types';

export const updateMetadataDisplay = async (request: UpdateMetadataDisplayRequest): Promise<Metadata[]> => {
  try {
    const response = await fetch('/updateMetadataDisplay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to update metadata display');
    }

    const data = await response.json();
    return data as Metadata[];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update metadata display');
  }
};