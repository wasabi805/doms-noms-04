//NOTE: this is a helper function for Validator module since Validator checks strings.

const isEmpty =(value)=>{
    //return if the value is equal to null, undefined, an empty object or empty string
    return(
        value === null ||
        value === undefined ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    )
};

module.exports = isEmpty;