function compareTriplets(a: number[], b: number[]): number[] {
    let alicePoints: number = 0;
    let bobPoints: number = 0;
    let points: number[] = [];

    
    for(let i:number = 0; i < 3; i++){
        if(a[i] > b[i]){
            alicePoints++;
        } else if(b[i] > a[i]){
            bobPoints++;
        }
    }
    
    points = [alicePoints, bobPoints];
    points.sort(function(a, b) {
        return b - a;
        });
    
    return points;
}

const a = [2,4,5];
const b = [2,1,5];

console.log(compareTriplets(a,b));