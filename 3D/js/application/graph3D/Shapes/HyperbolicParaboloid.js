Surfaces.prototype.hyperbolicParaboloid = (count = 19) => {
    count = count%2 == 1 ? count+1 : count;
    const points = [];
    const polygons = [];
    const edges = [];
    const size = 25;
    const delta = size / count;

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            const x = i * delta - size / 2;
            const y = j * delta - size / 2; 
            const z = (x * x - y * y) / (0.5 * size);
            points.push(new Point(x, y, z));
        }
    }

    for (let i = 0; i < points.length; i++) {
        if (i + 1 < points.length && (i + 1) % count != 0) {
            edges.push(new Edge(i, i + 1));
        }

        if (i + count < points.length) {
            edges.push(new Edge(i, i + count));
        }
    }

    let k = 0;
    // polygon 2x2
    for (let i = 0; i < points.length; i++) {
        if ((i/2 % count) == 0) {
            k++;
        }
        if (((i + k*2 + 1) % 4) <= 1) {
            if (i + count + 1 < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "0000ff"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "0000ff"));
            }
        } else {
            if (i + 1 + count < points.length && (i+1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "ffffff"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "ffffff"));
            }
        }
    }
    return new Subject(points, edges, polygons);
}











    