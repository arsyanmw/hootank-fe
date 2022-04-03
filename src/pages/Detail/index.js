import React from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector, connect} from 'react-redux';
import {
  setDataHutangs,
  setIsLoading,
  setIsRefreshing,
  setSudahBayar,
} from '../../config/redux/action';
import {ItemDataDetails} from './itemDataDetails';
import {Button, CardDetails, Header, LoadingScreen} from '../../components';
import NumberFormat from 'react-number-format';
import {globalVariable} from '../../variables/global';

const Detail = ({route, navigation}) => {
  const {name} = route.params;

  const {dataHutangs} = useSelector(state => state.hutangsReducer);
  const {isRefreshing, isLoading} = useSelector(state => state.globalReducer);
  const dispatch = useDispatch();
  const dataHutangByName = dataHutangs.filter(item => item.name === name);

  const onRefresh = () => {
    dispatch(setIsLoading(true));
    dispatch(setIsRefreshing(true));
    dispatch(setDataHutangs());
  };

  const handleSudahbayar = id => {
    dispatch(setSudahBayar(id));
  };

  const getTotalHutangByName = () => {
    let total = 0;
    dataHutangByName.forEach(item => {
      total += item.price;
    });
    return total;
  };

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <View style={{height: '100%', backgroundColor: '#fff'}}>
        <Header
          title={'Detail Hutang ' + name}
          nav={() => navigation.goBack()}
        />
        <ScrollView
          style={[globalVariable.padding, {marginTop: 60}]}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }>
          {dataHutangByName.length
            ? dataHutangByName.map(item => (
                <CardDetails key={item._id}>
                  <ItemDataDetails
                    data={item}
                    onPress={() => handleSudahbayar(item._id)}
                  />
                </CardDetails>
              ))
            : navigation.goBack()}
          <View
            style={[
              globalVariable.padding,
              {alignItems: 'center', marginTop: 20},
            ]}>
            <Text
              style={{
                fontFamily: 'Mulish-Black',
                fontSize: 15,
                color: '#b2bec3',
              }}>
              Total Hutang
            </Text>
            <NumberFormat
              value={getTotalHutangByName()}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp '}
              renderText={value => (
                <Text
                  style={{
                    marginTop: 15,
                    fontFamily: 'Poppins-ExtraBold',
                    fontSize: 20,
                    color: '#000',
                  }}>
                  {value}
                </Text>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default connect()(Detail);
