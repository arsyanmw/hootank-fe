import {Text, View} from 'react-native';
import {Button} from '../../components';
import React from 'react';

export const ItemData = ({data, ...rest}) => {
  return (
    <View>
      <Text
        style={{
          borderBottomWidth: 1,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {data.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{fontStyle: 'italic'}}>{data.product}</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>Rp {data.price}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end', marginTop: 10}}>
        <Button label={'Sudah Bayar'} {...rest} />
      </View>
    </View>
  );
};
