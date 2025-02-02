import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const ProductListItem = ({ product }) => {
  const baseUrl = 'https://api.timbu.cloud/images/';
  return (
    <View style={styles.container}>
     <TouchableOpacity> <Image 
          source={{ uri: product.photos.length > 0 ? baseUrl + product.photos[0].url : 'https://via.placeholder.com/150' }} 
        style={styles.image} 
      /></TouchableOpacity>
      <View style={styles.info}>
        <TouchableOpacity><Text style={styles.name}>{product.name}</Text></TouchableOpacity>
          <Text style={styles.description}>
  {product.is_available ? `Available | ${product.available_quantity}` : "Not Available"}
</Text>
        {product.current_price[0].NGN && <Text style={styles.price}>Price: ${product.current_price[0].NGN}</Text>}
      </View>
	<View style={{ width : 80 }}>
	  <View style={styles.goRow}>
	      <TouchableOpacity><Text>-</Text></TouchableOpacity>
	      <View style={styles.boDer}><Text>1</Text></View>
	      <TouchableOpacity><Text>+</Text></TouchableOpacity>
	  </View>
	  <View>
	      <TouchableOpacity style={styles.goRow2}>
		  <FontAwesome
		      size={16}
		      name="trash"
		      color="#11151A"
		      style={styles.cenTer}
		  />
		  <Text style={styles.cenTer}>Remove</Text>
	      </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#11151A',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#67778B',
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3538CD',
  },
  goRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#CDD5DF',
    padding: 5,
    borderRadius: 5,
  },
  goRow2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    borderColor: '#67778B',
    marginTop: 5,
    padding: 5,
  },
  cenTer: {
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  boDer: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#CDD5DF',
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default ProductListItem;
