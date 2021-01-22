{
    type LoadingState = {
        state: 'loading';
    }

    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        }
    }
    
    type FailState = {
        state: 'fail',
        reason: string;
    };

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    function printLoginState(param:ResourceLoadState) {
        switch (param.state) {
            case 'loading':
                console.log('loading');
                break;
            case 'success':
                console.log(param.response.body);
                break;
            case 'fail':
                console.log(param.reason);
                break;
            default:
                throw Error('no definited Status');

        }
    }

    printLoginState({state: 'loading'}); // 👀 loading...
    printLoginState({state: 'success', response: {body: 'loaded'}}); // 😃 loaded
    printLoginState({state: 'fail', reason: 'no network'}); // 😱 no network

}