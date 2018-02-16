import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { ArrowDown } from '../icons'

export class Select extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            focused: false
        }

        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    /**
     * Handle select focus event.
     */
    handleFocus() {
        this.setState({ focused: true })
    }

    /**
     * Handle select blur event.
     */
    handleBlur() {
        this.setState({ focused: false })
    }

    render() {
        const props = this.props

        let disabled = false

        if (props.disabled) {
            disabled = props.disabled()
        }

        const classes = classNames('Select', props.className, {
            focused: this.state.focused
        })

        return (
            <div className={classes}>
                <label>{props.label}</label>

                <select
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    disabled={disabled}
                    required={props.required}
                >
                    <option disabled value="">{`Select ${props.label.toLowerCase()}`}</option>

                    {/* Options */}
                    {this.renderOptions()}
                </select>

                <ArrowDown />

                {props.note && <div className="ui-note">{props.note}</div>}
            </div>
        )
    }

    renderOptions() {
        const props = this.props

        return props.options.map((option, index) => {
            let displayValue = option

            if (props.displayKey) {
                displayValue = option[props.displayKey]
            } else if (props.displayTransform) {
                displayValue = props.displayTransform(option)
            }

            return (
                <option
                    key={props.valueKey ? option[props.valueKey] : index}
                    value={props.valueKey ? option[props.valueKey] : option}
                >
                    {displayValue}
                </option>
            )
        })
    }

}

Select.defaultProps = {
    required: false
}

Select.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    options: PropTypes.array,
    valueKey: PropTypes.string,
    displayKey: PropTypes.string,
    displayTransform: PropTypes.func,
    note: PropTypes.string,
    disabled: PropTypes.func,
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}
