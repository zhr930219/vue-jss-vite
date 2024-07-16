import type { StyleSheet, Classes } from 'jss'
import type { DynamicRules } from '../types.ts'
import { getMeta } from './sheetsMeta.ts'

const getSheetClasses = (sheet: StyleSheet, dynamicRules: DynamicRules) => {
  if (!dynamicRules) {
    return sheet.classes
  }

  const classes: Classes = {}
  const meta = getMeta(sheet)

  if (!meta) {
    return sheet.classes
  }

  for (const key in meta.styles) {
    classes[key] = sheet.classes[key]

    if (key in dynamicRules) {
      classes[key] += ` ${sheet.classes[dynamicRules[key].key]}`
    }
  }

  return classes
}

export default getSheetClasses
