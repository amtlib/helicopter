function Helicopter() {

    var daeModel
    var wirnik_front
    var wirnik_rear
    var modelLoaded = false;
    this.speed = 0;
    this.loadModel = function (url,model_color, callback) {
        var loader = new THREE.ColladaLoader();
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        loader.load(url, function (collada) {
            modelLoaded = true
            daeModel = collada.scene;
            // daeModel.material = new THREE.MeshPhongMaterial({
            //     color: 0x996633,
            //     specular: 0x050505,
            //     shininess: 100
            // })
            //daeModel.scale.set(4, 4, 4)
            daeModel.rotation.x = -Math.PI / 2

            //4 -rear
            //6 - front
            var i = 0;
            daeModel.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                    child.material = new THREE.MeshPhongMaterial({
                        color: model_color,
                        specular: 0x050505,
                        shininess: 100
                    })
                    child.name = i++;
                    console.log(child)
                }
            });
            //17 i 18
            wirnik_front = daeModel.getObjectByName(6, true)
            wirnik_rear = daeModel.getObjectByName(4, true)

            // callback czyli zwrócenie danych modelu na zewnątrz pliku 

            callback(daeModel)

        })
    }
    this.getModel = function () {
        if (modelLoaded)
            return daeModel
    }

    this.updateModel = function () {
        if (wirnik_front) {
            wirnik_front.rotateZ(this.speed)
        }
        if (wirnik_rear) {
            wirnik_rear.rotateZ(this.speed)
        }
    }

}