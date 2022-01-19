import React, {useState} from 'react'
import "./Modal.css"

export default function Modal() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal">open</button>

      {modal &&

        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello modal !</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat repellat officia odio accusamus obcaecati est aut modi. Deserunt esse iusto, iste id, ipsam fugit ea eos nobis commodi, officiis tempore dolore dolorum repudiandae recusandae reiciendis sunt laudantium fugiat aspernatur mollitia vitae aut provident repellendus excepturi. Eius illum ex voluptates velit!</p>
              <button
                onClick={toggleModal}
                className="close-modal">Close !</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
