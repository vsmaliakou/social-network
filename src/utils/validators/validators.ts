export type FieldValidatorType = (value: string) => string | undefined

export const requiredField: FieldValidatorType = (value) => {
    if (value) return undefined
    return 'Field is requred'
}
export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}