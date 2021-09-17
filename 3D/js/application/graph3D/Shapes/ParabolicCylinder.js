Surfaces.prototype.parabolicCylinder= (count = 11, color = '#E0FFFF') => {

    let points = [];
    
    let edges = [];
    
    let polygons = [];
    
    const size = 10;
    
    // Расставить точки
    
    for (let i = -count; i < count; i++) {
    
    for (let j = 0; j < count; j++) {
    
    const x = i + size/count;
    
    const y = x * x / size;
    
    const z = j - size;
    
    points.push(new Point(x, y, z));
    
    }
    
    }
    
    //Провести рёбра
    
    for (let i = 0; i < points.length; i++) {
    
    if ((i + 1) < points.length && (i + 1) % count !== 0) {
    
    edges.push(new Edge(i, i + 1))
    
    }
    
    if (i + count < points.length) {
    
    edges.push(new Edge(i, i + count))
    
    }



    // полигоны
    let k = 2;
    for (let i = 0; i < points.length; i++)
    {
        if ((i % count*k) !== 0) 
        {
            k--;
        }
    
        if (((i + k) % 4) <= 2) 
        {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  
            {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0)  
            {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color))
            }
        } else {
        if (i + 1 + count < points.length && (i + 1) % count !== 0)  
        {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#0000FF"));
        } else if (i + 1 + count < points.length && (i + 1) % count !== 0) 
        {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#0000FF"))
        }
    }
}

    


    /*if (i + 1 + count < points.length && (i + 1) % count !== 0) {
    
    polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], color));
    
    }
    if ((i % count) !== 0) 
    {
        k++;
    }
    if (((i + k*3) % 3) < 1) */


    
    
    }
    
    return new Subject(
    
    points, edges, polygons
    
    );
    
}



































/*Surfaces.prototype.parabolicCylinder = (x0 = 0, y0 = 0, z0 = 0, p = 1, size = 4, countRing = 5, countPoints = 18) => 
{
    const points = [];
    const edges = [];
    const polygones = [];
    const deltaY = size / (countRing - 1);
    const deltaZ = 2 * Math.PI / countPoints;
    let counterY = 0;
    for (let i = -size / 2; i <= size / 2; i += deltaY) 
    { // Правая половинка 
        const y = y0 + i;
        counterY++;
        for (let j = -Math.PI; j <= Math.PI; j += deltaZ) 
        {
            const x = x0 + Math.sqrt(2 * j * p);
            const z = z0 + j;
            if (x)
                points.push(new Point(x, y, z));
        }
    }
    for (let i = -size / 2; i <= size / 2; i += deltaY) 
    { // Левая половинка
        const y = y0 + i;
        for (let j = -Math.PI; j <= Math.PI; j += deltaZ) 
        {
            const x = x0 - Math.sqrt(2 * j * p);
            const z = j;
            if (x)
                points.push(new Point(x, y, z));
        }
    }

    let counterX = countPoints / 2;
    if (countPoints % 2 != 0) 
    {
        if (countPoints != 9 && countPoints != 11 && countPoints != 19 && countPoints != 27) 
        {
            counterX = Math.round(countPoints / 2);
        } else {
            counterX = Math.floor(countPoints / 2);
        }

    }
    
    
    
    /*let k = 0;
    for (let i = 0; i < points.length; i++) {
        if ((i % counterX) == 0) {
            k++;
        }
        
        if (((i + k*3 ) % 3) < 2) {
            if ((i + 1 + counterX) < points.length && (i + 1) % counterX !== 0)  {
                polygones.push(new Polygon([i, i + 1, i + 1 + counterX, i + counterX], "#0000FF"));
            } else if ((i + counterX) < points.length && (i + 1) % counterX === 0)  {
                polygones.push(new Polygon([i, i + 1 - counterX, i + 1, i + counterX], "#0000FF"))
            }
        } else {
            if ((i + 1 + counterX) < points.length && (i + 1) % counterX !== 0)  {
                polygones.push(new Polygon([i, i + 1, i + 1 + counterX, i + counterX], "#E0FFFF"));
            } else if ((i + count) < points.length && (i + 1) % counterX === 0) {
                polygones.push(new Polygon([i, i + 1 - counterX, i + 1, i + counterX], "#E0FFFF"))
            }
        }
    }
    
    
    
    
    
    for (let i = 0; i < points.length / 2; i++) 
    {
        if ((i + 2) % counterX != 0) // Горизонтальные ребрышки
            edges.push(new Edge(i, i + 1));
        if (i < points.length / 2 - counterX) 
        {
            if (i + counterX < points.length) // Вертикальные ребрышки
                edges.push(new Edge(i, i + counterX));
            if ((i + 1) % counterX != 0 && i + counterX < points.length) 
            {
                polygones.push(new Polygon([i, i + 1, i + 1 + counterX, i + counterX]));
            }
        }

    }
    for (let i = points.length / 2; i < points.length - 1; i++) 
    {
        if ((i + 1) % counterX != 0) // Горизонтальные ребрышки
            edges.push(new Edge(i, i + 1));
        if (i + counterX < points.length) // Вертикальные ребрышки
            edges.push(new Edge(i, i + counterX));
        if ((i + 1) % counterX != 0 && i + counterX < points.length) 
        {
            polygones.push(new Polygon([i, i + 1, i + 1 + counterX, i + counterX]));
        }
    }
    let i = 0;
    while (i < points.length / 2) 
    {
        edges.push(new Edge(i, i + counterX * counterY));
        if (i + counterX * counterY + counterX < points.length)
            polygones.push(new Polygon([i, i + counterX * counterY, i + counterX * counterY + counterX, i + counterX]));
        i += counterX;
    }

    return new Subject(points, edges, polygones);
};*/