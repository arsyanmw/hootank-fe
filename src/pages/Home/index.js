import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector, connect} from 'react-redux';
import LottieView from 'lottie-react-native';

// assets
import {
  createHutang,
  setDataHutangs,
  setForm,
  setIsLoading,
  setIsRefreshing,
  setModalVisible,
  setSudahBayar,
} from '../../config/redux/action';
import empty from '../../assets/lottie/empty.json';
import {globalVariable} from '../../variables/global';
import {Button, TouchableCard, FAB, LoadingScreen} from '../../components';
import {ItemData} from './itemData';
import {colors} from '../../variables/colors';

const Home = ({navigation}) => {
  const {dataHutangs, form} = useSelector(state => state.hutangsReducer);
  const {isLoading, modalVisible, isRefreshing} = useSelector(
    state => state.globalReducer,
  );

  const dispatch = useDispatch();

  // remove duplicate dataHutangs that has same name
  const listHutang = () => {
    const unique = {};
    dataHutangs.forEach(item => {
      if (!unique[item.name]) {
        unique[item.name] = item;
      }
    });
    return Object.keys(unique).map(key => unique[key]);
  };

  useEffect(() => {
    dispatch(setDataHutangs());
  }, [dispatch]);

  const showModal = () => {
    dispatch(setModalVisible(true));
  };

  const onCloseModal = () => {
    dispatch(setModalVisible(false));
  };

  const handleSudahbayar = id => {
    dispatch(setSudahBayar(id));
  };

  const addData = () => {
    dispatch(createHutang(form));
  };

  const onChange = (e, type) => {
    dispatch(setForm(type, e));
  };

  const onRefresh = () => {
    dispatch(setIsLoading(true));
    dispatch(setIsRefreshing(true));
    dispatch(setDataHutangs());
  };

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <View style={{height: '100%', backgroundColor: '#fff'}}>
        <ScrollView
          style={[globalVariable.padding]}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }>
          {listHutang().length ? (
            listHutang().map(item => (
              <TouchableCard
                key={item._id}
                onPress={() =>
                  navigation.navigate('Detail', {name: item.name})
                }>
                <ItemData
                  data={item}
                  onPress={() => handleSudahbayar(item._id)}
                />
              </TouchableCard>
            ))
          ) : (
            <View style={{height: globalVariable.height - 80}}>
              <EmptyDataScreen />
            </View>
          )}
        </ScrollView>
        <FAB onPress={showModal} label={'+'} />
        <ModalForm
          visible={modalVisible}
          onClose={onCloseModal}
          formData={form}
          onChange={onChange}
          addData={addData}
        />
      </View>
    );
  }
};

const ModalForm = ({visible, onClose, formData, onChange, addData}) => {
  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View style={styles.modals}>
        <View style={styles.modalContainer}>
          <View style={{alignItems: 'flex-end', height: 30}}>
            <TouchableOpacity
              onPress={onClose}
              style={{
                padding: 5,
                elevation: 1,
                borderRadius: 5,
                backgroundColor: colors.btn.danger,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#fff',
                }}>
                Tutup
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{paddingHorizontal: 12}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontWeight: 'bold', color: '#000'}}>Nama</Text>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  color: '#34495e',
                  fontWeight: 'bold',
                }}
                value={formData.name}
                onChangeText={e => onChange(e, 'name')}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontWeight: 'bold', color: '#000'}}>Produk</Text>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  color: '#34495e',
                  fontWeight: 'bold',
                }}
                value={formData.product}
                onChangeText={e => onChange(e, 'product')}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontWeight: 'bold', color: '#000'}}>Harga</Text>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  color: '#34495e',
                  fontWeight: 'bold',
                }}
                value={formData.price}
                onChangeText={e => onChange(e, 'price')}
                keyboardType="numeric"
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Button
                label={'Tambah Hutang'}
                onPress={addData}
                style={{marginTop: 10}}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const EmptyDataScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView source={empty} autoPlay style={{width: '50%'}} />
      <Text style={{fontWeight: 'bold', color: 'darkgrey'}}>
        Kayanya semua hutang udah dibayar deh..
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    elevation: 1,
  },
  modals: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  modalContainer: {
    marginTop: 100,
    marginBottom: 200,
    padding: 10,
    width: 300,
    height: 370,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  loading: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  loadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});

export default connect()(Home);
