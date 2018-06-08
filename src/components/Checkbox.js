import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Checkmark } from '../icons/Checkmark'

export class Checkbox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { className, label, disabled, name, checked, onChange } = this.props

        const classes = classNames('Checkbox', className, {
            disabled
        })

        return (
            <label className={classes}>
                <input type="checkbox" name={name} disabled={disabled} checked={checked} onChange={onChange} />
                <Checkmark />
                {label && <span>{label}</span>}
            </label>
        )
    }

}

Checkbox.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}
