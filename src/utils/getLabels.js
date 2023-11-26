export const getLabels = (label) => label.split(',').map((label) => label.match(/.+=([^,]+)/).at(1))
