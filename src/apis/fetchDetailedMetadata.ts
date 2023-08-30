
import axios from 'axios';
import { Metadata } from '../types/Types';

interface FetchDetailedMetadataRequest {
  metadataId: string;
}

export const fetchDetailedMetadata = async (request: FetchDetailedMetadataRequest): Promise<Metadata> => {
  try {
    const response = await axios.get<Metadata>('/fetchDetailedMetadata', { params: request });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch detailed metadata');
  }
};