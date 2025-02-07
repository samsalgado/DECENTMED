// CustomizedDialogs.js (modified)
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog'; // Import from Dialog.js
import DialogContent from '@mui/material/DialogContent';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../pages/Providers/AuthProvider';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  // ... dialog styles
}));

const BootstrapDialogTitle = (props) => {
  // ... dialog title logic
};

export default function CustomizedDialogs({ children }) {
  const { t } = useTranslation('common')
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const handleClickOpen = () => {
    if (user) {
      setOpen(true);
      return navigate('/addtocart', { state: { from: location } })
    }


    else {
      Swal.fire({
        title: 'Please Login First',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='buton'>
      <Button onClick={handleClickOpen}>{t('add cart')}</Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle style={{ textAlign: "center" }} id="customized-dialog-title" onClose={handleClose}>
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
