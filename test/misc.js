var createContext = require('./util/create-context')
var createREGL = require('../../regl')
var tape = require('tape')

tape('misc state', function (t) {
  var gl = createContext(16, 16)
  var regl = createREGL(gl)

  // TODO

  // dither
  // frontFace
  // lineWidth
  // depth.range

  // static
  // dynamic 1-shot
  // dynamic batch

  regl.destroy()
  t.end()
})
