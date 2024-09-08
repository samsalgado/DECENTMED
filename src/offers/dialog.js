// CustomizedDialogs.js (modified)
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog'; // Import from Dialog.js
import DialogContent from '@mui/material/DialogContent';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  // ... dialog styles
}));

const BootstrapDialogTitle = (props) => {
  // ... dialog title logic
};

export default function CustomizedDialogs({ children }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='buton'>
      <Button onClick={handleClickOpen}>Add to Cart</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle style={{textAlign:"center"}} id="customized-dialog-title" onClose={handleClose}>
          Subscription: Initial Payment: 0.0017 BTC ($100)
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

// Dialog.js (assuming it doesn't export a default component)
// ... your Dialog component implementation
