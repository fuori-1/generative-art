function renderPost1() {
    var canvas1 = document.getElementById("layer5P1");
    var canvas2 = document.getElementById("layer6P1");
    var canvas3 = document.getElementById("layer7P1");
    var canvas4 = document.getElementById("layer4P1");

    var canvasFull = document.createElement('canvas');
    var ctx = canvasFull.getContext('2d');
    canvasFull.width = canvas1.width;
    canvasFull.height = canvas1.height;

    ctx.drawImage(canvas3, 0, 0);
    ctx.drawImage(canvas1, 0, 0);
    ctx.drawImage(canvas2, 0, 0);
    ctx.drawImage(canvas4, 0, 0);

    var image = canvasFull.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'generative-post1.png';
    link.href = image;
    link.click();
}

function renderPost2() {
    var canvas1 = document.getElementById("layer5P2");
    var canvas2 = document.getElementById("layer6P2");
    var canvas3 = document.getElementById("layer7P2");
    var canvas4 = document.getElementById("layer4P2");

    var canvasFull = document.createElement('canvas');
    var ctx = canvasFull.getContext('2d');
    canvasFull.width = canvas1.width;
    canvasFull.height = canvas1.height;

    ctx.drawImage(canvas3, 0, 0);
    ctx.drawImage(canvas1, 0, 0);
    ctx.drawImage(canvas2, 0, 0);
    ctx.drawImage(canvas4, 0, 0);

    var image = canvasFull.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'generative-post2.png';
    link.href = image;
    link.click();
}

function renderPost3() {
    var canvas1 = document.getElementById("layer5P3");
    var canvas2 = document.getElementById("layer6P3");
    var canvas3 = document.getElementById("layer7P3");
    var canvas4 = document.getElementById("layer4P3");

    var canvasFull = document.createElement('canvas');
    var ctx = canvasFull.getContext('2d');
    canvasFull.width = canvas1.width;
    canvasFull.height = canvas1.height;

    ctx.drawImage(canvas3, 0, 0);
    ctx.drawImage(canvas1, 0, 0);
    ctx.drawImage(canvas2, 0, 0);
    ctx.drawImage(canvas4, 0, 0);

    var image = canvasFull.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'generative-post3.png';
    link.href = image;
    link.click();
}