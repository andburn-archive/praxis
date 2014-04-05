$(function() {

    function draw() {
        var canvas = document.getElementById('main-canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 600, 400);
    }

    function ward() {
        var canvas = document.getElementById('main-canvas');
        h = parseInt(canvas.getAttribute("height")) - 40;
        w = parseInt(canvas.getAttribute("width")) - 40;

        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.fillStyle = "#9ea7b8";
        ctx.fillRect(20, 20, w, h);
        
        // set canvas opacity
        //canvas.style.opacity = '0.2';
    }

    function advance() {
        var canvas = document.getElementById('main-canvas');
        var ch = parseInt(canvas.getAttribute("height"));
        var cw = parseInt(canvas.getAttribute("width"));
        var ctx = canvas.getContext('2d');

        var square = 50;
        var cols = parseInt(cw/square);
        var rows = cols;        

        var color_step = 255 / cols;

        console.log("setup: " + square + ", " + cols + ", " + rows + ", " + color_step);

        for (var i = 0; i < cols; i++){
            for (var j = 0; j < rows; j++){
                ctx.fillStyle = 'rgb(' + 
                    Math.floor(255 - color_step * i) + ',' +
                    Math.floor(255 - color_step * j) + ',0)';
                ctx.fillRect(j*square, i*square, square, square);
            }
        }
    }

    function charts() {
        var chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text: "Fruits sold in First Quarter"              
            },
            data: [//array of dataSeries              
                { //dataSeries object
                 /*** Change type "column" to "bar", "area", "line" or "pie"***/
                 type: "pie",
                 dataPoints: [
                     { label: "banana", y: 18 },
                     { label: "orange", y: 29 },
                     { label: "apple", y: 40 },                                    
                     { label: "mango", y: 34 },
                     { label: "grape", y: 24 }
                 ]
             }
           ]
         });

        chart.render();
    }

    charts();
});

