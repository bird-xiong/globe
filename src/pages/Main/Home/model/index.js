
import request from '~/lsco/request'

export default {
  namespace: 'home',
  state: {
    recommend: {}, // 推荐信息
    cityInfo: {}
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    * init({ payload }, { call, put }) {
      yield put({ type: 'fetchRecommendInfo' })
      yield put({ type: 'fetchCityInfo' })
    },
    * fetchRecommendInfo({ payload }, { call, put }) {
      const { status, data } = yield call(getAppIndexRecommendInfo, { app_version: '3.0.3',
        cityId: '2223',
        client_secret: '020a468f3e48dfa9a3a82098a32c55ea',
        client_type: 'iphone',
        distinctId: 'CABDD457-65DC-4ACA-89AF-9A53DCA1E496',
        lang: 'zh',
        latitude: '22.541082',
        longitude: '113.940150',
        model: 'iPod touch 6',
        os_version: '12.1',
        screen_size: '320x568',
        udid: '884b435b4158c0ef8047de147cfc149f7443aab3',
        unique_token: '884b435b4158c0ef8047de147cfc149f7443aab3',
        page: 1,
        v: '2' })
      if (status) yield put({ type: 'updateState', payload: { recommend: data } })
    },
    * fetchCityInfo({ payload }, { call, put }) {
      const { status, data } = yield call(getCityInfo, { 'app_version': '3.0.3', 'cityId': '2223', 'client_secret': '9e3e5d88f6d126039b3d1a5ecf8e70f6', 'client_type': 'iphone', 'distinctId': 'CABDD457-65DC-4ACA-89AF-9A53DCA1E496', 'lang': 'zh', 'latitude': '22.541047', 'longitude': '113.940157', 'model': 'iPod touch 6', 'os_version': '12.1', 'screen_size': '320x568', 'session_code': '6d9126b7ed8a85d981fcab44237e4098', 'udid': '884b435b4158c0ef8047de147cfc149f7443aab3', 'unique_token': '884b435b4158c0ef8047de147cfc149f7443aab3', 'v': '2' })
      if (status) yield put({ type: 'updateState', payload: { cityInfo: data } })
    }
  }
}

export async function getAppIndexRecommendInfo(payload) {
  return request.Test.getAppIndexRecommendInfo(payload).catch(e => null)
}

export async function getCityInfo(payload) {
  return request.Test.getCityInfo(payload).catch(e => null)
}
