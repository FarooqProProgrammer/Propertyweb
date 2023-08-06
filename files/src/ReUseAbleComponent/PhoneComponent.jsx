import React from 'react'
import IntlTelInput from 'react-intl-tel-input'

export default function PhoneComponent({onChange,defaultCountry,onPhoneNumberChange,containerClassName,inputClassName}) {
    return (
        <IntlTelInput
            containerClassName={containerClassName}
            inputClassName={inputClassName}
            onChange={onChange}
            defaultCountry={defaultCountry}
            onPhoneNumberChange={onPhoneNumberChange}
        />
    )
}
