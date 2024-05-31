
const Jsx5 = () => {
    const isAdmin=false;
    const discount=100;
    //JSX yapılarında İF ve SWİTCH kullanılamaz yerine TERNARY veya SHORT CIRCUIT kullanılabilir

    const el1=<h2>Admin User</h2>
    const el2=<h2>Customer User</h2>


  return <div>
        {isAdmin ? el1 : el2}

        <p>{ !!discount && (<>
                                <em>Discount</em> <span>$500</span>
                            </>
            )}
        </p>
    </div>;
  
};

export default Jsx5;