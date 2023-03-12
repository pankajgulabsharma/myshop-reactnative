import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {CachedImage} from '../../elements';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {buttonColor} from '../../../constants/AppStyles';

const Banner = ({bannerData = [], autoplay = true}) => {
  const [banner, setBanner] = useState(bannerData);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swipper}>
          <Swiper
            showsButtons={false}
            autoplay={autoplay}
            autoplayTimeout={2}
            style={styles.subSwipperContainer}>
            {banner.map((item, id) => {
              return (
                <Ripple
                  rippleColor={buttonColor.PRIMARY}
                  onPress={() => {}}
                  key={id}>
                  <CachedImage
                    imageStyle={styles.imageBanner}
                    imageURL={item}
                  />
                </Ripple>
              );
            })}
          </Swiper>
        </View>
      </View>
    </ScrollView>
  );
};

export default Banner;
