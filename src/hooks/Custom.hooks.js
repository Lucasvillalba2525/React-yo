import { useState } from "react";

export const useUserFrom = (initialState = {}) => {

    const [form , setFrom] = useState(initialState);

    const handleChanges = ({target}) => {
        const {name ,value} = target;
        setFrom({
            ...form,
            [name]: value
        })
    }

    return {
        form , setFrom ,handleChanges
    }

}