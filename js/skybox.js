class SkyBox {
    constructor(size) {
        var geometry = new THREE.BoxGeometry(size, size, size);
        this.mesh = new THREE.Mesh(geometry, Materials.skybox_material);
    }
    get_mesh(){
        return this.mesh
    }
}