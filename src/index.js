module.exports = function solveEquation(equation) {
  // your implementation
  
  var matches = equation.split(' ');
                // превращаем части уравнения в массив по разделителю "пробел"

                var a = parseFloat(matches[0]);
                // знак пока не обработан, но + обычно не ставят
                var b = parseFloat(matches[3] + matches[4]);
                // оказывается, работает и так: b = +1
                var c = parseFloat(matches[7] + matches[8]);

                // коэффициенты найдены, ищем корни:
                var D = b * b - 4 * a * c;
                if (D > 0) {
                    var root1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
                    var root2 = Math.round((-b - Math.sqrt(D)) / (2 * a));
                    if (root2 < root1) {
                        return [root2, root1];
                    } else {
                        return [root1, root2];
                    }
                } else if (D < 0) {
                    return null;
                } else {
                    root1 = Math.round(-b / (2 * a));
                    return [root1, root1];
                } 
}
/* another implementation using regExp
var matches = equation.match(/^\s*(-?\d+)\s*\*\s*x\^2\s*([\+-]\s*\d+)\s*\*\s*x\s*([\+-]\s*\d+)\s*$/);
    var a = parseFloat(matches[1]);
    var b = parseFloat(matches[2].replace(/\s+/, ''));
    var c = parseFloat(matches[3].replace(/\s+/, ''));
    var D = b * b - 4 * a * c;
    if (D > 0) {
        var root1 = Math.round( (-b + Math.sqrt(D)) / (2 * a) );
        var root2 = Math.round( (-b - Math.sqrt(D)) / (2 * a) );
        if (root2 < root1) {
            return [root2, root1];
        }
        else {
            return [root1, root2];
        }
    } else if (D < 0) {
        return null;
    } else {
        root1 = Math.round( -b / (2 * a) );
        return [root1, root1] ;
    }
   
*/