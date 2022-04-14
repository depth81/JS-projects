function findTheMinEuclidianDistance(p){

    function distance(p1,p2){
        return Math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)
    }

    let min_dist = 100000000;

    for(let i=0; i<p.length; i++){ 
        for(let j=i+1; j<p.length; j++){
            if(distance(p[i], p[j]) < min_dist){
                min_dist = distance(p[i], p[j]);
            }
        }
    }

    console.log(min_dist);

}

findTheMinEuclidianDistance([[0, 11], [-7, 1], [-5, -3]]);