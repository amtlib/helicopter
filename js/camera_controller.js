function CameraController(camera, model) {

    var camVect;
    var camPos;
    var lookAtVect;
    var lookAtPos;

    this.update = function () {
        switch (CameraModes.CURRENT_MODE) {
            case CameraModes.CAMERA_MODES[0]:
                camVect = new THREE.Vector3(0, -2.5, 0);
                camPos = camVect.applyMatrix4(model.matrixWorld);
                camera.position.x = camPos.x;
                camera.position.y = camPos.y + 200;
                camera.position.z = camPos.z;
                camera.lookAt(model.position);
                break;
            case CameraModes.CAMERA_MODES[1]:
                camVect = new THREE.Vector3(0, 2.5, 0);
                camPos = camVect.applyMatrix4(model.matrixWorld);
                camera.position.x = camPos.x;
                camera.position.y = camPos.y + 200;
                camera.position.z = camPos.z;
                camera.lookAt(model.position);
                break;
            case CameraModes.CAMERA_MODES[2]:
                camVect = new THREE.Vector3(-2, 0, 0);
                camPos = camVect.applyMatrix4(model.matrixWorld);
                camera.position.x = camPos.x;
                camera.position.y = camPos.y;
                camera.position.z = camPos.z;
                camera.lookAt(model.position);
                break;
            case CameraModes.CAMERA_MODES[3]:
                camVect = new THREE.Vector3(2, 0, 0);
                camPos = camVect.applyMatrix4(model.matrixWorld);
                camera.position.x = camPos.x;
                camera.position.y = camPos.y;
                camera.position.z = camPos.z;
                camera.lookAt(model.position);
                break;
            case CameraModes.CAMERA_MODES[4]:
                camVect = new THREE.Vector3(0, 0.1, 0);
                camPos = camVect.applyMatrix4(model.matrixWorld);
                camera.position.x = camPos.x;
                camera.position.y = camPos.y + 600;
                camera.position.z = camPos.z;
                camera.lookAt(model.position);
                break;
            case CameraModes.CAMERA_MODES[5]:
                camVect = new THREE.Vector3(0, 0.35, 0);
                camPos = camVect.applyMatrix4(model.matrixWorld);
                lookAtVect = new THREE.Vector3(0, 1, 0);
                lookAtPos = lookAtVect.applyMatrix4(model.matrixWorld);
                camera.position.x = camPos.x;
                camera.position.y = camPos.y + 15;
                camera.position.z = camPos.z;
                camera.lookAt(lookAtPos);
                break;
        }
    }

}