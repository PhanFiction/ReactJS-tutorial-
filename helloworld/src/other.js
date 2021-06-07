function SubmitButton()
{
    let buttonLabel = "Submit";
    return (
        <button> {buttonLabel} </button>
    );
}

// using ternary for if statement
function ValidIndicator()
{
    let isValid = false;
    return(
      <span>
          {isValid? 'yes it is valid' : 'no it is not'}
      </span>  
    );
}

// boolean operators
function ValidIndicator2(){
    let isValid = false;
    return(
        <span>
            {/**
            && is short-circuit evalulation for the part below
            (if this part is true) && (this part will execute)
            or 
            if(condition)
            {
                (this part will execute)
            }
             */}
            {isValid && 'valid'}
            {!isValid && 'not valid'}
        </span>
    );
}

export default {
    SubmitButton,
    ValidIndicator,
    ValidIndicator2,
}