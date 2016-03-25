import fs from 'fs'
import parseMIDIFile from './midifile'

fs.readFile('./minute_waltz.mid', function (err, data) {
  if (err) {
    throw err
  }
  let mf = parseMIDIFile(data)
  console.log('header:', mf.header);
  console.log('# tracks:', mf.tracks.size)
})

