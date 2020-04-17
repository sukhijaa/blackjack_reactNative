import { getCardImageFileName } from './cardsUtils';

export default cardId => {
  const imageName = getCardImageFileName(cardId);
  switch (imageName) {
    case 'c1':
      return require('@assets/card-BMPs/11_of_c1.bmp');
    case 'c2':
      return require('@assets/card-BMPs/2_of_c2.bmp');
    case 'c3':
      return require('@assets/card-BMPs/3_of_c3.bmp');
    case 'c4':
      return require('@assets/card-BMPs/4_of_c4.bmp');
    case 'c5':
      return require('@assets/card-BMPs/5_of_c5.bmp');
    case 'c6':
      return require('@assets/card-BMPs/6_of_c6.bmp');
    case 'c7':
      return require('@assets/card-BMPs/7_of_c7.bmp');
    case 'c8':
      return require('@assets/card-BMPs/8_of_c8.bmp');
    case 'c9':
      return require('@assets/card-BMPs/9_of_c9.bmp');
    case 'c10':
      return require('@assets/card-BMPs/10_of_c10.bmp');
    case 'c11':
      return require('@assets/card-BMPs/10_of_c11.bmp');
    case 'c12':
      return require('@assets/card-BMPs/10_of_c12.bmp');
    case 'c13':
      return require('@assets/card-BMPs/10_of_c13.bmp');
    //he  arts
    case 'h1':
      return require('@assets/card-BMPs/11_of_h1.bmp');
    case 'h2':
      return require('@assets/card-BMPs/2_of_h2.bmp');
    case 'h3':
      return require('@assets/card-BMPs/3_of_h3.bmp');
    case 'h4':
      return require('@assets/card-BMPs/4_of_h4.bmp');
    case 'h5':
      return require('@assets/card-BMPs/5_of_h5.bmp');
    case 'h6':
      return require('@assets/card-BMPs/6_of_h6.bmp');
    case 'h7':
      return require('@assets/card-BMPs/7_of_h7.bmp');
    case 'h8':
      return require('@assets/card-BMPs/8_of_h8.bmp');
    case 'h9':
      return require('@assets/card-BMPs/9_of_h9.bmp');
    case 'h10':
      return require('@assets/card-BMPs/10_of_h10.bmp');
    case 'h11':
      return require('@assets/card-BMPs/10_of_h11.bmp');
    case 'h12':
      return require('@assets/card-BMPs/10_of_h12.bmp');
    case 'h13':
      return require('@assets/card-BMPs/10_of_h13.bmp');

    //sp  ades
    case 's1':
      return require('@assets/card-BMPs/11_of_s1.bmp');
    case 's2':
      return require('@assets/card-BMPs/2_of_s2.bmp');
    case 's3':
      return require('@assets/card-BMPs/3_of_s3.bmp');
    case 's4':
      return require('@assets/card-BMPs/4_of_s4.bmp');
    case 's5':
      return require('@assets/card-BMPs/5_of_s5.bmp');
    case 's6':
      return require('@assets/card-BMPs/6_of_s6.bmp');
    case 's7':
      return require('@assets/card-BMPs/7_of_s7.bmp');
    case 's8':
      return require('@assets/card-BMPs/8_of_s8.bmp');
    case 's9':
      return require('@assets/card-BMPs/9_of_s9.bmp');
    case 's10':
      return require('@assets/card-BMPs/10_of_s10.bmp');
    case 's11':
      return require('@assets/card-BMPs/10_of_s11.bmp');
    case 's12':
      return require('@assets/card-BMPs/10_of_s12.bmp');
    case 's13':
      return require('@assets/card-BMPs/10_of_s13.bmp');

    //diamonds
    case 'd1':
      return require('@assets/card-BMPs/11_of_d1.bmp');
    case 'd2':
      return require('@assets/card-BMPs/2_of_d2.bmp');
    case 'd3':
      return require('@assets/card-BMPs/3_of_d3.bmp');
    case 'd4':
      return require('@assets/card-BMPs/4_of_d4.bmp');
    case 'd5':
      return require('@assets/card-BMPs/5_of_d5.bmp');
    case 'd6':
      return require('@assets/card-BMPs/6_of_d6.bmp');
    case 'd7':
      return require('@assets/card-BMPs/7_of_d7.bmp');
    case 'd8':
      return require('@assets/card-BMPs/8_of_d8.bmp');
    case 'd9':
      return require('@assets/card-BMPs/9_of_d9.bmp');
    case 'd10':
      return require('@assets/card-BMPs/10_of_d10.bmp');
    case 'd11':
      return require('@assets/card-BMPs/10_of_d11.bmp');
    case 'd12':
      return require('@assets/card-BMPs/10_of_d12.bmp');
    case 'd13':
      return require('@assets/card-BMPs/10_of_d13.bmp');
    default:
      return require('@assets/card-BMPs/back.bmp');
  }
};
