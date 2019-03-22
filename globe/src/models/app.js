
export default {
  namespace: 'app',
  state: {
    fetching: false // 加载进度条
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    * changeText({ payload }, { call, put }) {
      console.log('effects')
      yield put({ type: 'updateState', payload: { fetching: true } })
    }
  }
}
