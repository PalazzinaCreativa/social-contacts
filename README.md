# vue-pictureset
Vue component to display social icons.
## Installation
```
npm i @palazzinacreativa/social-contacts
```
or
```
yarn add npm i @palazzinacreativa/social-contacts
```

Then you can install your plugin globally with
```
...
import SocialContacts from '@palazzinacreativa/social-contacts'

Vue.use(SocialContacts)
...
```
or locally
```
...
import SocialContacts from '@palazzinacreativa/social-contacts'

export default {
  ...
  components: {
    SocialContacts
  },
  ...
}
...
```
## Usage
You can simply use it as a component.
```
<SocialContacts :contacts="contacts" />
```

## Options
| Parameter    | Required | Type            | Default                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|--------------|----------|-----------------|------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contacts          | true     | Object          |                                                | Object for your social links. Key is the social (kebab case), value is the url. Eg: { facebook: 'https://facebook.com/your-fb-url', instagram: 'https://instagram.com/your-ig-url' }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| bg-color          |          | String          |           #ffffff                                     | Backgound color for social icon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| icon-color        |          | String          |             #000000                                   | Color of the icon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
