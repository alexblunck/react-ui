import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class Input extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: this.props.value || '',
            hasFocus: false,
            hasValue: !!this.props.value
        }

        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value || ''
        })
    }

    handleFocus() {
        this.setState({ hasFocus: true })
    }

    handleBlur() {
        this.setState({ hasFocus: false })
    }

    handleChange(event) {
        const { value } = event.target

        this.setState({
            value: value,
            hasValue: !!value
        })

        this.props.onChange(event)
    }

    render() {
        const classes = classNames('Input', this.props.className, {
            'has-focus': this.state.hasFocus,
            'has-value': this.state.hasValue
        })

        let pattern = null

        if (this.props.minLength) {
            pattern = `.{${this.props.minLength},}`
        }

        return (
            <div className={classes}>
                <label>{this.props.label}</label>

                <input
                    type={this.props.type}
                    name={this.props.name}
                    value={this.state.value}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    pattern={pattern}
                    autoComplete={this.props.noAutoComplete ? 'off' : 'on'}
                />
            </div>
        )
    }

}

Input.defaultProps = {
    type: 'text',
    required: false,
    minLength: null
}

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    minLength: PropTypes.number,
    noAutoComplete: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}
