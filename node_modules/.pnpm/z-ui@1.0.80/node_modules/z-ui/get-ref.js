module.exports = function(ref) {
  return getRef(this.$parent, ref);
}

function getRef(instance, ref) {

    if (!instance || !instance.hasOwnProperty('$parent'))
      return false;

    if (instance.$refs[ref] != undefined)
      return instance.$refs[ref];

    return getRef(instance.$parent, ref);
}
