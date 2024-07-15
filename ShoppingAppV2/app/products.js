import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, Alert, TouchableOpacity } from 'react-native';
import ProductListItem from './components/ProductListItem';
import { getProducts } from './api';

export default function ProductsScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
          setProducts(productsData);
      } catch (error) {
          setError('Failed to load products, Please reload the app');
          Alert.alert('Error, Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.goRow}>
          <View><Text style={{ color: '#546D8B' , fontWeight: 'bold' }}>Cart totals</Text><Text style={{ color: '#3538CD', fontWeight: 'bold', marginHorizontal: 5, fontSize: 16 }}>$10,700.00</Text></View>
          <TouchableOpacity style={styles.checkout}><Text style={{ color: 'white' , fontWeight: 'bold' }}>Checkout</Text></TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },
  goRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  checkout: {
    width: 140,
    height: 40,
    backgroundColor: '#3538CD',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});
