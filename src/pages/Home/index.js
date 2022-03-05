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
import {
  createHutang,
  setDataHutangs,
  setForm,
  setModalVisible,
  setSudahBayar,
} from '../../config/redux/action';
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

  return (
    <View style={{height: '100%'}}>
      {isLoading ? (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
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
      )}
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
                  color: colors.btn.danger,
                }}>
                Tutup
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>Nama</Text>
            <TextInput
              style={{borderBottomWidth: 1}}
              value={formData.name}
              onChangeText={e => onChange(e, 'name')}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>Produk</Text>
            <TextInput
              style={{borderBottomWidth: 1}}
              value={formData.product}
              onChangeText={e => onChange(e, 'product')}
            />
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>Price</Text>
            <TextInput
              style={{borderBottomWidth: 1}}
              value={formData.price}
              onChangeText={e => onChange(e, 'price')}
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
