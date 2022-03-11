import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {
  createHutang,
  setDataHutangs,
  setForm,
  setModalVisible,
  setSudahBayar,
} from '../../config/redux/action';
import empty from '../../assets/lottie/empty.json';
import loading from '../../assets/lottie/loading.json';
import {globalVariable} from '../../variables/global';
import {Button, Card, FAB} from '../../components';
import {ItemData} from './itemData';
import {colors} from '../../variables/colors';

const Home = () => {
  const {dataHutangs, form} = useSelector(state => state.hutangsReducer);
  const {isLoading, modalVisible} = useSelector(state => state.globalReducer);

  const dispatch = useDispatch();

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

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    if (dataHutangs.length) {
      return (
        <View style={{height: '100%'}}>
          <ScrollView style={[globalVariable.padding]}>
            {dataHutangs.map(item => (
              <Card key={item._id}>
                <ItemData
                  data={item}
                  onPress={() => handleSudahbayar(item._id)}
                />
              </Card>
            ))}
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
    } else {
      return (
        <View style={{height: '100%'}}>
          <EmptyDataScreen />
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
              style={{padding: 5, elevation: 1, borderRadius: 5}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  backgroundColor: colors.btn.danger,
                  color: '#fff',
                }}>
                Tutup
              </Text>
            </TouchableOpacity>
          </View>

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
            <Text style={{fontWeight: 'bold', color: '#000'}}>Price</Text>
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
    </Modal>
  );
};

const EmptyDataScreen = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView source={empty} autoPlay style={{width: '50%'}} />
        <Text style={{fontWeight: 'bold', color: 'darkgrey'}}>
          Kayanya semua hutang udah dibayar deh..
        </Text>
      </View>
    </View>
  );
};

const LoadingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView
        source={loading}
        autoPlay
        style={{width: '50%', height: 80}}
      />
      <Text style={{fontWeight: 'bold', color: '#374045'}}>
        Mencari data hutang..
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
  },
  modalContainer: {
    marginTop: 100,
    marginBottom: 200,
    padding: 10,
    width: 300,
    height: 400,
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

export default Home;
