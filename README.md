# parcel
- build tool
- creates dev build
- cretes local server
- has file watching algo
- caches file for paster loading
- uses HMR - hot module replacement
- Image optimization
- minify files for prod build
- Differential bundling - support older browsers


# import export
  - Default export
    export default class
    import class from "path"

  - Named export
    export const class
    import {class} from "path"


# React Hooks
- useState() -> re-render component(do change detection) if variable is defined as useState()
- useEffect()    

# React architecture
 - react fiber
 - reconcilation
 - virtual DOM

# Hooks
- useState()
- useEffect() -> takes 2 arguments -> callback fn and dependency array
  - if dependeny array is not passed -> then useEffect() will be called for every component render
  - if dependeny array is passed as [] -> then useEffect() will be called only during initial render (only once )
  - if dependeny array is passed -> then useEffect() will be called for every change in the dependency

# 2 types of routing -> client(SPA) and server side

# Class based Components
 - Constructor , render and componentDidMount
 - Lifecycle - parent Constructor -> parent render -> child Constructor -> child render -> child componentDidMount -> parent componentDidMount
 - componentDidMount is similar to useEffect() hook

# Higher order components

# Controlled vs Un-controlled components

# props drilling

# lifting the state up 

# context
 - createContext
 - useContext
 - Provider and Consumer