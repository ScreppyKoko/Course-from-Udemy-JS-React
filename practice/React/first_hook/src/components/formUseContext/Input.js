import { useContext } from 'react';

import dataContext from './context';

const InputComponent = () => {

    const context = useContext(dataContext);

    return (
        <input
            readOnly
            value={context.mail}
            type="email"
            className="form-control"
            />
    )
}

export default InputComponent;