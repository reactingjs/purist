# purist

Utilizes FormidableLabs `react-fast-compare` to provide a custom PureComponent wrapper that is magnitudes faster than React.PureComponent.

```js
import { Purist } from '@reacting/purist'

<Purist>
  {() => (
    <h1>I will pretty much never re-render...</h1>
  )}
</Purist>
```

```js
import { purist } from '@reacting/purist'

@purist
class Compy extends React.Component {
  render() {
    return <h1>I am supa fast at prop diffing and pure as fuckkk.</h1>
  }
}
```

```js
import { purist } from '@reacting/purist'

const Compy = purist((props) => {
  return <h1>I am supa fast at prop diffing and pure as fuckkk.</h1>
})
```
