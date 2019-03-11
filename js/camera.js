function CameraController() {
    var possible_positions = [
        {
            name: 'front',
            x: 0,
            y: -10,
            z: 0
        },
        {
            name: 'back',
            x: 0,
            y: 10,
            z: 0
        },
        {
            name: 'left',
            x: 10,
            y: 0,
            z: 0
        },
        {
            name: 'right',
            x: -10,
            y: 0,
            z: 0
        },
        {
            name: 'bottom',
            x: .01,
            y: 0,
            z: -10
        },
        {
            name: 'top',
            x: .01,
            y: 0,
            z: 10
        },
        {
            name: 'inside',
            x: .00001,
            y: -2,
            z: 0
        }
    ]
    this.accual_position = possible_positions[1] //back
    this.model;
    this.camera;
    var that = this
    this.update = function () {
        if (that.camera && that.model) {
            camVect = new THREE.Vector3(that.accual_position.x, that.accual_position.y, that.accual_position.z);
                camPos = camVect.applyMatrix4(that.model.matrixWorld);
                that.camera.position.x = camPos.x;
                that.camera.position.y = camPos.y;
                that.camera.position.z = camPos.z;
                that.camera.lookAt(that.model.position);
            if (that.accual_position.name != 'inside') {
                
            } else {
                that.camera.translateZ(4)
                that.camera.rotateY(Math.PI)
                
                //camPos.y += 5;
                //that.camera.lookAt(camPos);
            }
        }


    }

this.set_camera_position = function (index) {
    if (index >= 0 && index < possible_positions.length)
        that.accual_position = possible_positions[index]
}

}