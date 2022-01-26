define("lib/ExtendedClass", ["deps/BaseClass"], 
/**
 * {typeof import("deps/BaseClass")}
 * @param  {typeof import("deps/BaseClass")} BaseClass 
 * @returns 
 */
(BaseClass) => {    
    
    const ExtendedClass = BaseClass.extends({
        f: function() {
            return "something";
        }
    });

    // Exports the module in a way tsc recognize class export 
    const module = {};
    module.exports = ExtendedClass
    return module.exports;
});
