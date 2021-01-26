import * as React from 'react';

import { Stack/* , IStackStyles, IStackTokens */ } from 'office-ui-fabric-react/lib/Stack';
// import { mergeStyles, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

// import CurrentConditions from './CurrentConditions';
// import DailyForecast from './DailyForecast';

import CurrentOne from './CurrentOne';
import DailyOne from './DailyOne';
import DetailsOne from './DetailsOne';


export interface WidgetOneProps {
    weather: any;
    city: string;
    className: string;
    layout?: string;
    layout_variation?: string;
    forecast?: number;
    details?: boolean;
    expand_details?: boolean;
    theme?: any;
}

export interface WidgetOneState {
    details: boolean;
}

class WidgetOne extends React.Component<WidgetOneProps, WidgetOneState> {
    constructor(props: WidgetOneProps) {
        super(props);
        this.state = { details: this.props.details };
        this.handler_current = this.handler_current.bind(this);
    }

    public trimDaily(data, days) {
        return {
            summary: data.summary,
            icon: data.icon,
            data: data.data.slice(0, days)
        };
    }

    public handler_current(bool: boolean) {
        this.setState({ details: bool });
    }


    public render() {

        const theme = this.props.theme && this.props.theme.theme ? this.props.theme.theme : 'light';

        const layout = this.props.layout ? this.props.layout : 'horizontal';
        const layout_variation = this.props.layout_variation ? this.props.layout_variation : null;

        const daily = this.props.weather ? this.props.weather.daily : null;

        const details = this.props.details ? this.props.details : false;
        const expand_details = this.props.expand_details ? this.props.expand_details : false;

        const expand_details_class = expand_details ? ' expand_details' : '';

        const el_horizontal =
            <Stack className={'widget-one ' + this.props.className + ' ' + theme}>
                <div className={'current-wrap' + expand_details_class}>
                    <CurrentOne
                        weather={this.props.weather.currently}
                        city={this.props.city}
                        layout={layout}
                        expand_details={expand_details}
                        details={this.state.details}
                        handler={this.handler_current}
                        className={this.props.className}
                        theme={this.props.theme}
                    />
                    {expand_details && this.state.details &&
                        <Stack className='expand-details-wrap' horizontal>
                            <DetailsOne
                                weather={this.props.weather.currently}
                                layout={layout}
                                expand_details={this.props.expand_details}
                                theme={this.props.theme}
                            />
                        </Stack>
                    }
                </div>
                {this.props.forecast > 0 &&
                    <DailyOne
                        weather={this.trimDaily(daily, this.props.forecast)}
                        layout={layout}
                        theme={this.props.theme}
                    />
                }
            </Stack>;

        const el_vertical =
            <div className={'widget-one ' + this.props.className + ' ' + theme}>
                <span className='current-wrap'>
                    <CurrentOne
                        weather={this.props.weather.currently}
                        city={this.props.city}
                        layout={layout}
                        className={this.props.className}
                        theme={this.props.theme}
                    />
                </span>
                {details &&
                    <span className='details-wrap'>
                        <DetailsOne
                            weather={this.props.weather.currently}
                            layout={layout}
                            theme={this.props.theme}
                        />
                    </span>
                }
                {this.props.forecast > 0 &&
                    <span className='daily-wrap'>
                        <DailyOne
                            weather={this.trimDaily(daily, this.props.forecast)}
                            layout={layout}
                            theme={this.props.theme}
                        />
                    </span>
                }
            </div>;


        const el_vert_on_vert =
            <Stack className={'widget-one ' + this.props.className + ' ' + theme}>
                <span className='current-wrap'>
                    <CurrentOne
                        weather={this.props.weather.currently}
                        city={this.props.city}
                        layout={layout}
                        className={this.props.className}
                        theme={this.props.theme}
                    />
                </span>
                {this.props.forecast > 0 &&
                    <span className='daily-wrap'>
                        <DailyOne
                            weather={this.trimDaily(daily, this.props.forecast)}
                            layout={layout}
                            theme={this.props.theme}
                        />
                    </span>
                }
                {this.props.details &&
                    <span className='details-wrap'>
                        <DetailsOne
                            weather={this.props.weather.currently}
                            layout={layout}
                            theme={this.props.theme}
                        // layout_variation={layout_variation}
                        />
                    </span>
                }
            </Stack>;



        return (
            <>
                {layout == 'horizontal' && el_horizontal}
                {layout == 'vertical' && !layout_variation && el_vertical}
                {layout == 'vertical' && layout_variation == 'vert_on_vert' && el_vert_on_vert}
            </>
        );
    }
}

export default WidgetOne;