var nums = process.argv.slice(2).map(function(n){return Number(n)})

console.log(nums.reduce(function(a,b){return a+b}))
