import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {CachedImage} from '../../elements';
import styles from './styles';
import Ripple from 'react-native-material-ripple';
import {buttonColor} from '../../../constants/AppStyles';

const Banner = ({
  bannerData = [],
  autoplay = true,
  showsButtons = false,
  bannerContainerStyle = {},
  bannerSubContainerStyle = {},
  bannerImage = {},
  resizeMode,
}) => {
  const [banner, setBanner] = useState(bannerData);

  return (
    <ScrollView>
      <View style={[styles.container, bannerContainerStyle]}>
        <View style={styles.swipper}>
          <Swiper
            showsButtons={showsButtons}
            autoplay={autoplay}
            autoplayTimeout={2}
            style={[styles.subSwipperContainer, bannerSubContainerStyle]}>
            {banner.map((item, id) => {
              return (
                <Ripple
                  rippleColor={buttonColor.PRIMARY}
                  onPress={() => {}}
                  key={id}>
                  <CachedImage
                    imageStyle={[styles.imageBanner, bannerImage]}
                    imageURL={item}
                    resizeMode={resizeMode}
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
