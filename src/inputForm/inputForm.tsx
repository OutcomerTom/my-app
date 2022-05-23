import {useState, useEffect, useCallback} from "react";

interface InputFormProps {
    defaultValue: string;
}

const storageFormKey = 'inputValue';

export const InputForm = (props?:InputFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')
    const [ errorMessage, setErrorMessage] = useState<string>('')

    const formReadyToSubmit = !(displayError || !inputValue);
    
    const handleInputChange = (event: any) => {
        const messageLength = event.target.value.length;
        setInputValue(event.target.value);
        if ( messageLength < 3 || messageLength > 20 ) {
            if ( messageLength < 3) {
                setErrorMessage('UserName is to short')
            }

            if ( messageLength > 20 ) {
                setErrorMessage('UserName is to long')
            }

          setDisplayError( true )
        } else {
            setDisplayError( false )
            setErrorMessage('')
        }
    }

    const handleSubmit = useCallback(() => {
        if (formReadyToSubmit) {
        localStorage.setItem(storageFormKey, inputValue)
        }
    }, [])

    useEffect( () => {
        let valuToSet = '';
        const localStorageData = localStorage.getItem(storageFormKey)
        if (!!localStorageData) {
            setInputValue(localStorageData)
        } else {
            if (!!props?.defaultValue) {
                valuToSet = props?.defaultValue;
            }
        }

        setInputValue(valuToSet);

    }, [])

    return <div>
        {displayError && <div style={{color: 'red'}}>{errorMessage}</div>}
        <div>UserName:</div>
        <input onInput={handleInputChange} value={inputValue} type="text"/>
        <br/>
        <button onClick={handleSubmit} disabled={displayError || !inputValue}>submit data</button>
    </div>
}
