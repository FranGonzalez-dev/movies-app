import PropTypes from 'prop-types'

export const Button = props => {
  return (
    <button className={`btn ${props.className}`} onclick={props.onClick ? () => props.onClick() : null}>
        {props.children}
    </button>
  )
}

const OutlineButton = props => {
    return (
        <Button className={`btn-outline ${props.className}`} onclick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </Button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}
