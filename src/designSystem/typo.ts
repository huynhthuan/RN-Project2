import {Typography} from 'react-native-ui-lib';

const baseFont = 'Poppins-';
const fonts = {
  regular: `${baseFont}Regular`,
  bold: `${baseFont}Bold`,
  medium: `${baseFont}Medium`,
  semiBold: `${baseFont}SemiBold`,
  black: `${baseFont}Black`,
};

Typography.loadTypographies({
  r10: {fontFamily: fonts.regular, fontSize: 10},
  b10: {fontFamily: fonts.bold, fontSize: 10},
  m10: {fontFamily: fonts.medium, fontSize: 10},
  sm10: {fontFamily: fonts.semiBold, fontSize: 10},

  r12: {fontFamily: fonts.regular, fontSize: 12},
  b12: {fontFamily: fonts.bold, fontSize: 12},
  m12: {fontFamily: fonts.medium, fontSize: 12},
  sm12: {fontFamily: fonts.semiBold, fontSize: 12},

  r14: {fontFamily: fonts.regular, fontSize: 14},
  b14: {fontFamily: fonts.bold, fontSize: 14},
  m14: {fontFamily: fonts.medium, fontSize: 14},
  sm14: {fontFamily: fonts.semiBold, fontSize: 14},

  r16: {fontFamily: fonts.regular, fontSize: 16},
  b16: {fontFamily: fonts.bold, fontSize: 16},
  m16: {fontFamily: fonts.medium, fontSize: 16},
  sm16: {fontFamily: fonts.semiBold, fontSize: 16},

  r20: {fontFamily: fonts.regular, fontSize: 20},
  b20: {fontFamily: fonts.bold, fontSize: 20},
  m20: {fontFamily: fonts.medium, fontSize: 20},
  sm20: {fontFamily: fonts.semiBold, fontSize: 20},

  r24: {fontFamily: fonts.regular, fontSize: 24},
  b24: {fontFamily: fonts.bold, fontSize: 24},
  m24: {fontFamily: fonts.medium, fontSize: 24},
  sm24: {fontFamily: fonts.semiBold, fontSize: 24},

  r32: {fontFamily: fonts.regular, fontSize: 32},
  b32: {fontFamily: fonts.bold, fontSize: 32},
  m32: {fontFamily: fonts.medium, fontSize: 32},
  sm32: {fontFamily: fonts.semiBold, fontSize: 32},

  r36: {fontFamily: fonts.regular, fontSize: 36},
  b36: {fontFamily: fonts.bold, fontSize: 36},
  m36: {fontFamily: fonts.medium, fontSize: 36},
  sm36: {fontFamily: fonts.semiBold, fontSize: 36},
});
