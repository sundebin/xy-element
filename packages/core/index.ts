import {makeInstaller} from '@xy-element/utils';
import components from './components';
import '@xy-element/theme/index.css'

const installer = makeInstaller(components);
export * from "@xy-element/components"
export default installer;

