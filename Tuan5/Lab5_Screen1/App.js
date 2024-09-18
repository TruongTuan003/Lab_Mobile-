import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import Rating from './Rating';
import ColorPicker from './ColorPicker';

const ProductCard = () => {
  return (
    <View style={{ padding: 20 }}>
      <Image
        source={require('.assets\vs_blue.png')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      {/* <Rating rating={4.5} /> */}
      <Text style={{ fontSize: 16 }}>1.790.000 ₫</Text>
      <TouchableOpacity style={{ backgroundColor: '#FF5A5F', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>CHỌN MUA</Text>
      </TouchableOpacity>
      <ColorPicker />
      
    </View>
  );
};

export default ProductCard;
