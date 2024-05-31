
const Jsx2 = () => {

    const student={
        firstName: "John",
        lastName: "Doe",
        city: "London"
    };

    //document.getElementById("lblName").innerHTML = name;

    //KURAL: Eger JSX icinde JS ifadesi kullanılacaksa { süslü parantez içinde yazılmalıdır. }
  return (
    <div id="lblName">
        <ul>
            <li><b>FirstName:</b>{student.firstName}</li>
        </ul>
        <ul>
            <li><b>LastName:</b>{student.lastName}</li>
        </ul>
    </div>
  )
}

export default Jsx2