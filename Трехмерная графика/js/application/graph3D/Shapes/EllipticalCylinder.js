Surfaces.prototype.ellipticalCylinder = (x0 = 0, y0 = 0, z0 = 0, a = 3, b = 3, count = 20, h = 10) => 
{
    const points = [];
    const edges = [];
    const polygons = [];
    //const color = '#ffffff';
    const PI = Math.PI;
    const delta = 2 * PI / count; // Окружность делим на кол-во точек

    for (let p = 0; p < h; p++) 
    { // Двигаемся по вертикали
        const y = y0 + p;
        for (let i = 0; i <= PI; i += delta * 2 + count) 
        {
            for (let j = 0; j < 2 * PI; j += delta) {
                const z = z0 + a * Math.cos(i) * Math.cos(j);
                const x = x0 + b * Math.sin(j);
                points.push(new Point(x, y, z));
            }
        }
    }

    //  Ребра и полигоны 
    for (let i = 0; i < points.length; i++) 
    {
        // Горизонтальные ребра
        if ((i + 1) < points.length && (i + 1) % count !== 0) 
        {
            edges.push(new Edge(i, i + 1));
        }
        if ((i + 1) >= count && (i + 1) % count === 0) 
        {
            edges.push(new Edge(i, i - count + 1));
        }

        // Вертикальные ребра
        if (i + count < points.length) 
        {
            edges.push(new Edge(i, i + count));
        }

        //  Полигоны 
        // новогодняя игрушка с шагом 2
        /*let k = 0;
    for (let i = 0; i < points.length; i++) {
        if ((i/2 % count) == 0) {
            k++;
        }
        
        if (((i + k * 3 ) % 4) <= 1) {
            if ((i + 1 + count) < points.length && (i + 2) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"));
            } else if ((i + count) < points.length && (i + 1) % count === 0)  {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#ffff00"))
            }
        } else {
            if ((i + 1 + count) < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"));
            } else if ((i + count) < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#2e3dfe"))
            }
        }
    }*/
        
       
           
        
        
        
        //эллиптический цилиндр
        // новогодний шар с шагом 2
        let k = 0;
    for (let i = 0; i < points.length; i++) {
        if ((i % count) == 0) {
            k++;
        }
        
        if (((i + k*3 ) % 3) < 2) {
            if ((i + 1 + count) < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"));
            } else if ((i + count) < points.length && (i + 1) % count === 0)  {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#ffff00"))
            }
        } else {
            if ((i + 1 + count) < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"));
            } else if ((i + count) < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#2e3dfe"))
            }
        }
    }
        
    
    
    
    /* if (i + count < points.length && (i + 1) % count !== 0 && i % 2 == 0) 
        {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        } */
        
        
        /* for (let i = 0; i < points.length; i++)
        {
            if (i + 2 * count + 2 < points.length && ((i + 1) % (2 * count + 1) != 0))
            {
                if ((i + 2 * count + 2 < points.length && ((i + 1) % (2 * count + 1))) % 3 == 0)
                {
                    poligons.push(new Poligon([i, i + 1, i + 2 * count + 2, i + 2 * count + 1], color));                 
                } else if ((i + 2 * count + 2 < points.length && ((i + 1) % (2 * count + 1))) % 3 == 1) 
                {
                    poligons.push(new Poligon([i, i + 1, i + 2 * count + 2, i + 2 * count + 1], "#EFCE5A"));
                } else if ((i + 2 * count + 2 < points.length && ((i + 1) % (2 * count + 1))) % 3 == 2)
                {
                    poligons.push(new Poligon([i, i + 1, i + 2 * count + 2, i + 2 * count + 1], "#364783"));  
                }
            }
        } */


        //  Последние полигоны 
        if ((i + 1) >= count && i + count < points.length && (i + count) % count === 0 && i % 2 != 0) 
        {
            polygons.push(new Polygon([i, i + count + 1, i + 1, i + count]));
        } 
    } 
    return new Subject(points, edges, polygons);
};

 /*if (i + count < points.length && (i + 2) % count !== 0 && i % 2 == 0) 
        {
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        }*/ 

