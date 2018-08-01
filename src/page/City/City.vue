<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '@/components/CityHeader'
import CitySearch from '@/components/CitySearch'
import CityList from '@/components/CityList'
import CityAlphabet from '@/components/CityAlphabet'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(res => {
        console.log(res)
        this.cities = res.data.data.cities
        this.hotCities = res.data.data.hotCities
      })
    },
    handleLetterChange (letter) {
      console.log(letter)
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
