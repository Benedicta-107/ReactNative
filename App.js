import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <View style={styles.icons}>
          <Image
            source={{
              uri: 'https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png'
            }}
            style={{ width: 20, height: 20, tintColor: "black"}}
          />
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-filled/256/bag-front-view.png'
            }}
            style={{ width: 20, height: 20, tintColor: "gray" }}
          />
          <Image
            source={{
              uri: 'https://img.icons8.com/material-sharp/256/bell.png'
            }}
            style={{ width: 20, height: 20, tintColor: "white" }}
          />
        </View>
        <View style = {styles.texticon}>
          <Text style = {styles.text1}>
            Delicious food ready to be 
            {"\n"}
            delivered for you
            <Image
            source={{
              uri: 'https://img.icons8.com/external-flat-lima-studio/256/external-drink-hotel-flat-lima-studio.png'
            }}
            style={{ width: 20, height: 20 }}
          />
            </Text>
        </View>
        <View style = {styles.inputHolder}>
        <TextInput
          style={styles.input}
          placeholder="Search for food you would eat"
      />
        </View>
      </View>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      <StatusBar style="auto" />
  <View style = {styles.Body2}>
    <View style = {styles.textCenter}>
      <Text style = {styles.text2}>
      Recommended
      </Text>
      <Text style = {styles.text3}>
      See All
      </Text>
    </View>
  </View>
  <View style = {styles.img}>
    <View style = {styles.imgCntent}>
      <Image
            source={{
              uri: 'https://realfood.tesco.com/media/images/RFO-1400x919-HalloumiSalad-mini-195074bd-ea01-4b87-8f4b-c3daeb005754-0-1400x919.jpg'
            }}
            style={{ width: 200, height: 200, borderRadius: 10}}
          />
      <Text>
      <Image
            source={{
              uri: 'https://img.icons8.com/android/256/rating.png'
            }}
            style={{ width: 14, height: 14, flexDirection: "row",
            justifyContent: "space-between",
            tintColor: "#FFD700",
            //backgroundColor: "#FFD700",
            //position: "absolute",
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 12,
            top: 12, 
            right: 10 }}
          />{"\n"}4.7
    </Text>
    <Image
            source={{
              uri: 'https://adunskitchen.com/wp-content/uploads/2022/06/okro-soup.jpeg'
            }}
            style={{ width: 200, height: 200, borderRadius: 10 }}
          />
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Text>
        Grilled Cheese Salad...
        {"\n"} $15.50
      </Text>
      <Text>
        Okro Soup
        {"\n"} $12.40
      </Text>
    </View>
  </View>
  <View style = {styles.Body2}>
    <View style = {styles.textCenter}>
      <Text style = {styles.text2}>
      Near you
      </Text>
      <Text style = {styles.text3}>
      See All
      </Text>
    </View>
  </View>
    <View style = {styles.img}>
      <View style = {styles.imgCntent}>
        <Image
            source={{
              uri: 'https://cdn.britannica.com/34/206334-050-7637EB66/French-fries.jpg'
            }}
            style={{ width: 200, height: 200, borderRadius: 10}}
        />
      </View>
    </View>    

</ScrollView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  head: {
    backgroundColor: '#7FFFD4',
    border: 500,
    borderRadius: 10,
    marginTop: 10,
  },
  icons: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  texticon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  text1: {
    color: 'white',
    fontSize: 25,
    fontWeight: "600",
  },
  input: {
    
    width: 300,
    borderWidth: 1,
    borderColor: '#FAFA33',
    borderRadius: 15,
    textAlign: 'center',
    margin: 15,
    padding: 5,
    fontSize: 20,
  },
  textCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text2: {
    fontWeight: 'bold'
  },
  text3: {
    color: '#90ee90',
    fontWeight: 'bold'
  },
  imgCntent: {
    flexDirection: 'row',
    margin: 1,
    padding: 5,
    //justifyContent: 'space-around'
  },
  
});
export default App;