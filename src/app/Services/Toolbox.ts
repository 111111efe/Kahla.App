export class Toolbox {
    public static urlBase64ToUint8Array(base64String: string): Uint8Array {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    public static trim(source: string, target: string): string {
        if (target === ']') {
            target = '\\]';
        }
        if (target === '\\') {
            target = '\\\\';
        }
        return source.replace(new RegExp('^[' + target + ']+|[' + target + ']+$', 'g'), '');
    }

    public static compareVersion(a: string, b: string): number {
        const verA = a.split('.').map(Number);
        const verB = b.split('.').map(Number);

        for (let i = 0; i < 3; i++) {
            if (verA[i] === verB[i]) {
                continue;
            }
            return Math.sign(verA[i] - verB[i]) * (i + 1);
        }
        return 0;
    }

    public static getUuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            const r = Math.random() * 16 | 0;
            // tslint:disable-next-line:no-bitwise
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static param(obj: any): string {
        let data = ``;
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop) && obj[prop] != null) {
                data += prop + '=' + encodeURIComponent(obj[prop].toString()) + '&';
            }
        }
        return data;
    }

    public static trimServerAddress(rawServerAddress: string): string {
        let trimedAddress = Toolbox.trim(rawServerAddress, '/').toLowerCase();
        if (!trimedAddress.match(/^https?:\/\/.+/g)) {
            trimedAddress = 'https://' + trimedAddress;
        }
        return trimedAddress;
    }
}
