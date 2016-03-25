import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import parseMIDIFile from './midifile'

document.addEventListener('DOMContentLoaded', function(){
  //fetch('minute_waltz.mid')
  fetch('mozk545a.mid')
  .then(
    (response) => {
      return response.arrayBuffer()
    },
    (error) => {
      console.error(error)
    }
  )
  .then((ab) => {
    let mf = parseMIDIFile(ab)
    console.log('header:', mf.header)
    console.log('# tracks:', mf.tracks.size)
  })
})