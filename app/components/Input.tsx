import { INPUT_PROPS } from '../types'

const Input = (props: INPUT_PROPS) => {
    const { type = "text", min, max, defaultValue, placeholder, style, onChange } = props

    return (
        <>
            <input
                type={type}
                min={min}
                max={max}
                defaultValue={defaultValue}
                placeholder={placeholder}
                style={style}
                onChange={onChange}
            />
        </>
    )
}

export default Input
