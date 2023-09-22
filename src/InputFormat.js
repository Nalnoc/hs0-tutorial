// in Form.js

// function header:
export default function InputFormat({ /*...*/ name, setName, setShowOutput, setPhoto /*...*/ }) {

    // in return ...
    <inputFormat
        onSubmit={(e) => {     // on submission ...
            e.preventDefault();  // stop submit from reloading the page
        setShowOutput(true); // display the output,
                             // using the setShowOutput() state setter passed into this Form component
        }}
    >
        <label htmlFor="member-name">Name: </label> { /* htmlFor connects the label the appropriate input field */ }
        <input
          id="member-name" // match id to label's htmlFor
          type="text"      // type of HTML input (text, email, phone, etc.) - see https://www.w3schools.com/html/html_form_input_types.asp
          value={name}     // display value of the provided `name` state prop
          onChange={(e) => { // access the onChange event handler; `e` is short for event but can be named anything */
            setName(e.target.value); // get the value of the event (text in the input field)
          }}
          required // mark this HTML field as required
        />

        <input
        id="member-photo"
        type="file"
        // no `value` because value is a path, but we want to store a photo
        onChange={(event) => {
        setPhoto(URL.createObjectURL(event.target.files[0]));
        }}
        required
        />
    
        {/* continue for rest of inputs */}
    </inputFormat>

    }