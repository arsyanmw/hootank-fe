import {Text, View} from 'react-native';
import {Button} from '../../components';
import React from 'react';
import NumberFormat from 'react-number-format';

export const ItemData = ({data, ...rest}) => {
  return (
    <View>
      <Text
        style={{
          borderBottomWidth: 1,
          fontSize: 15,
          fontWeight: 'bold',
          color: '#000',
        }}>
        {data.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{fontStyle: 'italic', color: '#000'}}>
            {data.product}
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', color: '#000'}}>
            <NumberFormat
              value={data.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp '}
              renderText={value => <Text>{value}</Text>}
            />
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end', marginTop: 10, color: '#000'}}>
        <Button label={'Lunaskan'} {...rest} />
      </View>
    </View>
  );
};
