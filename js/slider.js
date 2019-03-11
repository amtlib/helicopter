function Slider() {

    var that = this
    this.height;
    this.speed;
    this.turning;
    this.append_html = function () {
        that.height_primary_slider_selected = false;
        

        that.height_primary_slider = document.createElement('div');
        that.height_primary_slider.setAttribute('id', 'height_primary_slider');
        ("mousedown touchstart".split(" ")).forEach(function(e){
      that.height_primary_slider.addEventListener(e, function () {
            that.height_primary_slider_selected = true;
        }, false)
    });
        // that.height_primary_slider.addEventListener('mousedown', function () {
        //     that.height_primary_slider_selected = true;
        // }, false)
         ("mousemove touchmove".split(" ")).forEach(function(e){
      that.height_primary_slider.addEventListener(e, function (ee) {
            if (that.height_primary_slider_selected) {
                that.height_primary_slider.style.top = ee.clientY;
            }
        }, false)
    });
        // that.height_primary_slider.addEventListener('mousemove', function (e) {
        //     if (that.height_primary_slider_selected) {
        //         that.height_primary_slider.style.top = e.clientY;
        //     }
        // }, false)
        ("mouseup touchend".split(" ")).forEach(function(e){
      that.height_primary_slider.addEventListener(e, function () {
            that.height_primary_slider_selected = false;
        }, false)
    });
        // that.height_primary_slider.addEventListener('mouseup', function () {
        //     that.height_primary_slider_selected = false;
        // }, false)
        document.body.appendChild(that.height_primary_slider);

        that.height_secondary_slider = document.createElement('div');
        that.height_secondary_slider.setAttribute('id', 'height_secondary_slider')
        document.body.appendChild(that.height_secondary_slider);


        that.speed_primary_slider_selected = false;


        that.speed_primary_slider;
        that.speed_secondary_slider;
        that.speed_primary_slider = document.createElement('div');
        that.speed_primary_slider.setAttribute('id', 'speed_primary_slider')
        that.speed_primary_slider.addEventListener('mousedown', function () {
            that.speed_primary_slider_selected = true;
        }, false)
        that.speed_primary_slider.addEventListener('mousemove', function (e) {
            if (that.speed_primary_slider_selected) {
                that.speed_primary_slider.style.top = e.clientY;
            }
        }, false)
        that.speed_primary_slider.addEventListener('mouseup', function () {
            that.speed_primary_slider_selected = false;
        }, false)
        document.body.appendChild(that.speed_primary_slider);

        that.speed_secondary_slider = document.createElement('div');
        that.speed_secondary_slider.setAttribute('id', 'speed_secondary_slider')
        document.body.appendChild(that.speed_secondary_slider);

        that.turning_primary_slider;
        that.turning_primary_slider_selected = false;
        that.turning_secondary_slider;

        that.turning_primary_slider = document.createElement('div');
        that.turning_primary_slider.setAttribute('id', 'turning_primary_slider')
        that.turning_primary_slider.addEventListener('mousedown', function () {
            that.turning_primary_slider_selected = true;
            console.log( that.turning_primary_slider_selected)
        }, false)
        that.turning_primary_slider.addEventListener('mousemove', function (e) {
            if (that.turning_primary_slider_selected) {
                that.turning_primary_slider.style.left = e.clientX + 'px';
            }
        }, false)
        that.turning_primary_slider.addEventListener('mouseup', function () {
            that.turning_primary_slider_selected = false;
        }, false)
        document.body.appendChild(that.turning_primary_slider);

        that.turning_secondary_slider = document.createElement('div');
        that.turning_secondary_slider.setAttribute('id', 'turning_secondary_slider')
        document.body.appendChild(that.turning_secondary_slider);
    }
    var cumulativeOffset = function (element) {
        var top = 0, left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top: top,
            left: left
        };
    };
    this.update = function () {
        var pos_primary = cumulativeOffset(that.height_primary_slider);
        var pos_secondary = cumulativeOffset(that.height_secondary_slider);
        if (pos_primary.top != pos_secondary.top) {

            if(Math.abs(pos_primary.top - pos_secondary.top) <= 1){
                that.height_secondary_slider.style.top = pos_primary.top + 'px'
            }
            else if (pos_primary.top > pos_secondary.top) {
                that.height_secondary_slider.style.top = (pos_secondary.top + 2) + 'px';
            } else if (pos_primary.top < pos_secondary.top) {

                that.height_secondary_slider.style.top = (pos_secondary.top - 2) + 'px';
            }
        }
        this.height = (window.innerHeight-pos_secondary.top)/window.innerHeight - 0.5;

        var pos_primary = cumulativeOffset(that.speed_primary_slider);
        var pos_secondary = cumulativeOffset(that.speed_secondary_slider);
        if (pos_primary.top != pos_secondary.top) {

            if(Math.abs(pos_primary.top - pos_secondary.top) <= 1){
                that.speed_secondary_slider.style.top = pos_primary.top + 'px'
            }
            else if (pos_primary.top > pos_secondary.top) {
                that.speed_secondary_slider.style.top = (pos_secondary.top + 2) + 'px';
            } else if (pos_primary.top < pos_secondary.top) {

                that.speed_secondary_slider.style.top = (pos_secondary.top - 2) + 'px';
            }
        }
        this.speed = (window.innerHeight-pos_secondary.top)/window.innerHeight - 0.5;


        var pos_primary = cumulativeOffset(that.turning_primary_slider);
        var pos_secondary = cumulativeOffset(that.turning_secondary_slider);
        if (pos_primary.left != pos_secondary.left) {

            if(Math.abs(pos_primary.left - pos_secondary.left) <= 1){
                that.turning_secondary_slider.style.left = pos_primary.left + 'px'
            }
            else if (pos_primary.left > pos_secondary.left) {
                that.turning_secondary_slider.style.left = (pos_secondary.left + 2) + 'px';
            } else if (pos_primary.left < pos_secondary.left) {

                that.turning_secondary_slider.style.left = (pos_secondary.left - 2) + 'px';
            }
        }
        this.turning = (window.innerWidth-pos_secondary.left)/window.innerWidth - 0.5;
    }
}