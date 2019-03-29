/**
 * Created by hebao on 2018/3/22.
 */
import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

const Style = {
  /** 字体大小**/
  font: {
    Title1: 30,
    Title2: 20,
    Title3: 18,
    Title4: 17,

    Subtle1: 16,
    Subtle2: 15,

    Body1: 14,
    Body2: 13,

    Small1: 12,
    Small2: 11,

    /** 列表项文字字号**/
    DL1: 16,
    DL2: 14,
    DL3: 13,
    DL4: 12,

    SL1: 16,
    SL2: 14,

    CL1: 16,
    CL2: 14,

    EL1: 16,
    EL2: 14,

    /** 按钮文字字号**/
    btn_l: 17,
    btn_m: 16,
    btn_s: 13,
    btn_xs: 14,
    wbtn_l: 16, // 纯文字按钮-大
    wbtn_s: 13, // 纯文字按钮-小
    btn_bottom: 17,
    btn_input: 12
  },
  /** 颜色值**/
  color: {
    /** app通用色**/
    gray_bg: '#f7f7f7',
    white_bg: '#ffffff',
    black_bg: '#1a1a1a',
    gray_line: '#eaeaea',
    gray_press: '#f2f2f2',
    white_bar: '#fafafa',
    white_nvg: '#ffffff',
    yellow_main: '#ffc040',
    red_main: '#ff6446',
    green_status: '#41c557',
    green_itembg: '#83de8b',
    gray_status: '#d9d9d9',

    /** app文字色**/
    wwhite: '#ffffff',
    wgreen_main: '#89b178',
    wgray_main: '#b8b8b8',
    wgray_sub: '#d9d9d9',
    wgray_bar: '#aaaaaa',
    wblack: '#000000',
    wred: '#f85f30',
    worange: '#ffad2c',
    wgreen: '#41c557',
    wwhite_alpha: '#ffffff',

    /** app按钮色**/
    btny: '#ffba00',
    btny_p: '#feb23a',
    btny_d: '#ffe1a4',
    btnr: '#ff6446',
    btnr_p: '#ff533c',
    btnr_d: '#ffc8bd',

    /** 5.0之前版本兼容**/
    btn_d: '#ffc8bd',

    common_gray_bg: '#EFEFEF',
    common_gray_fa: '#FAFAFA',

    common_gray_line: '#EAEAEA', // 分割线、衬线
    common_gray_press: '#F2F2F2', // 列表项的按下颜色
    common_green_status: '#41C557', // 绿色状态色
    common_green_item_bg: '#83de8b', // 我的投资还款进度条背景、投资列表还款圆、投资详情还款圆

    text_red_w: '#F85F30', // 金额文字主题色
    text_black_w: '#000000', // 黑色文字、主要内容
    text_gray_w_main: '#B8B8B8', // 灰色文字、副标题、副文
    text_white_w: '#FFFFFF', // 白色文字

    // 渐变色
    gradient_yellow_s: '#ffcb40',
    gradient_yellow_e: '#ff9140',

    gradient_yellow_s_p: '#fab637',
    gradient_yellow_e_p: '#f8791a',

    gradient_red_s: '#ffa04b',
    gradient_red_e: '#fa4f3e',

    gradient_red_s_p: '#fe8b25',
    gradient_red_e_p: '#f93d1e'
  },
  /** 边框色值**/
  borderColor: {
    yellow: {
      borderColor: '#ffc040',
      color: '#ffad2c'
    },
    red: {
      borderColor: '#f85f30',
      color: '#ff6446'
    },
    wgray_main: {
      borderColor: '#b8b8b8',
      color: '#b8b8b8'
    }
  },
  /** 渐变类型**/
  gradientColor: {
    yellow: {
      colors: ['#ffcb40', '#ff9140'],
      underlayColors: ['#fab637', '#f8791a'],
      disabledColors: ['#ffe6a7', '#ffcaa5']
    },
    red: {
      colors: ['#ffa04b', '#fa4f3e'],
      underlayColors: ['#fe8b25', '#f93d1e'],
      disabledColors: ['#fddec3', '#fdc7c1']
    },
    green: {
      colors: ['#60d760', '#3ebc70'],
      underlayColors: ['#60d760', '#3ebc70'],
      disabledColors: ['#60d760', '#3ebc70']
    }
  },
  /** 按钮类型**/
  button: {
    btn_l: {
      height: 44,
      borderRadius: 22,
      width: width - 24,
      marginHorizontal: 12,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    btn_m: {
      height: 36,
      borderRadius: 18,
      width: 180,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    btn_s: {
      height: 34,
      borderRadius: 17,
      minWidth: 115,
      paddingHorizontal: 12,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    btn_xs: {
      height: 36,
      borderRadius: 18,
      width: 110,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    btn_bottom: {
      height: 44,
      width: width,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    btn_input: {
      width: 68,
      height: 25,
      borderRadius: 12,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }
  },
  /** 间距规范**/
  gap: {
    gap_edge: 12,
    gap_item: 15,
    gap_category: 30,
    gap_section: 15,
    h_list: 44
  },

  /** 自定义通用UI组件**/
  /** 头栏**/
  nav: {
    height: 44,
    nav_icon: 22,
    fontSize: 17
  },
  layout: {
    ccc: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    ccfs: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    ccfe: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    cfsc: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    cfsfs: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    cfsfe: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
    },
    cfec: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cfefs: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    },
    cfefe: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    rcc: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    rcfs: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    rcfe: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    rfsc: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    rfsfs: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    rfsfe: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-end'
    },
    rfec: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    rfefs: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    },
    rfefe: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    rsbc: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    rsac: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    csbc: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }
}

export default Style
