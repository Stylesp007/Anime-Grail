
import { Modal, Button } from 'rsuite';
import { useState } from "react";
  


export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
      <>
    <header className="Header">
      <h1>Anime Grail</h1>
      <div className="right-header">
        <h3 onClick={handleOpen}>Watchlist</h3>
        <h3 onClick={()=>console.log('favorites clicks')}>favorites</h3>
        <h3 onClick={()=>console.log('recomendations clicks')}>Recomendations</h3>
      </div>
    </header>
     <div style={{ margin: 50, textAlign: "center" }}>
     <Modal
         open={open}
         onClose={handleClose}
         backdrop="static"
         >
         <Modal.Header>
             Watchlist +
         </Modal.Header>
         <Modal.Body>
             <p>
                 Hi ! Geek <br /> This is a 
                 <b>static</b> backdrop modal. 
             </p>
         </Modal.Body>
       <Modal.Footer>
             <Button onClick={handleClose} 
               appearance="subtle">
               Ok
           </Button>
           <Button onClick={handleClose} 
               appearance="primary">
               Cancel
           </Button>
       </Modal.Footer>
   </Modal>
</div>
      </>
  )
}
