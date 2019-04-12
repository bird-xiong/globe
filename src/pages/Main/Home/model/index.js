
import request from '~/lsco/request'
const REQUEST_RECOMMEND_DATA = { app_version: '3.0.3', cityId: '2223', client_secret: '020a468f3e48dfa9a3a82098a32c55ea', client_type: 'iphone', distinctId: 'CABDD457-65DC-4ACA-89AF-9A53DCA1E496', lang: 'zh', latitude: '22.541082', longitude: '113.940150', model: 'iPod touch 6', os_version: '12.1', screen_size: '320x568', udid: '884b435b4158c0ef8047de147cfc149f7443aab3', unique_token: '884b435b4158c0ef8047de147cfc149f7443aab3', page: 1, v: '2' }
const REQUEST_CITY_DATA = { 'app_version': '3.0.3', 'cityId': '2223', 'client_secret': '9e3e5d88f6d126039b3d1a5ecf8e70f6', 'client_type': 'iphone', 'distinctId': 'CABDD457-65DC-4ACA-89AF-9A53DCA1E496', 'lang': 'zh', 'latitude': '22.541047', 'longitude': '113.940157', 'model': 'iPod touch 6', 'os_version': '12.1', 'screen_size': '320x568', 'session_code': '6d9126b7ed8a85d981fcab44237e4098', 'udid': '884b435b4158c0ef8047de147cfc149f7443aab3', 'unique_token': '884b435b4158c0ef8047de147cfc149f7443aab3', 'v': '2' }
const REQUEST_INDEX_DATA = { app_version: '3.0.3', cityId: '2223', client_secret: '9232d8a84a62c9f3914e5a7a499ea616', client_type: 'iphone', distinctId: 'CABDD457-65DC-4ACA-89AF-9A53DCA1E496', lang: 'zh', latitude: '22.541031', longitude: '113.940083', model: 'iPod touch 6', os_version: '12.1', page: 1, screen_size: '320x568', session_code: '6d9126b7ed8a85d981fcab44237e4098', udid: '884b435b4158c0ef8047de147cfc149f7443aab3', unique_token: '884b435b4158c0ef8047de147cfc149f7443aab3', v: '2' }
const REQUEST_INDEX_DATA_2 = { app_version: '3.0.3', cityId: '2223', client_secret: '4676014291c963d97fca9a99f10db127', client_type: 'iphone', distinctId: 'CABDD457-65DC-4ACA-89AF-9A53DCA1E496', lang: 'zh', latitude: '22.541035', longitude: '113.940103', model: 'iPod touch 6', os_version: '12.1', page: 2, screen_size: '320x568', session_code: '6d9126b7ed8a85d981fcab44237e4098', udid: '884b435b4158c0ef8047de147cfc149f7443aab3', unique_token: '884b435b4158c0ef8047de147cfc149f7443aab3', v: '2' }
export default {
  namespace: 'home',
  state: {
    recommend: {}, // 推荐信息
    cityInfo: {},
    indexInfo: []
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
    incrementIndexInfo(state, { payload }) {
      return { ...state, indexInfo: [].concat.call(state.indexInfo, payload) }
    }
  },
  effects: {
    * fetch({ payload }, { call, put, take, all }) {
      getAppIndexRecommendInfo(REQUEST_RECOMMEND_DATA)
      const [recommend, cityInfo, indexInfo] = yield all([call(fetchRecommendInfo, ...arguments), call(fetchCityInfo, ...arguments), call(fetchIndexInfo, ...arguments)])
      yield put({ type: 'updateState', payload: { recommend, cityInfo, indexInfo } })
      if (payload && payload.finished) payload.finished()
    },
    * fetchIndexInfo2({ payload }, { call, put, take, all }) {
      const { status, data } = yield call(getIndexInfo, REQUEST_INDEX_DATA_2)
      if (status) yield put({ type: 'incrementIndexInfo', payload: data.rows })
      if (payload && payload.finished) payload.finished(status && data.hasMore)
    }
  }
}
function * fetchRecommendInfo({ payload }, { call, put }) {
  const { status, data } = yield call(getAppIndexRecommendInfo, REQUEST_RECOMMEND_DATA)
  // if (status) yield put({ type: 'updateState', payload: { recommend: data } })
  if (status) return data
}
function * fetchCityInfo({ payload }, { call, put }) {
  const { status, data } = yield call(getCityInfo, REQUEST_CITY_DATA)
  // if (status) yield put({ type: 'updateState', payload: { cityInfo: data } })
  if (status) return data
}
function * fetchIndexInfo({ payload }, { call, put }) {
  const { status, data } = yield call(getIndexInfo, REQUEST_INDEX_DATA)
  // if (status) yield put({ type: 'updateState', payload: { indexInfo: data } })
  if (status) return data.rows
}
export async function getAppIndexRecommendInfo(payload) {
  return request.Test.getAppIndexRecommendInfo(payload)
}
export async function getCityInfo(payload) {
  return request.Test.getCityInfo(payload)
}
export async function getIndexInfo(payload) {
  return request.Test.getIndexInfo(payload)
}
