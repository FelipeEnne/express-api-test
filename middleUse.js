function useNext(t) {
    return function(res,res,next) {
        console.log(`Use next - ${t}`);
        next()
    } 
}

module.exports = useNext;