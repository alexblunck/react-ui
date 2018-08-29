import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class Tip extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    /**
     * Handle mouse enter event.
     */
    handleMouseEnter() {
        this.position()
        this.setState({ visible: true })
    }

    /**
     * Handle mouse leave event.
     */
    handleMouseLeave() {
        this.setState({ visible: false })
    }

    /**
     * Handle click.
     */
    handleClick() {
        this.setState({ visible: false })
    }

    /**
     * Position tip element.
     */
    position() {
        const rect = this.elem.getBoundingClientRect()

        this.tipElem.style.left = ((rect.width - this.tipElem.offsetWidth) / 2) + 'px'
    }

    render() {
        const classes = classNames('Tip', this.props.className, {
            visible: this.state.visible
        })

        return (
            <div
                className={classes}
                ref={e => this.elem = e}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={this.handleClick}
            >
                {this.props.children}

                <div className="tip" ref={e => this.tipElem = e}>{this.props.text}</div>
            </div>
        )
    }

}

Tip.propTypes = {
    children: PropTypes.any,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}
