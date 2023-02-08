import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default {
  px3: wp(0.72),
  px5: wp(1.2),
  px7: wp(1.69),
  px8: wp(1.93),
  px10: wp(2.41),
  px12: wp(2.9),
  px13: wp(3.14),
  px14: wp(3.38),
  px15: wp(3.62),
  px16: wp(3.87),
  px17: wp(4.1),
  px18: wp(4.35),
  px20: wp(4.83),
  px24: wp(5.8),
  px26: wp(6.3),
  px30: wp(7.25),
  px32: wp(7.73),
  px36: wp(8.7),
  px(size) {
    return wp(size * 0.24);
  },
  width(value) {
    return wp(value);
  },
  height(value) {
    return hp(value);
  },
};
