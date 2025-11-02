// === Setup Scene 3D ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-bg'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 0);

// === Lighting ===
const ambientLight = new THREE.AmbientLight(0x00fff7, 1);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0x00fff7, 2);
pointLight.position.set(2, 3, 4);
scene.add(pointLight);

// === Sphere ===
const geometry = new THREE.SphereGeometry(1, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: 0x00fff7,
  wireframe: true,
  transparent: true,
  opacity: 0.4,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 3;

// === Animation Loop ===
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.005;
  sphere.rotation.y += 0.008;
  renderer.render(scene, camera);
}
animate();

// === Responsive ===
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// === Terminal Simulation ===
const terminalOutput = document.getElementById('terminal-output');
const btn = document.getElementById('action-btn');
const hologramLines = [
  "Loading 3D neural shaders...",
  "Activating hologram matrix...",
  "Synchronizing data cores...",
  "Rendering digital sphere...",
  "System ready ✅",
];

btn.addEventListener('click', async () => {
  terminalOutput.textContent = "";
  for (const line of hologramLines) {
    terminalOutput.textContent += line + "\n";
    await new Promise(r => setTimeout(r, 700));
  }
  terminalOutput.textContent += "\n✨ Welcome to the ViosFDF holographic environment!";
});
