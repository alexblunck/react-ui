import React from 'react'
import PropTypes from 'prop-types'

export class Button extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const classes = ['Button', this.props.className].join(' ')

        return (
            <div className={classes}>
                <button type={this.props.type}>{this.props.children}</button>
            </div>
        )
    }

}

Button.defaultProps = {
    type: 'button'
}

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string
}
