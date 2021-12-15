import { Component } from "react/cjs/react.production.min";

class Form extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render () {
      return (
          <form className="add-birthday">
              <label>
                  Name:
                  <input type="text" name="name" />
              </label>
              <label>
                  Month:
                  <input type="text" name="Month" />
              </label>
              <label>
                  Day:
                  <input type="text" name="day" />
              </label>
              <input type="submit" value="Add this birthday!" />
          </form>
      )
    }
}

export default Form;