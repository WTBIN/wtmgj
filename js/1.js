function cloneDeep(obj) {
    let family = {}
    let parent = Object.getPrototypeOf(obj)

    while (parent != null) {
        family = completeAssign(deepClone(family), parent)
        parent = Object.getPrototypeOf(parent)
    }

    function completeAssign(target, ...sources) {
        sources.forEach(source => {
            let descriptors = Object.keys(source).reduce((descriptors, key) => {
                descriptors[key] = Object.getOwnPropertyDescriptor(source, key)
                return descriptors
            }, {})
            Object.getOwnPropertySymbols(source).forEach(sym => {
                let descriptor = Object.getOwnPropertyDescriptor(source, sym)
                if (descriptor.enumerable) {
                    descriptors[sym] = descriptor
                }
            })
            Object.defineProperties(target, descriptors)
        })
        return target
    }
    return completeAssign(deepClone(obj), family)

}