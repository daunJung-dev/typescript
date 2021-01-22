{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: Text;
        age: Num;
    }
    const student: Student = {
        age: 12,
        name: 'daun'
    }

    /**
     * String Literal Types
     */
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name'; // 
    type JSON = 'json';
    const json:JSON ="json";

    type Bool = true;
}