
interface HomepageData {
  id: string;
  title: string;
  description: string;
  lastUpdated: number;
}

interface Metadata {
  metadataId: string;
  userId: string;
  userName: string;
  userAge: number;
  userLocation: string;
  userPreferences: Record<string, string>;
  createdAt: number;
  updatedAt: number;
}

interface UpdateMetadataDisplayRequest {
  searchCriteria: string;
  filters: string[];
  sortOption: string;
}

interface NavigateMetadataPagesRequest {
  pageNumber: number;
}

interface FetchDetailedMetadataRequest {
  metadataId: string;
}

export type {
  HomepageData,
  Metadata,
  UpdateMetadataDisplayRequest,
  NavigateMetadataPagesRequest,
  FetchDetailedMetadataRequest,
};