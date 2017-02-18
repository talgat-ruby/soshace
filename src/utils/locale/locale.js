import localeData from './locale.json';
import { LOCALE_LANG } from '../../environment/app_environment';

export default keys => keys
				.split('.')
				.reduce((data, key) => data[key], localeData[LOCALE_LANG]);