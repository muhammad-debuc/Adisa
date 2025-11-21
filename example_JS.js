/* To apply this animation to your website, paste the following into your HTML code:
<iframe src="https://codepen.io/tommyho/full/rNrLvqp" width=500 height=500></iframe>
*/

/* Sources: https://github.com/klevron/threejs-toys */
/* Revised by: tommyho510@gmail.com */

import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})