import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class Button extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const classes = classNames('Button', this.props.className)

        return (
            <div className={classes}>
                <button type={this.props.type} onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        )
    }

}

Button.defaultProps = {
    type: 'button'
}

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}
