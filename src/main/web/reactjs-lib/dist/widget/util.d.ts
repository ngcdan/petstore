export interface NotificationMessage {
    type?: 'success' | 'info' | 'warning' | 'danger';
    label: string;
    detail?: any;
    stacktrace?: string;
}
export declare function showNotification(msg?: null | NotificationMessage): void;
