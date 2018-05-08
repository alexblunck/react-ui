import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Spinner } from './Spinner'

export class Button extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const classes = classNames('Button', this.props.className, {
            processing: this.props.processsing
        })

        return (
            <div className={classes}>
                <button
                    type={this.props.type}
                    form={this.props.form}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </button>

                {/* Spinner */}
                <div className="spinner-container">
                    <Spinner visible={this.props.processsing} />
                </div>
            </div>
        )
    }

}

Button.defaultProps = {
    type: 'button'
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    form: PropTypes.string,
    onClick: PropTypes.func,
    processsing: PropTypes.bool
}
