import {React,useState} from 'react';

const Modal = ({product}) => {
  const [count, setCount] = useState(0);
  return (
    <div class="modal fade" id={product.ref} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{product.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div className="row">
            <div className="col-sm-4 me-2">
               <img
          width="170"
          height="170"
          src={`../assets/${product.category}/${product.image}`}
          alt={product.name}
        />
            </div>
        
          <div className="col-sm d-flex flex-column justify-content-center align-items-center ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit omnis optio assumenda?
            </p>
            <h4 > €{product.price}/{product.unit}</h4>
            <div
                  className="btn-group "
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setCount(count - 1)}>
                    -
                  </button>
                  <span className="btn btn-light qty">1</span>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setCount(count + 1)}>
                    +
                  </button>
                </div>
          </div>
          </div>
        </div>
        <div class="modal-footer  d-flex  justify-content-center ">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;