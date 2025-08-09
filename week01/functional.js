//simple self-implementation of functional-function in Javascript
//map
Array.prototype.mymap = function(func) {
    const mapped = []
    for(let i=0;i<this.length;i++){
        mapped[i] = func(this[i])
    }
    return mapped
}
const lol = [1,2,3,4]
console.log(lol.mymap(num => num*2))

//filter
Array.prototype.myfilter = function(func) {
    const filtered = []
    for (let i=0;i<this.length;i++){
        if(func(this[i])){
            filtered.push(this[i])
        }
    }
    return filtered
}
console.log(lol.myfilter(num => num>=3))

//reduce
Array.prototype.myfilter = function(func) {
    const filtered = []
    for (let i=0;i<this.length;i++){
        if(func(this[i])){
            filtered.push(this[i])
        }
    }
    return filtered
}
console.log(lol.myfilter(num => num>=3))

Array.prototype.myreduce = function(func,init){
    let sum = init
    for(let i=0;i<this.length;i++){
        sum = func(sum,this[i])

    }
    return sum
}
console.log(lol.myreduce((x,y)=>x*y,1))