function CheckBox(props){
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id={props.id} />
            <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
        </div>
    );
}