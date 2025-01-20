```javascript
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('some-api-endpoint');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error appropriately, e.g., display an error message
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Name not available'}</Text> 
    </View>
  );
};

export default MyComponent;
```