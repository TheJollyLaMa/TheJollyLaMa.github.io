app.directive('jollySmarthome', function() {
    return {
        restrict: 'E',
        scope: {},
        controller: "SmarthomeController",
        templateUrl: 'js/directives/jollySmarthome.html',
        link: function(scope,elem,attrs) {
            // smarthome connect boolean
            scope.smarthomeConnected = false;
            // smarthome connect
            scope.connectSmarthome = function() {
                // use lat/long to call up local smarthome instance from IPFS and other pertinent chain data
                // ask if the owner wants to connect to verify the smarthome instance with their wallet
                alert("Would you like to connect to your smarthome instance? (Future Smarthome Connect)");
                // set smarthomeConnected to true
                scope.smarthomeConnected = true;
                // once connected, get the smarthome instance data from IPFS
                // set the smarthome instance data to the scope
                scope.connected_home = {
                    "name": "TheJollyLaMA",
                    "acc_hash": "0x0000000000000000000000000000000000000000",
                }
            }


            // three.js scene
            let scene, camera, renderer, cube;
            function init_smarthome () {
                // init scene
                scene = new THREE.Scene();
                // position scene in center of screen
                scene.position.set(0, 1.25, 0);
                // init camera
                camera = new THREE.PerspectiveCamera(
                    75, // Field of view 
                    window.innerWidth / window.innerHeight , // Aspect ratio (width / height)
                    0.1, // near plane (objects closer than this will not be rendered)
                    1000 // far plane not displayed because it's too far
                );

                // init the renderer
                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});

                // set the size of the renderer
                renderer.setSize(window.innerWidth, window.innerHeight, false);

                // add the renderer to the DOM
                document.getElementById("smarthome_placeholder").appendChild(renderer.domElement);

                // create a cube
                const geometry = new THREE.BoxGeometry(2, 2, 2);
                // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
                // set random texture file from the textures folder    
                // const texture = new THREE.TextureLoader().load('img/textures/' + Math.floor(Math.random() * 19) + '.png');
                const texture = new THREE.TextureLoader().load('img/smarthome/' + Math.floor(Math.random() * 11) + '.png');
                // const texture = new THREE.TextureLoader().load('textures/19.gif');
                
                const material = new THREE.MeshBasicMaterial({ map: texture });

                cube = new THREE.Mesh(geometry, material);
                scene.add(cube);

                // set the camera position
                camera.position.z = 5;

            }

            function animate() {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
            }

            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }

            window.addEventListener('resize', onWindowResize, false);

            init_smarthome();
            animate();
            
        }
    }
});