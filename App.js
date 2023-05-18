import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity, } from 'react-native';
import SwipeableRow from 'react-native-swipeable-row';

const data = [
  {
    id: '1',
    image1: 'https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800',
    title: 'Samosa',
    location: 'Illinois',
    price: '99$',
    icon1: 'https://img.icons8.com/?size=512&id=95770&format=png',
    quantity: '1',
    icon2: 'https://img.icons8.com/?size=512&id=ATR8qJ0xtuAQ&format=png',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
            source={{
              uri: 'https://img.icons8.com/?size=512&id=60636&format=png' 
            }}
            resizeMode='cover'
            style={{ width: 20, height: 20, }}
        />
        <Text style={{fontSize: 20, fontWeight: '600'}}>Select your meal</Text>
      </View>

      <View style={styles.body1}>
        <Image
            source={{
              uri: 'https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/w_1000,h_684,c_limit/the-ultimate-hamburger.jpg' 
            }}
            resizeMode='cover'
            style={{ width: 150, height: 100,}}
        />
        <Text style={{margin: 10, fontSize: 15,}}>
          Hamburger
          {"\n"}Illinois
        {"\n"}29$
        </Text>

        <Image
            source={{
              uri: 'https://img.icons8.com/?size=512&id=95770&format=png' 
            }}
            resizeMode='cover'
            style={{ width: 20, height: 20, margin: 10,}}
        />
        <Text style={{fontSize: 17, margin: 10, fontWeight: 'bold'}}>
          1
        </Text>
        <Image
            source={{
              uri: 'https://img.icons8.com/?size=512&id=ATR8qJ0xtuAQ&format=png' 
            }}
            resizeMode='cover'
            style={{ width: 20, height: 20, margin: 10,}}
        />
      </View>

    <FlatList style={styles.scrollPart}
      data={data}
      renderItem={({ item }) => (
        <SwipeableRow rightButtons={[
          <TouchableOpacity onPress={() => this.handleDelete(item.id)}>
            <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Image source={{ uri: 'https://img.icons8.com/?size=512&id=QGjdymRmAtqp&format=png' }} style={{ width: 50, height: 50, marginTop: 10, }} />
            </View>
          </TouchableOpacity>
        ]}
        useNativeDriver={true}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 }}>
            <Image source={{ uri: item.image1 }} style={{ width: 150, height: 100, marginRight: 10 }} resizeMode='cover' />
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
              <Text>{item.price}</Text>
            </View>
            <Image source={{ uri: item.icon1 }} style={{ width: 20, height: 20, margin: 10 }} resizeMode='cover' />
            <Text style={{ fontSize: 17, margin: 10, fontWeight: 'bold' }}>{item.quantity}</Text>
            <Image source={{ uri: item.icon2 }} style={{ width: 20, height: 20, margin: 10 }} resizeMode='cover' />
          </View>
        </SwipeableRow>
      )}
      keyExtractor={(item) => item.id}
    />


      <View style={styles.body1}>
        <Image
            source={{
              uri: 'https://www.thespruceeats.com/thmb/ao7czXh1afSBamtQnDUilsLD3uc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/doner-kebab-recipe-4171703-hero-01-c14d8b7189df4685a50bae311317f831.jpg' 
            }}
            resizeMode='cover'
            style={{ width: 150, height: 100,}}
        />
        <Text style={{margin: 10, fontSize: 15,}}>
          Kebab
          {"\n"}Illinois
          {"\n"}230$
        </Text>

        <Image
            source={{
              uri: 'https://img.icons8.com/?size=512&id=95770&format=png' 
            }}
            resizeMode='cover'
            style={{ width: 20, height: 20, margin: 10,}}
        />
        <Text style={{fontSize: 17, margin: 10, fontWeight: 'bold'}}>
          1
        </Text>
        <Image
            source={{
              uri: 'https://img.icons8.com/?size=512&id=ATR8qJ0xtuAQ&format=png' 
            }}
            resizeMode='cover'
            style={{ width: 20, height: 20, margin: 10,}}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.item}>
          <Text style={{color: '#fff'}}>Wine</Text>
          <Text style={{color: '#fff'}}>458$</Text>
        </View>
        <View style={styles.item}>
          <Text style={{color: '#fff'}}>Milk Shake</Text>
          <Text style={{color: '#fff'}}>50$</Text>
        </View>
        <View style={styles.item}>
          <Text style={{color: '#fff'}}>Sprite</Text>
          <Text style={{color: '#fff'}}>60$</Text>
        </View>
        <Text style={{color: '#fff'}}>----------------------------------------------------------------------------------------</Text>
        <View style={styles.item}>
          <Text style={{color: '#fff'}}>Passion juice Champagne</Text>
          <Text style={{color: '#fff'}}>448$</Text>
        </View>
          <TextInput
          style={styles.input}
          placeholder="Place your order"
          />
        </View>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  head: {
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  body1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#808080',
    margin: 10,
    padding: 5, 
    borderRadius: 15, 
  },
  scrollPart: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#808080',
    margin: 10,
    padding: 5, 
    borderRadius: 15, 
  },
  footer: {
    backgroundColor: '#50C878',
    paddingHorizontal: 16,
    paddingBottom: 50,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
    marginHorizontal: 15,
    minHeight: 100,
    
  },
  item: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textDecorationColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});
