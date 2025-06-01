import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  FirebaseApp,
  FirebaseAppModule,
  FirebaseApps,
  deleteApp,
  firebaseApp$,
  getApp,
  getApps,
  initializeApp,
  initializeServerApp,
  onLog,
  provideFirebaseApp,
  registerVersion,
  setLogLevel
} from "./chunk-3U23THFM.js";
import {
  DEFAULT_ENTRY_NAME,
  FirebaseError,
  SDK_VERSION,
  _addComponent,
  _addOrOverwriteComponent,
  _apps,
  _clearComponents,
  _components,
  _getProvider,
  _isFirebaseApp,
  _isFirebaseServerApp,
  _registerComponent,
  _removeServiceInstance,
  _serverApps
} from "./chunk-4N2ETBXC.js";
import "./chunk-HHUWQZTH.js";
import "./chunk-D6OLVJU6.js";
import "./chunk-ANGF2IQY.js";
export {
  FirebaseApp,
  FirebaseAppModule,
  FirebaseApps,
  FirebaseError,
  SDK_VERSION,
  DEFAULT_ENTRY_NAME as _DEFAULT_ENTRY_NAME,
  _addComponent,
  _addOrOverwriteComponent,
  _apps,
  _clearComponents,
  _components,
  _getProvider,
  _isFirebaseApp,
  _isFirebaseServerApp,
  _registerComponent,
  _removeServiceInstance,
  _serverApps,
  deleteApp,
  firebaseApp$,
  getApp,
  getApps,
  initializeApp,
  initializeServerApp,
  onLog,
  provideFirebaseApp,
  registerVersion,
  setLogLevel
};
