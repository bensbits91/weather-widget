import * as React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const mcc = 'color:aqua;';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'black',
    size: 64,
    animate: true
};



export interface DailyForecastProps {
    data: any;
    showSummary?: boolean;
}

export interface DailyForecastState {

}

class DailyForecast extends React.Component<DailyForecastProps, DailyForecastState> {
    constructor(props: DailyForecastProps) {
        super(props);
        this.state = {};
    }

    public componentDidMount() {
        console.log('%c : DailyForecast -> componentDidMount -> this.props', mcc, this.props);
    }

    public render() {

        const icon_summary = this.props.data.icon.toUpperCase().replace(/-/g, '_');
        // const summary = this.props.data.summary;

        const el_summary = this.props.showSummary ?
            <>
                <h3>Summary</h3>
                {this.props.data.summary}
                <ReactAnimatedWeather
                    icon={icon_summary || defaults.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
                <h3>Forecast</h3>
            </>
            : <></>;


        const el_forecast =
            this.props.data.data.map(d => {
                const icon = d.icon.toUpperCase().replace(/-/g, '_');
                return (
                    <div>
                        {d.summary}
                        <ReactAnimatedWeather
                            icon={icon || defaults.icon}
                            color={defaults.color}
                            size={defaults.size}
                            animate={defaults.animate}
                        />
                    </div>
                );
            });


        return (
            <>
                {el_summary}
                {el_forecast}
            </>
        );
    }
}

export default DailyForecast;