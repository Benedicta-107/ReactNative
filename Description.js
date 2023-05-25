import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

//const imagePath = require('C:\\Users\\admin\\Desktop\\RnEg\\Assignment\\myAssignment\\TheFoodApp\\location pointer.png');
class Description extends React.Component {
  render() {
    return (
      <View >
        {/* <Text>Description Screen</Text> */}
        <Image
                source={{
                uri: 'https://realfood.tesco.com/media/images/RFO-1400x919-HalloumiSalad-mini-195074bd-ea01-4b87-8f4b-c3daeb005754-0-1400x919.jpg',

                resizeMode:"cover"
              }}
                style={styles.image}
              />
            <View style = {{position: 'absolute', left: 10, top: 30, backgroundColor: '#fff', borderRadius: 5,}}>
            <Text style = {{fontWeight: '900',}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/?size=512&id=15815&format=png',
                }}
                resizeMode="cover"
              // style = {styles. ratingContainer}
                style={{
                width: 35,
                height: 15,
                //tintColor: '#FFD700',
                //position: 'absolute',
                }}
              />
              </Text>
            </View>

            <View style = {{position: 'absolute', right: 20, top: 30, backgroundColor: '#fff', borderRadius: 5,}}>
            <Text style = {{fontWeight: '900',}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/?size=512&id=vOrtzt9yBh1X&format=png',
                }}
                //resizeMode="cover"
              // style = {styles. ratingContainer}
                style={{
                width: 25,
                height: 20,
                //tintColor: '#FFf',
                //position: 'absolute',
                }}
              />
              </Text>
      </View>
      <View style = {{flexDirection: 'row', margin: 10, justifyContent: 'space-between'}}>
      <Text style = {{fontWeight: '600', fontSize: 25}}>
          Grilled Cheese Salad 
          {"\n"}with Cream
          {/* {"\n"} <Text style = {{color: '#7FFFD4', fontWeight: '700', fontSize: 25}}>$15.50</Text> */}
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

      <View style = {{flexDirection: 'row', marging: 10, padding: 10, justifyContent: 'space-between'}}>
      <Text style = {{fontWeight: '600', margin: 10}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/?size=512&id=7880&format=png',
                }}
                resizeMode="cover"
              // style = {styles. ratingContainer}
                style={{
                width: 20,
                height: 14,
                tintColor: '#FFA500',
                //position: 'absolute',
                }}
              /> 2.3km
          </Text>
          <Text style = {{fontWeight: '600', margin: 10,}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/android/256/rating.png',
                }}
                resizeMode="cover"
              // style = {styles. ratingContainer}
                style={{
                width: 14,
                height: 14,
                tintColor: '#FFA500',
                //position: 'absolute',
                }}
              /> 4.7 ratings
          </Text>
          <Text style = {{fontWeight: '600', margin: 10,}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/?size=512&id=cxECyX0bJFjA&format=png',
                }}
                resizeMode="cover"
              // style = {styles. ratingContainer}
                style={{
                width: 14,
                height: 14,
                tintColor: '#FFA500',
                //position: 'absolute',
                }}
              /> 20 - 24 min
          </Text>
      </View>
      <View style={{padding:5, margin:5}}>
        <Text style={{fontWeight: '900', fontSize: 19}}>Description</Text>
        <Text style={{fontSize: 18,}}>Originating from Cyprus semisoft and slightly {"\n"}
              nutty halloumi cheese resits melting when {"\n"} 
              heated so you can luxuriate <Text style={{color: '#7FFFD4', fontWeight: '700'}}>Read More..</Text></Text>
      </View>

      <View>
          <ImageBackground
            source={{
            uri: 'https://img.icons8.com/?size=512&id=WSLDxipXclTJ&format=png',
            }}
            //resizeMode="cover"
            
            style={{
                //justifyContent: 'center',
                alignSelf: 'center',
                top: 25,
                width: 30,
                height: 20,
                //marginRight: 60,
                tintColor: '#808080',
                //position: 'absolute',
              }}
          />
          <View style={{flexDirection: 'row', top: 20,}}>
            <View 
            style={{flexDirection: 'row', 
            justifyContent: 'space-around', 
            alignItems: 'center',
            left: 10, 
            width: 150,
            borderWidth: 1, 
            borderColor: '#FFA500',
            backgroundColor: '#fff',
            borderRadius: 25,}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/?size=512&id=93226&format=png',
                }}
                resizeMode="cover"
              // style = {styles. ratingContainer}
              style={{
                margin:10,
                width: 15,
                height: 14,
                tintColor: '#FFA500',
                //position: 'absolute',
                }}
              />
              <Text style={{color: '#FFA500', margin: 10,}}>Chat</Text>
          </View>
          <View 
              style={{backgroundColor: '#FFA500', 
                border: 1,
                width: 150,
                alignItems: 'center', 
                borderRadius: 25, 
                left: 100}}>
            <Text style={{color: '#fff', margin: 10, padding: 5,}}>Add Cart</Text>
          </View>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 250,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 5,
    
    //style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  },
})
export default Description;
