import fetch from 'isomorphic-fetch'
import parseMIDIFile from './midifile'

document.addEventListener('DOMContentLoaded', function(){
  let testUrls = ['minute_waltz.mid', 'mozk545a.mid']

  fetch(testUrls[1])
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