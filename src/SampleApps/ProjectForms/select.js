import React from "react"

// const optionsData = [{
//     key: "BIa",
//     value: "Bia value",
// },
// {
//     key: "tes",
//     value: "Btesa value",  
// },
// {
//     key: "tsdades",
//     value: "Btedsadsa value",  
// },

// ]
{/* <select
                            name="airport-service"
                            id="airport-service"
                            className="form-control"
                        >
                            <option value="BIA">BIA</option>
                            <option value="BIA">BIA</option>
                            <option value="BIA">BIA</option>
                        </select> */}

function Select(props) {
    const { name, id, classselect, optionsData } = props
    return (
        <select
            name={name}
            id={id}
            className={classselect}
        >
            {
                optionsData.map((elem) => {
                    // const { key, value } = elem
                    const key = elem.key
                    const value = elem.value
                    return (<option key={value} value={value}>{key}</option>)
                })
            }
        </select>
    )
}

export default Select