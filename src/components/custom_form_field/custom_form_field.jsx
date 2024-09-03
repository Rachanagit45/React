import "../../styles/custom_form_field_style.css"

export default function CustomFormField({label, placeholder, type, value, cName}){
    return(
        <div id="form-field">
            <p><label id="label" for = {cName}>{label}</label></p>
            <input id="field" name={cName} placeholder={placeholder} type={type} />
        </div>
    )
}