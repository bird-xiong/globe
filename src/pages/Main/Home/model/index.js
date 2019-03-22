
import request from '~/lsco/request'

export default {
  namespace: 'home',
  state: {
    fetching: false // 加载进度条
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    * fetch({ payload }, { call, put }) {
      const res = yield call(getAppIndexRecommendInfo, { app_version: '3.0.3',
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
      console.log('res', res)
      yield put({ type: 'updateState', payload: { fetching: true } })
    }
  }
}

export async function getAppIndexRecommendInfo(payload) {
  return request.Test.getAppIndexRecommendInfo(payload)
}
