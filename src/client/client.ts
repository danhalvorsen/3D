import { BranchData, threeGenerator } from './../drawThree/branch'
import * as THREE from 'three'
import { materials } from '../drawThree/materials'
import { branch } from '../drawThree/branch'
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
)
camera.position.z = 20

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()

const cube = new THREE.Mesh(geometry, materials().basicMaterial)
scene.add(cube)

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

//scene.add(branch(data))

const gridHelper = new THREE.GridHelper(4, 4)
scene.add(gridHelper)

const generator = threeGenerator(scene, data)

console.log('done creating the three')

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  render()
}

function render() {
  renderer.render(scene, camera)
}

animate()
