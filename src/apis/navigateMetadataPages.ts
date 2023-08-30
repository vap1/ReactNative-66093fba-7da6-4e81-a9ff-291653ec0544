
import axios from 'axios';
import { NavigateMetadataPagesRequest, Metadata } from '../types/Types';

const navigateMetadataPages = async (pageNumber: number): Promise<Metadata[]> => {
  try {
    const response = await axios.get<Metadata[]>('/navigateMetadataPages', {
      params: {
        pageNumber,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error navigating through metadata pages:', error);
    throw error;
  }
};

export default navigateMetadataPages;