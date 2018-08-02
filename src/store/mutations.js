const mutations = {
  setCity (state, city) {
    state.city = city
    localStorage.setItem('city', city)
  }
}

export default mutations
