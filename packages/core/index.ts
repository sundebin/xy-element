import {makeInstaller} from '@xy-element/utils';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from './components';
import '@xy-element/theme/index.css'

library.add(fas);
const installer = makeInstaller(components);
export * from "@xy-element/components"
export default installer;

