{
    type SUCCESS = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FAILURE = {
        result: 'fail';
        reason: string;
    };

    type LoginStatus = SUCCESS | FAILURE;

    function login ({id, password}: {id:string, password: string}):Promise<LoginStatus> {
        // code...
        return new Promise((resolve, reject) => {
            resolve({
                result: 'success',
                response: {
                    body: 'logged in'
                }
            })
        })
    }

    // printLoginState(state)
    // success -> body
    // fail -> reason
    function printLoginState(state: LoginStatus):void {
        if(state.result === 'success') {
            console.log(`🎉${state.response.body}`);
        } else {
            console.log(`💩${state.reason}`);
        }
    }

}