import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';
import Axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  createHutang,
  setDataHutangs,
  setForm,
  setModalVisible,
} from '../../config/redux/action';

const Home = () => {
  const {dataHutangs} = useSelector(state => state.hutangsReducer);
  const {form} = useSelector(state => state.createHutangReducer);
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

  const onRemove = id => e => {
    //setDataHutang([...dataHutang.filter(it => it.id !== id)]);
  };

  const addData = async e => {
    e.preventDefault();
    dispatch(createHutang(form));
  };

  const onChange = (e, type) => {
    dispatch(setForm(type, e));
  };

  const renderItem = ({item}) => <Item items={item} onRemove={onRemove} />;

  return (
    <SafeAreaView>
      {!isLoading ? (
        <FlatList
          data={dataHutangs}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      <ModalForm
        visible={modalVisible}
        onClose={onCloseModal}
        formData={form}
        onChange={onChange}
        addData={addData}
      />
      <TouchableOpacity
        style={{borderWidth: 0.8, padding: 3, borderRadius: 5}}
        onPress={showModal}>
        <Text style={{fontWeight: 'bold'}}>ADD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Item = ({items, onRemove}) => {
  return (
    <View
      style={[
        {borderRadius: 5, marginBottom: 10, padding: 10},
        styles.boxShadow,
      ]}>
      <Text style={{borderBottomWidth: 1, fontSize: 15, fontWeight: 'bold'}}>
        {items.name}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontStyle: 'italic'}}>{items.product}</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>Rp {items.price}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end', marginTop: 10}}>
        <TouchableOpacity
          style={[{borderWidth: 0.8, padding: 3, borderRadius: 5}]}
          onPress={onRemove(items.id)}>
          <Text style={{fontWeight: 'bold'}}>Sudah Bayar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ModalForm = ({visible, onClose, formData, onChange, addData}) => {
  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            marginTop: 100,
            marginBottom: 200,
            padding: 10,
            width: 300,
            height: 400,
            borderRadius: 5,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={onClose}>
              <Text style={{fontStyle: 'italic'}}>Tutup</Text>
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
            <TouchableOpacity
              style={{width: 100, alignItems: 'center'}}
              onPress={addData}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>Add</Text>
            </TouchableOpacity>
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
});

export default Home;
