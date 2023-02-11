Try adding to your app module the following code

```

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

```

https://angular.io/guide/i18n#i18n-pipes

EDIT: Then if you want to sets this locale as default you need to set the LOCALE_ID injection token as 'fr' like that :

{provide: LOCALE_ID, useValue: 'fr' }
In your app module