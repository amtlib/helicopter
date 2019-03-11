function StartScreen() {
    this.selected = undefined;
    var screen = document.createElement('div')
    screen.setAttribute('id', 'start_screen')
    var button = document.createElement('button')
    button.textContent = 'START';
    var that = this;
    button.addEventListener('click', function () {
        if (that.selected) {
            screen.classList = 'hidden'
            that.callback();
        }

        else alert('Select something')
    })
    var slider_container = document.createElement('div')
    slider_container.setAttribute('id', 'slider_container')
    var left_elem = document.createElement('div');
    left_elem.setAttribute('class', 'slider_circle');
    left_elem.setAttribute('id', 'left_element')
    left_elem.addEventListener('click', function () {
        that.selected = 'yellow'
        right_elem.className = 'slider_circle';
        left_elem.className = 'slider_circle circle_selected';
    })
    slider_container.appendChild(left_elem)
    var right_elem = document.createElement('div');
    right_elem.setAttribute('class', 'slider_circle');
    right_elem.setAttribute('id', 'right_element')
    right_elem.addEventListener('click', function () {
        that.selected = 'blue'
        left_elem.className = 'slider_circle';
        right_elem.className = 'slider_circle circle_selected';
    })
    slider_container.appendChild(right_elem)
    screen.appendChild(slider_container)
    screen.appendChild(button)


    this.callback;
    var that = this
    this.show_screen = function (clb) {
        screen.classList = ''
        document.body.appendChild(screen)
        that.callback = clb
        console.log(clb)
    }
    this.hide_screen = function () {
        document.body.removeChild(screen)
    }
}