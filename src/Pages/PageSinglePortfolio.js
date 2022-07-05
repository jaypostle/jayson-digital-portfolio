import Accordion from '../components/atoms/SimpleAccordion';
import useDocumentTitle from '../utilities/documentTitle';

function PageSinglePortfolio() {
  useDocumentTitle('Portfolio')

  return (
    <>
    <section>
      <h1>Moveo Database</h1>
      <h4>Subtitle</h4>
    </section>
    <section>
      <h2>Tech Used</h2>
      <ul>
        <li>Development</li>
      </ul>
    </section>
    <section>
      <h2>Overview</h2>
      <p>I love soccer, muay thai, spikeball, oil painting, nerding out over history & nerding out over history.</p>
    </section>
    <section>
    <Accordion header={'Project Goals'} data={'data'}>
      children go here
    </Accordion>
    </section>
    <section>
    <Accordion header={'Project Requirements'} data={'data'}>
      children go here
    </Accordion>
    </section>
    <section>
    <Accordion header={'Highlight Functionality'} data={'data'}>
      children go here
    </Accordion>
    </section>
    <section>
    <Accordion header={'Final Result'} data={'data'} >
      children go here
    </Accordion>
    </section>
    <section>
    <Accordion header={'What I Learned'} data={'data'}>
      children go here
    </Accordion>
    </section>
    </>
  )
}
export default PageSinglePortfolio