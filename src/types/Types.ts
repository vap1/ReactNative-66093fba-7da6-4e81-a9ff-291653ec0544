
export interface HomepageData {
  id: string;
  title: string;
  description: string;
  lastUpdated: number;
}

export interface Metadata {
  metadataId: string;
  userId: string;
  userName: string;
  userAge: number;
  userLocation: string;
  userPreferences: { [key: string]: string };
  createdAt: number;
  updatedAt: number;
}