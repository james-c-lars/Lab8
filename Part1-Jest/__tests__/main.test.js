const formatVolumeIconPath = require('../assets/scripts/main.js');

describe('formatVolumeIconPath tests: ', () => {
    test('high volume', () => {
        expect(formatVolumeIconPath(80)).toContain(3);
    });
    test('medium volume', () => {
        expect(formatVolumeIconPath(50)).toContain(2);
    });
    test('low volume', () => {
        expect(formatVolumeIconPath(20)).toContain(1);
    });
    test('no volume', () => {
        expect(formatVolumeIconPath(0)).toContain(0);
    });
});