import * as React from 'react';
// import styles from './SharePointWeather.module.scss';
import { ISharePointWeatherProps } from './ISharePointWeatherProps';
// import { escape } from '@microsoft/sp-lodash-subset';
// import Weather from './ReactForecastPrefab';
import './temp.css';

import DarkSkyOne from './DarkSkyOne';

export default class SharePointWeather extends React.Component<ISharePointWeatherProps, {}> {
  public render(): React.ReactElement<ISharePointWeatherProps> {
    return (
      <DarkSkyOne />
      // <Weather />
    );
  }
}
