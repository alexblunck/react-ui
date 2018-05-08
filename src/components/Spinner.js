import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class Spinner extends React.Component {

    render() {
        const classes = classNames('Spinner', {
            visible: this.props.visible
        })

        return <div className={classes}></div>
    }

}

Spinner.defaultProps = {
    visible: false
}

Spinner.propTypes = {
    visible: PropTypes.bool
}
