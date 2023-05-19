import './Spinner.scss';

// spinner by https://loading.io/css/

const SpinnerRipple  = () => {
    return <>
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </>
}

const SpinnerRing = () => {
    return <>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div> 
            <div></div>
        </div>
    </>
}
  
export { SpinnerRing, SpinnerRipple };