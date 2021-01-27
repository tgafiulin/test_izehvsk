import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class VerticalScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.renderThumb = this.renderThumb.bind(this);
        this.renderTrackVertical = this.renderTrackVertical.bind(this);
    }

    renderThumb({ style, ...props }) {
        const thumbStyle = {
            backgroundColor: `#BDBDBD`,
            borderRadius: 2
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }

    renderTrackVertical({ style, ...props }) {
        const trackStyle = {
            backgroundColor: `#F2F2F2`,
            color: 'yellow',
            right: 2,
            borderRadius: 2,
            height: '100%'
        };
        return (
            <div
                style={{ ...style, ...trackStyle }}
                {...props}/>
        );
    }

    render() {
        return (
            <Scrollbars
                renderThumb={this.renderThumb}
                renderTrackVertical={this.renderTrackVertical}
                {...this.props}/>
        );
    }
}