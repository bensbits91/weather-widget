import * as React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { Stack } from 'office-ui-fabric-react';
import * as moment from 'moment';

const mcc = 'color:aqua;';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'black',
    size: 64,
    animate: true
};

const defaults_dark = {
    icon: 'CLEAR_DAY',
    color: '#555',
    size: 384,
    animate: true
};



export interface DailyOneProps {
    weather: any;
    showSummary?: boolean;
    layout?: string;
    theme?: any;
}

export interface DailyOneState {

}

class DailyOne extends React.Component<DailyOneProps, DailyOneState> {
    constructor(props: DailyOneProps) {
        super(props);
        this.state = {};
    }

    public render() {

        const icon_summary = this.props.weather.icon.toUpperCase().replace(/-/g, '_');
        const th = this.props.theme;
        const theme = th && th.theme ? th.theme : null;
        const color_1 = th && th.color_1 ? th.color_1 : theme && theme == 'dark' ? defaults_dark.color : defaults.color;
        const color_2 = th && th.color_2 ? th.color_2 : theme && theme == 'dark' ? defaults_dark.color : defaults.color;

        const icon_color = th && th.icon_color ? th.icon_color : color_1;


        const el_summary = this.props.showSummary ?
            <>
                <h3>Summary</h3>
                {this.props.weather.summary}
                <ReactAnimatedWeather
                    icon={icon_summary || defaults.icon}
                    color={icon_color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
                <h3>Forecast</h3>
            </>
            : <></>;


        const el_horizontal =
            <Stack className='daily horizontal' horizontal>
                {this.props.weather.data.map((d, index) => {
                    const icon = d.icon.toUpperCase().replace(/-/g, '_');

                    return (
                        <Stack>
                            <span className='weekday'>
                                {moment(new Date()).add(index + 1, 'd').format('ddd')}
                            </span>
                            <span className='hilo'>
                                {Math.round(d.temperatureLow)}&deg; / {Math.round(d.temperatureHigh)}&deg;
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
                                {d.summary}
                            </span>
                        </Stack>
                    );
                })}
            </Stack>;


        const el_vertical =
            <Stack className='daily vertical'>
                {this.props.weather.data.map((d, index) => {
                    const icon = d.icon.toUpperCase().replace(/-/g, '_');

                    return (
                        <Stack horizontal>
                            <span className='weekday-and-hilo'>
                                <div className='weekday'>
                                    {moment(new Date()).add(index + 1, 'd').format('ddd')}
                                </div>
                                <div className='hilo'>
                                    {Math.round(d.temperatureLow)}&deg; / {Math.round(d.temperatureHigh)}&deg;
                                </div>
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
                                {d.summary}
                            </span>
                        </Stack>
                    );
                })}
            </Stack>;


        return (
            <>
                {el_summary}
                {this.props.layout == 'vertical' && el_vertical}
                {this.props.layout == 'horizontal' && el_horizontal}
            </>
        );
    }
}

export default DailyOne;