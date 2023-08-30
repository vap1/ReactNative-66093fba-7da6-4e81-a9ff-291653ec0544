
import { APIResponse, APIError } from '../types/Types';

export interface FetchMetadataRequest {
  // Add any request parameters here
}

export interface Metadata {
  // Define the structure of the metadata object
  metadataId: string;
  userId: string;
  userName: string;
  userAge: number;
  userLocation: string;
  userPreferences: Record<string, string>;
  createdAt: number;
  updatedAt: number;
}

export type FetchMetadataResponse = APIResponse<Metadata[]>;
export type FetchMetadataError = APIError;

export const fetchMetadata = async (): Promise<FetchMetadataResponse | FetchMetadataError> => {
  try {
    const response = await fetch('/fetchMetadata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch metadata');
    }

    const data: Metadata[] = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};