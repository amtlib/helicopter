function LoadingScreen(){
    var screen = document.createElement('div')
    screen.setAttribute('id', 'loading_screen')

    var img_loading = document.createElement('img');
    img_loading.src = 'gfx/loading.gif'

    screen.appendChild(img_loading)

    this.show_screen = function(){
        document.body.appendChild(screen)
    }
    this.hide_screen = function(){
        document.body.removeChild(screen)
    }
}