import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Description extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Description Screen</Text>
        <Image
                source={{
                uri: 'https://realfood.tesco.com/media/images/RFO-1400x919-HalloumiSalad-mini-195074bd-ea01-4b87-8f4b-c3daeb005754-0-1400x919.jpg',
                }}
                style={styles.image}
              />
            <View style = {{position: 'absolute', left: 10, top: 10, backgroundColor: '#fff', borderRadius: 5, width: 30}}>
            <Text style = {{fontWeight: '900',}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/?size=512&id=15815&format=png',
                }}
                resizeMode="cover"
              // style = {styles. ratingContainer}
                style={{
                width: 30,
                height: 14,
                //tintColor: '#FFD700',
                //position: 'absolute',
                }}
              />
              </Text>
            </View>

            <View style = {{position: 'absolute', right: 10, top: 10,   }}>
            <Text style = {{fontWeight: '900',}}>
              <Image
                source={{
                uri: 'https://img.icons8.com/?size=512&id=vOrtzt9yBh1X&format=png',
                }}
                resizeMode="cover"
              // style = {styles. ratingContainer}
                style={{
                width: 20,
                height: 20,
                //tintColor: '#FFD700',
                //position: 'absolute',
                }}
              />
              </Text>
      </View>
      <View style = {{flexDirection: 'row', margin: 10,}}>
      <Text style={styles.text}>
          Grilled Cheese Salad with Cream
          {"\n"} <Text style = {{color: '#7FFFD4', fontWeight: '700', fontSize: 25}}>$15.50</Text>
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

      <View style = {{flexDirection: 'row', marging: 10, padding: 10, justifyContent: 'space-around'}}>
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
              />
             2.3km
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
              />
             4.7 ratings
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
              />
             20 - 24 min
          </Text>
      </View>
      <View>
        <Text style={{fontWeight: '900'}}>Description</Text>
        <Text>Originating from Cyprus semisoft and slightly nutty halloumi cheese resits melting when heated so you can luxuriate<Text style={{color: '#7FFFD4', fontWeight: '700'}}>Read More..</Text></Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
})
export default Description;
