import {
	setImageFormat,
	validateSelectedPixelFormatAndImageFormatCombination,
} from '../config/image-format';
import {expectToThrow} from './expect-to-throw';

test('SetImageFormat should throw if image format is not valid', () => {
	expectToThrow(
		() =>
			setImageFormat(
				// @ts-expect-error
				'invalidImageFormat'
			),
		/Value invalidImageFormat is not valid as an image format./
	);
});
test('validateSelectedPixelFormatAndImageFormatCombination should throw if image format is not valid', () => {
	expectToThrow(
		() =>
			validateSelectedPixelFormatAndImageFormatCombination(
				'yuv420p',
				// @ts-expect-error
				'invalidImageFormat'
			),
		/Value invalidImageFormat is not valid as an image format./
	);
});
test('Special case - invalid combination with pixel ("yuva420p") and image format ("jpeg") should throw', () => {
	expectToThrow(
		() =>
			validateSelectedPixelFormatAndImageFormatCombination('yuva420p', 'jpeg'),
		/Pixel format was set to 'yuva420p' but the image format is not PNG. To render transparent videos, you need to set PNG as the image format./
	);
});
test('Special case - valid combination with pixel ("yuva420p") and image format ("png") should not throw', () => {
	expect(() =>
		validateSelectedPixelFormatAndImageFormatCombination('yuva420p', 'png')
	).not.toThrow();
});

test('Valid combination with pixel and image format ("png") should not throw', () => {
	expect(() =>
		validateSelectedPixelFormatAndImageFormatCombination('yuv420p', 'png')
	).not.toThrow();
});
test('Valid combination with pixel and image format ("jpeg") should not throw', () => {
	expect(() =>
		validateSelectedPixelFormatAndImageFormatCombination('yuv420p', 'jpeg')
	).not.toThrow();
});