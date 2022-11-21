module.exports = function(vm) {
  return getTable(vm);
}

function getTable(instance) {

    if (!instance || !instance.hasOwnProperty('$parent'))
      return false;

    if (instance.hasOwnProperty('isTable') && instance.isTable)
      return instance;

    return getForm(instance.$parent);
}
