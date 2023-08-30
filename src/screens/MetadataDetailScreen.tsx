
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { fetchDetailedMetadata, FetchDetailedMetadataRequest, Metadata } from '../apis/fetchDetailedMetadata';
import { useParams } from 'react-router-native';

const MetadataDetailScreen = () => {
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const { metadataId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request: FetchDetailedMetadataRequest = {
          metadataId: metadataId,
        };
        const data = await fetchDetailedMetadata(request);
        setMetadata(data);
      } catch (error) {
        console.error('Error fetching detailed metadata:', error);
      }
    };

    fetchData();
  }, [metadataId]);

  return (
    <View>
      {metadata ? (
        <View>
          <Text>Metadata ID: {metadata.metadataId}</Text>
          <Text>User ID: {metadata.userId}</Text>
          <Text>User Name: {metadata.userName}</Text>
          <Text>User Age: {metadata.userAge}</Text>
          <Text>User Location: {metadata.userLocation}</Text>
          {/* Display other metadata fields as needed */}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MetadataDetailScreen;