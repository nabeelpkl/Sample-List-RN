import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import moment from 'moment';
import {
  Screen,
  capitalizeFirstLetter,
  makePhoneCallWith,
} from "utils";
import Images from '../../assets/images';

const letterCircleSize = Screen.width * .08;


const EnquiryItem = (props) => {
  const { item, index, onFavouritPress } = props;
  const { name, postedOn, location, categoryName, tag, providerType, isStarred, circleColor, phoneNumber } = item;

  return (
    <View style={styles.rowContainer}>

      <View >
        <View style={[styles.letterCircle, { backgroundColor: circleColor }]}>
          <Text style={styles.letterText}>
            {name[0].toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={styles.infoContainer}>

        <View style={styles.firstRow}>
          <View style={styles.nameRow}>
            <Text style={styles.nameText}>
              {capitalizeFirstLetter(name.length > 18 ? `${name.slice(0, 18).trim()}...` : name.trim())}
            </Text>
            <Text style={styles.newText}>
              New
            </Text>
          </View>

          <Text style={styles.dateText}>
            {moment(postedOn, "DD/MM/YYYY").fromNow()}
          </Text>
        </View>
        <View style={styles.detailsRow}>
          <View>

            {renderTextRow(categoryName)}

            {renderTextRow(location)}

            <View style={styles.providerRow}>
              <Text>
                {providerType}
              </Text>
              <Image resizeMode='contain' source={Images.institute} style={styles.instituteImage} />
            </View>

            {renderTextRow(tag)}

          </View>

          <View style={styles.actionColomn}>
            <TouchableOpacity onPress={() => makePhoneCallWith(phoneNumber)}>
              <Image resizeMode='contain' source={Images.phoneCall} style={styles.callImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onFavouritPress(index)}>
              <Image resizeMode='contain' source={isStarred ? Images.starSelected : Images.starUnselected} style={styles.favouriteImage} />
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </View>
  );
};

renderTextRow = (data) => (
  <View style={{ marginVertical: 2 }}>
    <Text>
      {data}
    </Text>
  </View>
);

export default EnquiryItem;

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
  },
  letterCircle: {
    height: letterCircleSize,
    width: letterCircleSize,
    borderRadius: letterCircleSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  letterText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 8,
    flex: 1,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
    alignItems: 'center',
    paddingRight: 24,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
  },
  newText: {
    fontSize: 14,
    color: 'orange',
    marginHorizontal: 8,
  },
  dateText: { fontSize: 12, color: 'grey' },
  detailsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  providerRow: { flexDirection: 'row', marginVertical: 2 },
  instituteImage: { marginLeft: 4, height: 16, width: 16 },
  actionColomn: { justifyContent: 'space-between' },
  callImage: { height: 16, width: 16 },
  favouriteImage: { height: 16, width: 16 }
});
