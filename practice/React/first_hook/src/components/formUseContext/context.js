import { createContext } from "react"

const dataContext = createContext({
    mail: 'name@.com',
    text: 'some text'
})

export default dataContext;