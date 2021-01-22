{
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }

    move('down');
    
    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;
    
    // function: login  -> success, fail

    type SUCCESS = {
        response: {
            body: string;
        };
    };
    type FAILURE = {
        reason: string;
    };

    type LoginStatus = SUCCESS | FAILURE;

    function login ({id, password}: {id:string, password: string}):Promise<LoginStatus> {
        // code...
        return new Promise((resolve, reject) => {
            resolve({
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
        if('response' in state) {
            console.log(`🎉${state.response.body}`);
        } else {
            console.log(`💩${state.reason}`);
        }
    }

    
}