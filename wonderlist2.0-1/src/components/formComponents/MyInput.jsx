import React from 'react';
import { camelToTitle } from './formComponentsData'
import { InputLabel, Input, FormControl, FormHelperText } from '@material-ui/core';

//////////////////////////////////////
//////////////////////////////////////
// If you are looking at this before
// looking at 'MyForm' go look at
// 'MyForm'First
//
// This component is really just
// deconstructing formPackage and
// assigning attributes to build
// input elements
//////////////////////////////////////
//////////////////////////////////////


export default function MyInput(props){
    // Michael- unpackaging relevant prop data based on name value
    const {guid, name, formPackage} = props
    const {errors, register, formData} = formPackage
    const type = formData[name].type;
    const regData = formData[name].regData
    // Michael- Making a unique id for the ui below with input name and the first 8 chars from the guid
    var id = `input-${name}-${guid.substring(0, 8)}`

    return(
        // Michael- Assign data to attributes and build Input element
        <FormControl>

            <InputLabel 
                id={id} 
                htmlFor={name}> 
                {camelToTitle(name)}
            </InputLabel>

            <Input
                id={id}
                type={type}
                label={camelToTitle(name)}
                name={name}
                inputRef={register(regData)}
                error={!!errors[name]}
                aria-describedby={`${id}-text`}
            />

            {   // Michael- If errors build error message
                errors[name] &&

                <FormHelperText 
                    id={`${id}-helper-text`}
                    error>
                    {errors[name].message}
                </FormHelperText>
            }

            
        </FormControl>
    )

}