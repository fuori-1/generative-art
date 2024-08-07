////////////////////////////////////////////////

// GEN AI CREATE

///////////////////////////////////////////////
if (localStorage.getItem('color1')) {
    document.getElementById('input1').value = localStorage.getItem('color1');
}
if (localStorage.getItem('color2')) {
    document.getElementById('input2').value = localStorage.getItem('color2');
}
if (localStorage.getItem('color3')) {
    document.getElementById('input3').value = localStorage.getItem('color3');
}

document.getElementById('gen-ai-create').addEventListener('submit', function(event) {
    event.preventDefault();
    $('#loading').slideToggle(500, function () {
        var input1Value = document.getElementById('input1').value;
        var input2Value = document.getElementById('input2').value;
        var input3Value = document.getElementById('input3').value;

        localStorage.setItem('color1', input1Value);
        localStorage.setItem('color2', input2Value);
        localStorage.setItem('color3', input3Value);

        location.reload(true);
    });
});

////////////////////////////////////////////////

// MATH RANDOM COLORS 

///////////////////////////////////////////////
var originalColor = [selectedColor1, selectedColor2, selectedColor3];
var aiColor = originalColor.slice();
for (var i = 0; i < 4; i++) {
    var shuffleColors = originalColor.slice();
    shuffleArray(shuffleColors);
    aiColor = aiColor.concat(shuffleColors);
}
shuffleArray(aiColor);
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

////////////////////////////////////////////////

// GENERATIVE DETAILS - POSTS

///////////////////////////////////////////////
// layer, post, detail, detail_POSX, detail_POS, detailColor, detailAlpha

genPD(5, 'P1', aiDetail1_P1, aiDetail1_P1_PosX, aiDetail1_P1_PosY, aiColor[0], aiDetail1_P1_Alpha);
genPD(6, 'P1', aiDetail2_P1, aiDetail2_P1_PosX, aiDetail1_P2_PosY, aiColor[1], "1");

genPD(5, 'P2', aiDetail1_P2, aiDetail1_P2_PosX, aiDetail1_P2_PosY, aiColor[2], aiDetail1_P2_Alpha);
genPD(6, 'P2', aiDetail2_P2, aiDetail2_P2_PosX, aiDetail2_P2_PosY, aiColor[3], "1");

genPD(5, 'P3', aiDetail1_P3, aiDetail1_P3_PosX, aiDetail1_P3_PosY, aiColor[4], aiDetail1_P3_Alpha);
genPD(6, 'P3', aiDetail2_P3, aiDetail2_P3_PosX, aiDetail2_P3_PosY, aiColor[5], "1");

function genPD(layer, postNumber, detailNumber, detailPosX, detailPosY, detailColor, detailOpacity) {
    var artboardLayer = "layer" + layer + postNumber;
    var detail = new Image();
    detail.crossOrigin = "anonymous";
    detail.src = aiDetailsFolder + detailNumber + ".svg";

    detail.onload = function () {
        var canvas = document.getElementById(artboardLayer);
        var genD = canvas.getContext('2d');
        genD.drawImage(detail, detailPosX, detailPosY);
        genD.globalAlpha = detailOpacity;

        var redrawVector = canvas.getContext('2d');
        redrawVector.fillStyle = detailColor;
        redrawVector.globalCompositeOperation = 'source-in';
        redrawVector.fillRect(0, 0, canvas.width, canvas.height);
    };
}


////////////////////////////////////////////////

// GENERATIVE BACKGROUND - POSTS

///////////////////////////////////////////////

genPB(1, aiBackgroundPost1, backgroundP1);
genPB(2, aiBackgroundPost2, backgroundP2);
genPB(3, aiBackgroundPost3, backgroundP3);

function genPB(id, backgroundNumber, layerType) {
    var image = new Image();
    image.crossOrigin = "anonymous";
    image.src = aiBackgroundsFolder + backgroundNumber + ".jpg";

    image.onload = function () {
        layerType.globalCompositeOperation = blendMode;
        layerType.globalAlpha = 0.6;
        layerType.drawImage(image, 0, 0);
        layerType.globalCompositeOperation = 'destination-over';
    };
}

////////////////////////////////////////////////

// GENERATIVE GRADIENT BACKGROUND - POSTS

///////////////////////////////////////////////

genPG(backgroundP1, aiGradient1, aiColor[6], aiColor[7]);
genPG(backgroundP2, aiGradient2, aiColor[8], aiColor[9]);
genPG(backgroundP3, aiGradient3, aiColor[10], aiColor[11]);

function genPG(layerType, gradientType, gradientStart, gradientEnd) {
    var gradient = layerType.createLinearGradient.apply(layerType, gradientType);
    gradient.addColorStop(0, gradientStart);
    gradient.addColorStop(1, gradientEnd);
    layerType.fillStyle = gradient;
    layerType.fillRect(0, 0, postCanvasX, postCanvasY);
}

////////////////////////////////////////////////

// TOOLS

///////////////////////////////////////////////

function imagine() {
    $('#loading').slideToggle(500, function () {
        location.reload(true);
    });
}
$(document).keydown(function (e) {
    if (e.which === 39) {
        imagine();
    }
});

