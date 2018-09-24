import { Observable } from 'rxjs';
import { IDeviceInfo } from '../IDeviceInfo';
import { RxAVAnalytics } from '../../../public/RxAVAnalytics';
import { ParseApp } from '../../../public/RxAVClient';
export interface IAnalyticsController {
    deviceProvider: IDeviceInfo;
    send(analyticsData: RxAVAnalytics, sessionToken: string): Observable<boolean>;
    getPolicy(app?: ParseApp): Observable<RxAVAnalytics>;
}