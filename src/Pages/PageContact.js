import useDocumentTitle from '../utilities/documentTitle';

function PageContact() {
  useDocumentTitle('Contact')

  
  return (
    <>
    <section>
      <h1>Contact Me</h1>
      <p>I’m always curious about new conversations and opportunities. I’m just as excited to talk marketing & design as I am sports, hiking, and good food! Tell me your favourite hiking or food experience!</p>
      <p>
      To get in touch with me, please email me at <strong>jaysondigitalmcc@gmail.com</strong>.
      </p>
    </section>
    {/* <section>
    <form>
        <label for="fname">Full name:</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
      </form>
    </section> */}
    </>
  )
}
export default PageContact