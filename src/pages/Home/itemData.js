import {Text, View, Image} from 'react-native';
import React from 'react';

// assets
import token from '../../assets/products/token.png';
import dana from '../../assets/products/dana.png';
import ovo from '../../assets/products/ovo.png';
import sim from '../../assets/products/sim.png';
import RightArrow from '../../assets/icons/right-arrow.svg';
import {useSelector} from 'react-redux';

// export const ItemData = ({data, ...rest}) => {
//   return (
//     <View>
//       <Text
//         style={{
//           borderBottomWidth: 1,
//           fontSize: 15,
//           fontWeight: 'bold',
//           color: '#000',
//         }}>
//         {data.name}
//       </Text>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//         }}>
//         <View>
//           <Text style={{fontStyle: 'italic', color: '#000'}}>
//             {data.product}
//           </Text>
//         </View>
//         <View>
//           <Text style={{fontWeight: 'bold', color: '#000'}}>
//             <NumberFormat
//               value={data.price}
//               displayType={'text'}
//               thousandSeparator={true}
//               prefix={'Rp '}
//               renderText={value => <Text>{value}</Text>}
//             />
//           </Text>
//         </View>
//       </View>
//       <View style={{alignItems: 'flex-end', marginTop: 10, color: '#000'}}>
//         <Button label={'Lunaskan'} {...rest} />
//       </View>
//     </View>
//   );
// };

export const ItemData = ({data, ...rest}) => {
  const {dataHutangs} = useSelector(state => state.hutangsReducer);

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
        return null;
    }
  };

  const getProductName = (str = data.product) => {
    const camelCase = str.replace(/([A-Z])/g, ' $1').trim();
    return str.length > 3
      ? camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
      : str.toUpperCase();
  };

  const badgeTotalHutangByName = name => {
    const hasManyHutang = dataHutangs.filter(hutang => hutang.name === name);

    if (hasManyHutang.length > 1) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            borderRadius: 50,
            width: 15,
            height: 15,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}>
          <Text style={{color: '#fff', fontSize: 10, fontWeight: 'bold'}}>
            +{hasManyHutang.length - 1}
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
      <View style={{flex: 5, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            source={getImage()}
            style={{width: 40, height: 40, borderRadius: 50}}
          />
          {badgeTotalHutangByName(data.name)}
        </View>
        <View
          style={{
            flex: 5,
            flexDirection: 'column',
            paddingLeft: 15,
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
              {data.name}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 10,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: '#95a5a6',
              }}>
              {getProductName()}
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <RightArrow width={20} height={20} fill="#b2bec3" />
      </View>
    </View>
  );
};
