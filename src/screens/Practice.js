import React from 'react';
import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import Share from 'react-native-share';
import files from '../../assests/filebase64';

const Practice = () => {
  const onPressShare = async () => {
    const options = {
      message: 'this is test message',
      url: files.pdf1, // to share pdf file
      // url: files.image1,    // for single file to share
      // urls: [files.image1, files.image2],
    };

    try {
      const shareRes = await Share.open(options);
      console.log(JSON.stringify(shareRes));
    } catch (err) {
      console.log(err);
    }

    // const shareRes = await Share.open(options)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    // console.log('shareres', JSON.stringify(shareRes));
  };

  const onPressMessage = () => {
    Linking.openURL('sms:number=7016484904?body=hiii');
  };

  const onPressSettings = () => {
    Linking.openSettings()
      .then(res => console.log('resSetting', res))
      .catch(err => console.log(err));
  };

  const onPressCall = () => {
    Linking.openURL('tel:7016484904');
  };

  const onPressMail = () => {
    Linking.openURL(
      'mailto:hjpatel1216@gmail.com?subject=testing&body=hiii there im just testing the mail',
    );
  };

  const onPressWhatsapp = () => {
    Linking.openURL(
      'whatsapp://send?phone=9429584537&text=hiii there im just testing the whatsapp',
    );
  };

  const onPressMap = () => {
    Linking.openURL('https://www.google.com/maps/search/?api=1&query=manali');
  };

  const onPressYoutube = () => {
    Linking.openURL('https://www.youtube.com/watch?v=Mq7ycKYiCxY');
  };

  const onPressFacebook = () => {
    Linking.openURL('https://www.facebook.com');
  };

  const onPressGallery = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('photos-redirect://');
    } else if (Platform.OS === 'android') {
      Linking.openURL('content://media/internal/images/media');
    }
  };

  const onPressInstagram = () => {
    Linking.openURL('https://www.instagram.com/mehul_jetani/?hl=en');
  };

  const onPressTwitter = () => {
    Linking.openURL(
      'https://twitter.com/imvkohli#:~:text=Virat%20Kohli%20(%40imVkohli)%20%2F%20Twitter',
    );
  };

  const onPressCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
      })
      .catch(err => console.log(err));

    // ImageCropPicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // })
    //   .then(image => {
    //     console.log(image);
    //   })
    //   .catch(err => console.log(err));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressShare}>
        <Text style={{color: 'white'}}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressMessage}>
        <Text style={{color: 'white'}}>message</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressSettings}>
        <Text style={{color: 'white'}}>setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressCall}>
        <Text style={{color: 'white'}}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressMail}>
        <Text style={{color: 'white'}}>Mail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressWhatsapp}>
        <Text style={{color: 'white'}}>Whatsapp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressMap}>
        <Text style={{color: 'white'}}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressYoutube}>
        <Text style={{color: 'white'}}>Youtube</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressFacebook}>
        <Text style={{color: 'white'}}>Facebbok</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressGallery}>
        <Text style={{color: 'white'}}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressInstagram}>
        <Text style={{color: 'white'}}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressTwitter}>
        <Text style={{color: 'white'}}>Twitter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{backgroundColor: 'gray', padding: 10, borderRadius: 3}}
        onPress={onPressCamera}>
        <Text style={{color: 'white'}}>Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({});
