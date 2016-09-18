##@ngrx/store
### Installation
* npm install --save @ngrx/core
* npm install --save @ngrx/store

### Setting up store 'clock'
* create ***app.store.ts***
* edit ***app.module.ts***:
    
    import { provideStore } from '@ngrx/store';<br>
    import { clock } from './app.store';<br>
    const <b>AppStore</b> = provideStore({clock});<br>
    ...<br>
    // Application wide providers<br>
    const APP_PROVIDERS = [<br>
    &nbsp;&nbsp;&nbsp;&nbsp;    ...APP_RESOLVER_PROVIDERS,<br>
    &nbsp;&nbsp;&nbsp;&nbsp;    AppState,<br>
    &nbsp;&nbsp;&nbsp;&nbsp;    <b>AppStore</b><br>
    ];
 
      

