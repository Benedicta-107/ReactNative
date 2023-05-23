import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import Description from './Description';


export default function Home() {
  return (
    <View style={styles.container}>
      {/*Header part*/}
      <View style = {styles.head}>
        <View style={styles.icons}>
          <Image
            source={{
            uri: 'https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png',
            }}
            style={{ width: 20, height: 20, tintColor: 'black' }}
          />
          <Image
            source={{
            uri: 'https://img.icons8.com/fluency-systems-filled/256/bag-front-view.png',
            }}
            style={{ width: 20, height: 20, tintColor: 'gray' }}
          />
          <Image
            source={{
            uri: 'https://img.icons8.com/material-sharp/256/bell.png',
            }}
            style={{ width: 20, height: 20, tintColor: 'white' }}
          />
      </View>
      
      <View style={styles.texticon}>
        <Text style={styles.text1}>
          Delicious food ready to be {'\n'} delivered for you
          <Image
            source={{
              uri: 'https://img.icons8.com/external-flat-lima-studio/256/external-drink-hotel-flat-lima-studio.png',
            }}
            style={{ width: 20, height: 20 }}
          />
        </Text>
      </View>
      
      <View style={styles.inputHolder}>
        <TextInput style={styles.input} placeholder="Search for food you would eat" />
      </View>
      </View>
{/*BODY PART*/}
    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style = {{fontSize: 20, fontWeight: '900', margin: 5,}}>
      Recommended
      </Text>
      <Text style = {{fontSize: 20, fontWeight: '900', color: '#7FFFD4', margin: 5,}}>
      See All
      </Text>
    </View>

    <View style={styles.body}>
      <ScrollView horizontal>
        <View style={styles.imgCntent}>
          <TouchableOpacity onPress={() => navigation.navigate('Description')}>
              <Image
                source={{
                uri: 'https://realfood.tesco.com/media/images/RFO-1400x919-HalloumiSalad-mini-195074bd-ea01-4b87-8f4b-c3daeb005754-0-1400x919.jpg',
                }}
                style={styles.image}
              />
            <View style = {{position: 'absolute', left: 140, top: 10, backgroundColor: '#fff', borderRadius: 5, width: 50}}>
            <Text style = {{fontWeight: '900',}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/android/256/rating.png',
                }}
                resizeMode="cover"
              // style = {styles. ratingContainer}
                style={{
                width: 14,
                height: 14,
                tintColor: '#FFD700',
                //position: 'absolute',
                }}
              />
             4.7
          </Text>
          </View>
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://adunskitchen.com/wp-content/uploads/2022/06/okro-soup.jpeg',
            }}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.text}>
          Grilled Cheese Salad...
          {"\n"} <Text style = {{color: '#7FFFD4', fontWeight: '600', fontSize: 18,}}>$15.50</Text>
        </Text>
        <Text style={styles.text}>
          Okro Soup
          {"\n"} <Text style = {{color: '#7FFFD4', fontWeight: '600', fontSize: 18,}}>$12.40</Text>
        </Text>
      </View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style = {{fontSize: 20, fontWeight: '900', margin: 5,}}>
            Near you
          </Text>
          <Text style = {{fontSize: 20, fontWeight: '900', color: '#7FFFD4', margin: 5,}}>
             See All
          </Text>
        </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style = {styles.imgCntent}>
            <Image
              source={{
              uri: 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/06/air-fryer-korean-fried-chicken-3701w-2.jpg' 
              }}
              resizeMode='cover'
              style={{ width: 150, height: 150, borderRadius: 10}}
            />
            <Text style={{margin: 15, padding: 5, }}>
              <Text style = {{fontWeight: '900',}}> Big fried Chicken</Text>
              {"\n"} <Text>$4.50</Text>
              {"\n"} <Text>Gaminbar . 9.2 Km</Text>
              {"\n"} 
              <View style = {{position: 'absolute', left: 140, top: 10, backgroundColor: '#fff', borderRadius: 5, width: 50}}>
                <Text style = {{fontWeight: '900',}}>
                <Image
                    source={{
                  uri: 'https://img.icons8.com/android/256/rating.png',
                  }}
                  resizeMode="cover"
                  // style = {styles. ratingContainer}
                  style={{
                  width: 14,
                  height: 14,
                  tintColor: '#FFD700',
                  //position: 'absolute',
                  }}
                />
                  4.7
                </Text>
                </View>
            </Text>
          </View>

            <Text style = {{margin: 15, padding: 5, fontWeight: '900', color: '#7FFFD4'}}>$4.2</Text>
          </View>
        </View>
    </View>
    
  );
};
      

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#7FFFD4',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  texticon: {
    marginRight: 10,
    marginTop: 50,
  },
  text1: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    marginRight: 10,
    marginTop: 10,
  },
  inputHolder: {
    marginBottom: 15,
    marginVertical: 10,
    // marginHorizontal: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 5,
    marginTop: 10,
  },
  body: {
    
    padding: 10,
  },
  imgCntent: {
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    marginRight: 10,
    fontWeight: '900',
    fontSize: 18,
  },
  // ratingContainer: {
  //   position: 'absolute',
  //   bottom: 5,
  //   left: 50,
  //   flexDirection: 'row',
  //   //alignItems: 'center',
  //   //backgroundColor: 'white',
  //   paddingHorizontal: 5,
  //   borderRadius: 5,
  // },
  // ratingText: {
  //   fontSize: 12,
  //   color: '#FFD700',
  //   marginLeft: 3,
  // },
});