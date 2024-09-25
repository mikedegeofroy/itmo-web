import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

// Stats

window.addEventListener('load', (event) => {
  document.getElementById('load-time').innerHTML = event.timeStamp.toFixed(2);
});

// Form

const formItems = JSON.parse(localStorage.getItem('formItems')) || [];

function updateFormItemsDisplay() {
  const formItemsDiv = document.getElementById('formItems');
  formItemsDiv.innerHTML = '';

  formItems.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('formItem');
    div.textContent = item;
    formItemsDiv.appendChild(div);
  });
}

updateFormItemsDisplay();

document
  .getElementById('placeholderForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;

    formItems.push(name);

    localStorage.setItem('formItems', JSON.stringify(formItems));

    updateFormItemsDisplay();
    document.getElementById('name').value = '';
  });

// Three JS

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / (window.innerHeight * 0.7),
  0.1,
  1000
);

let object;

const loader = new GLTFLoader();

loader.load(
  `../assets/models/test.glb`,
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio * 2);
renderer.setSize(window.innerWidth, window.innerHeight * 0.7);

new OrbitControls(camera, renderer.domElement);

document.getElementById('container3D').appendChild(renderer.domElement);

camera.position.z = 6;
camera.position.y = 5;

const topLight = new THREE.DirectionalLight(0xffffff, 2);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 2);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / (window.innerHeight * 0.7);
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
});

animate();
