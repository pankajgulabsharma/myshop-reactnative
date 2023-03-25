import React, {useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const CachedImage = ({
  imageStyle,
  imageURL,
  showLoader = true,
  resizeMode = FastImage.resizeMode.contain,
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={imageStyle}>
      {imageURL == undefined || imageURL == null || imageURL.length == 0 ? (
        <Image
          resizeMode="cover"
          style={imageStyle}
          source={require('../../assets/images/category/bags.jpg')}
        />
      ) : (
        <FastImage
          style={imageStyle}
          source={
            typeof imageURL != 'string'
              ? imageURL
              : {
                  uri: imageURL,
                }
          }
          resizeMode={resizeMode}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}>
          {showLoader && imageURL !== null ? (
            <ActivityIndicator
              style={{alignSelf: 'center', justifyContent: 'center'}}
              animating={loading}
            />
          ) : null}
        </FastImage>
      )}
    </View>
  );
};

export default CachedImage;

const styles = StyleSheet.create({});
