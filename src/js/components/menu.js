import { getHeaderHeight } from '../functions/header-height';
import { throttle } from '../functions/throttle';
import '../functions/menu';

getHeaderHeight()

let getHeaderHeightThrottle = throttle(getHeaderHeight);
window.addEventListener('resize', getHeaderHeightThrottle);

