import { createElement } from 'react'



/* function Slider() {
    return (
      <>
        <h1>Title</h1>
        <section>
            <div>
                Text
            </div>
        </section>
      </>
    );
  } */
  function Slider(){
    return  createElement(
        'div',
        {className: ''},
        createElement(
            'h1',
            {},
            'Title'
        ),
        createElement(
            'div',
            {className: 'test test-1'},
            'Text'
        )


    )
  }
  export default Slider;