import React from "react";
import {
  View,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  Screen,
  capitalizeFirstLetter,
  makePhoneCallWith,
} from "utils";
import moment from 'moment';
import Images from '../../assets/images';

const letterCircleSize = Screen.width * .08;


const StudentItem = (props) => {
  const { item, onPress } = props;
  const { name, category, batchName, phoneNumber, platformTag, circleColor } = item;

  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
      <View style={styles.rowContainer}>
        <View >
          <View style={[styles.letterCircle, { backgroundColor: circleColor }]}>
            <Text style={styles.letterText}>
              {name[0].toUpperCase()}
            </Text>
          </View>
        </View>

        <View style={styles.infoColomn}>
          <View style={styles.mainRow}>
            <View style={styles.nameRow}>
              <Text style={styles.nameText}>
                {capitalizeFirstLetter(name.length > 18 ? `${name.slice(0, 18).trim()}...` : name.trim())}
              </Text>
              {platformTag ? (
                <Text style={styles.tagText}>
                  {platformTag.toUpperCase()}
                </Text>
              ) : null}
            </View>
            <Text style={styles.dateText}>
              {/* No Data Available from API */}
              {/* moment(postedOn, "DD/MM/YYYY").fromNow() */ "12/08/2019"}
            </Text>
          </View>

          {this.renderTextRow(category)}
          {this.renderTextRow(batchName)}
        </View>

        <View style={styles.actionColomn}>
          <TouchableOpacity onPress={() => console.log("Add dropdown menu")}>
            <Image resizeMode='contain' source={Images.menu} style={styles.menuImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => makePhoneCallWith(phoneNumber)}>
            <Image resizeMode='contain' source={Images.phoneCall} style={styles.callImage} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

renderTextRow = (data) => (
  <View style={styles.textRow}>
    <Text>
      {data}
    </Text>
  </View>
);

export default StudentItem;

const styles = StyleSheet.create({
  rowContainer: { flexDirection: 'row', padding: 8 },
  letterCircle: {
    height: letterCircleSize,
    width: letterCircleSize,
    borderRadius: letterCircleSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  letterText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  infoColomn: { padding: 8, flex: 1 },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
    alignItems: 'center',
    paddingRight: 24,
  },
  dateText: { fontSize: 12, color: 'grey' },
  textRow: { marginVertical: 2 },
  actionColomn: { justifyContent: 'space-around' },
  menuImage: { height: 18, width: 18, tintColor: 'grey' },
  callImage: { height: 18, width: 18 },
  nameText: { fontSize: 18, fontWeight: '500' },
  nameRow: { flexDirection: 'row', alignItems: "center", justifyContent: "flex-start" },
  tagText: {
    fontSize: 12,
    color: '#e8732c',
    marginHorizontal: 4,
  },
});