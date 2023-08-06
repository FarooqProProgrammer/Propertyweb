import React from 'react'
import ReactQuill from 'react-quill'

export const  PropertyEditor=({ value, onChange, text })=> {
    return (
        <React.Fragment>
            <label className="field col-dis-12 col-tab-12 col-dis-12">
                <b>
                    {text} <span className="red">*</span>:
                </b>
            </label>
            <div
                className="field cf col-dis-12 col-tab-12 col-dis-12 error max-h-[400px]"
            >
                <ReactQuill value={value} onChange={onChange} />
            </div>
            
        </React.Fragment>
    )
}
