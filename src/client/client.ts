import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BranchData, threeGenerator } from './../drawThree/branch'
import { branch } from '../drawThree/branch'
import { helloSceneGraph } from '../simple/hello-sceen-graph'
import { helloSimpleThree } from '../simple/hekkom-simple.tree'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
)

const renderer = new THREE.WebGLRenderer()
const controls = new OrbitControls(camera, renderer.domElement)

camera.position.z = 20

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const data: BranchData = {
  pos: {
    start: { vec: new THREE.Vector3(0, 0, 0) },
    end: { vec: new THREE.Vector3(0, 0, 10) },
  },
  radiusPair: {
    startRadius: 0.5,
    endRadius: 0.5,
  },
  depth: 5,
  angle: Math.PI / 2,
  length: 10,
}

const gridHelper = new THREE.GridHelper(4, 4)
scene.add(gridHelper)

//const generator = threeGenerator(scene, data)
//helloSceneGraph(scene)
helloSimpleThree(scene)

console.log('done creating the wanted option')

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}

function animate() {
  requestAnimationFrame(animate)

  // cube.rotation.x += 0.01
  // cube.rotation.y += 0.01

  render()
}

function render() {
  renderer.render(scene, camera)
}

animate()
