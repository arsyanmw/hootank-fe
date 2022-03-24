import {Text, View, Image} from 'react-native';
import React from 'react';
import NumberFormat from 'react-number-format';

// assets
import token from '../../assets/products/token.png';
import dana from '../../assets/products/dana.png';
import ovo from '../../assets/products/ovo.png';
import sim from '../../assets/products/sim.png';
import shop from '../../assets/icons/shop.png';
import {Button} from '../../components';

export const ItemDataDetails = ({data, ...rest}) => {
  const getImage = () => {
    switch (data.product) {
      case 'token':
        return token;
      case 'dana':
        return dana;
      case 'ovo':
        return ovo;
      case 'pulsa':
        return sim;
      default:
        return shop;
    }
  };

  const getProductName = (str = data.product) => {
    const camelCase = str.replace(/([A-Z])/g, ' $1').trim();
    return str.length > 3
      ? camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
      : str.toUpperCase();
  };

  return (
    <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={getImage()}
            style={{width: 40, height: 40, borderRadius: 50}}
          />
        </View>
        <View
          style={{
            flex: 5,
            flexDirection: 'column',
            paddingLeft: 28,
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
              {getProductName()}
            </Text>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center', width: 95}}>
        <NumberFormat
          value={data.price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'Rp '}
          renderText={value => (
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
              {value}
            </Text>
          )}
        />
      </View>
      <View>
        <Button
          tipe={'success'}
          style={{width: 40, borderRadius: 50}}
          {...rest}
        />
      </View>
    </View>
  );
};
