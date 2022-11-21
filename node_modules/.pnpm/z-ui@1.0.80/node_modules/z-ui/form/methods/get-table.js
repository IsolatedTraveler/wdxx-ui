export default function() {
  return getTable(this.$parent);
}

function getTable(instance) {

    if (!instance || !instance.hasOwnProperty('$parent'))
      return false;

    if (instance.hasOwnProperty('isTable') && instance.isTable)
      return instance;

    return getTable(instance.$parent);
}
