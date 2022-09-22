import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        if (word === "danger") {
            word = "Error"
        }
        let a = word.toLowerCase();
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    return (
        <div style={{ height: '60px', margin: "auto" }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}
