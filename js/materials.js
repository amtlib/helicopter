
var Materials = {
    skybox_material: new THREE.MeshFaceMaterial([
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_negative_x.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_positive_x.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_positive_y.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_negative_y.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_negative_z.jpg'),
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('gfx/skybox/snow_positive_z.jpg'),
            side: THREE.BackSide
        }),
    ])

}