import Vuex from 'vuex'

import dashboard from '~/store/dashboard'
import wiki from '~/store/wiki'
import create_squad from '~/store/create_squad'

const store = () => {
  return new Vuex.Store({
    modules: {
      dashboard,
      create_squad,
      wiki
    }
  })
}

export default store