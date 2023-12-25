import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const circleGeometry1 = new THREE.CircleGeometry(3, 64);
const circleMaterial1 = new THREE.MeshBasicMaterial({ color: 0x76C3D6, transparent: true, opacity: 0 });
const circle1 = new THREE.Mesh(circleGeometry1, circleMaterial1);
scene.add(circle1);

const circleGeometry2 = new THREE.CircleGeometry(5, 64);
const circleMaterial2 = new THREE.MeshBasicMaterial({ color: 0x008BAD, transparent: true, opacity: 0.5 });
const circle2 = new THREE.Mesh(circleGeometry2, circleMaterial2);
scene.add(circle2);

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

const fadeIn = () => {
    const tween = new TWEEN.Tween(circleMaterial1)
        .to({ opacity: 0.5 }, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
            fadeOut();
            text1.style.display = 'none';
            text2.style.display = 'block';
        });
    tween.start();
};

const fadeOut = () => {
    const tween = new TWEEN.Tween(circleMaterial1)
        .to({ opacity: 0 }, 2000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
            fadeIn();
            text1.style.display = 'block';
            text2.style.display = 'none';
        });
    tween.start();
};

fadeIn();

const animate = () => {
    requestAnimationFrame(animate);
    TWEEN.update();
    renderer.render(scene, camera);
};
animate();
