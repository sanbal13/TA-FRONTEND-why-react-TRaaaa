import PropTypes from 'prop-types';
/* 
| Property         | Description                         | Type          | Required |
| :--------------- | :---------------------------------- | :------------ | :------- |
| `disabled`       | Sets the button to a disabled state | `boolean`     | false    |
| `label `         | The button text                     | `string`      | true     |
| `onClickHandler` | The action to be dispatched onClick | `function`    | true     |
| `size`           | The size of the button              | `ButtonSizes` | false    |
| `type`           | The type of button                  | `ButtonTypes` | false    |
*/
/*  
| Type          | Values                           | Default    |
| :------------ | :------------------------------- | :--------- |
| `ButtonSizes` | `SMALL` `MEDIUM` `LARGE`         | `MEDIUM`   |
| `ButtonTypes` | `PRIMARY` `SECONDARY` `TERTIARY` | `PRIMARY ` |
*/
function Button(props) {   
    let sizeClass, typeClass;
    if(props.size ==="SMALL") {
        sizeClass='small';
    }else if(props.size ==="MEDIUM") {
        sizeClass='medium';
    }else {
        sizeClass='large'
    }
    if(props.type ==="PRIMARY") {
        typeClass='primary';
    }else if(props.type ==="SECONDARY") {
        typeClass='secondary';
    }else {
        typeClass='tertiary'
    }
    let classes = sizeClass + " " + typeClass;
     return <div className="align-center">
                <button onClick={props.onClickHandler} disabled={props.disabled} className={classes}>
                    {props.label}
                </button> 
            </div>
}

Button.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['SMALL', 'MEDIUM', 'LARGE']),
    type: PropTypes.oneOf(['PRIMARY', 'SECONDARY', 'TERTIARY'])
}

Button.defaultProps = {
    size: "MEDIUM",
    type: "PRIMARY"
}

export default Button;
