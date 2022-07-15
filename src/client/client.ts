import { BufferIndexedMeshThreeJS } from './../objects/BufferIndexedMeshThreeJS';
import { Mesh } from './../objects/mesh';
import * as THREE from 'three'
import { PlaneGeometry } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Material } from '../objects/Material';

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 10

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


const controls = new OrbitControls(camera, renderer.domElement)

var mesh = new BufferIndexedMeshThreeJS(scene, 20, 30)

var slider = document.getElementById("slider");
if(slider !== null)
    slider.addEventListener('input', mesh.setSegments)



// const light = new THREE.HemisphereLight();
// scene.add(light);



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

    controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()
