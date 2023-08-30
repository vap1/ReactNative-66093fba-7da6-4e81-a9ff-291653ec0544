
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchMetadata } from '../apis/fetchMetadata';
import { Metadata } from '../types/Types';

const MetadataDisplayScreen: React.FC = () => {
  const [metadata, setMetadata] = useState<Metadata[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMetadata();
        setMetadata(response);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchData();
  }, []);

  const renderMetadataItem = ({ item }: { item: Metadata }) => (
    <View>
      <Text>{item.userName}</Text>
      <Text>{item.userAge}</Text>
      <Text>{item.userLocation}</Text>
      {/* Render other metadata fields */}
    </View>
  );

  return (
    <View>
      <Text>Metadata Display</Text>
      <FlatList
        data={metadata}
        renderItem={renderMetadataItem}
        keyExtractor={(item) => item.metadataId}
      />
    </View>
  );
};

export default MetadataDisplayScreen;