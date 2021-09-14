Surfaces.prototype.hyperbolicParaboloid = (count = 18) => {
    const points = [];
    const polygons = [];
    const edges = [];
    const size = 25;
    const delta = size / count;

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            const x = i * delta - size / 2;
            const y = j * delta - size / 2; 
            const z = (x * x - y * y) / (/*0.5 */ size);
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
        if (((i + k*2) % 4) <= 1) {
            if (i + count + 1 < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#0000FF"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#0000FF"));
            }
        } else {
            if (i + 1 + count < points.length && (i+1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#FFFFFF"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#0000FF"));
            }
        }
    }
    return new Subject(points, edges, polygons);
}












/*Surfaces.prototype.hyperbolicParaboloid = (x0 = 0, y0 = 0, z0 = 0, size = 5, q = 2, p = 3, countRing = 5, countPoints = 9) => 
{
    const points = [];
    const edges = [];
    const polygones = [];
    const deltaY = size / (countRing - 1);
    const deltaZ = 2 * Math.PI / countPoints;
    for (let i = -size / 2; i <= size / 2; i += deltaY) 
    {
        for (let j = -Math.PI; j <= Math.PI; j += deltaZ) 
        {
            const y = y0 + j ** 2 - i ** 2;
            const x = x0 + i * Math.sqrt(2 * q);
            const z = z0 + j * Math.sqrt(2 * p);
            points.push(new Point(x, y, z));
        }
    }

    for (let i = 0; i < points.length - 1; i++) 
    {
        if (points[i].x == points[i + 1].x) 
        {
            edges.push(new Edge(i, i + 1));
        }
        if (i < points.length - countPoints && points[i].z == points[i + countPoints].z) 
        {
            edges.push(new Edge(i, i + countPoints));
        }
    }

    /*for (let i = 0; i < points.length - 1; i++) 
    {
        if (points[i].x == points[i + 1].x && i < points.length - countPoints - 1 && points[i].z == points[i + countPoints].z) 
        {
            polygones.push(new Polygon([i, i + 1, i + 1 + countPoints, i + countPoints]));
        }
    }

        //2x1
        /*let k = 1;
        for (let i = 0; i < points.length; i++) {
            if ((i % countPoints) == 0) {
                k++;
            }
            
            if (((i + k) % 4) <= 1) {
                if ((i + 1 + countPoints) < points.length && (i + 1) % countPoints !== 0)  {
                    polygones.push(new Polygon([i, i + 1, i + 1 + countPoints, i + countPoints], "#FFFFFF"));
                } else if ((i + countPoints) < points.length && (i + 1) % countPoints !== 0)  {
                    polygones.push(new Polygon([i, i + 1 + countPoints, i + 1, i + countPoints], "#FFFFFF"))
                }
            } else {
                if ((i + 1 + countPoints) < points.length && (i + 1) % countPoints !== 0)  {
                    polygones.push(new Polygon([i, i + 1, i + 1 + countPoints, i + countPoints], "#0000FF"));
                } else if ((i + countPoints) < points.length && (i + 1) % countPoints !== 0) {
                    polygones.push(new Polygon([i, i + 1 + countPoints, i + 1, i + countPoints], "#0000FF"))
                }
            }
        }

    return new Subject(points, edges, polygones);
}  */



/*седло окрашено в зебру
Surfaces.prototype.hyperbolicParaboloid = (count = 20) => {
    color1 = '#FFFFFF';
    color2 = '#000000';
    const points = [];
    const polygons = [];
    const edges = [];
    const size = 20;
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
    edges.push(new Edge(i, i + count))
    }
    }
    
    for (let i = 0; i < points.length; i++) {
    if (i + 1 + count < points.length && (i + 1) % count != 0 && i % 2 == 0) {
    polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color1));
    }
    else if ((i + 1) % count == 0 && i + count < points.length) {
    polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], color2));
    }
    else if (i + 1 + count < points.length && (i + 1) % count != 0 && i % 2 != 0) {
    polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color2));
    }
    }  
    
    for (let i = 0; i < points.length; i++) {
    if (i + 1 + count < points.length && (i + 1) % count != 0) {
    polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
    } 
    }    
} */
    