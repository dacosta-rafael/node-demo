/*
 ABCD
A=>>>         : A = A, B > A, C > A, D > A
B<=>>         : A < B, B = B, C > B, D > B
C<<=>         : A < C, B < C, C = C, D > C
D>>>=         : A < D, B < D, C < D, D = D
*/
var mat = Array();
mat[0] = Array(' ','A','B','C','D');
for(i=1; i<=4; i++) {
    mat[i] = Array();
    mat[i][0] = mat[0][i];
    for(j=1; j<=4; j++) {
        mat[i][j] = (mat[0][j] == mat[i][0] ? '=' : mat[0][j] < mat[i][0] ? '<' : '>');
    }
}
//console.log(mat);
mat[0].push(" ");
var x  = mat[0].toString();
console.log( x.replace(/,/g , "") );

mat[1].push(" ");
var x  = mat[1].toString();
console.log( x.replace(/,/g , "") );

mat[2].push(" ");
var x  = mat[2].toString();
console.log( x.replace(/,/g , "") );

mat[3].push(" ");
var x  = mat[3].toString();
console.log( x.replace(/,/g , "") );

mat[4].push(" ");
var x  = mat[4].toString();
console.log( x.replace(/,/g , "") );


