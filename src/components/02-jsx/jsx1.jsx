//KURAL1: Component isimleri PascalCase olmalidir
//KURAL2: Return içinde mutlaka bir parent element olmalıdır.
//KURAL3: Elementlerin attibute lari camelCase olmalidir
//KURAL4: Bazı attibute lar JS için ozel bir anlam tasıdıgı icin JSX içinde isimleri değiştirilmiştir 
//                  class ==> className                 for==> htmlFor
//KURAL5:


const Jsx1 = () => {
  return (
    <section>
        <div className="red">Hello JSX</div>
        <div>Hello Secon Line</div>
        <label htmlFor="">Html For</label>
    </section>
  );
};

export default Jsx1;