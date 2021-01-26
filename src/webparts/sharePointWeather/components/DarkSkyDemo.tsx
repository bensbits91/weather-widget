import * as React from 'react';
import CurrentConditions from './CurrentConditions';
import DailyForecast from './DailyForecast';


export interface DarkSkyDemoProps {
    data: any;
}

export interface DarkSkyDemoState {

}

class DarkSkyDemo extends React.Component<DarkSkyDemoProps, DarkSkyDemoState> {
    constructor(props: DarkSkyDemoProps) {
        super(props);
        // this.state = { :  };
    }

    public trimDaily(data, days) {
        return {
            summary: data.summary,
            icon: data.icon,
            data: data.data.slice(0, days)
        };
    }


    public render() {
        const daily = this.props.data ? this.props.data.daily : null;
        return (
            <>
                <h2>Current Conditions</h2>
                <CurrentConditions
                    data={this.props.data.currently}
                />
                <h2>Current Conditions with Details</h2>
                <CurrentConditions
                    data={this.props.data.currently}
                    details
                />
                <h2>3-Day Forecast</h2>
                <DailyForecast
                    data={this.trimDaily(daily, 3)}
                />
                <h2>5-Day Forecast</h2>
                <DailyForecast
                    data={this.trimDaily(daily, 5)}
                />
                <h2>8-Day Forecast with Summary</h2>
                <DailyForecast
                    data={this.trimDaily(daily, 8)}
                    showSummary
                />
            </>
        );
    }
}

export default DarkSkyDemo;