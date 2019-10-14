import React from 'react';
import Store from './Store';

export default (mapStateToProps, mapDispatchToProps)=>{
    return function (WrappedComponent) {
        return (props)=>{
            return (
                <WrappedComponent
                    {...props}
                    {...mapStateToProps(Store.getState())}
                    {...mapDispatchToProps(Store.dispatch)}
                />
            )
        };
    }
}