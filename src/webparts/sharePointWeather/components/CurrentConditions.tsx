import * as React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const mcc = 'color:orange;';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'black',
    size: 512,
    animate: true
};

// const icons = [
//     {'clear-day': 'CLEAR_DAY'},
//     {'clear-night': 'CLEAR_NIGHT'},
//     {'rain': 'RAIN'},
//     {'snow': 'SNOW'},
//     {'sleet': 'SLEET'},
//     {'wind': 'WIND'},
//     {'fog': 'FOG'},
//     {'cloudy': 'CLOUDY'},
//     {'partly-cloudy-day': 'PARTLY_CLOUDY_DAY'},
//     {'partly-cloudy-night': 'PARTLY_CLOUDY_NIGHT'},
// ];


export interface CurrentConditionsProps {
    data: any;
    details?: boolean;
}

export interface CurrentConditionsState {

}

class CurrentConditions extends React.Component<CurrentConditionsProps, CurrentConditionsState> {
    constructor(props: CurrentConditionsProps) {
        super(props);
        this.state = {};
    }

    public render() {
        const icon = this.props.data.icon.toUpperCase().replace(/-/g, '_');
        const el_details = this.props.details
            ? <div>
                <div>
                    nearestStormDistance: {this.props.data.nearestStormDistance}
                </div><div>
                    nearestStormBearing: {this.props.data.nearestStormBearing}
                </div><div>
                    precipIntensity: {this.props.data.precipIntensity}
                </div><div>
                    precipProbability: {this.props.data.precipProbability}
                </div><div>
                    temperature: {this.props.data.temperature}
                </div><div>
                    apparentTemperature: {this.props.data.apparentTemperature}
                </div><div>
                    dewPoint: {this.props.data.dewPoint}
                </div><div>
                    humidity: {this.props.data.humidity}
                </div><div>
                    pressure: {this.props.data.pressure}
                </div><div>
                    windSpeed: {this.props.data.windSpeed}
                </div><div>
                    windGust: {this.props.data.windGust}
                </div><div>
                    windBearing: {this.props.data.windBearing}
                </div><div>
                    cloudCover: {this.props.data.cloudCover}
                </div><div>
                    uvIndex: {this.props.data.uvIndex}
                </div><div>
                    visibility: {this.props.data.visibility}
                </div><div>
                    ozone: {this.props.data.ozone}
                </div>
            </div>
            : '';
        return (
            <>
                {this.props.data.summary}
                <ReactAnimatedWeather
                    icon={icon || defaults.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
                {el_details}
            </>
        );
    }
}

export default CurrentConditions;