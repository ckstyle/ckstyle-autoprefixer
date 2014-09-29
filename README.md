# ckstyle-autoprefixer

Autoprefixer Plugin for CKStyle

## Usage

```javascript

var css = '.b {box-sizing: border-box;}'


var res = CKStyle.start(css, {
        fileName: 'a.css'
    })
    .plugin(autoprefix, {
        a: 1
    })
    .fix(function(res) {
        console.log(res)  // ==> .b {
                          // ==>      -moz-box-sizing: border-box;
                          // ==>           box-sizing: border-box;
                          // ==> }
    })
    .compress()
    .output(function(res) {
        console.log(res)  // ==>  .b{-moz-box-sizing:border-box;box-sizing:border-box}
    })

console.log(res)  // ==> .b{-moz-box-sizing:border-box;box-sizing:border-box}

```