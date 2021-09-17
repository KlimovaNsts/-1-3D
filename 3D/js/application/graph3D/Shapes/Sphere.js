Surfaces.prototype.sphere = (
    count = 25,
    point = new Point(0, 0, 0),
    color = '#8B0000') => {
        
    const points = [];
    const edges = [];
    const polygons = [];
    const R = 15;

    if (count < 12) {
        count = 12
    } else if (count < 19) {
        count = 19
    } else if (count < 25) {
        count = 25
    } else if (count < 30) {
        count = 30
    } else if (count < 39) {
        count = 39
    } else if (count < 45) {
        count = 45
    }
    const da = 2 * Math.PI / count;
    //точки

    for (let i = 0; i <= Math.PI; i += da) {
        for (let j = 0; j < 2 * Math.PI; j += da) {
            const x = point.x + R * Math.sin(i) * Math.cos(j);
            const y = point.y + R * Math.sin(i) * Math.sin(j);
            const z = point.z + R * Math.cos(i);
            points.push(new Point(x, y, z));
        }
    }


    //ребра
    for (let i = 0; i < points.length; i++) {
        if (i + count < points.length) {
            edges.push(new Edge(i, i + count));
        }

        if (i + 1 < points.length && (i + 1) % count != 0) {
            edges.push(new Edge(i, i + 1));
        } else if ((i + 1) % count == 0) {
            edges.push(new Edge(i, i + 1 - count));
        }
    }

    //полигоны
    for (let i = 0; i < points.length; i++) {
        if (i + 1 + count < points.length && (i + 1) % count != 0) {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
        } else if ((i + 1) % count == 0 && i + count < points.length) {
            polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color));
        }
    }
    let honest = true;
    let counterPaint = 0;
    let counterEmpty = 0;
    let counterCircles = 0;
    for (let i = 0; i < polygons.length; i++) {
        if (i % count == 0 && i != 0) {
            counterPaint = 0;
            counterEmpty = 0;
            counterCircles++;
            // console.log(i, counterCircles);
        }
        if (counterCircles == 3) { // Если число колец == 3
            honest = !honest; // Четность = нечетности
            counterCircles = 0;
        }
        if (honest) { // Если четные кольца 
            if (counterPaint < 3) { // Красим 3 в кольце
                // console.log(i);
                polygons[i].color = {
                    r: 130,
                    g: 134,
                    b: 255
                }
                counterPaint++;
            } else if (counterEmpty < 3) { // Пропускаем 3 в кольце
                counterEmpty++;
            } else if (counterEmpty == 3) {
                counterPaint = 1;
                counterEmpty = 0;
                polygons[i].color = {
                    r: 130,
                    g: 134,
                    b: 255
                }
            }
        } else {
            if (counterEmpty < 3) {
                counterEmpty++;
            } else if (counterPaint < 3) {
                polygons[i].color = {
                    r: 130,
                    g: 134,
                    b: 255
                }
                counterPaint++;
            } else if (counterEmpty == 3) {
                counterPaint = 0;
                counterEmpty = 0;
                counterEmpty++;
            }
        }
        if (counterPaint == 2 && counterCircles == 1) {
            polygons[i].color = undefined;
        }
    }

    return new Subject(points, edges, polygons);
}





















