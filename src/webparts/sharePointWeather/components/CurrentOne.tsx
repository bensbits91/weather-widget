import * as React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { Stack/* , IStackStyles, IStackTokens */ } from 'office-ui-fabric-react/lib/Stack';
// import { Link } from 'office-ui-fabric-react/lib/Link';
import { ActionButton, IIconProps } from 'office-ui-fabric-react';

import * as moment from 'moment';

const mcc = 'color:yellow;';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'black',
    size: 384,
    animate: true
};

const defaults_dark = {
    icon: 'CLEAR_DAY',
    color: '#555',
    size: 384,
    animate: true
};

const showIcon: IIconProps = { iconName: 'Add' };
const hideIcon: IIconProps = { iconName: 'Remove' };


export interface CurrentOneProps {
    weather: any;
    city: string;
    layout?: string;
    details?: boolean;
    expand_details?: boolean;
    handler?: any;
    className?: string;
    theme?: any;
}

// export interface CurrentOneState {}

class CurrentOne extends React.Component<CurrentOneProps, {}> {
    constructor(props: CurrentOneProps) {
        super(props);
        // this.state = {};
    }

    public _onClick_expand(bool) {
        this.props.handler(bool);
    }

    public render() {
        const icon = this.props.weather.icon ? this.props.weather.icon.toUpperCase().replace(/-/g, '_') : defaults.icon;

        const th = this.props.theme;
        const theme = th && th.theme ? th.theme : null;
        const color_1 = th && th.color_1 ? th.color_1 : theme && theme == 'dark' ? defaults_dark.color : defaults.color;
        const color_2 = th && th.color_2 ? th.color_2 : theme && theme == 'dark' ? defaults_dark.color : defaults.color;

        const icon_color = th && th.icon_color ? th.icon_color : color_1;

        const el_horizontal =
            <>
                <Stack className='current horizontal'>
                    <Stack horizontal>
                        <span className='top'>
                            <Stack>
                                <span className='icon'>
                                    <ReactAnimatedWeather
                                        icon={icon}
                                        color={icon_color}
                                        size={defaults.size}
                                        animate={defaults.animate}
                                    />
                                </span>
                                <span className='summary' style={{ color: color_2 }}>
                                    {this.props.weather.summary}
                                </span>
                            </Stack>
                            <Stack className='info'>
                                <span className='date'>
                                    {moment(new Date()).format('dddd MMMM Do YYYY')}
                                </span>
                                <span className='temp' style={{ color: color_2 }}>
                                    {Math.round(this.props.weather.temperature)}&deg;
                                </span>
                                <span className='city'>
                                    {this.props.city}
                                </span>
                            </Stack>
                        </span>
                    </Stack>
                    {this.props.expand_details &&
                        <>
                            {!this.props.details &&
                                <div className='expand-button-wrap'>
                                    <ActionButton
                                        iconProps={showIcon}
                                        onClick={() => this._onClick_expand(true)}
                                    >
                                        Show details
                                    </ActionButton>
                                </div>
                            }
                            {this.props.details &&
                                <div className='expand-button-wrap'>
                                    <ActionButton
                                        iconProps={hideIcon}
                                        onClick={() => this._onClick_expand(false)}
                                    >
                                        Hide details
                                    </ActionButton>
                                </div>
                            }
                        </>
                    }
                </Stack>
            </>;

        const el_vertical =
            <>
                <Stack className='current vertical'>
                    <Stack className='top'>
                        <span className='city' style={{ color: color_2 }}>
                            {this.props.city}
                        </span>
                        <span className='icon'>
                            <ReactAnimatedWeather
                                icon={icon || defaults.icon}
                                color={icon_color}
                                size={defaults.size}
                                animate={defaults.animate}
                            />
                        </span>
                        <span className='summary'>
                            {this.props.weather.summary}
                        </span>
                        <span className='temp' style={{ color: color_2 }}>
                            {Math.round(this.props.weather.temperature)}&deg;
                        </span>
                        <span className='date'>
                            {moment(new Date()).format('dddd MMMM Do YYYY')}
                        </span>
                    </Stack>
                </Stack>
            </>;

        return (
            <>
                {this.props.layout == 'vertical' && el_vertical}
                {this.props.layout == 'horizontal' && el_horizontal}
            </>
        );
    }
}

export default CurrentOne;